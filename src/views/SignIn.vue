<template lang="pug">
WelcomePage.singin
	template(#bottom)
		.singin__btn(@click="request")
			Button(type="violet-outline") Заявка на доступ
	template(#form)
		SignInForm
//.singin
	.singin__inner.container.flex.justify-between.items-center
		.singin__content.relative
			.singin__bg
				EllipseItem(size="xl" type="left" :opacity="true")
			.relative
				img.singin__logo(src="~@/assets/img/logo.png")
				h1.singin__title
					| Система мониторинга
					br
					| рынка электронной торговли
				.singin__btn(@click="request")
					Button(type="violet-outline") Заявка на доступ
		.singin__enter.relative.flex.justify-around.items-center
			SignInForm

</template>

<script>
import Button from '@/components/Button/Button.vue'
import WelcomePage from '@/components/WelcomePage/WelcomePage.vue'
import EllipseItem from '@/components/Elements/EllipseItem.vue'
import SignInForm from '@/components/SignInForm/SignInForm.vue'

export default {
	components: { Button, WelcomePage, EllipseItem, SignInForm },
	methods: {
		request() {
			console.log('request')
		}
	}
}
</script>

<style lang="scss" scoped>
.singin {
	&__btn {
		margin-top: 30px;
		margin-left: 40px;
	}
}
</style>