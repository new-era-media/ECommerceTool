<template lang="pug">
	.dashboard
		Menu(title="KPI Dashboard")
			.dashboard__nav.flex.justify-between.items-center
				Export.dashboard__export(
					type='white'
					@click="exportHandler"
					)
				.dashboard__date.flex.items-center
					CalendarBlank.dashboard__date-icon(:size="18")
					DatePicker(
						v-model="dateSelect"
						type="string"
					)
		.container
			.dashboard__tabs
				Tabs(type="gray")
					TabItem(title="Scorecard")

			.dashboard__section
				.dashboard__subtitle Latest One Day Score
				.flex.justify-between
					.dashboard__filters.flex
						.dashboard__filter Retailers
						.dashboard__filter Categories
						.dashboard__filter Brands
					.dashboard__goal.flex.justify-between.items-center
						.dashboard__goal-item
							.dashboard__goal-title Below Goal
							.flex
								Checkbox.dashboard__goal-checkbox(
									v-for="(item, index) in goalsBelow"
									:key="`below-${index}`"
									:value="item.value"
									type="gray"
									size="sm"
									:class="item.color"
									@change="changeHandler(item, 'below')"
								)
						.dashboard__goal-item
							.dashboard__goal-title Above Goal
							.flex
								Checkbox.dashboard__goal-checkbox(
									v-for="(item, index) in goalsAbove"
									:key="`below-${index}`"
									:value="item.value"
									type="gray"
									size="sm"
									:class="item.color"
									@change="changeHandler(item, 'above')"
								)
				Table.dashboard__table(v-bind="tableOptions")
					template(#percent="{ item, index, value }")
						.goal(:class="getGoalClass(value)")
							| {{ value }}%


</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Export from '@/components/Nestle/Export/Export.vue'
import DatePicker from '@/components/Elements/DatePicker.vue'
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import TabItem from '@/components/Tabs/TabItem.vue'
import Table from '@/components/Table/Table.vue'
import Checkbox from '@/components/Elements/Checkbox.vue'

import dayjs from 'dayjs'

export default {
	components: {
		Menu,
		Export,
		DatePicker,
		CalendarBlank,
		Tabs,
		TabItem,
		Table,
		Checkbox,
	},
	data() {
		return {
			dateSelect: dayjs().subtract(30, 'days').toDate(),
			goalsBelowCheckbox: {
				high: true,
				medium: true,
				light: true,
			},
			goalsAboveCheckbox: {
				light: true,
				medium: true,
				high: true,
			},
		}
	},
	computed: {
		goalsBelow() {
			return [
				{
					title: 'high',
					color: 'goal-below-high',
					value: this.goalsBelowCheckbox.high
				},
				{
					title: 'medium',
					color: 'goal-below-medium',
					value: this.goalsBelowCheckbox.medium
				},
				{
					title: 'light',
					color: 'goal-below-light',
					value: this.goalsBelowCheckbox.light
				}
			]
		},
		goalsAbove() {
			return [
				{
					title: 'light',
					color: 'goal-above-light',
					value: this.goalsAboveCheckbox.light
				},
				{
					title: 'medium',
					color: 'goal-above-medium',
					value: this.goalsAboveCheckbox.medium
				},
				{
					title: 'high',
					color: 'goal-above-high',
					value: this.goalsAboveCheckbox.high
				}
			]
		},
		tableData() {
			return [
				{
					id: 0,
					title: 'All Products',
					availability: 71,
					reviews: 58,
					ratings: 83,
					share: 9,
					taxonomy: 7,
					integrity: 90,
					image_accuracy: 100,
				},
				{
					id: 1,
					title: 'Base of soup',
					availability: 50,
					reviews: 100,
					ratings: 100,
					share: 2,
					taxonomy: 18,
					integrity: 85,
					image_accuracy: 100,
				},
				{
					id: 2,
					title: 'Bouillons',
					availability: 71,
					reviews: 58,
					ratings: 92,
					share: 28,
					taxonomy: 0,
					integrity: 90,
					image_accuracy: 100,
				},
				{
					id: 3,
					title: 'Boxes',
					availability: 75,
					reviews: 33,
					ratings: 60,
					share: 13,
					taxonomy: 0,
					integrity: 83,
					image_accuracy: 100,
				},
				{
					id: 4,
					title: 'Breakfast Cereals',
					availability: 71,
					reviews: 56,
					ratings: 92,
					share: 23,
					taxonomy: 9,
					integrity: 91,
					image_accuracy: 100,
				},
			]
		},
		tableColumns() {
			return [
				{
					title: '',
					width: 100,
					value: item => {
						return item.title
					},
				},
				{
					title: 'Portfolio Availability',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.availability
					},
				},
				{
					title: 'Reviews',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.reviews
					},
				},
				{
					title: 'Ratings',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.ratings
					},
				},
				{
					title: 'Share of Search',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.share
					},
				},
				{
					title: 'Taxonomy Placement',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.taxonomy
					},
				},
				{
					title: 'Content Integrity',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.integrity
					},
				},
				{
					title: 'Main Image Accuracy',
					width: 110,
					slot: 'percent',
					value: item => {
						return item.image_accuracy
					},
				},
			]
		},
		tableOptions() {
			return {
				// sort: {field: 'name', order: 'desc'},
				columns: this.tableColumns,
				data: this.tableData,
			}
		},
	},
	methods: {
		exportHandler() {
			console.log('exportHandler')
		},
		getGoalClass(val) {
			let className
			if (val > 90) {
				className = '--above-high'
			} else if (val >= 85) {
				className = '--above-medium'
			} else if (val > 75) {
				className = '--above-light'
			} else if (val > 50) {
				className = '--below-light'
			} else if (val > 20) {
				className = '--below-medium'
			} else {
				className = '--below-high'
			}
			return className
		},
		changeHandler(item, type) {
			if (type === 'below') {
				this.goalsBelowCheckbox[item.title] = !item.value
			} else {
				this.goalsAboveCheckbox[item.title] = !item.value
			}
			console.log('changeHandler', item)
		},
	},
}
</script>

<style lang="scss">
.dashboard {
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
	&__tabs {
		margin: 36px 0;
	}
	&__subtitle {
		font-size: 16px;
		font-weight: 600;
	}
	&__section {
		padding: 20px;
		background-color: color(white);
		border-radius: 4px;
	}
	&__filters {
		margin-top: 20px;
	}

	&__filter {
		padding: 4px 8px;
		border: 1px solid color(gray-300);
		cursor: pointer;
	}

	&__goal {
		&-item {
			margin-left: 8px;
		}
		&-title {
			margin: 4px 0;
		}

		&-checkbox {

			&.goal-above-high {
				& .checkbox__icon{
					background-color: color(goal-above-high);
				}
			}
			&.goal-above-medium {
				& .checkbox__icon {
					background-color: color(goal-above-medium);
				}
			}
			&.goal-above-light {
				& .checkbox__icon {
					background-color: color(goal-above-light);
				}
			}
			&.goal-below-light {
				& .checkbox__icon {
					background-color: color(goal-below-light);
				}
			}
			&.goal-below-medium {
				& .checkbox__icon {
					background-color: color(goal-below-medium);
				}
			}
			&.goal-below-high {
				& .checkbox__icon {
					background-color: color(goal-below-high);
				}
			}
		}
	}

	&__table {
		margin-top: 36px;
	}

	.goal {
		padding: 10px 20px;
		border-radius: 4px;
		text-align: center;
		font-weight: 600;

		&.--above-high {
			background-color: color(goal-above-high);
		}
		&.--above-medium {
			background-color: color(goal-above-medium);
		}
		&.--above-light {
			background-color: color(goal-above-light);
		}
		&.--below-light {
			background-color: color(goal-below-light);
		}
		&.--below-medium {
			background-color: color(goal-below-medium);
		}
		&.--below-high {
			background-color: color(goal-below-high);
		}
	}
}
</style>