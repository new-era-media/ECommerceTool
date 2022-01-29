<template lang="pug">
	ContainerForData(width="100%")
		template(#data)
			Table.mt-30(v-bind="tableOptions")
				template(#date="{...args}") {{ args.value }}
				template(#ranking="{...args}")
					.ranking.flex.items-center.justify-center(:class="args.value > 10 ? '--green' : '--light-green'") {{ args.value }}
		template(#header-right)
			.flex.items-center
				Tooltip.mr-24(trigger="clickToToggle")
					template(slot="reference")
						DotsHorizontal
					span 'Tooltip'

</template>

<script>
import Table from "@/components/Table/Table";
import ContainerForData from "@/components/Nestle/ContainerForData";
import Tooltip from '@/components/Elements/Tooltip.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'

export default {
	name: "RatingsAndReviews",
	components: {
		ContainerForData,
		Table,
		DotsHorizontal,
		Tooltip
	},
	data: () => {
		return {
			list: []
		}
	},
	computed:{
		tableDataDefault() {
			return [
				{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 20,
					depth: 1
				},
				{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},
				{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},
				{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},{
					date: '2021-12-02',
					title: 'Nescafe 123123131',
					brand: 'Nescafe Gold',
					store: 'Yandex',
					rpc: 123131251161231,
					upc: 123131251161231,
					harvest: 'Продукты, напитки',
					subHarvest: 'Чай, кофе, какао',
					ranking: 10,
					depth: 1
				},
			]
		},
		tableColumns() {
			return [
				{
					title: 'Report Date',
					width: 80,
					slot: 'date',
					value: (item) => {
						return item.date
					}
				},
				{
					title: 'Trusted Product Description',
					width: 200,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.title
					}
				},
				{
					title: 'Brand',
					width: 140,
					value: (item) => {
						return item.brand
					}
				},
				{
					title: 'Online Store',
					width: 80,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.store
					}
				},
				{
					title: 'Trusted Rpc',
					width: 140,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.rpc
					}
				},
				{
					title: 'Trusted Upc',
					width: 140,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.upc
					}
				},
				{
					title: 'Harvest Menu',
					width: 140,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.harvest
					}
				},
				{
					title: 'Harvest Sub Menu',
					width: 140,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.subHarvest
					}
				},
				{
					title: 'Menu Ranking',
					width: 140,
					slot: 'ranking',
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.ranking
					}
				},
				{
					title: 'Menu Depth',
					width: 80,
					cellClass: 'flex justify-center',
					value: (item) => {
						return item.depth
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
}
</script>

<style lang="scss" scoped>
.page {
	max-width: 1280px;
	margin: 0 auto;
}
/deep/.popper{
	max-width: 150px;
	min-width: 100px;
}
/deep/.element-container__content {
	width: 1280px;
	height: 600px;
	overflow: scroll;
	display: block;
	padding: 0 20px 10px;
}
/deep/.wrap{
	overflow-x: visible !important;
}
/deep/.th__cell-title{
	text-align: center;
	font-weight: bold;
}
/deep/.td, /deep/.th__cell-title{
	font-size: 12px;
}
.ranking{
	width: 130px;
	height: 20px;
	font-weight: bold;
	padding: 0 10px;
}
.--light-green {
	background-color: #95B121;
}
.--green {
	background-color: #006856;
	color: white;
}
</style>
