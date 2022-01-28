<template lang="pug">
	.share
		Menu(title="Share of Search")
		.flex.justify-between
			BarChart.chart(v-for="chart in stackedBarChartData" :chartData="chart" :options="stackedBarChartOptions")

</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import BarChart from "@/components/Chart/BarChart"

export default {
	name: "ShareOfTaxonomy",
	components: {
		Menu,
		BarChart,
	},
	computed: {
		stackedBarChartOptions () {
			return {
				indexAxis: 'y',
				plugins: {
					datalabels: {
						display: function (context){
							return context.dataset.data[context.dataIndex] > 10
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
						stacked: true,
						display: false
					},
					y: {
						stacked: true,
					}
				}
			}
		},
		stackedBarChartData() {
			return [
				{
					labels: ['Ozon'],
					datasets: [
						{
							barPercentage: this.colSize,
							label: '1',
							borderColor: '#93AF21',
							backgroundColor: '#93AF21',
							data: [18],
						},
						{
							barPercentage: (context)=>{
								return  context.dataset.data.length <= 1 ? 1.23 : 1.2
							},
							label: '2',
							borderColor: '#ADACAD',
							backgroundColor: '#ADACAD',
							data: [82],
						},
					]
				},
				{
					labels: ['Beverages', 'Breakfast Cereals', 'Culinary'],
					datasets: [
						{
							barPercentage: this.colSize,
							label: '1',
							borderColor: '#93AF21',
							backgroundColor: '#93AF21',
							data: [25, 20, 11],
						},
						{
							barPercentage: this.colSize,
							label: '2',
							borderColor: '#ADACAD',
							backgroundColor: '#ADACAD',
							data: [75, 80, 89],
						},
					]
				},
				{
					labels: ['Beverages', 'Breakfast Cereals', 'Culinary', 'Culinary', 'Culinary', 'Culinary'],
					datasets: [
						{
							barPercentage: this.colSize,
							borderColor: '#93AF21',
							backgroundColor: '#93AF21',
							data: [25, 20, 11, 50, 70, 90],
						},
						{
							barPercentage: this.colSize,
							borderColor: '#ADACAD',
							backgroundColor: '#ADACAD',
							data: [75, 80, 89, 50, 30, 10],
						},
					]
				},
				{
					labels: ['Beverages', 'Breakfast Cereals', 'Culinary', 'Culinary', 'Culinary', 'Culinary', 'Beverages', 'Breakfast Cereals', 'Culinary', 'Culinary', 'Culinary', 'Culinary'],
					datasets: [
						{
							barPercentage: this.colSize,
							borderColor: '#93AF21',
							backgroundColor: '#93AF21',
							data: [3, 20, 11, 50, 70, 90, 25, 20, 11, 50, 70, 90],
						},
						{
							barPercentage: this.colSize,
							borderColor: '#ADACAD',
							backgroundColor: '#ADACAD',
							data: [97, 80, 89, 50, 30, 10, 75, 80, 89, 50, 30, 10],
						},
					]
				}
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

<style scoped>
.share {
	max-width: 1280px;
	margin: 0 auto;
}

.chart {
	width: 300px;
	height: 600px;
}
</style>
