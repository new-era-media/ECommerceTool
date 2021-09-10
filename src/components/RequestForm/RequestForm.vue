<template lang="pug">
	.request
		.request__title(v-if="title") {{title}}
		.request__item
			Input(placeholder="Фамилия и имя")
		.request__item
			Input(placeholder="Эл. почта")
		.request__item
			Input(placeholder="Компания")
		.request__item
			Input(placeholder="Должность")
		.request__item
			Textarea(placeholder="Категории товаров, ваши вопросы и пожелания")
		.request__btn
			Button() Отправить заявку

		slot(name="bottom")

</template>
<script>
import Input from '@/components/Elements/Input.vue'
import Textarea from '@/components/Elements/Textarea.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { Input, Textarea, Button },
	props: {
		title: String,
	}
}
</script>
<style lang="scss" scoped>
.request {
	width: 100%;
	position: relative;

	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}

	&__item {
		margin: 26px 0;

		&:first-of-type {
			margin: 0;
		}
		input, textarea {
			width: 100%;
		}
		textarea {
			height: 88px;
		}
	}
	&__btn {
		margin-top: 30px;
	}
}
</style>