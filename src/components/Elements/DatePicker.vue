<template lang="pug">
	DatePicker.date(
		@input="$emit('input', $event)"
		@popoverWillShow="$emit('popoverWillShow', $event)"
		locale="ru"
		v-bind="bind"
		:masks="masks"
		color="purple"
	)
		template(
			slot="header"
			slot-scope='{ monthLabel }'
			)
			.date__header
				.date__caption
					.date__caption-year {{ currentYear }}
					.date__caption-date {{currentDay}}
				.date__title.flex.items-center.justify-evenly {{ monthLabel[0].toUpperCase() + monthLabel.slice(1) }}

		template(slot='header-left-button')
			LeftIcon(:size="18" fillColor="#5744D6")
		template(slot='header-right-button')
			RightIcon(:size="18" fillColor="#5744D6")

		template(v-slot="{ inputValue, inputEvents }")
			.control
				Input.control__input(
					:value="inputValue"
					v-on="inputEvents"
					:placeholder="placeholder"
					ref="input"
					@click="$emit('click')"
				)
</template>

<script>
import { DatePicker } from 'v-calendar'
import Input from '@/components/Elements/Input'
import LeftIcon from 'vue-material-design-icons/ChevronLeft.vue'
import RightIcon from 'vue-material-design-icons/ChevronRight.vue'

require('dayjs/locale/ru')
import dayjs from 'dayjs';

export default {
	components: {
		DatePicker,
		Input,
		LeftIcon,
		RightIcon,
	},
	inheritAttrs: false,
	props: ['value', 'placeholder', 'popover-visibility'],
	data() {
		return {
			masks: {
				input: 'DD.MM.YYYY',
			},
			days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
			month: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
		}
	},
	computed: {
		bind() {
			return {
				...this.$attrs,
				value: this.value,
				popover: { placement: 'bottom', visibility: 'click' },
			}
		},
		currentDay() {
			let dateStr =  dayjs(this.value).locale('ru').format('dd, D MMM')
			return dateStr[0].toUpperCase() + dateStr.slice(1);
		},
		currentYear() {
			return dayjs(this.value).locale('ru').format('YYYY')
		}
	},
	methods: {
		clear() {
			this.$emit('input', null)
		},
	}
}
</script>
<style lang="scss" scoped>
.control {
	display: flex;
	align-items: center;
	position: relative;

	& .pointer_event_none {
		pointer-events: none;
	}

	&__input {

	}
}
.date {
	&__header {
		width: 100%;
	}
	&__caption {
		width: 100%;
		height: 88px;
		padding: 16px;
		background-color: color(violet);
		color: color(white);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;

		&-year {
			font-weight: 700;
		}
		&-date {
			margin-top: 10px;
			font-weight: 600;
			font-size: 20px;
			line-height: 1.35;
		}
	}
	&__title {
		height: 50px;
		font-weight: 700;
		color: color(violet);
	}
}
/deep/ .vc-highlight {
	background-color: color(violet)!important;
}
/deep/ .vc-popover-caret {
	display: none;
}
/deep/ .vc-arrow {
	margin-top: 95px;
}
</style>
