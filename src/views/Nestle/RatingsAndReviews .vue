<template lang="pug">
	.page
		Menu(title="Share of Search")
			.page__nav.flex.justify-between.items-center
				Export.page__export(
					type='white'
					@click="exportHandler"
				)
				.page__date.flex.items-center
					CalendarBlank.page__date-icon.mr-4(:size="18")
					DatePicker(
						v-model="dateSelect"
						type="string"
					)

		select.mt-24(v-model="group")
			option(v-for="item in groupOptions" :value="item") Group By: {{ item }}

		ContainerForData.mt-24(width="100%")
			template(#header-left)
				.flex.items-center
					p Avarage Rating By Online Store
					Tooltip.mr-24(trigger="hover")
						template(slot="reference")
							HelpCircle.icon
						span 'Tooltip'
					p.ml-16 Total Review Count: 278.419
					p.ml-16 Total Avarage Rating: 4.7
			template(#header-right)
				select(v-model="average")
					option(v-for="item in averageRating" :value="item") {{ item }}
			template.relative(#data)
				.flex.ml-24(v-for="(item, index) in position")
					.absolute(v-if="ratingList.length" :style="{top: `${item + 50}px`, left: '25px'}") {{ratingList[index]}}
					Rating.absolute(v-if="position && ratingList.length" :style="{top: `${item + 48}px`, left: '50px'}" :rating="ratingList[index]")
				BarChart(:chartData="stackedBarChartData" :options="stackedBarChartOptions" :plugins="[erChartRatingPlugin]" ref="bar")

		ContainerForData.mt-24(width="100%")
			template(#header-left)
				.flex.items-center
					p Details
					Tooltip.mr-24(trigger="hover")
						template(slot="reference")
							HelpCircle.icon
						span 'Tooltip'
			template(#header-right)
				Search(v-model="search")
			template(#data)
				Table(v-bind="tableOptions")
					template(#product="{item, index, value}")
						div {{ value.name }}
						div
							strong RPC
							span.ml-8 {{ value.rpc }}
						div
							strong UPC
							span.ml-8 {{ value.upc }}
					template(#count="{item, index, value}")
						.flex.items-center.justify-center
							span.mr-8 {{ value }}
							Badge(text="pass")
					template(#rating="{item, index, value}")
						.flex.items-center.justify-center.mt-24
							span.mr-8 {{ value }}
							Badge(text="pass")
						Rating(:rating="value")
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Export from '@/components/Nestle/Export/Export.vue'
import Tooltip from '@/components/Elements/Tooltip.vue'
import HelpCircle from 'vue-material-design-icons/HelpCircle.vue'
import ContainerForData from "@/components/Nestle/ContainerForData";
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import DatePicker from '@/components/Elements/DatePicker.vue'
import BarChart from "@/components/Chart/BarChart";
import Search from "@/components/Nestle/Search";

import dayjs from "dayjs";
import Table from "@/components/Table/Table";
import Badge from "@/components/Chart/Badge";
import Rating from "@/components/Nestle/Layout/Rating";

export default {
	name: "RatingsAndReviews",
	components: {
		Rating,
		Badge,
		Table,
		Search,
		BarChart,
		ContainerForData,
		Tooltip,
		HelpCircle,
		Menu,
		Export,
		CalendarBlank,
		DatePicker
	},
	data: () => {
		return {
			group: 'Online Store',
			groupOptions: ['Online Store'],
			average: 'Avarage Rating',
			averageRating: ['Avarage Rating'],
			list: [],
			dateSelect: dayjs().subtract(30, 'days').toDate(),
			search: null,
			position: [],
			ratingList: [],
		}
	},
	computed:{
		stackedBarChartOptions () {
			return {
				indexAxis: 'y',
				plugins: {
					datalabels: {
						display: function (context){
							return context.dataset.data[context.dataIndex] > 0
						},
						color: 'white',
						backgroundColor: 'transparent',
						borderColor: 'transparent',
						font: {
							weight: 'bold',
							size: 14
						}
					},
					responsive: true,
					tooltip: {
						enabled: false
					},
					interaction: {
						intersect: false,
					},
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							font: {
								size: 14
							}
						}
					},
					title: {
						position: 'bottom',
						display: true,
						text: 'Product count',
						font: {
							size: 18
						}
					}
				},
				responsive: true,
				scales: {
					x: {
						stacked: true,
						beginAtZero: true,
						ticks: {
							maxTicksLimit: 50,
						},
					},
					y: {
						stacked: true,
					}
				}
			}
		},
		stackedBarChartData() {
			return {
				labels: ['Ozon', 'Utkonos', 'Yandex'],
				percent: [4.1, 4.2, 4.5],
				datasets: [
					{
						label: '1',
						borderColor: '#49A22F',
						backgroundColor: '#49A22F',
						data: [244, 117, 105],
					},
					{
						label: '2',
						borderColor: '#C3C12A',
						backgroundColor: '#C3C12A',
						data: [5, 43, 0],
					},
					{
						label: '3',
						borderColor: '#FFC700',
						backgroundColor: '#FFC700',
						data: [0, 15, 0],
					},
					{
						label: '4',
						borderColor: '#FB8A02',
						backgroundColor: '#FB8A02',
						data: [0, 6, 0],
					},
					{
						label: '5',
						borderColor: '#E55627',
						backgroundColor: '#E55627',
						data: [0, 3, 0],
					},
					{
						label: '6',
						borderColor: '#ADACAD',
						backgroundColor: '#ADACAD',
						data: [0, 111, 19],
					}
				]
			}
		},
		tableDataDefault() {
			return [
				{
					name: 'Ozone',
					category: 'Bavarages',
					brand: 'Nescafe 3 in 1',
					product: {
						name: '123131',
						rpc: '123131',
						upc: '123131'
					},
					count: 815,
					rating: 4.9
				},
			]
		},
		tableColumns() {
			return [
				{
					title: 'Online Store',
					width: 80,
					cellClass: 'justify-center',
					value: (item) => {
						return item.name
					}
				},
				{
					title: 'Category',
					width: 80,
					cellClass: 'justify-center',
					value: (item) => {
						return item.category
					}
				},
				{
					title: 'Brand',
					width: 80,
					cellClass: 'justify-center',
					value: (item) => {
						return item.brand
					}
				},
				{
					title: 'Trusted Product Description',
					width: 300,
					slot: 'product',
					cellClass: 'justify-center',
					value: (item) => {
						return item.product
					}
				},
				{
					title: 'Review count',
					width: 80,
					slot: 'count',
					cellClass: 'justify-center',
					value: (item) => {
						return item.count
					}
				},
				{
					title: 'Avh. Rating',
					width: 80,
					slot: 'rating',
					cellClass: 'justify-center',
					value: (item) => {
						return item.rating
					}
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
		tableData() {
			return this.list.concat(this.tableDataDefault)
		},
		erChartRatingPlugin() {
			return {
				id: 'chartRating',
				afterDatasetUpdate: this.erChartRating()
			}
		},
	},
	methods: {
		exportHandler() {
			console.log('exportHandler')
		},
		async erChartRating() {
			await this.$nextTick(()=>{
				const newChart = this.$refs?.bar?.chart
				newChart._metasets[0].data.forEach((bar) => {
					this.ratingList = newChart?.config?._config?.data?.percent
					this.position.push(bar.y)
				})
			})
		}
	}
}
</script>

<style scoped lang="scss">

.page {
	max-width: 1280px;
	margin: 0 auto;
	&__nav {
		width: 190px;
	}
	&__date {
		width: 100px;
		color: color(white);
		cursor: pointer;

		&-icon {
			margin-right: 4px;
		}

		/deep/.control__input{
			color: color(white);
			font-weight: 400;
		}
	}
}
h1{
	color: color(gray-700);
}
.header{
	margin-bottom: 32px;
	&-right{
		margin-left: auto;
	}
	&-button {
		background-color: #fff;
		padding: 10px 5px;
		border-radius: 3px;
		color: color(gray-700);
		border: 1px color(gray-400) solid;
		&:not(:last-child){
			margin-right: 8px;
		}
		&:focus{
			outline: none;
		}
	}
}
.icon{
	color: color(gray-500);
	position: absolute;
	margin-left: 8px;
	margin-top: -6px;
	/deep/.material-design-icon__svg {
		width: 15px;
		height: 15px;
	}
}
.icon-button{
	color: color(gray-700);
	/deep/.material-design-icon__svg {
		width: 15px;
		height: 15px;
	}

	margin-right: 8px;
}
/deep/.control__input{
	padding: 10px 5px;
	border: none;
	width: 80px;
	font-weight: 800;
	color: color(gray-700);
	cursor: pointer;

	&:focus{
		outline: none;
	}
}

select{
	padding: 0 5px;
	outline: 1px color(gray-400) solid;
	border-radius: 3px;
	color: color(gray-700);

	&:focus{
		outline: none;
	}
}

/deep/.chart {
	width: 88%;
	margin-left: auto;
}

.relative {
	position: relative;
}
.absolute {
	position: absolute;
}
</style>
