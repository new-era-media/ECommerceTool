<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Nestle.KPIDashboard'}" unstyled)
				img.header__logo(src="~@/assets/img/nestle/nestle-logo.png")
			.header__logout(@click="logout") Выйти

</template>

<script>
import Link from '@/components/Link/Link.vue'

export default {
	components: {
		Link,
	},
	methods: {
		logout() {
			console.log('logout')
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	padding: 22px;

	&__logo {
		width: 120px;
	}

	&__logout {
		font-weight: 600;
		cursor: pointer;
	}
}
</style>