<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Index'}" unstyled)
				img.header__logo(src="~@/assets/img/logo.png")
			.header__content.flex.items-center
				slot

				nav.header__nav.flex.items-center(v-if="nav.length")
					.header__nav-item(v-for="item of nav" :key="item.page")
						template(v-if="item.active")
							.header__nav-label {{item.title}}
						Link(v-else :to="item.link") {{item.title}}
				Button(v-if="noUser" @click="logout" label="Выйти" type="empty")
				Link(v-else :to="{name: 'Profile'}" unstyled)
					Profile

</template>
<script>
import Button from '@/components/Button/Button.vue'
import Link from '@/components/Link/Link.vue'
import Profile from '@/components/Profile/Profile.vue'

import { mapActions } from 'vuex'

export default {
	components: { Button, Link, Profile },
	props: {
		nav: {
			type: Array,
			default: () => [],
		},
		noUser: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {

		}
	},
	methods: {
		...mapActions('app', ['logout']),
	}
}
</script>
<style lang="scss" scoped>
.header {
	padding: 22px;

	&__logo {
		width: 221px;
	}
	&__profile {
		margin-right: 12px;
	}
	&__nav {
		position: relative;
		margin: 0 48px 0 8px;

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
			margin-left: 24px;
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
