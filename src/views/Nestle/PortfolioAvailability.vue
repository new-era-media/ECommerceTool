<template lang="pug">
	.portfolio
		Menu(title="Portfolio Availability")
			.portfolio__nav.flex.justify-between.items-center
				Export.portfolio__export(
					type='white'
					@click="exportHandler"
				)
				.portfolio__date.flex.items-center
					CalendarBlank.portfolio__date-icon(:size="18")
					DatePicker(
						v-model="dateSelect"
						type="string"
					)
		.container
			.flex.mb-24.mt-24
				select(v-model="group")
					option(v-for="item in groupOptions" :value="item") Group By: {{ item }}
				.header-right
					Tabs(:tabs="tabsData" type-tab="table-tabs" v-model="tab")

			.flex.justify-between.charts
				ContainerForData
					template(#header-left)
						.flex.items-center
							p Summary
							Tooltip(trigger="hover")
								template(slot="reference")
									HelpCircle.icon
								span 'Tooltip'
					template(#data)
						ShellDoughuntChart(v-bind="chartPropsDoughunt")

				ContainerForData
					template(#header-left)
						.flex.items-center
							p Portfolio Availability Over Time
							Tooltip(trigger="hover")
								template(slot="reference")
									HelpCircle.icon
								span 'Tooltip'
					template(#header-right)
						Tooltip(trigger="clickToToggle")
							template(slot="reference")
								.data-range-picker {{ getDateStr }}
							Period(:date="date")
					template(#data)
						LineChart(v-bind="chartPropsLine")

			ContainerForData(width="100%")
				template(#header-left)
					.flex.items-center
						select(v-model="status")
							option(v-for="item in statusOptions" :value="item") {{ item }}
						input.ml-8(type="checkbox" id="status")
						label.ml-8(for="status") Only New Changes
				template(#header-right)
					.flex
						.table-button
							button &#x2039; Earler dates
							button Later dates &#x203A;
						Search(v-model="search")
						Tooltip.ml-8(trigger="clickToToggle")
							template(slot="reference")
								.data-range-picker {{ getDateStr }}
							Period(:date="date")
				template(#data)
					Table.brands__table(v-bind="tableOptions")
						template(#title="{item, index}") {{ item.title }}
						template(#image="{item}")
							.table-image(:style="{backgroundImage: `url(${item.url})`}")
						template(#description="{item}")
							div {{ item.description.name }}
							div
								strong RPC
								span.ml-8 {{ item.description.rpc }}
							div
								strong UPC
								span.ml-8 {{ item.description.upc }}
						template(#date="{item}") {{ item.date }}
							.circle(:class="Math.floor(Math.random() * 2) ? 'circle-red' : 'circle-green'")
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Export from '@/components/Nestle/Export/Export.vue'
import ShellDoughuntChart from "@/components/Nestle/ShellDoughuntChart";
import ContainerForData from "@/components/Nestle/ContainerForData";
import LineChart from "@/components/Chart/LineChart";
import Period from "@/components/Period/Period";
import Tooltip from '@/components/Elements/Tooltip.vue'
import dayjs from "dayjs";
import HelpCircle from 'vue-material-design-icons/HelpCircle.vue'
import CalendarExport from 'vue-material-design-icons/CalendarExport.vue'
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import DatePicker from '@/components/Elements/DatePicker.vue'
import Tabs from "@/components/Nestle/Tabs";
import Table from "@/components/Table/Table";
import Search from "../../components/Nestle/Search";

export default {
	components: {
		Search,
		Menu,
		Export,
		Table,
		Tabs,
		Period,
		LineChart,
		ContainerForData,
		ShellDoughuntChart,
		Tooltip,
		HelpCircle,
		CalendarExport,
		CalendarBlank,
		DatePicker
	},
	data: () => {
		return {
			group: 'Online Store',
			groupOptions: ['Online Store'],
			status: 'Any Status',
			statusOptions: ['Any Status'],
			date: {
				from: dayjs().subtract(30, 'days').toDate(),
				to: dayjs().subtract(1, 'days').toDate(),
			},
			dateSelect: dayjs().subtract(30, 'days').toDate(),
			tab: 1,
			tabsData:[
				{
					value: 1,
					title: 12
				},
				{
					value: 2,
					title: '%'
				}
			],
			list: [],
			tabTable: 1,
			search: null
		}
	},
	computed:{
		optionsDoughunt() {
			return {
				cutout: 100,
				borderWidth: 1
			}
		},
		chartDataDoughunt() {
			return {
				labels: [
					'First',
					'Second',
				],
				datasets: [{
					data: [300, 50],
					backgroundColor: [
						'#4CAF50',
						'#757575',
					],
				}]
			}
		},
		chartPropsDoughunt() {
			return {
				options: this.optionsDoughunt,
				chartData: this.chartDataDoughunt,
				percent: 81,
				value: 713
			}
		},
		chartDataLine() {
			return {
				labels: ['January', 'February', 'March', 'April', 'May', 'June'],
				datasets: [{
					label: 'Dataset 1',
					data: [1, 4, 10, 65, 59, 80, 81, 56, 55, 40],
					borderColor: 'blue',
					backgroundColor: 'blue',
					fill: {
						target: 'start',
						above: 'rgba(93,95,236,0.4)',
					}
				},
					{
						label: 'Dataset 2',
						data: [10, 20, 30, 80, 30],
						borderColor: 'green',
						backgroundColor: 'green',
						fill: {
							target: 'start',
							above: 'rgba(76, 175, 80, 0.4)',
						}
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
					responsive: true,
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
				},
			}
		},
		chartPropsLine() {
			return {
				options: this.optionsLine,
				chartData: this.chartDataLine,
			}
		},
		getDateStr() {
			return `${dayjs(this.date.from).format('DD.MM.YYYY')} - ${dayjs(this.date.to).format('DD.MM.YYYY')}`
		},
		tableDataDefault() {
			return [
				{
					title: 'Ozon',
					url: 'https://pechatvkaliningrade.ru/wp-content/uploads/2020/03/Шоколадка-Алёнка-с-твоим-фото-на-8-марта.jpg',
					description: {
						name: 'name',
						rpc: '11111111',
						upc: '22222'
					}
				},
				{
					title: 'Ozon',
					url: 'https://pechatvkaliningrade.ru/wp-content/uploads/2020/03/Шоколадка-Алёнка-с-твоим-фото-на-8-марта.jpg',
					description: {
						name: 'name',
						rpc: '11111111',
						upc: '22222'
					}
				},
				{
					title: 'Ozon',
					url: 'https://pechatvkaliningrade.ru/wp-content/uploads/2020/03/Шоколадка-Алёнка-с-твоим-фото-на-8-марта.jpg',
					description: {
						name: 'name',
						rpc: '11111111',
						upc: '22222'
					}
				}
			]
		},
		tableColumns() {
			return [
				{
					title: 'Online Store',
					width: 80,
					slot: 'title',
				},
				{
					title: 'Image',
					width: 80,
					slot: 'image',
				},
				{
					title: 'Description',
					width: 240,
					slot: 'description',
				},
				{
					title: 'Dec 10',
					width: 60,
					slot: 'date',
					value: () => {
						return Math.floor(Math.random() * 2) === 1
					}
				},
				{
					title: 'Dec 11',
					width: 60,
					slot: 'date',
					value: () => {
						return Math.floor(Math.random() * 2) === 1
					}
				},
				{
					title: 'Dec 12',
					width: 60,
					slot: 'date',
					value: () => {
						return Math.floor(Math.random() * 2) === 1
					}
				},
				{
					title: 'Dec 13',
					width: 60,
					slot: 'date',
					value: () => {
						return Math.floor(Math.random() * 2) === 1
					}
				},
				{
					title: 'Dec 14',
					width: 60,
					slot: 'date',
					value: () => {
						return Math.floor(Math.random() * 2) === 1
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
	},
	methods: {
		exportHandler() {
			console.log('exportHandler')
		},
	},
}
</script>

<style lang="scss" scoped>
.portfolio {
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
		margin-top: 1px;
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
/deep/.chart {
	width: 100%;
}
.data-range-picker{
	position: relative;
	background-color: #fff;
	padding: 0 25px 0 5px;
	border: 1px color(gray-400) solid;
	border-radius: 3px;
	&:after{
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		font-weight: 800;
		top: 7px;
		right: 6px;
		border: 5px solid transparent;
		border-top: 5px solid black;
	}
}
.mb-24 {
	margin-bottom: 24px;
}
.ml-8 {
	margin-left: 8px;
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
.search input{
	position: relative;
	padding-left: 30px;
	width: 300px;
	outline: 1px color(gray-400) solid;
	border-radius: 3px;
	z-index: 1;
}
.search .icon{
	position: absolute;
	z-index: 2;
	top: 15px;
}
.charts{
	margin-bottom: 38px;
}
.table-image{
	width: 40px;
	height: 40px;
	background-size: cover;
}
.circle{
	width: 15px;
	height: 15px;
	border-radius: 50%;
	&-red{
		background-color: color(red);
	}
	&-green{
		background-color: color(green);
	}
}
.table-button button{
	font-size: 14px;
	background-color: #fff;
	outline: 1px color(gray-400) solid;
	padding: 0 5px;
	border-radius: 3px;
	color: color(gray-600);
	margin-top: 1px;
}
</style>
