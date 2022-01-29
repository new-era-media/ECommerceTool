<template lang="pug">
	.page
		Menu(title="Overview & Trend")
			.page__nav.flex.justify-between.items-center
				Export.page__export(
					type='white'
					@click="exportHandler"
				)
				.page__date.flex.items-center
					CalendarBlank.page__date-icon(:size="18")
					DatePicker(
						v-model="dateSelect"
						type="string"
					)
		Tabs.my-30(:tabs="tabItems" type-tab="tabs" v-model="activeTab")
		transition(name="fade" mode="out-in")
			component(:is="activeTab" :key="activeTab")
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Export from '@/components/Nestle/Export/Export.vue'
import OverviewAndTrend from '@/components/Nestle/DynamicComponent/OverviewAndTrend'
import ShareOfTaxonomy from '@/components/Nestle/DynamicComponent/ShareOfTaxonomy'
import ProductDetails from '@/components/Nestle/DynamicComponent/ProductDetails'
import DatePicker from '@/components/Elements/DatePicker.vue'
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import dayjs from "dayjs";
import Tabs from "@/components/Nestle/Tabs";
import TabItem from '@/components/Tabs/TabItem.vue'
import NewTab from '@/components/Tabs/Tabs.vue'

export default {
	name: "overview-and-trend",
	components: {
		Tabs,
		TabItem,
		Menu,
		Export,
		DatePicker,
		CalendarBlank,
		OverviewAndTrend,
		ShareOfTaxonomy,
		ProductDetails,
		NewTab
	},
	data: () => {
		return {
			list: [],
			dateSelect: dayjs().subtract(30, 'days').toDate(),
			activeTab: 'OverviewAndTrend'
		}
	},
	computed:{
		tabItems(){
			return [
				{
					title: 'Overview & Trend',
					value: 'OverviewAndTrend'
				},
				{
					title: 'Share Of Taxonomy',
					value: 'ShareOfTaxonomy'
				},
				{
					title: 'Product Details',
					value: 'ProductDetails'
				},
				{
					title: 'Product Fails',
					value: 'ProductFails'
				}
			]
		}
	},
	methods: {
		exportHandler() {
			console.log('exportHandler')
		},
		selectTab(tab){
			console.log(tab)
			this.activeTab = tab
		}
	}
}
</script>

<style lang="scss" scoped>
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
	}
}
/deep/.chart{
	width: 1280px;
	margin: 20px;
	position: relative;
	&:hover{
		z-index: 2;
	}
}
.disabled-chart{
	position: absolute;
	pointer-events: none;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
	opacity: 0;
}
</style>
