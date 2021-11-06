<template lang="pug">
	.request-form
		.request-form__title(v-if="title") {{title}}
		.request-form__item
			Input(placeholder="Фамилия и имя" v-model="form.name")
		.request-form__item
			Input(placeholder="Эл. почта" v-model="form.email")
		.request-form__item
			Input(placeholder="Компания" v-model="form.company")
		.request-form__item
			Input(placeholder="Должность" v-model="form.position")
		.request-form__item
			Textarea(placeholder="Категории товаров, ваши вопросы и пожелания" v-model="form.extra")
		.request-form__btn
			Button(@click="request") Отправить заявку

		slot(name="bottom")

</template>
<script>
import Input from '@/components/Elements/Input.vue'
import Textarea from '@/components/Elements/Textarea.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { Input, Textarea, Button },
	props: {
		title: String,
	},
	data() {
		return {
			form: {
				name: '',
				email: '',
				company: '',
				position: '',
				extra: '',
			}
		}
	},
	methods: {
		validate() {
			let obj = {
				isValid: true,
				error: '',
			}
			let regExp = /^[^\s@]+@[^\s@]+$/

			if (this.form.name.length < 3) {
				obj.isValid = false
				obj.error = 'Введите имя'
				return obj
			}
			if (!regExp.test(this.form.email)) {
				obj.isValid = false
				if (!this.form.email) {
					obj.error = 'Введите адрес эл. почты'
				} else {
					obj.error = 'Неверный адрес эл. почты'
				}
				return obj
			}
			if (!this.form.company) {
				obj.isValid = false
				obj.error = 'Введите компанию'
				return obj
			}
			return obj
		},
		async request() {
			let valid = this.validate()
			if (!valid.isValid) {
				this.$toast.error(valid.error)
				return false
			}
			try {
				const resp = await this.$api.common.request(this.form)
				console.log(resp)
			} catch (error) {
				let err = error ? error.data.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		}
	},
}
</script>
<style lang="scss" scoped>
.request-form {
	width: 100%;
	position: relative;

	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}

	&__item {
		margin: 26px 0;

		&:first-of-type {
			margin: 0;
		}
		input, textarea {
			width: 100%;
		}
		textarea {
			height: 88px;
		}
	}
	&__btn {
		margin-top: 30px;
	}
}
</style>