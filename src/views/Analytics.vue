<template lang="pug">
	.analytics
		.analytics__header.d-flex
			.analytics__header__menu
				.analytics__menu
					span.analytics__menu-title Аналитика
					span.analytics__menu-el.ml-4(@click="setComponent('Summary')" :class="{active: component === 'Summary'}") сводная
					span.analytics__menu-el.ml-4(@click="setComponent('Product')" :class="{active: component === 'Product'}") по товарам
			.analytics__header__menu.ml-auto.d-flex.items-center.justify-center.flex-wrap
				Select(:lists="selectWallet" v-model="select")
				MultiSelect.mx-5(:lists="selectWallet" v-model="select2" placeholder="Все магазины")
				DateSelector.ml-5

		component(:is="component")

</template>

<script>

import Select from "@/components/Select";
import MultiSelect from "@/components/MultiSelect";
import DateSelector from "@/components/DateSelector";
import Summary from "@/components/Summary";
import Product from "@/components/Product";
export default {
	name: "Analytics",
	components: {Product, Summary, DateSelector, MultiSelect, Select},
	data() {
		return {
			component: 'Summary',
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
	methods: {
		setComponent(component) {
			this.component = component
		}
	}
}
</script>

<style lang="scss" scoped>
.analytics {
	padding: 12px 24px;
	&__menu {
		font-family: 'Montserrat';
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		letter-spacing: 0.15px;
		color: #676767;
		&-title {
			color: #212121;
		}
		&-el {
			cursor: pointer;
			color: #676767;
		}
	}
	&__header {
		@media screen and (max-width: 1060px) {
			flex-direction: column;
			&__menu {
				margin-left: 0 !important;
				justify-content: flex-start !important;
				margin-top: 12px;
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
	@media screen and (max-width: 1060px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 0;
	}
}

.green-cell {
	color: #8DC63F;
}
</style>
