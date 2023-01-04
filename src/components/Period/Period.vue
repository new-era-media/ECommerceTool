<template lang="pug">
.period
	div Период
	.period__date.flex.items-center
		DatePicker(
			v-model="form.date_from"
			:min-date="period.from.min"
			:max-date="period.to.max"
			:inputProps="{ placeholder: 'От' }"
			@popoverWillShow="hidePreviousDatepicker"
		)
		.period__date-sep —
		DatePicker(
			v-model="form.date_to"
			:min-date="period.from.min"
			:max-date="period.to.max"
			:inputProps="{ placeholder: 'До' }"
			@popoverWillShow="hidePreviousDatepicker"
		)
		Button.period__date-apply(type="violet-outline" @click="apply") Применить

	.period__list
		.period__item.flex.items-center(@click="choosePeriod('all')")
			CalendarIcon
			.period__item-text За всю кампанию
		.period__item.flex.items-center(@click="choosePeriod('start')")
			CalendarIcon
			.period__item-text С начала по вчера
		.period__item.flex.items-center(@click="choosePeriod('yesterday')")
			CalendarIcon
			.period__item-text Вчера
		.period__item.flex.items-center(@click="choosePeriod('7days')")
			CalendarIcon
			.period__item-text За последние 7 дней
		.period__item.flex.items-center(@click="choosePeriod('30days')")
			CalendarIcon
			.period__item-text За последние 30 дней

	.period__info.flex.items-center
		InfoIcon
		.period__info-text
			| Данные доступны по вчерашний день включительно,
			| потому что площадки отдают данные только за целые дни

</template>

<script>
import CalendarIcon from 'vue-material-design-icons/CalendarWeek.vue'
import InfoIcon from 'vue-material-design-icons/InformationOutline.vue'
import DatePicker from '@/components/Elements/DatePicker.vue'
import Button from '@/components/Button/Button.vue'

import dayjs from 'dayjs'

export default {
	components: {
		CalendarIcon,
		InfoIcon,
		DatePicker,
		Button,
	},
	data() {
		return {
			form: {
				date_from: dayjs().subtract(30, 'days').toDate(),
				date_to: dayjs().subtract(1, 'days').toDate(),
			},
			openedDatepicker: null,
		}
	},
	computed: {
		periodLimit() {
			return 1
		},
		period() {
			const days = [30, 180, 360, 3600]
			const maxMonth = [1, 6, 12, 120].findIndex(x => x === parseInt(this.periodLimit))

			return {
				from: {
					min: dayjs(this.form.date_to).subtract(days[maxMonth], 'day').toDate(),
				},
				to: {
					max: dayjs().subtract(1, 'days').toDate(),
				},
			}
		},
	},
	methods: {
		apply() {
			console.log('apply')
		},
		choosePeriod(period) {
			console.log('choosePeriod', period)
			switch(period) {
			case 'all':
				this.form = {
					date_from: dayjs().subtract(30, 'days').toDate(),
					date_to: dayjs().subtract(1, 'days').toDate(),
				}
				break;
			case 'yesterday':
				this.form = {
					date_from: dayjs().subtract(1, 'days').toDate(),
					date_to: dayjs().subtract(1, 'days').toDate(),
				}
				break;
			case 'start':
				this.form = {
					date_from: dayjs().subtract(15, 'days').toDate(),
					date_to: dayjs().subtract(1, 'days').toDate(),
				}
				break;
			case '7days':
				this.form = {
					date_from: dayjs().subtract(7, 'days').toDate(),
					date_to: dayjs().subtract(1, 'days').toDate(),
				}
				break;
			case '30days':
				this.form = {
					date_from: dayjs().subtract(30, 'days').toDate(),
					date_to: dayjs().subtract(1, 'days').toDate(),
				}
				break;
			}
		},
		hidePreviousDatepicker (el) {
			if (this.openedDatepicker) {
				this.openedDatepicker.style.display = 'none'
			}
			this.openedDatepicker = el
		},
	},
}
</script>

<style lang="scss" scoped>
.period {
	padding: 8px 0;

	&__date {
		margin-top: 10px;

		/deep/ .control {
			&__input {
				width: 108px;
			}
		}

		&-sep {
			margin: 0 8px;
		}
		&-apply {
			margin-left: 16px;
		}
	}
	&__list {

	}
	&__item {
		margin-top: 16px;
		color: color(violet);
		cursor: pointer;

		&-text {
			margin-left: 4px;
		}
	}
	&__info {
		position: relative;
		margin-top: 20px;
		padding-top: 18px;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: -20px;
			right: -20px;
			height: 1px;
			background-color: color(gray-600);
		}

		&-text {
			margin-left: 12px;
			font-size: 12px;
			line-height: 1.33;
		}
	}

}
</style>
