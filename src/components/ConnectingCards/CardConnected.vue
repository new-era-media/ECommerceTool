<template lang="pug">
	.complete.mt-8
		.complete__title.d-flex.align-center
			v-icon(color="#212121" size="20") mdi-check-circle-outline
			span.ml-2 Магазин {{ name }} подключен
		.complete__subtitle.mt-4
			span Данные отражаются в разделе
			span.link.ml-1 Аналитика
		.complete__edit.d-flex.align-center.mt-4
			v-icon(color="#212121") mdi-pencil
			span.ml-1 Изменить настройки подключения
		.complete__delete.d-flex.align-center.mt-3
			v-icon(color="#212121") mdi-delete-outline
			span.ml-1 Удалить подключение
</template>

<script>
export default {
	name: "CardConnect",
	props: {
		name: {
			type: String,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.complete {
	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		color: #212121;
	}
	&__subtitle {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		letter-spacing: 0.15px;
		color: #212121;
		.link {
			cursor: pointer;
			color: red;
		}
	}
}
</style>
