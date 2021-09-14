<template lang="pug">
WelcomePage.singin
	template(#bottom)
		.singin__btn(@click="request")
			Button(type="violet-outline") Заявка на доступ
	template(#form)
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
	position: relative;
	@include radialBg(#DFD3F2);

	&__btn {
		margin-top: 30px;
		margin-left: 40px;
	}
}
</style>