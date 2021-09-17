<template lang="pug">
.profile
	Menu(title="Иванов И • Клиент")
	.profile__list.container.flex.items-start
		.profile__card.profile__rate
			.flex.justify-between
				div
					span.profile__sub Тариф
					| Базовый
				.color-violet
					| Все тарифы
			div
				.profile__subtitle Описание пакета
				.profile__item - Сбор ключевых метрик
				.profile__item - Sell out
				.profile__item - Настройка виджетов под клиента
				.profile__item - 15+ маркетплейсов
				.profile__item - Ретроданные
				.profile__item - Категорийная выдача
				.profile__item - Поисковая выдача
		.profile__card.profile__geo
			div
				span.profile__sub Гео
				| Москва
			div
				.profile__subtitle Категории
				.profile__item - Кофе в зернах
				.profile__item - Макароны
				.profile__item - Детское питание
</template>
<script>
import Menu from '@/components/Menu/Menu.vue'
export default {
	components: { Menu }
}
</script>
<style lang="scss" scoped>
.profile {
	&__list {
		padding: 32px 20px;
	}
	&__card {
		margin-right: 20px;
		padding: 16px 28px;
		background-color: color(white);
	}
	&__rate {
		width: 400px;
	}
	&__geo {
		width: 290px;
	}
	.color-violet {
		color: color(violet);
	}
	&__sub,
	&__subtitle {
		font-weight: 600;
		line-height: 1.71;
	}
	&__sub {
		margin-right: 8px;
	}
	&__subtitle {
		margin: 10px 0 4px 0;
	}
	&__item {
		margin-top: 1px;
	}
}
</style>