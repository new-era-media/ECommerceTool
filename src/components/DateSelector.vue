<template lang="pug">
	v-menu(ref='menu2' v-model='menu2' :close-on-content-click="false" offset-y :nudge-width="480")
		template(v-slot:activator='{ on, attrs }')
			.period.d-flex.items-center.justify-center(v-bind="attrs" v-on="on")
				v-icon(color="#212121" size="24") mdi-calendar-week
				.text.ml-3 {{ dateNow }}
				.text.ml-3 -
				.text.ml-3 {{ dateNow }}
		.content(@input='menu2 = false' )
			.left-bar
				.title Готовые периоды
				Button.mt-3(type="orange-outline" @click="lastYear") Последний год
				Button.mt-2(type="orange-outline" @click="halfYear") Полгода
				Button.mt-2(type="orange-outline" @click="quarterfYear") Квартал
				Button.mt-2(type="orange-outline" @click="month") Месяц
				Button.mt-2(type="orange-outline" @click="week") Неделя
			.right-bar
				.title Свой период
					.self-period.d-flex.align-center
						.mt-3
							v-menu(ref='selfPeriodFrom' v-model='selfPeriodFrom' :close-on-content-click='false' transition='scale-transition' max-width='290px' min-width='auto')
								template(v-slot:activator='{ on, attrs }')
									v-text-field.input(v-model='selfPeriod.from' label='Дата' outlined v-bind='attrs' v-on='on' hide-details dense)
								v-date-picker(v-model='selfPeriod.from' no-title @input='selfPeriodFrom = false')
						.mt-3
							.divider.mx-2
						.mt-3
							v-menu(ref='selfPeriodTo' v-model='selfPeriodTo' :close-on-content-click='false' transition='scale-transition' max-width='290px' min-width='auto')
								template(v-slot:activator='{ on, attrs }')
									v-text-field.input(v-model='selfPeriod.to' label='Дата' outlined v-bind='attrs' v-on='on' hide-details dense)
								v-date-picker(v-model='selfPeriod.to' no-title @input='selfPeriodTo = false')
						.mt-3
							Button.ml-4 Применить

				.title.mt-4 Период к периоду
					.period-with-period.d-flex.align-center
						.mt-3
							v-menu(ref='selfPeriodFrom' v-model='selfPeriodFrom' :close-on-content-click='false' transition='scale-transition' max-width='290px' min-width='auto')
								template(v-slot:activator='{ on, attrs }')
									v-text-field.input(v-model='selfPeriod.from' label='Дата' outlined v-bind='attrs' v-on='on' hide-details)
								v-date-picker(v-model='selfPeriod.from' no-title @input='selfPeriodFrom = false')
						.mt-3
							.divider.mx-2
						.mt-3
							v-menu(ref='selfPeriodTo' v-model='selfPeriodTo' :close-on-content-click='false' transition='scale-transition' max-width='290px' min-width='auto')
								template(v-slot:activator='{ on, attrs }')
									v-text-field.input(v-model='selfPeriod.to' label='Дата' outlined v-bind='attrs' v-on='on' hide-details dense)
								v-date-picker(v-model='selfPeriod.to' no-title @input='selfPeriodTo = false')

					.period-with-period.d-flex.align-center
						.mt-3
							v-menu(ref='selfPeriodFrom' v-model='selfPeriodFrom' :close-on-content-click='false' transition='scale-transition' max-width='290px' min-width='auto')
								template(v-slot:activator='{ on, attrs }')
									v-text-field.input(v-model='selfPeriod.from' label='Дата' outlined v-bind='attrs' v-on='on' hide-details)
								v-date-picker(v-model='selfPeriod.from' no-title @input='selfPeriodFrom = false')
						.mt-3
							.divider.mx-2
						.mt-3
							v-menu(ref='selfPeriodTo' v-model='selfPeriodTo' :close-on-content-click='false' transition='scale-transition' max-width='290px' min-width='auto')
								template(v-slot:activator='{ on, attrs }')
									v-text-field.input(v-model='selfPeriod.to' label='Дата' outlined v-bind='attrs' v-on='on' hide-details dense)
								v-date-picker(v-model='selfPeriod.to' no-title @input='selfPeriodTo = false')
						.mt-3
							Button.ml-4 Применить

				.mt-3
					strong Графики сравнения периодов
					.checklist.d-flex.flex-wrap
						Checkbox.checkbox.mt-2(v-for="list in lists" :value="list.value" :id="list.value" :checked="!!list.checked" :title="list.title" @change="change")



</template>

<script>
import Tooltip from "@/components/Elements/Tooltip";
import Button from "@/components/Button/Button";
import dayjs from 'dayjs'
import Checkbox from "@/components/Checkbox";

export default {
	name: "DateSelector",
	components: {Checkbox, Button, Tooltip},
	data() {
		return {
			date: dayjs().format('YYYY-MM-DD'),
			selfPeriodFrom: false,
			selfPeriodTo: false,
			menu2: false,
			lists: [
				{
					title: 'Заказы',
					value: 'Заказы',
				},
				{
					title: 'Продажи',
					value: 'Продажи',
				},
				{
					title: 'Возвраты',
					value: 'Возвраты',
				},
				{
					title: 'Отмененные',
					value: 'Отмененные',
				},
				{
					title: 'Остатки',
					value: 'Остатки',
				},
				{
					title: 'Прибыль',
					value: 'Прибыль',
				},
				{
					title: 'Расходы',
					value: 'Расходы',
				},
				{
					title: 'Упущенная прибыль',
					value: 'Упущенная прибыль',
				},
			],
			selfPeriod: {
				from: dayjs().format('YYYY-MM-DD'),
				to: dayjs().format('YYYY-MM-DD'),
			}
		}
	},
	methods: {
		lastYear() {
			this.selfPeriod.from = dayjs().subtract(12, 'month').format('YYYY-MM-DD')
			this.selfPeriod.to = dayjs().format('YYYY-MM-DD')
		},
		halfYear() {
			this.selfPeriod.from = dayjs().subtract(6, 'month').format('YYYY-MM-DD')
			this.selfPeriod.to = dayjs().format('YYYY-MM-DD')
		},
		quarterfYear() {
			this.selfPeriod.from = dayjs().subtract(3, 'month').format('YYYY-MM-DD')
			this.selfPeriod.to = dayjs().format('YYYY-MM-DD')
		},
		month() {
			this.selfPeriod.from = dayjs().subtract(1, 'month').format('YYYY-MM-DD')
			this.selfPeriod.to = dayjs().format('YYYY-MM-DD')
		},
		week() {
			this.selfPeriod.from = dayjs().subtract(1, 'week').format('YYYY-MM-DD')
			this.selfPeriod.to = dayjs().format('YYYY-MM-DD')
		},
		save (date) {
			this.$refs.menu.save(date)
		},
		change(value) {
			this.menu2 = true
			console.log(value)
		}
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
.content {
	padding: 16px 24px;
	display: flex;
	background-color: #fff;
	//max-width: 430px;
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
	padding-right: 30px;
}
.right-bar {
	padding-left: 30px;
}
.input {
	width: 110px;
}
.checklist {
	max-width: 350px;

}
.checkbox {
	width: 150px;
}
.divider {
	position: relative;
	width: 10px;
	&:after {
		content: '';
		position: absolute;
		top: 50%;
		width: 100%;
		height: 2px;
		background-color: #212121;
	}
}
::deep.container {
	min-width: 600px !important;
	max-width: 600px !important;
}
.self-period {
	border-bottom: 1px #9C9C9C solid;
	padding-bottom: 24px;
}
</style>
