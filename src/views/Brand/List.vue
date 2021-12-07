<template lang="pug">
	.brands
		Menu(title="SKU брендов")
		.container
			Table.brands__table(v-bind="tableOptions")
				template(#markCaption)
					MarkItem.brands__item-mark

				template(#mark="{item, index}")
					MarkItem.brands__item-mark(:color="item.type === 'brand' ? 'blue' : 'orange'")
				template(#title="{item, index}")
					.brands__item-title(@click="openBrand(item)") {{ item.brandName }}
				template(#custom="{item, index}")
					| {{item}}
</template>
<script>
import Menu from '@/components/Menu/Menu.vue'
import Table from '@/components/Table/Table.vue'
import MarkItem from '@/components/Elements/MarkItem.vue'

export default {
	components: {
		Menu,
		Table,
		MarkItem,
	},
	props: {
		categories: {
			type: Array,
			default: () => [],
		}
	},
	data() {
		return {
			list: [],
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
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
						return `${item.shelfShare.value}%`
					}
				},
				{
					title: 'Среднее SKU доступно в день',
					width: 130,
					alignRight: true,
					value: item => {
						return item.skuAvgPerDay
					}
				},
				{
					title: 'Кол-во SKU',
					width: 85,
					alignRight: true,
					value: item => {
						return item.skuCount
					}
				},
				{
					title: 'Доля промо',
					width: 75,
					alignRight: true,
					value: item => {
						return `${item.promo.value}%`
					}
				},
				{
					title: 'Средняя скидка',
					width: 110,
					alignRight: true,
					value: item => {
						return `${item.discountAverage.value}%`
					}
				},
				{
					title: 'Макс. скидка',
					width: 80,
					alignRight: true,
					value: item => {
						return `${item.discountMax.value}%`
					}
				},
				{
					title: 'Средняя цена за гр.',
					width: 100,
					alignRight: true,
					value: item => {
						return `${item.priceAvgPerGram.value}₽`
					}
				},
				{
					title: 'Средняя цена SKU',
					width: 100,
					alignRight: true,
					value: item => {
						return `${item.skuAvgPrice.value}₽`
					}
				},
			]
		},
		tableDataDefault() {
			return [
				{
					brandId: 2,
					brandName: 'Черная карта',
					type: 'brand',
					shelfShare: {
						value: 5,
						type: 'percent',
					},
					skuAvgPerDay: 5,
					skuCount: 5,
					promo: {
						value: 5,
						type: 'percent',
					},
					discountAverage: {
						value: 5,
						type: 'percent'
					},
					discountMax: {
						value: 5,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 5,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 5,
						type: 'rub'
					},
				},
				{
					brandId: 3,
					brandName: 'Pauiling',
					type: 'brand',
					shelfShare: {
						value: 10,
						type: 'percent',
					},
					skuAvgPerDay: 10,
					skuCount: 10,
					promo: {
						value: 10,
						type: 'percent'
					},
					discountAverage: {
						value: 10,
						type: 'percent'
					},
					discountMax: {
						value: 10,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 10,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 10,
						type: 'rub'
					},
				},
				{
					brandId: 4,
					brandName: 'Lavazza',
					type: 'brand',
					shelfShare: {
						value: 45,
						type: 'percent',
					},
					skuAvgPerDay: 45,
					skuCount: 45,
					promo: {
						value: 45,
						type: 'percent'
					},
					discountAverage: {
						value: 45,
						type: 'percent'
					},
					discountMax: {
						value: 45,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 45,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 45,
						type: 'rub'
					},
				},
				{
					brandId: 5,
					brandName: 'Jardin',
					type: 'brand',
					shelfShare: {
						value: 1,
						type: 'percent',
					},
					skuAvgPerDay: 1,
					skuCount: 1,
					promo: {
						value: 1,
						type: 'percent'
					},
					discountAverage: {
						value: 1,
						type: 'percent'
					},
					discountMax: {
						value: 1,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 1,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 1,
						type: 'rub'
					},
				},
				{
					brandId: 6,
					brandName: 'Жоккей',
					type: 'brand',
					shelfShare: {
						value: 5,
						type: 'percent',
					},
					skuAvgPerDay: 5,
					skuCount: 5,
					promo: {
						value: 5,
						type: 'percent'
					},
					discountAverage: {
						value: 5,
						type: 'percent'
					},
					discountMax: {
						value: 5,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 5,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 5,
						type: 'rub'
					},
				},
				{
					brandId: 7,
					brandName: 'Woseba',
					type: 'competitor',
					shelfShare: {
						value: 5,
						type: 'percent',
					},
					skuAvgPerDay: 5,
					skuCount: 5,
					promo: {
						value: 5,
						type: 'percent'
					},
					discountAverage: {
						value: 5,
						type: 'percent'
					},
					discountMax: {
						value: 5,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 5,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 5,
						type: 'rub'
					},
				},
				{
					brandId: 8,
					brandName: 'Jacobs',
					type: 'competitor',
					shelfShare: {
						value: 4,
						type: 'percent',
					},
					skuAvgPerDay: 4,
					skuCount: 4,
					promo: {
						value: 4,
						type: 'percent'
					},
					discountAverage: {
						value: 4,
						type: 'percent'
					},
					discountMax: {
						value: 4,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 4,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 4,
						type: 'rub'
					},
				},
				{
					brandId: 9,
					brandName: 'Egoiste',
					type: 'competitor',
					shelfShare: {
						value: 2,
						type: 'percent',
					},
					skuAvgPerDay: 2,
					skuCount: 2,
					promo: {
						value: 2,
						type: 'percent'
					},
					discountAverage: {
						value: 2,
						type: 'percent'
					},
					discountMax: {
						value: 2,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 2,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 2,
						type: 'rub'
					},
				},
				{
					brandId: 10,
					brandName: 'Ambassador',
					type: 'competitor',
					shelfShare: {
						value: 7,
						type: 'percent',
					},
					skuAvgPerDay: 7,
					skuCount: 7,
					promo: {
						value: 7,
						type: 'percent'
					},
					discountAverage: {
						value: 7,
						type: 'percent'
					},
					discountMax: {
						value: 7,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 7,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 7,
						type: 'rub'
					},
				},
				{
					brandId: 11,
					brandName: 'Bushido',
					type: 'competitor',
					shelfShare: {
						value: 75,
						type: 'percent',
					},
					skuAvgPerDay: 75,
					skuCount: 75,
					promo: {
						value: 75,
						type: 'percent'
					},
					discountAverage: {
						value: 75,
						type: 'percent'
					},
					discountMax: {
						value: 75,
						type: 'percent'
					},
					priceAvgPerGram:  {
						value: 75,
						type: 'rub'
					},
					skuAvgPrice: {
						value: 75,
						type: 'rub'
					},
				},
			]
		},
		tableData() {
			return this.list.concat(this.tableDataDefault)
		},
		tableOptions() {
			return {
				sort: {field: 'name', order: 'desc'},
				columns: this.tableColumns,
				data: this.tableData,
			}
		},
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			try {
				const resp = await this.$api.common.getBrandList(this.id)
				if (resp) {
					this.list = resp
				}
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		openBrand(item) {
			this.$router.push({name: 'Category.Brand.Item', params: {id: this.id, brandId: item.brandId}})
		},
	},
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