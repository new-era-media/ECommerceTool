<template lang="pug">
	.index
		.header.flex.items-center
			h1 Share of Search
			Badge.ml-8(text="32%")
			Tooltip(trigger="hover")
				template(slot="reference")
					HelpCircle.icon
				span 'Tooltip'

			.header-right.flex
				button.header-button.flex.items-center
					CalendarExport.icon-button
					strong Export

		ContainerForData(width="100%")
			template(#header-left)
				.flex.items-center
					select(v-model="searchTerm")
						option(value="1") Search Term
			template(#data)
				Table(v-bind="tableOptions")
					template(#first="{item, index}")
						.flex.items-center
							.table-name-item {{ item.title }}
							FlagVariant.flag-icon.ml-8
							.ml-auto.mr-8 {{ item.titlePercent }}
					template(#color="{item, index}")

</template>

<script>
import Tooltip from '@/components/Elements/Tooltip.vue'
import HelpCircle from 'vue-material-design-icons/HelpCircle.vue'
import CalendarExport from 'vue-material-design-icons/CalendarExport.vue'
import FlagVariant from 'vue-material-design-icons/FlagVariant.vue'
import Badge from "@/components/Chart/Badge";
import ContainerForData from "@/components/Nestle/ContainerForData";
import Table from "@/components/Table/Table";

export default {
	name: "ShareOfSearch",
	components: {
		Table,
		ContainerForData,
		Badge,
		Tooltip,
		CalendarExport,
		HelpCircle,
		FlagVariant
	},
	data: () => {
		return {
			searchTerm: 1,
			list: [],
		}
	},
	computed:{
		tableDataDefault() {
			return [
				{
					title: 'After Eight',
					titlePercent: '63%',
					ozon: 94,
					ytka: 94,
					yandex: 0
				},
				{
					title: 'After Eight Шоколад',
					titlePercent: '65%',
					ozon: 94,
					ytka: 100,
					yandex: 0
				},
				{
					title: 'After Eight Шоколадны...',
					titlePercent: '31%',
					ozon: 94,
					ytka: 0,
					yandex: 0
				},
			]
		},
		tableColumns() {
			return [
				{
					title: '<div class="table-title">Search Term</div>',
					width: 300,
					slot: 'first',
					cellClass: 'justify-center',
				},
				{
					title: `<div class="table-title">Ozon</div>
									<div class="table-percent--green">39%<div>`,
					width: 300,
					alignCenter: true,
					value: (item)=>{
						return `<div class="color-container ${this.getColor(item.ozon)} flex items-center justify-center flex-col">${item.ozon}% ${item.ozon ? '' : '<div>No Rezults</div>'}</div>`
					}
				},
				{
					title: `<div class="table-title">Утканос</div>
									<div class="table-percent--green">59%<div>`,
					width: 300,
					alignCenter: true,
					value: (item)=>{
						return `<div class="color-container ${this.getColor(item.ytka)} flex items-center justify-center  flex-col">${item.ytka}% ${item.ytka ? '' : '<div>No Rezults</div>'}</div>`
					}
				},
				{
					title: `<div class="table-title">Яндекс Маркет</div>
									<div class="table-percent--red">0%<div>`,
					width: 300,
					alignCenter: true,
					value: (item)=>{
						return `<div class="color-container ${this.getColor(item.yandex)} flex items-center justify-center flex-col">${item.yandex}%  ${item.yandex ? '' : '<div>No Rezults</div>'}</div>`
					}
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
		tableData() {
			return this.list.concat(this.tableDataDefault)
		},
	},
	methods: {
		getColor(number){
			if(!number || number < 20){
				return '--red'
			}
			if(number < 50){
				return '--yellow'
			}

			return '--green'
		}
	}
}
</script>

<style scoped lang="scss">
/deep/.c{
	font-size: 30px;
}
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

/deep/.table-name-item {
	color: color(blue);
}
/deep/.table-title{
	font-size: 24px;
}
/deep/.table-percent--green{
	color: color(green);
	text-align: center;
}
/deep/.table-percent--red{
	color: color(red);
	text-align: center;
}
.flag-icon{
	color: yellow;
}
/deep/.color-container{
	padding: 10px;
	color: white;
	border-radius: 3px;
	height: 40px;
	font-size: 12px;
}
/deep/.--red{
	background-color: color(red);
}
/deep/.--yellow{
	background-color: color(yellow);
}
/deep/.--green{
	background-color: color(green);
}
/deep/.td {
	padding: 2px;
}
</style>