<template lang="pug">
.brand
	Menu(:title="brandTitle")
	.container
		Table.brand__table(v-bind="tableOptions")
			template(#availabilityIcon)
				Tooltip(type="dark" placement="bottom")
					template(#reference)
						.brand__icon
							PackageIcon(:size="22")
					div(style="width: 180px;")
						| Наличие SKU у ритейлера
			template(#commentIcon)
				Tooltip(type="dark" placement="bottom")
					template(#reference)
						.brand__icon
							CommentIcon(:size="18")
					| Комментарии
			template(#retailer="{item, index}")
				.brand__item-retailer {{item.retailerName}}
			template(#title="{item, index}")
				.brand__item-title {{item.skuName}}
			template(#availability="{item, index}")
				.brand__item-availability(v-if="typeof(item.isRetailerHasSku) !== 'undefined'")
					Tooltip(v-if="item.isRetailerHasSku" type="dark" placement="bottom")
						template(#reference)
							.brand__icon
								CheckIcon(v-if="item.isRetailerHasSku" :size="18")
						| В наличии

					Tooltip(v-else type="dark" placement="bottom")
						template(#reference)
							.brand__icon
								CloseIcon.brand__item-not-available( :size="18")
						| Не в наличии

			template(#custom="{item, index}")
				| {{item}}
</template>
<script>
import Menu from '@/components/Menu/Menu.vue'
import Table from '@/components/Table/Table.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import PackageIcon from 'vue-material-design-icons/PackageVariantClosed.vue'
import CommentIcon from 'vue-material-design-icons/MessageTextOutline.vue'
import Tooltip from '@/components/Elements/Tooltip.vue'

export default {
	components: {
		Menu,
		Table,
		CheckIcon,
		CloseIcon,
		PackageIcon,
		CommentIcon,
		Tooltip,
	},
	props: {
		categories: {
			type: Array,
			default: () => [],
		}
	},
	data() {
		return {
			brandTitle: '',
			list: [],
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		brandId() {
			return parseInt(this.$route.params.brandId)
		},
		tableColumns() {
			return [
				{
					title: 'Ритейлер',
					width: 90,
					slot: 'retailer',
				},
				{
					title: 'Название SKU',
					width: 300,
					slot: 'title',
				},
				{
					title: '',
					slotCaption: 'availabilityIcon',
					width: 30,
					slot: 'availability',
					alignRight: true,
				},
				{
					title: 'Позиция в выдаче',
					width: 70,
					alignRight: true,
					value: item => {
						return item.rank
					}
				},
				{
					title: 'Цена до скидки',
					width: 70,
					alignRight: true,
					value: item => {
						return `${this.$utils.formatNumber(item.priceBeforeDiscount.value)}₽`
					}
				},
				{
					title: 'Цена после скидки',
					width: 80,
					alignRight: true,
					value: item => {
						return `${this.$utils.formatNumber(item.priceAfterDiscount.value)}₽`
					}
				},
				{
					title: 'Средняя скидка',
					width: 60,
					alignRight: true,
					value: item => {
						return `${item.discountAvg.value}%`
					}
				},
				{
					title: 'Макс. скидка',
					width: 60,
					alignRight: true,
					value: item => {
						return `${item.discountMax.value}%`
					}
				},
				{
					title: 'Цена за гр.',
					width: 60,
					alignRight: true,
					value: item => {
						return `${this.$utils.formatNumber(item.pricePerGram.value)}₽`
					}
				},
				{
					title: 'Рейтинг',
					width: 60,
					alignRight: true,
					value: item => {
						return item.rating.value
					}
				},
				{
					title: '',
					slotCaption: 'commentIcon',
					width: 30,
					alignRight: true,
					value: item => {
						return item.commentCount
					}
				},
			]
		},
		tableDataDefault() {
			return [
				{
					retailerName: 'Ozon',
					skuName: 'Холодильник Bosch далее очень очень длинное название',
					isRetailerHasSku: true,
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'М.Видео',
					skuName: 'Холодильник Bosch далее очень очень длинное название',
					isRetailerHasSku: false,
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'Сбер М.',
					skuName: 'Холодильник Bosch далее очень очень длинное название',
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'Эльдорадо',
					skuName: 'Холодильник Bosch далее очень очень длинное название',
					isRetailerHasSku: true,
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'Азбука вкуса',
					skuName: 'Холодильник Bosch далее очень очень длинное название',
					isRetailerHasSku: false,
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'Онлайн трейд',
					skuName: 'Холодильник Bosch далее очень очень длинное название',
					isRetailerHasSku: true,
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'Ozon',
					skuName: 'Холодильник Bosch xf17',
					isRetailerHasSku: false,
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
				},
				{
					retailerName: 'Ozon',
					skuName: 'Холодильник Bosch',
					rank: 5,
					priceBeforeDiscount: {
						type: 'percent',
						value: 31145,
					},
					priceAfterDiscount: {
						type: 'percent',
						value: 30425,
					},
					pricePerGram: {
						type: 'percent',
						value: 34235,
					},
					discountAvg: {
						type: 'percent',
						value: 5,
					},
					discountMax:  {
						type: 'percent',
						value: 15,
					},
					rating: {
						type: 'percent',
						value: 5,
					},
					commentCount: 5,
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
		}
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			try {
				const [ brands, resp ] = await Promise.all([
						this.$api.common.getBrandList(this.id),
						this.$api.common.getBrandItem(this.id, this.brandId)
					])
				if (brands.length) {
					let brand = brands.find((item) => item.brandId === this.brandId)
					this.brandTitle = brand ? brand.brandName : ''
				}
				if (resp) {
					this.list = resp
				}
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.brand {
	&__table {
		margin-top: 30px;
		padding: 0 22px;
	}
	&__item {
		&-retailer {
			font-weight: 600;
		}
		&-title {
			max-width: 100%;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		&-availability {

		}
		&-not-available {
			color: color(gray-600);
		}
	}

	&__icon {
		width: 22px;
		height: 22px;
		cursor: pointer;
	}
}
</style>
