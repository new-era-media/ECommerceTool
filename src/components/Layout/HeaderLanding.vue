<template lang="pug">
	header.header.container
		.flex.justify-between.items-center
			Link(:to="{name: 'Index'}" unstyled)
				img.header__logo(src="~@/assets/img/logo.png")
			nav.header__nav.flex.justify-between.items-center
				Link.header__nav-item(native) Возможности
				Link.header__nav-item(native) Площадки
				Link.header__nav-item(native) Метрики
				Link(:to="{name: 'SignIn'}" unstyled)
					Button(label="Войти" type="violet-outline")


</template>
<script>
import Button from '@/components/Button/Button.vue'
import Link from '@/components/Link/Link.vue'

export default {
	components: { Button, Link },
	data() {
		return {

		}
	}
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