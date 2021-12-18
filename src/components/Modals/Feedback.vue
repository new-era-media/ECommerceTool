<template lang="pug">
ModalBase.feedback(
	title="Обратная связь и поддержка"
	closable
	@close="close"
	)
	.feedback__text Клиент: %название клиента%
	.feedback__text От: %Имя Фамилия автора%
	.feedback__subtitle Тип обращения
	.feedback__list
		Radio.feedback__item(v-model='reason' @input='changeOptions' :options='options')
			template(#default="{option}")
				.feedback__item-title {{option.title}}
				.feedback__item-text(v-if="option.text") {{option.text}}


		//.feedback__item(v-for="item of list" :key="item.title")
			.feedback__item-title {{item.title}}
			.feedback__item-text(v-if="item.text") {{item.text}}
	.feedback__subtitle Описание
	Textarea.feedback__textarea
	.feedback__placeholder
		| Ваше обращение будет рассмотрено в течение рабочего дня.
		br
		| Мы пришлем ответ на вашу почту %почта человека%

	template(#footer)
		.flex.justify-end
			Button.feedback__btn(type="violet-outline" @click="cancel") Отмена
			Button.feedback__btn(type="violet" @click="save") Сохранить

</template>

<script>
import ModalBase from '@/components/Layout/ModalBase.vue'
import Textarea from '@/components/Elements/Textarea.vue'
import Radio from '@/components/Elements/Radio.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: {
		ModalBase,
		Textarea,
		Radio,
		Button
	},
	data() {
		return {
			reason: 0,
			options: [
				{
					value: 0,
					title: 'Ошибка в системе',
					text: 'Если что-то не работает так, как должно'
				},
				{
					value: 1,
					title: 'Просьба предоставить доступ',
					text: 'Если нужно добавить пользователей или проблемы с доступом у добавленных ранее людей'
				},
				{
					value: 2,
					title: 'Предложение улучшения',
					text: 'Функционал, которого вам не хватает'
				},
				{
					value: 3,
					title: 'Другое',
					text: ''
				}
			]
		}
	},
	methods: {
		close() {
			this.$emit('close')
		},
		cancel() {
			this.$emit('cancel')
		},
		save() {
			this.$emit('save')
		},
		changeOptions() {
			console.log('changeOptions')
		}
	}
}
</script>

<style lang="scss" scoped>
.feedback {
	&__text {
		margin-top: 10px;
		font-size: 14px;
		line-height: 1.42;
	}
	&__subtitle {
		margin-top: 22px;
		font-size: 16px;
		line-height: 1.5;
	}
	&__list {

	}
	&__item {
		margin-top: 16px;

		&-title {
			font-size: 14px;
			line-height: 1.42;
		}
		&-text {
			color: color(gray-700);
			font-size: 12px;
			line-height: 1.33;
		}
	}
	&__textarea {
		width: 100%;
		height: 100px;
		margin-top: 12px;
	}
	&__placeholder {
		margin-top: 2px;
	}
	&__btn {
		margin-left: 10px;
	}
}
</style>
