<template lang="pug">
	header
		.header.d-flex.justify-space-between
			.header__logo.d-flex.align-center
				.header__logo-img.mr-1
				.header__logo-title E-Commerce Tool
			.header__menu.d-flex.align-center.justify-center(v-if="microHeader")
				.header__menu-el.logout Выйти
			.header__menu.d-flex.align-center.justify-center(v-else)
				template(v-if="width>720")
					router-link.header__menu-el.ml-4(v-for="list in lists" :key="list.name" :to="list.link" :class="{disabled: list.disabled}" exact) {{ list.name }}
					.header__menu-divider.ml-4 •
					.header__menu-avatar.ml-4
						v-icon mdi-account-outline
				template(v-else)
					v-menu(ref='menu' v-model='menu' offset-y)
						template(v-slot:activator='{ on, attrs }')
							.mini-menu(v-bind="attrs" v-on="on")
								.header__menu-avatar.ml-4
									v-icon mdi-account-outline
						.menu-list.d-flex.flex-column
							router-link.header__menu-el.my-2.mx-2(v-for="list in listsMiniMenu" :key="list.name" :to="list.link" :class="{disabled: list.disabled}" exact) {{ list.name }}



</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			menu: false,
			lists: [
				{
					name: 'Аналитика',
					link: '/analytics',
					disabled: false,
				},
				{
					name: 'Маркетплейсы',
					link: '/connecting',
					disabled: false,
				},
			],
			width: 0,
		}
	},
	created() {
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		handleResize() {
			this.width = window.innerWidth;
		}
	},
	computed: {
		meta() {
			return this.$route.meta
		},
		microHeader() {
			return this.meta?.microHeader
		},
		listsMiniMenu() {
			return [...this.lists, {
				name: 'Профиль',
				link: '/#',
				disabled: false,
			}]
		}
	}
}
</script>

<style lang="scss" scoped>
	header{
		width: 100%;
		font-family: 'Montserrat';
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
			&-el, a {
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				letter-spacing: 0.15px;
				cursor: pointer;
				color: #676767;
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
	.router-link-exact-active {
		position: relative;
		color: #212121;
		&:after {
			content: '';
			position: absolute;
			width: 100%;
			left: 0;
			bottom: -5px;
			height: 3px;
			border-radius: 4px;
			background-color: #FA4860;
		}
	}
</style>
