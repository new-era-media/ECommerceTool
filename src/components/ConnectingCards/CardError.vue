<template lang="pug">
	.warning-connect.mt-8
		.warning-connect__title.d-flex.align-center
			v-icon(color="#212121" size="20") mdi-emoticon-sad-outline
			span.ml-2 Данные не загрузились
		.warning-connect__subtitle.mt-4 После подключения мы начнем собирать данные с магазина и вы увидите статистику
		Button.mt-4 Попробовать загрузить еще раз
		.warning-connect__edit.mt-4
			v-icon(color="#212121") mdi-pencil
			span.ml-1 Изменить настройки подключения
</template>

<script>
export default {
	name: "CardError",
	props: {
		name: {
			type: String,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>

.warning-connect {
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
	}
}
</style>
