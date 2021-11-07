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
						a(href="#request")
							Button(@click="request") Заявка на доступ
				.index__system-img
					img(src="~@/assets/img/system.png")
		.index__cards.container.flex.justify-between
			.index__card
				LoupeIcon.index__card-icon
				.index__card-title Мониторинг цен
				.index__card-text
					| Анализ цен конкурентов позволит выстроить ценообразование на основе текущей ситуации рынка и максимизировать доход
			.index__card
				PriceIcon.index__card-icon
				.index__card-title Цены конкурентов
				.index__card-text
					| Отслеживайте цены на сайтах конкурентов и маркетплейсах, чтобы делать лучшее предложение для потребителя.
			.index__card
				ChartIcon.index__card-icon
				.index__card-title Цены ритейлеров
				.index__card-text
					| Если Вы призводитель или оптовая компания, отслеживайте демпинг и выявляйте общие тенденции на рынке.
		.index__product.container
			.product-card.flex.relative
				.product-card__bg
					EllipseItem
				.product-card__content.relative
					.product-card__title Сравнение своего товара с товарами конкурентов
					.product-card__text Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.
				.product-card__img.relative
					img(src="~@/assets/img/products/product-card-1.png")
			.product-card.flex.relative
				.product-card__bg
					EllipseItem(type="left")
				.product-card__content.relative
					.product-card__title Популярность товара в своей категории
					.product-card__text Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.
				.product-card__img.relative
					img(src="~@/assets/img/products/product-card-2.png")
			.product-card.flex.relative
				.product-card__bg
					EllipseItem
				.product-card__content.relative
					.product-card__title Сравнение своего товара с товарами конкурентов
					.product-card__text Описание ждем от Саши/Наташи. Анализ цен конкурентов позволит выстроить ценообразование основываясь на текущей ситуации рынка и максимизировать доход.
				.product-card__img.relative
					img(src="~@/assets/img/products/product-card-3.png")
		a(name="request")
		.index__request.container.flex.items-center.justify-between
			.index__request-blur-bg.relative
			.index__request-title.relative
				h1 Оставьте заявку и получите доступ одними из первых
				.index__request-title-bg
					EllipseItem(:opacity="true" type="left")
			.index__request-form.relative
				.index__request-bg
					EllipseItem(size="sm" :opacity="true")
				RequestForm


</template>

<script>
import Button from '@/components/Button/Button.vue'
import RequestForm from '@/components/RequestForm/RequestForm.vue'
import EllipseItem from '@/components/Elements/EllipseItem.vue'
import LoupeIcon from '@/assets/svg/loupe.svg'
import PriceIcon from '@/assets/svg/price.svg'
import ChartIcon from '@/assets/svg/chart.svg'

export default {
	components: {
		Button,
		RequestForm,
		EllipseItem,
		LoupeIcon,
		PriceIcon,
		ChartIcon,
	},
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
		request() {
			console.log('request')
		}
	}
}
</script>

<style lang="scss" scoped>
.index {
	padding-bottom: 40px;
	overflow: hidden;
	//background: radial-gradient(ellipse at top, #DFD3F2, transparent),
	//	radial-gradient(ellipse at top, #D3E7F7, transparent),
	//	radial-gradient(ellipse at top, #FAE9D4, transparent);

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
			height: 67px;
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
	&__request {
		margin-top: 190px;

		&-blur-bg {
			@include radialBg(#FBE6BE, 1500px);
			&:before {
				left: -400px;
				bottom: -800px;
			}
		}

		&-title {
			width: 36.5%;
			margin-left: 190px;
			text-align: right;
		}
		&-form {
			width: 42%;
			padding: 74px 130px 74px 90px;
			border-top-left-radius: 100px;
			border-bottom-left-radius: 100px;
			background-color: color(white);
			//overflow: hidden;

			&:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				right: -100%;
				background-color: color(white);
			}
		}
		&-bg {
			position: absolute;
			top: 63px;
			right: -245px;
		}
		&-title-bg {
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -120px;
			margin-left: -740px;
		}
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
	&:nth-of-type(1) {
		@include radialBg(#DFD3F2, 1500px);

		&:before {
			left: -400px;
		}

		.product-card__bg {
			top: 50%;
			left: 50%;
			margin-left: -590px;
			margin-top: -80px;
		}
	}
	&:nth-of-type(2) {
		@include radialBg(#D4E7F6, 1500px);

		.product-card__bg {
			top: 50%;
			left: 50%;
			margin-left: -242px;
			margin-top: -112px;
		}
	}
	&:nth-of-type(3) {
		.product-card__content {
			margin-top: 96px;
			margin-left: 36px;
		}
		.product-card__bg {
			top: 50%;
			left: 50%;
			margin-left: -502px;
			margin-top: 18px;
		}
	}

	&__bg {
		position: absolute;
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