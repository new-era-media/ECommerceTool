<template lang="pug">
	ModalBase.personal(
		title="Изменение персональных данных"
		closable
		@close="close"
	)
		.personal__title Имя
		Input.personal__input(
			placeholder="Имя"
			v-model="form.name"
		)

		.personal__title Пароль
		InputPassword.personal__input(
			placeholder="Пароль"
			v-model="form.password"
			autocomplete="disabled"
		)

		Button.personal__button(@click="save") Сохранить

</template>

<script>
import ModalBase from '@/components/Layout/ModalBase.vue'
import Input from '@/components/Elements/Input.vue'
import InputPassword from '@/components/Elements/InputPassword.vue'
import Button from '@/components/Button/Button.vue'
import { mapState } from 'vuex'

export default {
	components: {
		ModalBase,
		Input,
		InputPassword,
		Button,
	},
	props: {

	},
	data() {
		return {
			form: {
				name: '',
				password: '',
			},
		}
	},
	computed: {
		...mapState('app', ['user']),
	},
	methods: {
		close() {
			this.$emit('close')
		},
		async save() {
			try {
				const resp = await this.$api.common.editUserInfo(this.form)
				if (resp.success) {
					this.$toast.success('Данные успешно изменены')
				}
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.personal {
	&__title {
		margin-top: 26px;
	}
	&__input {
		width: 100%;
		margin-top: 10px;
	}
	&__button {
		margin-top: 26px;
	}
}
</style>
