<template lang="pug">
	.products.mt-4
		.products__search
			v-text-field.input(label='Поиск по бренду, названию, артикулу, цене' append-icon="mdi-magnify" outlined v-bind='attrs' v-on='on' hide-details dense)
		.products__info.mt-5
			.products__info__title Итого по 346 товарам с 01.12.2022 по 01.01.2023
			// темплейт для одной даты
			.products__info__cards
				v-data-table.mt-6(
					:headers="info"
					:items="data"
					hide-default-footer
				)
			// темплейт для одной сравнения
			.products__info__cards
				v-data-table.mt-6(
					:headers="info2"
					:items="data2"
					hide-default-footer
				)
					template(#item.period="{ item }")
						.page__table-body-name.mr-4
							div 01.12.2022 – 03.03.2023
							div 08.03 2021 – 18.04.2021
					template(#item.average-price="{ item }")
						.page__table-body-name.mr-4
							div(:class="{'green-cell': item['average-price'] > item['average-discount']}") {{ item['average-price'] }}
							div(:class="{'green-cell': item['average-discount'] > item['average-price']}") {{ item['average-discount'] }}

</template>

<script>
export default {
	name: "Product",
	data() {
		return {
			info: [
				{
					text: 'Ср. цена',
					value: "average-price", sortable: false
				},
				{
					text: 'Ср. скидка',
					value: "average-discount", sortable: false
				},
				{
					text: 'Ср. цена после скидки',
					value: "average-price-after-discount", sortable: false
				},
				{
					text: 'Всего заказов',
					value: "orders", sortable: false
				},
				{
					text: 'Всего продаж',
					value: "sales", sortable: false
				},
				{
					text: 'Всего возвратов',
					value: "return", sortable: false
				},
				{
					text: 'Сумма расходов',
					value: "expenses", sortable: false
				},
				{
					text: 'Общая прибыль',
					value: "profit", sortable: false
				},
				{
					text: 'Упущенная прибыль',
					value: "missed-profit", sortable: false
				},
				{
					text: 'Всего остатков',
					value: "remains", sortable: false
				},
				{
					text: 'Ср. конверсия в корзину',
					value: "basket", sortable: false
				},
				{
					text: 'Ср. позиция в поиск.выдаче',
					value:  "position", sortable: false
				},
				{
					text: 'Ср. кол-во дней не в сток',
					value: "count", sortable: false
				},
			],
			data: [
				{
					"average-price": 123,
					"average-discount": 123,
					"average-price-after-discount": 123,
					"orders": 123,
					"sales": 123,
					"return": 123,
					"expenses": 123,
					"profit": 123,
					"missed-profit": 123,
					"remains": 123,
					"basket": 123,
					"position": 123,
					"count": 123,
				},
			],
			info2: [
				{
					text: 'Период',
					value: "period", sortable: false
				},
				{
					text: 'Ср. цена',
					value: "average-price", sortable: false
				},
				{
					text: 'Ср. скидка',
					value: "average-discount", sortable: false
				},
				{
					text: 'Ср. цена после скидки',
					value: "average-price-after-discount", sortable: false
				},
				{
					text: 'Всего заказов',
					value: "orders", sortable: false
				},
				{
					text: 'Всего продаж',
					value: "sales", sortable: false
				},
				{
					text: 'Всего возвратов',
					value: "return", sortable: false
				},
				{
					text: 'Сумма расходов',
					value: "expenses", sortable: false
				},
				{
					text: 'Общая прибыль',
					value: "profit", sortable: false
				},
				{
					text: 'Упущенная прибыль',
					value: "missed-profit", sortable: false
				},
				{
					text: 'Всего остатков',
					value: "remains", sortable: false
				},
				{
					text: 'Ср. конверсия в корзину',
					value: "basket", sortable: false
				},
				{
					text: 'Ср. позиция в поиск.выдаче',
					value:  "position", sortable: false
				},
				{
					text: 'Ср. кол-во дней не в сток',
					value: "count", sortable: false
				},
			],
			data2: [
				{
					"average-price": 1,
					"average-discount": 2,
					"average-price-after-discount": 3,
					"orders": 4,
					"sales": 5,
					"return": 6,
					"expenses": 7,
					"profit": 8,
					"missed-profit": 10,
					"remains": 11,
					"basket": 12,
					"position": 13,
					"count": 14,
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.products {
	//padding: 12px 24px;
	&__search {
		.input {
			max-width: 400px;
			width: 100%;
		}
	}
	&__info {
		padding: 16px 24px;
		background-color: #fff;
		&__title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 600;
			font-size: 20px;
			line-height: 24px;
			color: #212121;
		}
		&__cards {
			width: 100%;
			&__card {
				min-width: 70px;
				height: 50px;
				.title {
					font-family: 'Montserrat';
					font-style: normal;
					font-weight: 400;
					font-size: 12px;
					line-height: 20px;
					text-align: right;
					letter-spacing: 0.15px;
					color: #212121;
				}
				strong {
					font-family: 'Montserrat';
					font-size: 14px;
					line-height: 16px;
					text-align: right;
					letter-spacing: 0.15px;
					color: #212121;
				}
			}
		}
	}
}
.green-cell {
	color: #8DC63F;
}
</style>
