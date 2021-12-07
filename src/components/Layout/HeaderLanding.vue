<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Index'}" unstyled)
				img.header__logo(src="~@/assets/img/logo.png")
			nav.header__nav.flex.justify-end.items-center
				Button(v-if="user" @click="logout" label="Выйти" type="empty")
				Link(v-else :to="{name: 'SignIn'}" unstyled)
					Button(label="Войти" type="violet-outline")


</template>
<script>
import Button from '@/components/Button/Button.vue'
import Link from '@/components/Link/Link.vue'

import { mapState } from 'vuex'

export default {
	components: { Button, Link },
	data() {
		return {

		}
	},
	computed: {
		...mapState('app', ['user']),
	},
	methods: {
		logout() {
			console.log('logout')
		}

	},
}
</script>
<style lang="scss" scoped>
.header {
	padding: 25px 20px;

	&__logo {
		width: 334px;
	}
	&__nav {
		width: 400px;
	}
}
</style>