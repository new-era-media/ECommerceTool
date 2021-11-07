<template lang="pug">
.profile
	Header(:nav="[]")
	Menu(:title="title")
		template(#title)
			.flex.items-baseline
				| {{title}}
				.profile__email client@mail.ru

		nav.profile__nav.flex
			.profile__nav-item(@click="change('name')") Изменить имя
			.profile__nav-item(@click="change('pass')") Сменить пароль
			.profile__nav-item.--logout(@click="logout") Выйти
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
import Header from '@/components/Layout/Header.vue'
import Menu from '@/components/Menu/Menu.vue'

export default {
	components: {
		Header,
		Menu,
	},
	data() {
		return {
			title: 'Иванов И • Клиент'
		}
	},
	methods: {
		change(item) {
			console.log('change', item)
		},
		logout() {
			console.log('logout')
		}
	}
}
</script>
<style lang="scss" scoped>
.profile {

	&__email {
		margin-left: 16px;
		font-size: 14px;
		line-height: 1.42;
	}

	&__nav {
		&-item {
			margin-right: 32px;
			color: color(white);
			cursor: pointer;

			&:last-of-type {
				margin-right: 10px;
			}

			&.--logout {
				color: color(orange);
			}
		}
	}

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