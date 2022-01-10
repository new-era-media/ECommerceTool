<template lang="pug">
	ModalBase.personal(
		title="Изменение персональных данных"
		closable
		@close="close"
	)
		.personal__content.flex.item-center.justify-between
			Input.personal__input(
				placeholder="Имя"
				v-model="name"
			)

			Button.personal__button(@click="save") Сохранить

</template>

<script>
import ModalBase from '@/components/Layout/ModalBase.vue'
import Input from '@/components/Elements/Input.vue'
import InputPassword from '@/components/Elements/InputPassword.vue'
import Button from '@/components/Button/Button.vue'
import { mapState, mapActions } from 'vuex'

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
			}
		}
	},
	computed: {
		...mapState('app', ['user']),
		name: {
			get() {
				return this.user?.name || ''
			},
			set(value) {
				this.form.name = value
			},
		},
	},
	methods: {
		...mapActions('app', ['fetchUser']),
		close() {
			this.$emit('close')
		},
		async save() {
			try {
				const { status } = await this.$api.common.editUserInfo(this.form)
				if (status === 'success') {
					this.$toast.success('Имя успешно изменено')
					this.fetchUser()
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
	//&__title {
	//	margin-bottom: 10px;
	//}
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
