<template lang="pug">
	header
		.header.d-flex.justify-space-between
			.header__logo.d-flex.align-center
				.header__logo-img.mr-1
				.header__logo-title E-Commerce Tool
			.header__menu.d-flex.align-center.justify-center(v-if="microHeader")
				.header__menu-el.logout Выйти
			.header__menu.d-flex.align-center.justify-center(v-else)
				.header__menu-el.disabled Аналитика
				.header__menu-el.ml-4 Маркетплейсы
				.header__menu-divider.ml-4 •
				.header__menu-avatar.ml-4
					v-icon mdi-account-outline


</template>

<script>
export default {
	name: "Header",
	computed: {
		meta() {
			return this.$route.meta
		},
		microHeader() {
			return this.meta?.microHeader
		}
	}
}
</script>

<style lang="scss" scoped>
	header{
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
			&-avatar {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 24px;
				height: 24px;
				border-radius: 50%;
				color: #9E9E9E;
				border: 2px #9E9E9E solid;
				cursor: pointer;
			}
			&-el {
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				letter-spacing: 0.15px;
				cursor: pointer;
			}
			&-divider {
				color: #9E9E9E;
				pointer-events: none;
			}
		}
	}
	.disabled {
		color: #9C9C9C;
	}
</style>
