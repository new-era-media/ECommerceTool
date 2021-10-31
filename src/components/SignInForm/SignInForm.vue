<template lang="pug">
.sign
	.sign__title Вход в Ecomm monitor
	.sign__form
		.sign__item
			Input(placeholder="Эл. почта" v-model="form.email")
		.sign__item
			InputPassword(placeholder="Пароль" type="password" v-model="form.password")
			.sign__sub(@click="forgotPass") Забыли пароль?
		.sign__btn
			Button(@click="signin") Войти
</template>

<script>
import Input from '@/components/Elements/Input.vue'
import InputPassword from '@/components/Elements/InputPassword.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { Input, InputPassword, Button },
	data() {
		return {
			form: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		async signin() {
			try {
				let resp = await this.$api.common.login(this.form)
				if (resp.success) {
					console.log('login success')
				}
			} catch (error) {
				console.log(error)
			}
		},
		forgotPass() {
			console.log('forgotPass')
		}
	}
}
</script>

<style lang="scss" scoped>
.sign {
	width: 100%;

	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}
	&__form {
		margin-top: 20px;
	}
	&__item {
		margin-top: 26px;

		input {
			width: 100%;
		}

		&:last-of-type {
			margin-bottom: 0;
		}
	}
	&__sub {
		margin-top: 10px;
		color: color(violet);
		font-size: 12px;
		line-height: 1.33;
		text-align: right;
		cursor: pointer;
	}
	&__btn {
		margin-top: 5px;
	}
}
</style>