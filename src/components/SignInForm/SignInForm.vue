<template lang="pug">
.sign
	.sign__title Вход в Ecomm monitor
	//form.sign__form(
	//	method="post"
	//	@submit.prevent="validate"
	//)
	form.sign__form(
		method="post"
		@submit.prevent="signin"
	)
		.sign__item
			Input(
				placeholder="Эл. почта"
				v-model="form.email"
				autocomplete="disabled"
				)
		.sign__item
			InputPassword(
				placeholder="Пароль"
				type="password"
				v-model="form.password"
				autocomplete="disabled"
				)
			.sign__sub(@click="forgotPass") Забыли пароль?
		.sign__btn
			//VueRecaptcha(
			//	ref="recaptcha"
			//	size="invisible"
			//	:sitekey="sitekey"
			//	@verify="signin"
			//	@expired="onCaptchaExpired"
			//)
			button(type="submit")
				Button(:disabled="isEmpty") Войти
</template>

<script>
import Input from '@/components/Elements/Input.vue'
import InputPassword from '@/components/Elements/InputPassword.vue'
import Button from '@/components/Button/Button.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
	components: {
		Input,
		InputPassword,
		Button,
		VueRecaptcha,
	},
	data() {
		return {
			form: {
				email: '',
				password: '',
			},
			sitekey: '6LfPuBwdAAAAACG_x3i-gzS4p_yjrjfX0B1jfgMa',
		}
	},
	computed: {
		isEmpty() {
			return !this.form.email || !this.form.password
		}
	},
	methods: {
		validate() {
			this.$refs.recaptcha.execute()
		},
		// async signin(recaptchaToken) {
		async signin() {
			try {
				// let params = { ...this.form, recaptchaToken}
				let params = this.form
				let { token } = await this.$api.common.login(params)
				if (token) {
					localStorage.setItem('userToken', token)
					// this.$router.push({name: 'Welcome'})
					location.href = '/welcome'
				}
			} catch (error) {
				let err = error ? error.data.message : 'Неверный email или пароль'
				this.$toast.error(err)
			}
		},
		forgotPass() {
			console.log('forgotPass')
		},
		onCaptchaExpired () {
			this.$refs.recaptcha.reset()
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

		&.--invalid {
			/deep/ .input {
				border: 1px solid color(orange);
			}
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