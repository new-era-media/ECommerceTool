<template lang="pug">
	.page
		.charts
			ChartStackBar(:colors="['red', 'blue', 'green', 'yellow', 'brown']" :lists="['Заказ', 'Продажи', 'Возвраты', 'Отмененные', 'Остатки']")
			ChartStackBar(:colors="['red', 'blue', 'green', 'yellow', 'brown']" :lists="['Заказ', 'Продажи', 'Возвраты', 'Отмененные', 'Остатки']")

			ChartStackLine(title="Заказы")

		// Темплейт для собственной даты
		.page__table
			.page__table-title.mt-8 Итого за 4 ноября – 3 декабря 2022

			v-data-table.mt-6(
				:headers="headers"
				:items="data"
				hide-default-footer
			)
				template(#item.name="{ item }")
					.page__table-body-name.mr-4
						strong Название магазина
						div OZON
			.page__table-title.mt-8 Расходы

			v-data-table.mt-6(
				:headers="headers"
				:items="data"
				hide-default-footer
			)
				template(#item.name="{ item }")
					.page__table-body-name.mr-4
						strong Название магазина
						div OZON


		// Темплейт для сравнения
		.page__table
			.page__table-title.mt-8 Сравнение 01.12.2022 – 03.03.2023 и 08.03 2021 – 18.04.2021

			v-data-table.mt-6(
				:headers="headers"
				:items="data"
				hide-default-footer
			)
				template(#item.name="{ item }")
					.page__table-body-name.mr-4
						strong Название магазина
						div OZON
				template(#item.order="{ item }")
					.page__table-body-name.mr-4
						div(:class="{'green-cell': item.return > item.order}") {{ item.return }}
						div(:class="{'green-cell': item.order > item.return}") {{ item.order }}
			.page__table-title.mt-8 Расходы

			v-data-table.mt-6(
				:headers="headers"
				:items="data"
				hide-default-footer
			)
				template(#item.name="{ item }")
					.page__table-body-name.mr-4
						strong Название магазина
						div OZON
				template(#item.order="{ item }")
					.page__table-body-name.mr-4
						div(:class="{'green-cell': item.order > item.return}") {{ item.order }}
						div(:class="{'green-cell': item.return > item.order}") {{ item.return }}

</template>

<script>

import Table from "@/components/Table/Table";
import Select from "@/components/Select";
import MultiSelect from "@/components/MultiSelect";
import DateSelector from "@/components/DateSelector";
import ChartStackBar from "@/components/ChartStackBar";
import ChartStackLine from "@/components/ChartStackLine";
export default {
	name: "Summary",
	components: {ChartStackLine, ChartStackBar, DateSelector, MultiSelect, Select, Table},
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
				{ text: 'Заказы', value: 'order', sortable: false },
				{ text: 'Продажи', value: 'sales', sortable: false },
				{ text: 'Возвраты', value: 'return', sortable: false },
				{ text: 'Отмененные заказы', value: 'cancel', sortable: false },
				{ text: 'Остатки', value: 'remains', sortable: false },
				{ text: 'Расходы', value: 'expenses', sortable: false },
				{ text: 'Прибыль', value: 'profit', sortable: false },
				{ text: 'Упущенная прибыль', value: 'missed', sortable: false },
			],
			data: [
				{
					name: 'Frozen Yogurt',
					order: 159,
					sales: 6.0,
					return: 24,
					cancel: 4.0,
					expenses: '1%',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.page {
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
	@media screen and (max-width: 1060px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 0;
	}
}

.green-cell {
	color: #8DC63F;
}
</style>
