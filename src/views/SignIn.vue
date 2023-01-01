<template lang="pug">
	.page.flex.items-center.justify-center
		.page__info.px-24.flex.flex-col.justify-center.items-center
			span
				.page__info-logo.flex.items-center
					.page__info-logo-img.mr-4
					.page__info-logo-title E-Commerce Tool
				.page__info-title.mt-8 Система управления продажами селлерских кабинетов
		.page__form.flex.items-center.justify-center
			component(:is="form")
</template>

<script>
import SignInForm from "@/components/SignIn/SignInForm";
import SignInApprove from "@/components/SignIn/SignInApprove";
export default {
	name: "SignIn",
	components: {SignInApprove, SignInForm},
	data() {
		return {
			form: 'SignInApprove',
		}
	},
}
</script>

<style lang="scss" scoped>
	.page {
		font-family: 'Montserrat';
		width: 100%;
		min-height: 100vh;
		height: 100%;
		&__info {
			background-color: #FAFAFA;
			width: 100%;
			min-height: 100vh;
			height: 100vh;
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
				font-weight: 400;
				font-size: 24px;
				line-height: 29px;
				letter-spacing: 0.15px;
				color: #424242;
			}
		}
		&__form {
			background-color: #fff;
			box-shadow: 0 0 37px rgba(190, 190, 190, 0.15);
			width: 600px;
			min-height: 100vh;
			height: 100vh;
		}
	}
</style>
