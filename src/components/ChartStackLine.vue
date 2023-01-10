<template lang="pug">
	.chart.mt-6
		.chart__header.d-flex.justify-space-between
			.chart__header-list.d-flex.items-center.flex-wrap
				.chart__header-el.mr-2 {{title}}
			.chart__header-filters.d-flex.items-center
				.ml-2
					Select.select(:lists="selectChart" v-model="selectChartValue")
				MultiSelect(:lists="selectTypes" v-model="selectType" icon="mdi-filter-outline")
		LineChart(
			:chartData="chartData"
			:options="options"
			:plugins="plugins"
		)
		Button(
			v-if="zoom"
			type="orange-outline"
			@click="resetZoom"
		) Отменить приближение
</template>

<script>
import BarChart from "@/components/Chart/BarChart";
import DateSelector from "@/components/DateSelector";
import MultiSelect from "@/components/MultiSelect";
import Select from "@/components/Select";
import Table from "@/components/Table/Table";
import LineChart from "@/components/Chart/LineChart";
import Button from "@/components/Button/Button";
import { ChartZoomPlugin } from '@/plugins/chart'

export default {
	name: "ChartStackLine",
	components: {LineChart, BarChart, DateSelector, MultiSelect, Select, Table, Button},
	props: {
		title: {
			type: String,
			required: true,
		}
	},
	data() {
		return {
			zoom: false,
			options: {
				responsive: true,
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
			selectType: [],
			selectChartValue: 'По дням',
		}
	},
	computed: {
		plugins() {
			return [ChartZoomPlugin]
		},
		chartData() {
			return {
				labels: [1,19,7,23,5,7,12,74],
				datasets: [
					{
						label: 'Employee',
						backgroundColor: "#caf270",
						borderColor: "#caf270",
						data: [1,19,7,23,5,7,12,74],
						tension: .3,
					}, {
						label: 'Engineer',
						backgroundColor: "#45c490",
						borderColor: "#45c490",
						data: [10, 25, 74,21,5,71],
						tension: .3,
					}
				],
			}
		},
	},
	methods: {
		resetZoom() {
			this.zoom()
			this.zoom = false
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
//@media screen and (max-width: 720px) {
//	::v-deep canvas {
//		min-width: 720px !important;
//	}
//}
</style>
