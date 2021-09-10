<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Index'}" unstyled)
				.header__logo.flex.items-center
					.header__logo-icon L
					.header__logo-title
						span Ecomm
						| monitor
			Button(@click="logout" label="Выйти" type="empty")


</template>
<script>
import Button from '@/components/Button/Button.vue'
import Link from '@/components/Link/Link.vue'

export default {
	components: { Button, Link },
	data() {
		return {

		}
	},
	methods: {
		logout() {
			console.log('logout')
		}
	}
}
</script>
<style lang="scss" scoped>
.header {
	padding: 22px;

	&__logo {

		&-icon {
			width: 32px;
			height: 32px;
			margin-right: 6px;
			text-align: center;
			color: color(white);
			font-weight: 600;
			font-size: 20px;
			background-color: color(violet-light);
			border-radius: 4px;
		}
		&-title {
			color: color(violet-dark);
			font-size: 24px;
			line-height: 1.08;

			span {
				display: inline-block;
				margin-right: 4px;
				font-weight: 700;
			}
		}

	}
}
</style>