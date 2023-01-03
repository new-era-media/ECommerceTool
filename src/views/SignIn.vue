<template lang="pug">
	.page.flex.items-center.justify-center
		.page__info.px-24.flex.flex-col.justify-center.items-center
			.d-flex.flex-column.align-start
				.page__info-logo.d-flex.align-center
					.page__info-logo-img.mr-1
					.page__info-logo-title E-Commerce Tool
				.page__info-title.mt-2 Система управления продажами селлерских кабинетов
				.back.d-flex.justify-center.align-center.mt-5(v-if="form === 'SignInApprove'")
					v-icon mdi-arrow-left
					.back-text(@click="back") Назад

		.page__form
			component(:is="form" @use="enterPhone" @enter="goTo")
</template>

<script>
import SignInForm from "@/components/SignIn/SignInForm";
import SignInApprove from "@/components/SignIn/SignInApprove";
export default {
	name: "SignIn",
	components: {SignInApprove, SignInForm},
	data() {
		return {
			form: 'SignInForm',
		}
	},
	methods: {
		enterPhone() {
			this.form = 'SignInApprove'
		},
		goTo() {
			this.$router.push({name: 'EnterName'})
		},
		back() {
			this.form = 'SignInForm'
		}
	}
}
</script>

<style lang="scss" scoped>
	.page {
		font-family: 'Montserrat';
		width: 100%;
		min-height: 100vh;
		height: 100%;
		@media screen and(max-width: 1060px) {
			flex-direction: column;
			align-items: start !important;
			justify-content: start;
		}
		&__info {
			background-color: #FAFAFA;
			width: 100%;
			min-height: 100vh;
			height: 100vh;
			@media screen and(max-width: 1060px) {
				min-height: auto;
				height: auto;
				padding: 24px 24px;
			}
			&-logo {
				&-img {
					width: 59px;
					height: 56px;
					background-image: url('../assets/img/logo-cat.png');
				}
				&-title {
					font-style: normal;
					font-weight: 800;
					font-size: 16px;
					line-height: 16px;
					letter-spacing: 0.15px;
					color: #676767;
				}
			}
			&-title {
				max-width: 425px;
				font-weight: 400;
				font-size: 24px;
				line-height: 29px;
				letter-spacing: 0.15px;
				color: #424242;
				@media screen and(max-width: 1060px) {
					max-width: 320px;
					font-size: 16px;
					line-height: 24px;
				}
			}
		}
		&__form {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			box-shadow: 0 0 37px rgba(190, 190, 190, 0.15);
			width: 600px;
			min-height: 100vh;
			height: 100vh;
			@media screen and(max-width: 1060px) {
				width: 100%;
				align-items: start;
				padding: 24px 14px;
				min-height: auto;
				height: 100%;
			}
		}
	}
	.back {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.25px;
		color: #212121;
		cursor: pointer;
		&-text {
			text-decoration-line: underline;
		}
	}
</style>
