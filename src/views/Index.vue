<template lang="pug">
	.index
		.container
			.index__system.flex.justify-between.items-center
				.index__system-content
					h1
						| Система мониторинга
						br
						| рынка электронной торговли
					.index__system-request
						Button(@click="onClickRequest") Заявка на доступ
				.index__system-img
					img(src="~@/assets/img/system.png")
		.index__cards.container.flex.justify-between
			.index__card
				img.index__card-icon(src="~@/assets/svg/loupe.svg")
				.index__card-title Мониторинг цен
				.index__card-text
					| Анализ цен конкурентов позволит выстроить ценообразование на основе текущей ситуации рынка и максимизировать доход
			.index__card
				img.index__card-icon(src="~@/assets/svg/price.svg")
				.index__card-title Цены конкурентов
				.index__card-text
					| Отслеживайте цены на сайтах конкурентов и маркетплейсах, чтобы делать лучшее предложение для потребителя.
			.index__card
				img.index__card-icon(src="~@/assets/svg/chart.svg")
				.index__card-title Цены ритейлеров
				.index__card-text
					| Если Вы призводитель или оптовая компания, отслеживайте демпинг и выявляйте общие тенденции на рынке.
		.index__product.container
			//ProductCard(v-for="(card, index) in products" :key="index" :card="card")
			.product-card.flex
				.product-card__content
					.product-card__title Сравнение своего товара с товарами конкурентов
					.product-card__text Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.
				.product-card__img
					img(src="~@/assets/img/products/product-card-1.png")
			.product-card.flex
				.product-card__content
					.product-card__title Популярность товара в своей категории
					.product-card__text Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.
				.product-card__img
					img(src="~@/assets/img/products/product-card-2.png")
			.product-card.flex
				.product-card__content
					.product-card__title Сравнение своего товара с товарами конкурентов
					.product-card__text Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.
				.product-card__img
					img(src="~@/assets/img/products/product-card-3.png")



</template>

<script>
import Button from '../components/Button/Button.vue'
import ProductCard from '../components/ProductCard/ProductCard.vue'

export default {
	components: { Button, ProductCard },
	data() {
		return {
			products: [
				{
					title: 'Сравнение своего товара с товарами конкурентов',
					text: 'Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.',
					img: '~@/assets/img/products/product-card-1.png'
				},
				{
					title: 'Популярность товара в своей категории',
					text: 'Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.',
					img: '~@/assets/img/products/product-card-1.png'
				},
				{
					title: 'Сравнение своего товара с товарами конкурентов',
					text: 'Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.',
					img: '~@/assets/img/products/product-card-1.png'
				},
			]
		}
	},
	methods: {
		onClickRequest() {
			console.log(this.products)
		}
	}
}
</script>

<style lang="scss" scoped>
.index {
	margin-bottom: 400px;

	&__system {
		position: relative;
		margin: 225px 0 295px 0;


		&-content {
			padding: 0 80px;
			width: 680px;
		}
		&-request {
			margin-top: 20px;
		}

		&-img {
			position: absolute;
			width: 792px;
			top: 50%;
			left: 50%;
			transform: translate(-45px, -212px);
		}
	}
	&__cards {
		padding: 0 50px;
	}
	&__card {
		width: 28%;
		text-align: center;

		&-icon {
			margin: 0 auto;
			min-height: 67px;
		}
		&-title {
			margin-top: 22px;
			font-size: 20px;
			line-height: 1.35;
			font-weight: 600;
		}
		&-text {
			margin-top: 5px;
			font-size: 16px;
			line-height: 1.75;
		}
	}
	&__product {
		margin-top: 16px;
	}
}
.product-card {
	margin-top: 25px;
	padding: 0 20px 0 140px;

	&:first-of-type {
		margin-top: 0;
	}

	&:nth-of-type(2n) {
		margin-bottom: 60px;

		.product-card__content {
			order: 2;
			margin-top: 120px;
			margin-left: 35px;
		}
		.product-card__img {
			order: 1;
		}
	}
	&:nth-of-type(3) {
		.product-card__content {
			margin-top: 96px;
			margin-left: 36px;
		}
	}

	&__content {
		width: 420px;
		margin-top: 230px;
	}
	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}
	&__text {
		margin-top: 10px;
		font-size: 16px;
		line-height: 1.75;
	}
	&__img {
		flex-shrink: 0;
	}
}
</style>