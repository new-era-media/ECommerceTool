<template lang="pug">
		ContainerForData(width="100%")
			template(#data)
				.flex.flex-col
					.numbers.mx-auto.flex.justify-evenly(style="width: 100%")
						.count.flex.flex-col.items-center
							.count__number 13.1%
							.count__text Average Menu KPI
						.count.flex.flex-col.items-center
							.count__number 13.1%
							.count__text Average Menu KPI
							.count__text Average Menu KPI
						.count.flex.flex-col.items-center
							.count__number 13.1%
							.count__text Average Menu KPI
					.charts
						BarChart(:chartData="stackedBarChartData" :options="stackedBarChartOptions")
						LineChart.disabled-chart(v-bind="chartPropsLine")
			template(#header-right)
				.right.flex.items-center
					.mr-12 Just Now
					CogOutline

</template>

<script>
import ContainerForData from "@/components/Nestle/ContainerForData";
import BarChart from "@/components/Chart/BarChart";
import LineChart from "@/components/Chart/LineChart";
import CogOutline from 'vue-material-design-icons/CogOutline.vue'

export default {
	name: "overview-and-trend",
	components: {
		LineChart,
		BarChart,
		ContainerForData,
		CogOutline
	},
	data: () => {
		return {
			list: [],
		}
	},
	computed:{
		chartDataLine() {
			return {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June'],
				datasets: [{
					label: 'Dataset 1',
					data: [30.4, 28.4, 26.2, 24.9, 20.3, 11.9, 8, 12.9, 22.1, 13.1, 22.1, 13.1],
					borderColor: 'yellowgreen',
					backgroundColor: 'yellowgreen',
					tension: 0.25,
				}]
			}
		},
		optionsLine() {
			return {
				pointStyle: 'circle',
				pointRadius: 3,
				interaction: {
					mode: 'index'
				},
				plugins: {
					datalabels: {
						display: true,
						formatter: (item) => {
							return `${item}%`
						},
						color: 'blue',
						backgroundColor: 'yellowgreen',
						borderColor: 'transparent',
						font: {
							weight: 'bold',
							size: 12
						},
						anchor: 'top'
					},
					responsive: true,
					interaction: {
						intersect: false,
					},
					tooltip: {
						enabled: false
					},
				},
				scales: {
					x: {
						display: true,
						ticks: {
							font: {
								size: 0
							}
						},
						grid: {
							display: false
						}
					},
					y: {
						display: true,
						ticks: {
							font: {
								size: 0
							}
						},
						grid: {
							display: false
						}
					},
				},
			}
		},
		chartPropsLine() {
			return {
				options: this.optionsLine,
				chartData: this.chartDataLine,
			}
		},
		stackedBarChartOptions () {
			return {
				plugins: {
					datalabels: {
						display: true,
						color: 'white',
						backgroundColor: 'blue',
						borderColor: 'blue',
						anchor: 'end',
						font: {
							weight: 'bold',
							size: 12
						}
					},
					responsive: true,
					interaction: {
						intersect: false,
					},
					tooltip: {
						enabled: false
					},
					scale: {
						ticks: {
							display: false,
							maxTicksLimit: 3
						}
					}
				},
				scales: {
					x: {
						display: false
					},
					y: {
						display: false
					},
				},
				responsive: true,
			}
		},
		stackedBarChartData() {
			return {
				labels: ['Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Ozon', 'Utkonos', 'Yandex', 'Ozon', 'Utkonos', 'Yandex'],
				datasets: [
					{
						label: '1',
						borderColor: '#49A22F',
						backgroundColor: (item) => {
							return item.raw <= 100 ? 'yellowgreen' : '#A59D9D'
						},
						data: [165, 59, 180, 81, 156, 55, 140, 165, 59, 180, 81, 156, 55, 140, 165, 59, 180, 81, 156, 55, 140, 165, 59, 180, 81, 156, 55, 140],
					},
				]
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.count {
	&__number {
		font-size: 50px;
	}
	&__text  {
		font-size: 18px;
	}
}
.charts {
	position: relative;
}
/deep/.chart{
	width: 1280px;
	margin: 20px;
	position: relative;
	&:hover{
		z-index: 2;
	}
}
.disabled-chart{
	pointer-events: none;
	transform: translateY(-100%);
}
.right {
	color: color(gray-600);
}
</style>
