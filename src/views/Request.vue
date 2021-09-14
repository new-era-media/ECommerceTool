<template lang="pug">
WelcomePage.request
	template(#bg)
		.request__bg
			EllipseItem(size="xxl" )

	template(#bottom)
		.request__back(@click="back")
			Button(type="empty")
				Arrow.request__back-icon
				| Назад

	template(#form)
		RequestForm(title="Заявка на доступ")
			template(#bottom)
				.request__sub Мы свяжемся с Вами по указанной почте в течении рабочего дня
</template>
<script>
import EllipseItem from '@/components/Elements/EllipseItem.vue'
import WelcomePage from '@/components/WelcomePage/WelcomePage.vue'
import RequestForm from '@/components/RequestForm/RequestForm.vue'
import Button from '@/components/Button/Button.vue'
import Arrow from '@/assets/svg/arrow-left.svg'

export default {
	components: { WelcomePage, EllipseItem, RequestForm, Button, Arrow },
	methods: {
		back() {
			this.$router.go(-1)
		}
	}
}
</script>
<style lang="scss" scoped>
.request {
	position: relative;
	@include radialBg(#FAE9D4);

	&__bg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-518px, -590px);
	}
	&__back {
		margin-top: 10px;
		margin-left: 20px;

		&-icon {
			margin-right: 4px;
		}
	}
	&__sub {
		margin-top: 10px;
		color: color(gray-700);
		font-size: 14px;
		line-height: 1.42;
	}
}
</style>