<template lang="pug">
	.index
		.container
			.index__cta
				.index__title
					| Система мониторинга
					br
					| и анализа рынка онлайн-торговли
				.index__text
					| Ежедневное обновление данных по 50+ сайтам, включая ритейлеров, маркетплейсы, онлайн-аптеки, сайты детских товаров, как в web-версии, так и в мобильных приложениях
				LandingButton.index__request-btn(
					label="Заявка на доступ"
					@click="request"
				)

		.index__lines
			img.index__lines-img(src="~@/assets/img/landing/lines.png")
		.index__content
			.container
				.index__cards.flex.justify-between
					.index__card
						.index__card-icon
							img(src="~@/assets/img/landing/card-1.png")
						.index__card-title
							| Мониторинг
							br
							| онлайн-полки
						.index__card-text.index__text
							| Анализ представленности, ассортимента, видимости бренда, категорийной и поисковой выдачи, цены и промоактивности всех брендов в категории
					.index__card
						.index__card-icon
							img(src="~@/assets/img/landing/card-2.png")
						.index__card-title
							| Мониторинг
							br
							| стоков
						.index__card-text.index__text
							| Анализ доступности товаров на сайтах, динамика стоков по дням, оценка
							| уходимости товаров. Настройка алертов
							| на закончившиеся товары
					.index__card
						.index__card-icon
							img(src="~@/assets/img/landing/card-3.png")
						.index__card-title
							| Оценка
							br
							| карточки
						.index__card-text.index__text
							| Оценка качества заполненности карточки: название, описание, изображения,
							| отзывы и рейтинг. А также исследования
							| по влиянию контента на выдачу.
				.index__products
					.index__product.flex.justify-between.items-center
						.index__product-img
							img(src="~@/assets/img/products/product-1.png")
						.index__product-content
							.index__product-title.index__subtitle
								| Анализ всей категории
								br
								| и позиции бренда
							.index__product-text.index__text
								| Данные позволяют:
								ul
									li сравнить позицию бренда с конкурентами по основным метрикам;
									li оценить видимость бренда в категории по доле полки, доле премиальных позиций в выдаче;
									li сравнить свой ассортимент с конкурентами
					.index__product.flex.justify-between.items-center
						.index__product-content
							.index__product-title.index__subtitle
								| Сравнение цены, скидки, доли промо в категории
								| и с основными конкурентами
							.index__product-text.index__text
								| Оценка регулярной цены, уровня скидок
								| и продолжительности промо для эффективного управления промополитикой на каждом сайте
						.index__product-img
							img(src="~@/assets/img/products/product-2.png")
					.index__product.flex.justify-between.items-center
						.index__product-img
							img(src="~@/assets/img/products/product-3.png")
						.index__product-content
							.index__product-title.index__subtitle
								| Анализ продуктовых карточек бренда
								| и их интегральная оценка
							.index__product-text.index__text
								| Оценка качества карточки наличию видимым элементам: названию, описанию, количеству отзывов, рейтингу, изображениям, видеоконтенту и rich-контенту. Доступна ML оценка карточки с эталоном, включая оценка соответствия изображения, описания и названия
					.index__product.flex.justify-between.items-center
						.index__product-content
							.index__product-title.index__subtitle
								| Анализ стоков
								br
								| и доступности товаров
							.index__product-text.index__text
								| Сбор динамики стоков для оценки уходимости
								br
								| на каждом сайте мониторинга
						.index__product-img
							img(src="~@/assets/img/products/product-4.png")


		.index__bottom(ref="request")
			img.index__bottom-bg(src="~@/assets/img/landing/footer-bg.png")
			.container.index__bottom-content
				.index__request
					.index__request-title.index__subtitle
						| Заявка на получение доступа к демо-версии
					.index__text
						| Используйте эту форму в случае появления любых вопросов о продукте
					RequestFormLanding.index__request-form
				CatFooter.index__footer


</template>

<script>
import LandingButton from '@/components/LandingButton/LandingButton.vue'
import CatFooter from '@/components/Layout/CatFooter.vue'
import RequestFormLanding from '@/components/RequestForm/RequestFormLanding.vue'

export default {
	components: {
		LandingButton,
		CatFooter,
		RequestFormLanding,
	},
	data() {
		return {

		}
	},
	methods: {
		request() {
			const element = this.$refs.request
			element.scrollIntoView({ behavior: 'smooth' })
			// window.scrollTo(0, element.offsetTop)
		},
	}
}
</script>

<style lang="scss" scoped>
.index {
	font-family: Montserrat, Helvetica, Arial, sans-serif;

	&__cta {
		position: relative;
		max-width: 580px;
		margin-top: 44px;
		margin-left: 92px;
		z-index: 10;

		&:before {
			content: '';
			position: absolute;
			width: 492px;
			height: 451px;
			top: -68px;
			left: -410px;
			background-image: url('~@/assets/img/landing/subtract-1.png');
		}
	}

	&__title {
		margin-bottom: 22px;
		font-size: 40px;
		font-weight: 700;
		line-height: 1.15;
	}
	&__text {
		font-size: 15px;
		line-height: 1.3;
	}
	&__request-btn {
		position: relative;
		margin-top: 28px;
	}

	&__subtitle {
		font-size: 30px;
		font-weight: 700;
		line-height: 1.15;
	}

	&__lines {
		position: relative;
		width: 100%;
		height: 475px;
		margin-top: -200px;

		&-img {
			position: absolute;
			min-width: 1920px;
			width: 1920px;
			height: 482px;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	&__content {
		position: relative;
		background-color: color(white);

		&:before {
			content: '';
			position: absolute;
			min-width: 1920px;
			height: 124px;
			top: -118px;
			left: 50%;
			transform: translateX(-50%);
			background-image: url('~@/assets/img/landing/back-top.png');
		}
	}

	&__cards {
		margin-top: 16px;
		padding: 20px 45px 0 45px;
	}
	&__card {
		width: 30%;

		&-icon {
			width: 120px;
			height: 120px;
			margin: 0 auto;
		}
		&-title {
			margin: 16px 0;
			text-align: center;
			font-size: 24px;
			font-weight: 700;
			line-height: 1.15;
		}
		&-text {
			text-align: center;
		}
	}

	&__products {
		margin-top: 100px;
	}
	&__product {
		position: relative;
		padding: 0 45px;

		&-img {
			flex-shrink: 0;
			width: 684px;
		}
		&-content {
			width: 482px;
		}
		&-text {
			margin-top: 36px;

			ul {
				margin-top: 22px;

				li {
					position: relative;
					padding-left: 24px;
					margin-top: 8px;

					&:before {
						content: '';
						position: absolute;
						width: 3px;
						height: 3px;
						top: 10px;
						left: 10px;
						background-color: color(primary);
						border-radius: 50%;
					}
				}
			}
		}

		&:nth-of-type(1) {

			&:before {
				content: '';
				position: absolute;
				width: 970px;
				height: 954px;
				top: 80px;
				left: 90px;
				background-image: url('~@/assets/img/landing/subtract-2.png');
			}
			&:after {
				content: '';
				position: absolute;
				width: 952px;
				height: 936px;
				top: -4px;
				left: -320px;
				background-image: url('~@/assets/img/landing/subtract-3.png');
			}

			& .index__product-img {
				position: relative;
				width: 674px;
				z-index: 10;
			}
			& .index__product-content {
				position: relative;
				margin-top: -40px;
				z-index: 10;
			}
		}
		&:nth-of-type(2n) {
			& .index__product-title,
			& .index__product-text {
				text-align: right;
			}
		}
		&:nth-of-type(2) {
			margin-top: 4px;

			& .index__product-content {
				margin-top: 36px;
			}
			& .index__product-text {
				margin-top: 22px;
			}
		}
		&:nth-of-type(3) {
			margin-top: 50px;

			&:before {
				content: '';
				position: absolute;
				width: 1178px;
				height: 810px;
				top: 200px;
				left: 230px;
				background-image: url('~@/assets/img/landing/subtract-4.png');
			}

			&:after {
				content: '';
				position: absolute;
				width: 1160px;
				height: 792px;
				top: -112px;
				left: 440px;
				background-image: url('~@/assets/img/landing/subtract-5.png');
			}

			& .index__product-img,
			& .index__product-content {
				position: relative;
				z-index: 10;
			}

			& .index__product-content {
				margin-top: 80px;
			}
			& .index__product-text {
				margin-top: 24px;
			}
		}
		&:nth-of-type(4) {
			margin-top: 220px;

			& .index__product-content {
				margin-top: 38px;
			}
			& .index__product-text {
				margin-top: 22px;
			}
		}
	}

	&__bottom {
		position: relative;
		padding-top: 216px;

		&-bg {
			position: absolute;
			min-width: 1920px;
			height: 955px;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
		&-content {
			position: relative;
		}
	}

	&__request {
		width: 1120px;
		margin: 0 auto;
		padding: 0 45px;
		min-height: 500px;

		&-title {
			margin-bottom: 8px;
		}
		&-form {
			margin-top: 26px;
		}
	}
	&__footer {
		margin-top: 90px;
	}
}
</style>