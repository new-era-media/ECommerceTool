<template lang="pug">
	.index
		.header.flex.items-center
			h1 Portfolio Availability
			Tooltip(trigger="hover")
				template(slot="reference")
					HelpCircle.icon
				span 'Tooltip'

			.header-right.flex
				button.header-button.flex.items-center
					CalendarExport.icon-button
					strong Export
				button.header-button.flex.items-center
					CalendarBlank.icon-button
					DatePicker(v-model="dateSelect")

		.flex
			select.mb-8(v-model="group")
				option(v-for="item in groupOptions" :value="item") Group By: {{ item }}
			.header-right
				Tabs(:tabs="tabsData" v-model="tab")

		.flex.justify-between
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
</template>

<script>
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

export default {
	components: {
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
				scales: {
					Y: {
						title: {
							display: true,
							text: 'Product Count',
							fontSize: 20
						}
					},
				}
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
	}
}
</script>

<style lang="scss" scoped>
.index {
	max-width: 1280px;
	margin: 0 auto;
	padding: 20px;
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
select{
	padding: 0 5px;
	outline: 1px color(gray-400) solid;
	border-radius: 3px;
	margin-bottom: 24px;
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
</style>