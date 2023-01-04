<template lang="pug">
	Tooltip(trigger="click" append-to-body)
		template(slot="reference")
			.d-flex.items-center.justify-center
				v-icon(color="#212121" size="24") mdi-calendar-week
				.text.ml-3 {{ dateNow }}
				.text.ml-3 -
				.text.ml-3 {{ dateNow }}
		.container
			.left-bar
				.title Готовые периоды
				Button.mt-12(type="orange-outline") Последний год
				Button.mt-8(type="orange-outline") Полгода
				Button.mt-8(type="orange-outline") Квартал
				Button.mt-8(type="orange-outline") Месяц
				Button.mt-8(type="orange-outline") Неделя
			.right-bar
				.title Готовые периоды
				v-menu(ref='menu1' v-model='menu1' :close-on-content-click='false' transition='scale-transition' offset-y='' max-width='290px' min-width='auto')
					template(v-slot:activator='{ on, attrs }')
						v-text-field(v-model='date' label='Дата' solo v-bind='attrs' v-on='on')
					v-date-picker(v-model='date' no-title @input='menu1 = false' range)



</template>

<script>
import Tooltip from "@/components/Elements/Tooltip";
import Button from "@/components/Button/Button";
import dayjs from 'dayjs'

export default {
	name: "DateSelector",
	components: {Button, Tooltip},
	data() {
		return {
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
			menu1: false,
		}
	},
	watch: {
		menu (val) {
			val && setTimeout(() => (this.activePicker = 'YEAR'))
		},
	},
	methods: {
		save (date) {
			this.$refs.menu.save(date)
		},
	},
	computed: {
		dateRangeText() {
			return this.dates.join(' ~ ')
		},
		dateNow() {
			return dayjs().format('DD.MM.YYYY')
		},
	}
}
</script>

<style lang="scss" scoped>
.text {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.15px;
	color: #212121;
}
.container {
	padding: 16px 24px;
	display: flex;
}
.title {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
}
.left-bar {
	border-right: 1px solid #9C9C9C;
	padding-right: 48px;
}
.right-bar {
	padding-left: 30px;
}
</style>
