<template lang="pug">
WelcomePage.singin
	template(#bottom)
		Link.singin__btn(:to="{name: 'Request'}" unstyled)
			Button(type="violet-outline") Заявка на доступ
	template(#form)
		SignInForm

</template>

<script>
import Button from '@/components/Button/Button.vue'
import Link from '@/components/Link/Link.vue'
import WelcomePage from '@/components/WelcomePage/WelcomePage.vue'
import EllipseItem from '@/components/Elements/EllipseItem.vue'
import SignInForm from '@/components/SignInForm/SignInForm.vue'

export default {
	components: {
		Button,
		Link,
		WelcomePage,
		EllipseItem,
		SignInForm
	},
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