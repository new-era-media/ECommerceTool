<template lang="pug">
	.component
		.header.d-flex.justify-space-between
			.header__logo.d-flex.align-center
				.header__logo-img.mr-1
				.header__logo-title E-Commerce Tool
			.header__menu.d-flex.align-center.justify-center
				.logout Выйти
</template>

<script>
export default {
	name: "Header"
}
</script>

<style lang="scss" scoped>
	.component{
		width: 100%;
	}
	.header {
		padding: 16px 24px;
		width: 100%;
		&__logo {
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
		&__menu {
			.logout {
				font-weight: 400;
				font-size: 14px;
				line-height: 24px;
				text-decoration-line: underline;
				color: #424242;
				cursor: pointer;
			}
		}
	}
</style>
