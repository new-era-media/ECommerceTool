<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Index'}" unstyled)
				img.header__logo(src="~@/assets/img/logo-cat.png")
			nav.header__nav.flex.items-center
				.header__nav-item(v-for="item in nav" :key="item.title")
					| {{ item.title }}
				Link(:to="{name: 'SignIn'}" unstyled)
					LandingButton.header__signin(type="red-outline" label="Войти")

</template>

<script>
import Link from '@/components/Link/Link.vue'
import LandingButton from '@/components/LandingButton/LandingButton.vue'

export default {
	components: {
		Link,
		LandingButton,
	},
	data() {
		return {
			nav: [
				{
					title: 'Возможности',
					link: '/'
				},
				{
					title: 'Площадки',
					link: '/'
				},
				{
					title: 'Метрики',
					link: '/'
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	padding: 36px 24px;
	font-family: Montserrat, Helvetica, Arial, sans-serif;

	&__logo {
		height: 56px;
	}
	&__nav {
		&-item {
			margin-right: 40px;
			font-weight: 600;
			letter-spacing: 0.9px;
		}
	}
	&__signin {
		/deep/ &.button {
			padding: 20px;
		}
	}
}
</style>