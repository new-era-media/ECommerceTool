<template lang="pug">
	.request
		.request__section.flex.justify-between
			.request__input
				InputLight(placeholder="Имя и фамилия")
			.request__input
				InputLight(placeholder="Электронная почта")
		.request__section.flex.justify-between
			.request__input
				InputLight(placeholder="Компания")
			.request__input
				InputLight(placeholder="Должность")
		.request__section
			TextareaLight.request__textarea(placeholder="Категория товаров, вопросы и пожелания")
		.request__section.flex
			LandingButton.request__btn(label="Отправить")
			Checkbox.request__agreements(
				:value="isAgree"
				type="gray"
				@change="change"
			)
				| Согласие на&nbsp;
				Link(href="/" unstyled native)
					| обработку персональных данных

</template>

<script>
import InputLight from '@/components/Elements/InputLight.vue'
import TextareaLight from '@/components/Elements/TextareaLight.vue'
import Checkbox from '@/components/Elements/Checkbox.vue'
import LandingButton from '@/components/LandingButton/LandingButton.vue'
import Link from '@/components/Link/Link.vue'

export default {
	components: {
		InputLight,
		TextareaLight,
		Checkbox,
		LandingButton,
		Link,
	},
	data() {
		return {
			isAgree: true,
		}
	},
	methods: {
		change() {
			this.isAgree = !this.isAgree
		}
	},
}
</script>

<style lang="scss" scoped>
.request {
	width: 1024px;
	height: 424px;
	padding: 40px 105px;
	background-color: color(white);
	border-radius: 16px;

	&__section {
		margin-top: 30px;

		&:first-of-type {
			margin-top: 0;
		}

		&:last-of-type {
			margin-top: 20px;
		}
	}

	&__input {
		width: 47%;
	}
	&__textarea {
		width: 100%;
		height: 80px;
	}
	&__btn {
		margin-right: 32px;

		/deep/ &.button {
			padding: 20px 52px;
		}
	}
	&__agreements {
		color: color(gray-600);
		font-weight: 500;
		font-size: 13px;
		line-height: 1.23;

		a {
			color: color(primary);
			text-decoration: underline;

			&:hover {
				text-decoration: none;
			}
		}
	}
}
</style>