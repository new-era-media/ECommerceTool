<template lang="pug">
.brand
	Menu(title="Jardin")
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
				.brand__item-retailer {{item.retailer}}
			template(#title="{item, index}")
				.brand__item-title {{item.title}}
			template(#availability="{item, index}")
				.brand__item-availability(v-if="typeof(item.availability) !== 'undefined'")
					Tooltip(v-if="item.availability" type="dark" placement="bottom")
						template(#reference)
							.brand__icon
								CheckIcon(v-if="item.availability" :size="18")
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
			list: [],
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		brandId() {
			return parseInt(this.$route.params.id)
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
						return item.position
					}
				},
				{
					title: 'Цена до скидки',
					width: 70,
					alignRight: true,
					value: item => {
						return `${this.$utils.formatNumber(item.price)}₽`
					}
				},
				{
					title: 'Цена после скидки',
					width: 80,
					alignRight: true,
					value: item => {
						return `${this.$utils.formatNumber(item.price_discount)}₽`
					}
				},
				{
					title: 'Средняя скидка',
					width: 60,
					alignRight: true,
					value: item => {
						return `${item.discount_avg}%`
					}
				},
				{
					title: 'Макс. скидка',
					width: 60,
					alignRight: true,
					value: item => {
						return `${item.discount_max}%`
					}
				},
				{
					title: 'Цена за гр.',
					width: 60,
					alignRight: true,
					value: item => {
						return `${this.$utils.formatNumber(item.price_per)}₽`
					}
				},
				{
					title: 'Рейтинг',
					width: 60,
					alignRight: true,
					value: item => {
						return item.rating
					}
				},
				{
					title: '',
					slotCaption: 'commentIcon',
					width: 30,
					alignRight: true,
					value: item => {
						return item.comments
					}
				},
			]
		},
		tableData() {
			return [
				{
					retailer: 'Ozon',
					title: 'Холодильник Bosch далее очень очень длинное название',
					availability: true,
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'М.Видео',
					title: 'Холодильник Bosch далее очень очень длинное название',
					availability: false,
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'Сбер М.',
					title: 'Холодильник Bosch далее очень очень длинное название',
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'Эльдорадо',
					title: 'Холодильник Bosch далее очень очень длинное название',
					availability: true,
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'Азбука вкуса',
					title: 'Холодильник Bosch далее очень очень длинное название',
					availability: false,
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'Онлайн трейд',
					title: 'Холодильник Bosch далее очень очень длинное название',
					availability: true,
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'Ozon',
					title: 'Холодильник Bosch xf17',
					availability: false,
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
				},
				{
					retailer: 'Ozon',
					title: 'Холодильник Bosch',
					position: 5,
					price: 31145,
					price_discount: 30425,
					price_per: 34235,
					discount_avg: 5,
					discount_max: 15,
					rating: 5,
					comments: 5,
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
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			try {
				const resp = await this.$api.common.getBrandItem(this.id, this.brandId)
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