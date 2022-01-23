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
			.dashboard__section
				Tabs(type="gray")
					TabItem(title="Scorecard")

			.dashboard__section
				.dashboard__subtitle Latest One Day Score

</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Export from '@/components/Nestle/Export/Export.vue'
import DatePicker from '@/components/Elements/DatePicker.vue'
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import TabItem from '@/components/Tabs/TabItem.vue'


import dayjs from 'dayjs'

export default {
	components: {
		Menu,
		Export,
		DatePicker,
		CalendarBlank,
		Tabs,
		TabItem,
	},
	data() {
		return {
			dateSelect: dayjs().subtract(30, 'days').toDate(),
		}
	},
	methods: {
		exportHandler() {
			console.log('exportHandler')
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
	&__section {
		margin: 20px 0;
	}
	&__subtitle {
		font-size: 16px;
	}
}
</style>