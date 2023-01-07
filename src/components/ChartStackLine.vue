<template lang="pug">
	.chart.mt-6
		.chart__header.d-flex.justify-space-between
			.chart__header-list.d-flex.items-center.flex-wrap
				.chart__header-el.mr-2 {{title}}
			.chart__header-filters.d-flex.items-center
				Select.select.ml-5(:lists="selectChart" v-model="selectChartValue")
				MultiSelect.ml-5(:lists="selectTypes" v-model="selectType" icon="mdi-filter-outline")
		LineChart(
			:chartData="chartData"
			:options="options"
		)
</template>

<script>
import BarChart from "@/components/Chart/BarChart";
import DateSelector from "@/components/DateSelector";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import Table from "@/components/Table/Table";
import LineChart from "@/components/Chart/LineChart";

export default {
	name: "ChartStackLine",
	components: {LineChart, BarChart, DateSelector, MultiSelect, Select, Table},
	props: {
		title: {
			type: String,
			required: true,
		}
	},
	data() {
		return {
			options: {
				responsive: true,
				plugins: {
					tooltip: {
						mode: 'index',
						intersect: false,
					},
				},
				interaction: {
					intersect: false,
				},
				scales: {
					x: {
						stacked: true,
						ticks: 1,
					},
					y: {
						stacked: true,
						// ticks: 1,
					}
				}
			},
			selectChart: [{title: 'По дням', value: 'По дням'}, {title: 'По неделям', value: 'По неделям'}, {title: 'По месяцам', value: 'По месяцам'}],
			selectTypes: [{title: 'Заказы', value: 'Заказы'}, {title: 'Продажи', value: 'Продажи'}, {title: 'Возвраты', value: 'Возвраты'}, {title: 'Остатки', value: 'Остатки'}],
			selectType: 'Заказы',
			selectChartValue: 'По дням',
		}
	},
	computed: {
		chartData() {
			return {
				labels: [1,19,7,23,5,7,12,74],
				datasets: [
					{
						label: 'Employee',
						backgroundColor: "#caf270",
						data: [1,19,7,23,5,7,12,74],
						tension: .3,
					}, {
						label: 'Engineer',
						backgroundColor: "#45c490",
						data: [10, 25, 74,21,5,71],
						tension: .3,
					}
				],
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.chart {
	background-color: white;
	padding: 12px 8px;
	border-radius: 8px;
	width: auto;
	overflow-x: auto;
	overflow-y: hidden;
	&__header {
		@media screen and (max-width: 1060px){
			flex-direction: column;
			&-filters {
				margin-top: 8px;
				span {
					margin-left: 0 !important;
					margin-right: 5px;
				}
			}
		}
		&-el {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 15px;
			letter-spacing: 0.15px;
		}
	}
}
</style>
