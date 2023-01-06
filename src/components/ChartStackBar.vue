<template lang="pug">
	.chart.mt-6
		.chart__header.d-flex.justify-space-between
			.chart__header-list.d-flex.items-center
				.chart__header-el.mr-2(v-for="(list, i) in lists" :style="{color: colors[i]}") {{ list }}
			.chart__header-filters.d-flex.items-center
				Select.select.ml-5(:lists="selectChart" v-model="selectChartValue")
				MultiSelect.ml-5(:lists="selectTypes" v-model="selectType" icon="mdi-filter-outline")
		BarChart(
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

export default {
	name: "ChartStackBar",
	components: {BarChart, DateSelector, MultiSelect, Select, Table},
	props: {
		colors: {
			type: Array,
			required: true,
		},
		lists: {
			type: Array,
			required: true,
		}
	},
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
			selectChart: [{title: 'По дням', value: 'По дням'}, {title: 'По неделям', value: 'По неделям'}, {title: 'По месяцам', value: 'По месяцам'}],
			selectTypes: [{title: 'Заказы', value: 'Заказы'}, {title: 'Продажи', value: 'Продажи'}, {title: 'Возвраты', value: 'Возвраты'}, {title: 'Остатки', value: 'Остатки'}],
			selectType: 'Заказы',
			selectChartValue: 'По дням',
		}
	},
	computed: {
		chartData() {
			return {
				labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
				datasets: [
					{
						label: 'Employee',
						backgroundColor: "#caf270",
						data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
					}, {
						label: 'Engineer',
						backgroundColor: "#45c490",
						data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
					}, {
						label: 'Government',
						backgroundColor: "#008d93",
						data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
					}, {
						label: 'Political parties',
						backgroundColor: "#2e5468",
						data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
					},
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
	&__header {
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
