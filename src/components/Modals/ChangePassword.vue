<template lang="pug">
	ModalBase.personal(
		title="Изменение персональных данных"
		closable
		@close="close"
	)

		.personal__content.flex.item-center.justify-between
			InputPassword.personal__input(
				placeholder="Пароль"
				v-model="password"
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
			password: '',
		}
	},
	computed: {
		...mapState('app', ['user']),
		form() {
			return {
				password: this.password,
			}
		},
	},
	methods: {
		close() {
			this.$emit('close')
		},
		async save() {
			try {
				const { status } = await this.$api.common.editUserInfo(this.form)
				if (status === 'success') {
					this.$toast.success('Пароль успешно изменен')
					this.close()
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
	&__content {
		margin: 40px 0;
	}
	&__input {
		width: 100%;
		margin-right: 20px;
		flex-shrink: 1;
	}
}
</style>
