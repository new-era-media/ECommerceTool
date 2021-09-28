<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Index'}" unstyled)
				.header__logo.flex.items-center
					.header__logo-icon L
					.header__logo-title
						span Ecomm
						| monitor
			.header__content.flex.items-center
				nav.header__nav.flex.items-center(v-if="nav.length")
					.header__nav-item(v-for="item of nav" :key="item.page")
						template(v-if="item.active")
							.header__nav-label {{item.title}}
						Link(v-else :to="`/${item.page}`")
				slot
					Profile
					//Button(@click="logout" label="Выйти" type="empty")


</template>
<script>
import Button from '@/components/Button/Button.vue'
import Link from '@/components/Link/Link.vue'
import Profile from '@/components/Profile/Profile.vue'

export default {
	components: { Button, Link, Profile },
	props: {
		nav: {
			type: Array,
			default: () => [],
		}
	},
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
	&__profile {
		margin-right: 12px;
	}
	&__nav {
		position: relative;
		margin: 0 48px;

		&:after {
			content: '';
			position: absolute;
			width: 4px;
			height: 4px;
			top: 50%;
			right: -22px;
			transform: translateY(-50%);
			border-radius: 50%;
			background-color: color(gray-600);
		}

		&-item {
			margin-right: 10px;
		}
		&-label {
			position: relative;
			font-size: 14px;
			line-height: 1.72;

			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 3px;
				bottom: -1px;
				left: 0;
				background: linear-gradient(67.64deg, color(blue) 28.69%, color(violet-bright) 82.18%);
			}
		}
	}
}
</style>