<template lang="pug">
	.chart.mt-6
		.chart__header.d-flex.justify-space-between
			.chart__header-list.d-flex.items-center.flex-wrap
				.chart__header-el.mr-2(v-for="(list, i) in lists" :style="{color: colors[i]}") {{ list }}
			.chart__header-filters.d-flex.items-center
				Select.select(:lists="selectChart" v-model="selectChartValue")
				.ml-2
					MultiSelect(:lists="selectTypes" v-model="selectType" icon="mdi-filter-outline")
		LineChart.min(
			:chartData="chartData"
			:options="options"
		)
		//
		//Button(
		//	v-if="zoom"
		//	type="orange-outline"
		//	@click="resetZoom"
		//) Отменить приближение
</template>

<script>
import BarChart from "@/components/Chart/BarChart";
import DateSelector from "@/components/DateSelector";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import Table from "@/components/Table/Table";
import Button from "@/components/Button/Button";
import LineChart from "@/components/Chart/LineChart";
// import { ChartZoomPlugin } from '@/plugins/chart'

export default {
	name: "ChartStackBar",
	components: {LineChart, BarChart, DateSelector, MultiSelect, Select, Table, Button},
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
			zoom: false,
			options: {
				responsive: true,
				legend: {
					display: false
				},
				plugins: {
					tooltip: {
						mode: 'index',
						intersect: false,
					},
					zoom: {
						zoom: {
							drag: {
								enabled: true,
							},
							wheel: {
								enabled: false,
							},
							pinch: {
								enabled: false,
							},
							mode: 'x',
							onZoom: ({ chart }) => {
								this.zoom = chart.resetZoom
							},
						},
					},
				},
				scales: {
					x: {
						// stacked: true,
						grid: {
							color: 'transparent',
							borderColor: 'transparent',
							tickColor: 'transparent'
						}
					},
					y: {
						// stacked: true
					}
				}
			},
			selectChart: [{title: 'По дням', value: 'По дням'}, {title: 'По неделям', value: 'По неделям'}, {title: 'По месяцам', value: 'По месяцам'}],
			selectTypes: [{title: 'Заказы', value: 'Заказы'}, {title: 'Продажи', value: 'Продажи'}, {title: 'Возвраты', value: 'Возвраты'}, {title: 'Остатки', value: 'Остатки'}],
			selectType: [],
			selectChartValue: 'По дням',
		}
	},
	computed: {
		// plugins() {
		// 	return [ChartZoomPlugin]
		// },
		chartData() {
			return {
				labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
				datasets: [
					{
						label: 'Employee',
						backgroundColor: "#caf270",
						borderColor: "#caf270",
						data: Array.from({length: 10}).map(() => Math.floor(Math.random() * 30)),
						tension: .3,
					},
					{
						label: 'Engineer',
						backgroundColor: "#45c490",
						borderColor: "#45c490",
						data: Array.from({length: 10}).map(() => Math.floor(Math.random() * 30)),
						tension: .3,
					},
					{
						label: 'Government',
						backgroundColor: "#008d93",
						borderColor: "#008d93",
						data: Array.from({length: 10}).map(() => Math.floor(Math.random() * 30)),
						tension: .3,
					},
					{
						label: 'Political parties',
						backgroundColor: "#2e5468",
						borderColor: "#2e5468",
						data: Array.from({length: 10}).map(() => Math.floor(Math.random() * 30)),
						tension: .3,
					},
				],
			}
		},
	},
	// methods: {
	// 	resetZoom() {
	// 		this.zoom()
	// 		this.zoom = false
	// 	},
	// }
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
//@media screen and (max-width: 1060px) {
//	::v-deep canvas {
//		min-width: 1000px !important;
//	}
//}
</style>
