<template lang="pug">
	.analytics
		.analytics__header.d-flex
			.analytics__header__menu
				.analytics__menu
					span Аналитика
					span.analytics__menu-el.active.ml-4 сводная
					span.analytics__menu-el.ml-4 по товарам
			.analytics__header__menu.ml-auto.d-flex.items-center.justify-center
				DateSelector
				Select.ml-5(:lists="selectWallet" v-model="select")
				MultiSelect.ml-5(:lists="selectWallet" v-model="select2" placeholder="Все магазины")
		.charts
			ChartStackBar(:colors="['red', 'blue', 'green', 'yellow', 'brown']" :lists="['Заказ', 'Продажи', 'Возвраты', 'Отмененные', 'Остатки']")
			ChartStackBar(:colors="['red', 'blue', 'green', 'yellow', 'brown']" :lists="['Заказ', 'Продажи', 'Возвраты', 'Отмененные', 'Остатки']")

		.analytics__body
		.analytics__table
			.analytics__table-title.mt-8 Итого за 4 ноября – 3 декабря 2022

			v-data-table.mt-6(
				:headers="headers"
				:items="data"
				hide-default-footer
			)
				template(#item.name="{ item }")
					.analytics__table-body-name.mr-4
						strong Название магазина
						div OZON
			.analytics__table-title.mt-8 Расходы

			v-data-table.mt-6(
				:headers="headers"
				:items="data"
				hide-default-footer
			)
				template(#item.name="{ item }")
					.analytics__table-body-name.mr-4
						strong Название магазина
						div OZON


</template>

<script>

import Table from "@/components/Table/Table";
import Select from "@/components/Select";
import MultiSelect from "@/components/MultiSelect";
import DateSelector from "@/components/DateSelector";
import ChartStackBar from "@/components/ChartStackBar";
export default {
	name: "Analytics",
	components: {ChartStackBar, DateSelector, MultiSelect, Select, Table},
	data() {
		return {
			options: {
				responsive: true,
				interaction: {
					intersect: false,
				},
				scales: {
					x: {
						stacked: true,
					},
					y: {
						stacked: true
					}
				}
			},
			selectWallet: [{title: 'Единицы товара', value: 'Единицы товара'}, {title: 'Рубли', value: 'Рубли'}],
			select: 'Единицы товара',
			select2: [],
			cellNamesFirst: ['Заказы', 'Продажи', 'Возвраты', 'Отмененные заказы', 'Остатки', 'Расходы', 'Прибыль', 'Упущенная прибыль'],
			cellNamesSecond: ['Комиссия маркетлейса', 'Логистика', 'Хранение', 'Маркетинг', 'Остальное'],
			cellDataFirst: ['123 345', '130 045', '– 130 045', '130 045', '130 045', '130 045', '130 045', '130 045'],
			cellDataSecond: ['123 345', '130 045', '– 130 045', '130 045', '130 045', ],
			headers: [
				{
					text: '',
					align: 'start',
					sortable: false,
					value: 'name',
				},
				{ text: 'Заказы', value: 'calories', sortable: false },
				{ text: 'Продажи', value: 'fat', sortable: false },
				{ text: 'Возвраты', value: 'carbs', sortable: false },
				{ text: 'Отмененные заказы', value: 'protein', sortable: false },
				{ text: 'Остатки', value: 'iron', sortable: false },
				{ text: 'Расходы', value: 'iron', sortable: false },
				{ text: 'Прибыль', value: 'iron', sortable: false },
				{ text: 'Упущенная прибыль', value: 'iron', sortable: false },
			],
			data: [
				{
					name: 'Frozen Yogurt',
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: '1%',
				},
			],
		}
	},
	computed: {
		tableColumns() {
			return [
				{
					title: '',
					slot: 'name',
					width: 60,
				},
				{
					title: 'Заказы',
					value: (item) => item.value,
					width: 10,
				},
				{
					title: 'Продажи',
					value: () => '123',
					width: 10,
				},
				{
					title: 'Возвраты',
					value: () => '123',
					width: 10,
				},
				{
					title: 'Отмененные заказы',
					value: () => '123',
					width: 10,
				},
				{
					title: 'Остатки',
					value: () => '123',
					width: 10,
				},
				{
					title: 'Расходы',
					value: () => '123',
					width: 10,
				},
				{
					title: 'Прибыль',
					value: () => '123',
					width: 10,
				},
				{
					title: 'Упущенная прибыль',
					value: () => '123',
					width: 50,
				},
			]
		},
		tableSource() {
			return [
				{
					value: 123,
				}
			]
		},
	},
}
</script>

<style lang="scss" scoped>
.analytics {
	padding: 12px 24px;
	&__header {
		&__menu {
			font-family: 'Montserrat';
			font-weight: 400;
			font-size: 24px;
			line-height: 29px;
			letter-spacing: 0.15px;
			color: #212121;
			&-el {
				cursor: pointer;
				color: #676767;
			}
		}
	}
	&__body {}
	&__table {
		&-title {
			font-weight: 600;
			font-size: 20px;
			line-height: 24px;
			color: #212121;
		}
		&-body {
			&-name {
				width: 151px;
				font-size: 14px;
				line-height: 20px;
				color: #212121;
			}
			&-cell {
				width: 65px;
				text-align: right;
				font-weight: 400;
				font-size: 12px;
				line-height: 15px;
				letter-spacing: 0.15px;
				color: #676767;
			}
		}
	}
}

.active {
	color: #212121;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		left: 0;
		bottom: -5px;
		height: 3px;
		border-radius: 4px;
		background-color: #FA4860;
	}
}
.charts {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 24px;
}
</style>
