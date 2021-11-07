<template lang="pug">
	.brands
		Header(:nav="nav")
		Menu(title="SKU брендов")
		.container
			Table.brands__table(v-bind="tableOptions")
				template(#markCaption)
					MarkItem.brands__item-mark

				template(#mark="{item, index}")
					MarkItem.brands__item-mark(:color="item.mark === 'our' ? 'blue' : 'orange'")
				template(#title="{item, index}")
					.brands__item-title {{item.title}}
				template(#custom="{item, index}")
					| {{item}}
</template>
<script>
import Header from '@/components/Layout/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
import Table from '@/components/Table/Table.vue'
import MarkItem from '@/components/Elements/MarkItem.vue'

export default {
	components: {
		Header,
		Menu,
		Table,
		MarkItem,
	},
	data() {
		return {
			nav: [
				{
					page: 'dashboard',
					title: 'Дашборд',
					active: false,
				},
				{
					page: 'brand',
					title: ' SKU брендов',
					active: true,
				},
				{
					page: 'category',
					title: 'Настройки категории',
					active: false,
				},
			],
		}
	},
	computed: {
		tableColumns() {
			return [
				{
					title: '',
					slotCaption: 'markCaption',
					width: 15,
					slot: 'mark',
				},
				{
					title: 'Бренд',
					width: 140,
					slot: 'title',
				},
				{
					title: 'Доля полки',
					width: 90,
					alignRight: true,
					value: item => {
						return `${item.share}%`
					}
				},
				{
					title: 'Среднее SKU доступно в день',
					width: 130,
					alignRight: true,
					value: item => {
						return item.sku_avg
					}
				},
				{
					title: 'Кол-во SKU',
					width: 85,
					alignRight: true,
					value: item => {
						return item.sku_count
					}
				},
				{
					title: 'Доля промо',
					width: 75,
					alignRight: true,
					value: item => {
						return `${item.share_promo}%`
					}
				},
				{
					title: 'Средняя скидка',
					width: 110,
					alignRight: true,
					value: item => {
						return `${item.discount_avg}%`
					}
				},
				{
					title: 'Макс. скидка',
					width: 80,
					alignRight: true,
					value: item => {
						return `${item.discount_max}%`
					}
				},
				{
					title: 'Средняя цена за гр.',
					width: 100,
					alignRight: true,
					value: item => {
						return `${item.price_avg}₽`
					}
				},
				{
					title: 'Средняя цена SKU',
					width: 100,
					alignRight: true,
					value: item => {
						return `${item.price_sku}₽`
					}
				},
			]
		},
		tableData() {
			return [
				{
					title: 'Черная карта',
					mark: 'our',
					share: 5,
					sku_avg: 5,
					sku_count: 5,
					share_promo: 5,
					discount_avg: 5,
					discount_max: 5,
					price_avg: 5,
					price_sku: 5,
				},
				{
					title: 'Pauiling',
					mark: 'our',
					share: 10,
					sku_avg: 10,
					sku_count: 10,
					share_promo: 10,
					discount_avg: 10,
					discount_max: 10,
					price_avg: 10,
					price_sku: 10,
				},
				{
					title: 'Lavazza',
					mark: 'our',
					share: 45,
					sku_avg: 45,
					sku_count: 45,
					share_promo: 45,
					discount_avg: 45,
					discount_max: 45,
					price_avg: 45,
					price_sku: 45,
				},
				{
					title: 'Jardin',
					mark: 'our',
					share: 1,
					sku_avg: 1,
					sku_count: 1,
					share_promo: 1,
					discount_avg: 1,
					discount_max: 1,
					price_avg: 1,
					price_sku: 1,
				},
				{
					title: 'Жоккей',
					mark: 'our',
					share: 5,
					sku_avg: 5,
					sku_count: 5,
					share_promo: 5,
					discount_avg: 5,
					discount_max: 5,
					price_avg: 5,
					price_sku: 5,
				},
				{
					title: 'Woseba',
					mark: 'competitor',
					share: 5,
					sku_avg: 5,
					sku_count: 5,
					share_promo: 5,
					discount_avg: 5,
					discount_max: 5,
					price_avg: 5,
					price_sku: 5,
				},
				{
					title: 'Jacobs',
					mark: 'competitor',
					share: 4,
					sku_avg: 4,
					sku_count: 4,
					share_promo: 4,
					discount_avg: 4,
					discount_max: 4,
					price_avg: 4,
					price_sku: 4,
				},
				{
					title: 'Egoiste',
					mark: 'competitor',
					share: 2,
					sku_avg: 2,
					sku_count: 2,
					share_promo: 2,
					discount_avg: 2,
					discount_max: 2,
					price_avg: 2,
					price_sku: 2,
				},
				{
					title: 'Ambassador',
					mark: 'competitor',
					share: 7,
					sku_avg: 7,
					sku_count: 7,
					share_promo: 7,
					discount_avg: 7,
					discount_max: 7,
					price_avg: 7,
					price_sku: 7,
				},
				{
					title: 'Bushido',
					mark: 'competitor',
					share: 75,
					sku_avg: 75,
					sku_count: 75,
					share_promo: 75,
					discount_avg: 75,
					discount_max: 75,
					price_avg: 75,
					price_sku: 75,
				},
			]
		},
		tableOptions() {
			return {
				sort: {field: 'name', order: 'desc'},
				columns: this.tableColumns,
				data: this.tableData,
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.brands {
	&__table {
		width: 1048px;
		margin-top: 30px;
		padding: 0 36px;
	}
	&__item {
		&-title {
			font-weight: 600;
		}
		&-mark {
			margin-left: 4px;
		}
	}
}
</style>