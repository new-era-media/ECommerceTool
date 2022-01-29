<template lang="pug">
	.share.flex.justify-between
		ContainerForData(width="100%")
			template(#data)
				.flex.justify-between
					.charts(v-for="chart in stackedBarChartData")
						h2 {{ chart.title }}
						BarChart.chart(:chartData="chart" :options="stackedBarChartOptions")
			template(#header-right)
				.right.flex.items-center
					CogOutline
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import BarChart from "@/components/Chart/BarChart"
import ContainerForData from "@/components/Nestle/ContainerForData";
import CogOutline from 'vue-material-design-icons/CogOutline.vue'

export default {
	name: "ShareOfTaxonomy",
	components: {
		Menu,
		BarChart,
		ContainerForData,
		CogOutline
	},
	computed: {
		stackedBarChartOptions () {
			return {
				indexAxis: 'y',
				plugins: {
					datalabels: {
						display: function (context){
							return context.dataset.data[context.dataIndex] > 5
						},
						formatter: (item) => {
							return `${item}%`
						},
						color: 'white',
						backgroundColor: 'transparent',
						borderColor: 'transparent',
						font: {
							weight: 'bold',
							size: 10
						}
					},
				},
				responsive: true,
				scales: {
					x: {
						display: false
					}
				}
			}
		},
		stackedBarChartData() {
			return [
				{
					labels: ['Ozon'],
					title: 'Product Not Ranked in Top 50 By Online Store',
					datasets: [
						{
							barPercentage: this.colSize,
							label: '1',
							borderColor: '#D0CBCB',
							backgroundColor: '#D0CBCB',
							data: [18],
						},
					]
				},
				{
					labels: ['Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon', 'Ozon','Ozon'],
					title: 'Product Not Ranked in Top 50 By Category',
					datasets: [
						{
							barPercentage: this.colSize,
							label: '1',
							borderColor: '#D0CBCB',
							backgroundColor: '#D0CBCB',
							data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
						},
					]
				},
				{
					labels: ['Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon','Ozon', 'Ozon','Ozon','Ozon'],
					title: 'Product Not Ranked in Top 50',
					datasets: [
						{
							barPercentage: this.colSize,
							label: '1',
							borderColor: '#D0CBCB',
							backgroundColor: '#D0CBCB',
							data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 76, 80, 85, 90, 95, 100, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 76, 80, 85, 90, 95, 100],
						},
					]
				},
			]
		},
		tableOptions() {
			return {
				sort: {field: 'name', order: 'desc'},
				columns: this.tableColumns,
				data: this.tableData,
			}
		},
	},
	methods: {
		colSize(context){
			return context.dataset.data.length <= 1 ? 1.23 : 1.2
		}
	}
}
</script>

<style lang="scss" scoped>
.share {
	max-width: 1280px;
	margin: 0 auto;
	.charts {
		h2{
			font-size: 18px;
			color: color(gray-500);
		}
	}
	.chart {
		width: 280px;
		height: 600px;
	}
	/deep/.chart{
		margin: 0;
	}
}
/deep/.element-container__content div{
	width: 100%;
}
.right {
	color: color(gray-600);
}
</style>
