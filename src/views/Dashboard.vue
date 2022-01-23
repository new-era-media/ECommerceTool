<template lang="pug">
.dashboard
	Menu(title="Дашборд")
		nav.dashboard__nav.flex.items-center
			.dashboard__nav-item(
				v-for="item in settingTabs"
				:key="item.id"
				@click="changeSettingTabs(item)"
			)
				| {{ item.title }}
			.dashboard__nav-item
				Tooltip(trigger="clickToToggle")
					template(slot="reference")
						div {{ getDateStr }}
					Period(:date="date")

	.dashboard__wrap.container
		.dashboard__section.flex.justify-between.items-center
			.flex.items-center
				.dashboard__title Данные у ритейлеров
				.dashboard__tabs.flex
					.dashboard__tab-item.flex.items-center(
						v-for="item in tabs"
						:key="item.id"
						@click="changeTab(item)"
						:class="{'--active': source === item.slug}"
					)
						ComparisonIcon(v-if="item.slug === 'all'")
						MarkItem(v-else :color="item.color")
						.dashboard__tab-label {{ item.title }}
			Button.dashboard__settings(type="violet-outline" size="sm" @click="settings")
				SettingsIcon(:size="18")
		.dashboard__widgets.flex.flex-wrap
			template(v-if="source === 'all'")
				.dashboard__widget-col(
					v-for="(part, index) in widgetMatrix"
					:key="index"
				)
					Draggable.dashboard__draggable(
						:list="part.list"
						:animation="200"
						group="part"
						:data-part="part.status"
						@change="handleChange"
						@end="handleEnd"
					)
						Widget.dashboard__widget(
							v-for="(widget, index) of part.list"
							:key="`widget-${index}`"
							:widget="widget"
							:loading="widget.loading"
							:type="widget ? widget.type : 'count'"
						)
			template(v-else)
				WidgetLight.dashboard__widget(
					v-for="(widget, index) of widgetList"
					:key="`widget-light-${index}`"
					:widget="widget"
					:loading="widget.loading"
					:source="source"
				)
		.dashboard__section
			.flex.justify-between.items-center
				.dashboard__title Графики
				Button.dashboard__settings(type="violet-outline" size="sm" @click="newChart")
					PlusIcon(:size="18")
			.flex.flex-wrap.justify-between
				ChartItem.dashboard__chart(title="Доля полки сегодня, %")
					BarChart(:chartData="barChartData" :options="barChartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Доля полки, Nespresso, %")
					LineChart(:chartData="chartData" :options="chartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Доля полки, OZON, %")
					LineChart(:chartData="chartData2" :options="chartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Количество SKU, Nespresso")
					LineChart(:chartData="chartData" :options="chartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Количество SKU, OZON")
					LineChart(:chartData="chartData2" :options="chartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Минимальные и максимальные цены, OZON")
					div(style="height: 384px")
						CandlesChart(:chartData="candlesChartData" :options="chartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Доступность SKU сегодня, наши бренды")
					BarChart(:chartData="stackedBarChartData" :options="stackedBarChartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Доступность SKU сегодня, OZON")
					BarChart(:chartData="stackedBarChartData" :options="stackedBarChartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Средняя динамика доступности, Nespresso")
					LineChart(:chartData="chartData" :options="chartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Премиальная выдача в поисковой выдаче, %")
					BarChart(:chartData="barChartData" :options="barChartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Премиальная выдача в категорийной выдаче, %")
					BarChart(:chartData="barChartData" :options="barChartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Количество отзывов на конец периода, OZON")
					BarChart(:chartData="barChartData" :options="barChartOptions" style="height: 384px")
				ChartItem.dashboard__chart(title="Количество комментариев на конец периода, OZON")
					BarChart(:chartData="barChartData2" :options="barChartOptions" style="height: 384px")
	.dashboard__onboard(v-if="onboardShow")
		OnboardTooltip(@close="onboardClose")

</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Button from '@/components/Button/Button.vue'
import SettingsIcon from 'vue-material-design-icons/Cog.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import ComparisonIcon from '@/assets/svg/comparison.svg'
import Widget from '@/components/Widget/Widget.vue'
import WidgetLight from '@/components/Widget/WidgetLight.vue'
import OnboardTooltip from '@/components/Onboard/Onboard.vue'
import MarkItem from '@/components/Elements/MarkItem.vue'
import ChartItem from '@/components/Chart/ChartItem'
import LineChart from '@/components/Chart/LineChart'
import BarChart from '@/components/Chart/BarChart'
import CandlesChart from '@/components/Chart/CandlesChart'
import Tooltip from '@/components/Elements/Tooltip.vue'
import Period from '@/components/Period/Period.vue'
import Draggable from 'vuedraggable'

import dayjs from 'dayjs'

export default {
	components: {
		Menu,
		Button,
		SettingsIcon,
		PlusIcon,
		ComparisonIcon,
		Widget,
		WidgetLight,
		OnboardTooltip,
		MarkItem,
		ChartItem,
		LineChart,
		BarChart,
		CandlesChart,
		Tooltip,
		Period,
		Draggable,
	},
	props: {
		categories: {
			type: Array,
			default: () => [],
		}
	},
	data() {
		return {
			settingTabs: [
				{
					id: 1,
					title: 'Наши бренды',
					slug: 'brands',
				},
				{
					id: 2,
					title: 'Близкие конкуренты',
					slug: 'competitors',
				},
				{
					id: 3,
					title: 'Другие бренды категории',
					slug: 'other',
				},
				{
					id: 4,
					title: 'Ритейлеры',
					slug: 'other',
				},
			],
			source: 'all',
			tabs: [
				{
					id: 1,
					title: 'Сравнение',
					slug: 'all',
				},
				{
					id: 2,
					title: 'Наши бренды',
					slug: 'brands',
					color: 'blue',
				},
				{
					id: 3,
					title: 'Близкие конкуренты',
					slug: 'competitors',
					color: 'orange',
				},
				{
					id: 4,
					title: 'Другие бренды категории',
					slug: 'other',
					color: 'gray',
				},
			],
			date: {
				from: dayjs().subtract(30, 'days').toDate(),
				to: dayjs().subtract(1, 'days').toDate(),
			},
			sku: {
				title: 'Количество SKU',
				status: 0,
				counters: {
					brand: {
						value: 122345124,
						trend: 1,
					},
					competitor: {
						value: 54345100,
					},
					other: {
						value: 122345124,
					}
				},
			},
			list: [
				{
					title: 'Доля полки',
					status: 1,
					counters: {
						brand: {
							value: 16.9,
							trend: -1,
						},
						competitor: {
							value: 17.8,
						},
						other: {
							value: 0,
						}
					}
				},
				{
					title: 'Процент доступных SKU',
					status: 1,
					counters: {
						brand: {
							value: 15.3,
							trend: 1,
						},
						competitor: {
							value: 15.3,
						},
						other: {
							value: 43,
						}
					}
				},
				{
					title: 'Доля в премиальной выдаче поиска',
					status: 2,
					counters: {
						brand: {
							value: 10,
							trend: 1,
						},
						competitor: {
							value: 15,
						},
						other: {
							value: 15,
						}
					}
				},
				{
					title: 'Доля в премиальной категорийной выдаче',
					status: 2,
					counters: {
						brand: {
							value: 4,
							trend: 1,
						},
						competitor: {
							value: 3.2,
						},
						other: {
							value: 3,
						}
					}
				},
				{
					title: 'Доля промо SKU',
					status: 3,
					counters: {
						brand: {
							value: 14,
							trend: 1,
						},
						competitor: {
							value: 8,
						},
						other: {
							value: 25,
						}
					}
				},
				{
					title: 'Средняя скидка',
					status: 3,
					counters: {
						brand: {
							value: 14,
							trend: 1,
						},
						competitor: {
							value: 8,
						},
						other: {
							value: 25,
						}
					}
				}
			],
			onboardShow: true,
			widgetList: [],
			chartList: [],
			activeItem: null,
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		chartOptions() {
			return {
				scales: {
					x: {
						type: 'time',
						time: {
							displayFormats: {
								'day': 'DD.MM.YY',
							}
						},
						offset: true,
						grid: {
							display: false,
						}
					},
					y: {
						min: 0,
						grid: {
							display: false,
						}
					},
				},
			}
		},
		chartData() {
			return {
				datasets: [
					{
						label: 'OZON',
						borderColor: '#0060EA',
						backgroundColor: '#0060EA',
						data: [
							{
								x: new Date('09-01-2021'),
								y: 10,
							},
							{
								x: new Date('09-02-2021'),
								y: 20,
							},
							{
								x: new Date('09-03-2021'),
								y: 23,
							},
							{
								x: new Date('09-04-2021'),
								y: 25,
							},
							{
								x: new Date('09-05-2021'),
								y: 28,
							},
							{
								x: new Date('09-06-2021'),
								y: 20,
							},
							{
								x: new Date('09-07-2021'),
								y: 31,
							},
							{
								x: new Date('09-08-2021'),
								y: 42,
							},
							{
								x: new Date('09-09-2021'),
								y: 60,
							},
							{
								x: new Date('09-10-2021'),
								y: 37,
							},
							{
								x: new Date('09-11-2021'),
								y: 30,
							},
							{
								x: new Date('09-12-2021'),
								y: 32,
							},
							{
								x: new Date('09-13-2021'),
								y: 18,
							},
							{
								x: new Date('09-14-2021'),
								y: 25,
							},
							{
								x: new Date('09-15-2021'),
								y: 35,
							},
						]
					},
					{
						label: 'Wildberries',
						borderColor: '#FF70A7',
						backgroundColor: '#FF70A7',
						data: [
							{
								x: new Date('09-01-2021'),
								y: 20,
							},
							{
								x: new Date('09-02-2021'),
								y: 26,
							},
							{
								x: new Date('09-03-2021'),
								y: 20,
							},
							{
								x: new Date('09-04-2021'),
								y: 25,
							},
							{
								x: new Date('09-05-2021'),
								y: 31,
							},
							{
								x: new Date('09-06-2021'),
								y: 48,
							},
							{
								x: new Date('09-07-2021'),
								y: 50,
							},
							{
								x: new Date('09-08-2021'),
								y: 48,
							},
							{
								x: new Date('09-09-2021'),
								y: 37,
							},
							{
								x: new Date('09-10-2021'),
								y: 35,
							},
							{
								x: new Date('09-11-2021'),
								y: 28,
							},
							{
								x: new Date('09-12-2021'),
								y: 40,
							},
							{
								x: new Date('09-13-2021'),
								y: 42,
							},
							{
								x: new Date('09-14-2021'),
								y: 44,
							},
							{
								x: new Date('09-15-2021'),
								y: 48,
							},
						]
					},
					{
						label: 'Сбер Маркет',
						borderColor: '#01B516',
						backgroundColor: '#01B516',
						data: [
							{
								x: new Date('09-01-2021'),
								y: 18,
							},
							{
								x: new Date('09-02-2021'),
								y: 25,
							},
							{
								x: new Date('09-03-2021'),
								y: 26,
							},
							{
								x: new Date('09-04-2021'),
								y: 30,
							},
							{
								x: new Date('09-05-2021'),
								y: 27,
							},
							{
								x: new Date('09-06-2021'),
								y: 36,
							},
							{
								x: new Date('09-07-2021'),
								y: 38,
							},
							{
								x: new Date('09-08-2021'),
								y: 44,
							},
							{
								x: new Date('09-09-2021'),
								y: 52,
							},
							{
								x: new Date('09-10-2021'),
								y: 48,
							},
							{
								x: new Date('09-11-2021'),
								y: 48,
							},
							{
								x: new Date('09-12-2021'),
								y: 46,
							},
							{
								x: new Date('09-13-2021'),
								y: 50,
							},
							{
								x: new Date('09-14-2021'),
								y: 53,
							},
							{
								x: new Date('09-15-2021'),
								y: 59,
							},
						]
					}]
			}
		},
		chartData2() {
			return {
				datasets: [
					{
						label: 'Близкие конкуренты',
						borderColor: '#FB8C00',
						backgroundColor: '#FB8C00',
						data: [
							{
								x: new Date('09-01-2021'),
								y: 10,
							},
							{
								x: new Date('09-02-2021'),
								y: 20,
							},
							{
								x: new Date('09-03-2021'),
								y: 23,
							},
							{
								x: new Date('09-04-2021'),
								y: 25,
							},
							{
								x: new Date('09-05-2021'),
								y: 28,
							},
							{
								x: new Date('09-06-2021'),
								y: 20,
							},
							{
								x: new Date('09-07-2021'),
								y: 31,
							},
							{
								x: new Date('09-08-2021'),
								y: 42,
							},
							{
								x: new Date('09-09-2021'),
								y: 60,
							},
							{
								x: new Date('09-10-2021'),
								y: 37,
							},
							{
								x: new Date('09-11-2021'),
								y: 30,
							},
							{
								x: new Date('09-12-2021'),
								y: 32,
							},
							{
								x: new Date('09-13-2021'),
								y: 18,
							},
							{
								x: new Date('09-14-2021'),
								y: 25,
							},
							{
								x: new Date('09-15-2021'),
								y: 35,
							},
						]
					},
					{
						label: 'Наши бренды',
						borderColor: '#2196F3',
						backgroundColor: '#2196F3',
						data: [
							{
								x: new Date('09-01-2021'),
								y: 20,
							},
							{
								x: new Date('09-02-2021'),
								y: 26,
							},
							{
								x: new Date('09-03-2021'),
								y: 20,
							},
							{
								x: new Date('09-04-2021'),
								y: 25,
							},
							{
								x: new Date('09-05-2021'),
								y: 31,
							},
							{
								x: new Date('09-06-2021'),
								y: 48,
							},
							{
								x: new Date('09-07-2021'),
								y: 50,
							},
							{
								x: new Date('09-08-2021'),
								y: 48,
							},
							{
								x: new Date('09-09-2021'),
								y: 37,
							},
							{
								x: new Date('09-10-2021'),
								y: 35,
							},
							{
								x: new Date('09-11-2021'),
								y: 28,
							},
							{
								x: new Date('09-12-2021'),
								y: 40,
							},
							{
								x: new Date('09-13-2021'),
								y: 42,
							},
							{
								x: new Date('09-14-2021'),
								y: 44,
							},
							{
								x: new Date('09-15-2021'),
								y: 48,
							},
						]
					},
					{
						label: 'Другие',
						borderColor: '#757575',
						backgroundColor: '#757575',
						data: [
							{
								x: new Date('09-01-2021'),
								y: 18,
							},
							{
								x: new Date('09-02-2021'),
								y: 25,
							},
							{
								x: new Date('09-03-2021'),
								y: 26,
							},
							{
								x: new Date('09-04-2021'),
								y: 30,
							},
							{
								x: new Date('09-05-2021'),
								y: 27,
							},
							{
								x: new Date('09-06-2021'),
								y: 36,
							},
							{
								x: new Date('09-07-2021'),
								y: 38,
							},
							{
								x: new Date('09-08-2021'),
								y: 44,
							},
							{
								x: new Date('09-09-2021'),
								y: 52,
							},
							{
								x: new Date('09-10-2021'),
								y: 48,
							},
							{
								x: new Date('09-11-2021'),
								y: 48,
							},
							{
								x: new Date('09-12-2021'),
								y: 46,
							},
							{
								x: new Date('09-13-2021'),
								y: 50,
							},
							{
								x: new Date('09-14-2021'),
								y: 53,
							},
							{
								x: new Date('09-15-2021'),
								y: 59,
							},
						]
					}]
			}
		},
		barChartOptions() {
			return {
				indexAxis: 'y',
				scales: {
					x: {
						position: 'right',
						grid: {
							display: false
						},
						beginAtZero: true,
					},
					y: {
						grid: {
							display: false
						},
					},
				},
			}
		},
		barChartData() {
			return {
				labels: ['Впрок', 'Wildbwrries', 'Утконос', 'OZON', 'Азбука Вкуса'],
				datasets: [
					{
						borderColor: '#FB8C00',
						backgroundColor: '#FB8C00',
						data: [12, 15, 17, 32, 34]
					},
					{
						borderColor: '#2196F3',
						backgroundColor: '#2196F3',
						data: [5, 10, 15, 20, 25]
					},
					{
						borderColor: '#757575',
						backgroundColor: '#757575',
						data: [14, 18, 22, 28, 30]
					}

				]
			}
		},
		barChartData2() {
			return {
				labels: ['LG', 'Nokia', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд'],
				datasets: [
					{
						data: [61, 53, 47, 46, 45, 38, 33, 32, 29, 15, 10],
						backgroundColor: [
							'#2196F3',
							'#FB8C00',
							'#2196F3',
							'#FB8C00',
							'#2196F3',
							'#2196F3',
							'#FB8C00',
							'#FB8C00',
							'#FB8C00',
							'#FB8C00',
							'#2196F3',
						],
						borderColor: [
							'#2196F3',
							'#FB8C00',
							'#2196F3',
							'#FB8C00',
							'#2196F3',
							'#2196F3',
							'#FB8C00',
							'#FB8C00',
							'#FB8C00',
							'#FB8C00',
							'#2196F3',
						],
					},
				]
			}
		},
		stackedBarChartOptions () {
			return {
				indexAxis: 'y',
				responsive: true,
				scales: {
					x: {
						stacked: true,
						grid: {
							display: false,
						}
					},
					y: {
						stacked: true,
						grid: {
							display: false,
						}
					}
				}
			}
		},
		stackedBarChartData() {
			return {
				labels: ['Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд', 'Бренд'],
				datasets: [
					{
						borderColor: '#4CAF50',
						backgroundColor: '#4CAF50',
						data: [60, 54, 52, 48, 44, 42, 40, 38, 35, 30, 25]
					},
					{
						borderColor: '#DC2F23',
						backgroundColor: '#DC2F23',
						data: [40, 46, 48, 52, 56, 58, 60, 62, 65, 70, 75]
					},
				]
			}
		},
		candlesChartData() {
			return {
				labels: [''],
				datasets: [
					{
						label: 'Series 1',
						backgroundColor: '#f87979',
						data: [{
							o: 350,
							h: 360,
							l: 345,
							c: 350,
							t: new Date('2019-01-10').getTime(),
						},
							{
								o: 350,
								h: 370,
								l: 340,
								c: 360,
								t: new Date('2019-01-11').getTime(),
							},
							{
								o: 360,
								h: 370,
								l: 355,
								c: 355,
								t: new Date('2019-01-12').getTime(),
							},
							{
								o: 355,
								h: 380,
								l: 360,
								c: 370,
								t: new Date('2019-01-13').getTime(),
							},
							{
								o: 370,
								h: 365,
								l: 340,
								c: 350,
								t: new Date('2019-01-14').getTime(),
							}],
					},
				],
			}
		},
		getDateStr() {
			return `${dayjs(this.date.from).format('DD.MM.YYYY')} - ${dayjs(this.date.to).format('DD.MM.YYYY')}`
		},
		dateFrom() {
			return dayjs(this.date.from).format('YYYY-MM-DD')
		},
		dateTo() {
			return dayjs(this.date.to).format('YYYY-MM-DD')
		},
		allWidgets() {
			return this.widgetList.concat(this.sku).concat(this.list)
		},
		widgetMatrix() {
			return [
				{
					title: 'Col 0',
					status: 0,
					list: this.allWidgets.filter((item) => item.status === 0),
				},
				{
					title: 'Col 1',
					status: 1,
					list: this.allWidgets.filter((item) => item.status === 1),
				},
				{
					title: 'Col 2',
					status: 2,
					list: this.allWidgets.filter((item) => item.status === 2),
				},
				{
					title: 'Col 3',
					status: 3,
					list: this.allWidgets.filter((item) => item.status === 3),
				},
			]
		},
	},
	mounted() {
		this.fetch()
	},
	methods: {
		fetch() {
			this.fetchWidgets()
			this.fetchCharts()
		},
		async fetchWidgets() {
			try {
				const resp = await this.$api.common.getSettingsWidgetList(this.id)
				if (resp) {
					this.widgetList = resp.data.filter((item) => item.selected).map((item) => {
						return { ...item, status: 0, loading: true }
					})
					// const widgetResp = await Promise.allSettled(this.widgetList.map((item) => {
					// 	return this.$api.common.getWidgetComparison(item.id, this.id)
					// }))
					if (this.source === 'all') {
						await this.fetchWidgetComparison()
					} else {
						await this.fetchWidgetSpecific()
					}
					// this.setWidgetList(widgetResp)
				}
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		async fetchWidgetComparison() {
			try {
				let params = {
					categoryId: this.id,
					dateFrom: this.dateFrom,
					dateTo: this.dateTo,
					brands: [],
					competitors: [],
					others: [],
					retailers: [],
				}
				const widgetResp = await Promise.allSettled(this.widgetList.map((item) => {
					return this.$api.common.getWidgetComparison({ ...params, widgetId: item.id })
				}))
				this.setWidgetComparisonList(widgetResp)
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		async fetchWidgetSpecific() {
			try {
				let params = {
					categoryId: this.id,
					dateFrom: this.dateFrom,
					dateTo: this.dateTo,
					brands: [],
					retailers: [],
				}
				const widgetResp = await Promise.allSettled(this.widgetList.map((item) => {
					return this.$api.common.getWidgetSpecific({ ...params, widgetId: item.id })
				}))
				this.setWidgetSpecificList(widgetResp)
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		async fetchCharts() {
			try {
				const resp = await this.$api.common.getSettingsChartList(this.id)
				if (resp) {
					this.chartList = resp.data.filter((item) => item.selected).map((item) => {
						return { ...item, loading: true }
					})
					// const chartResp = await Promise.allSettled(this.chartList.map((item) => {
					// 	return this.$api.common.getChartComparison(item.id, this.id)
					// }))
					let chartResp
					if (this.source === 'all') {
						chartResp = await this.getChartsComparison()
					} else {
						chartResp = await this.getChartsSpecific()
					}
					console.log(chartResp)
					this.setChartList(chartResp)
				}
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		getChartsComparison() {
			let params = {
				categoryId: this.id,
				dateFrom: this.dateFrom,
				dateTo: this.dateTo,
				brands: [],
				competitors: [],
				others: [],
				retailers: [],
			}
			return Promise.allSettled(this.chartList.map((item) => {
				return this.$api.common.getChartComparison({ ...params, chartId: item.id })
			}))
		},
		getChartsSpecific() {
			let params = {
				categoryId: this.id,
				dateFrom: this.dateFrom,
				dateTo: this.dateTo,
				brands: [],
				retailers: [],
			}
			return Promise.allSettled(this.chartList.map((item) => {
				return this.$api.common.getChartSpecific({ ...params, chartId: item.id })
			}))
		},
		setWidgetComparisonList(widgetResp) {
			this.widgetList = widgetResp.map((item) => {
				let widg = item.value[0]
				let data = null
				if (item.status === 'fulfilled') {
					data = {
						title: widg.nameRu,
						type:  widg.brandValue.type,
						status: 0, // to do for test only
						counters: {
							brand: {
								value: widg.brandValue.value,
								// trend: -1,
							},
							competitor: {
								value: widg.competitorValue.value,
							},
							other: {
								value: widg.otherValue.value,
							}
						},
					}
				} else {
					data = {
						error: true
					}
				}
				return data
			})
		},
		setWidgetSpecificList(widgetResp) {
			this.widgetList = widgetResp.map((item) => {
				let widg = item.value[0]
				let data = null
				if (item.status === 'fulfilled') {
					data = widg
				} else {
					data = {
						error: true
					}
				}
				return data
			})
		},
		setChartList(chartResp) {
			console.log(chartResp)
		},
		changeTab(item) {
			this.widgetList = this.widgetList.map((item) => {
				return { ...item, loading: true }
			})
			this.source = item.slug
			this.fetch()
		},
		changeSettingTabs(item) {
			console.log(item)
		},
		onboardClose() {
			this.onboardShow = false
		},
		settings() {
			this.$modal({
				component: 'WidgetSettings',
				props: {
					categoryId: this.id,
				},
				on: {
					cancel: () => {
						console.log('cancel')
					},
					save: () => {
						console.log('save')
					}
				},
			})

		},
		newChart() {
			console.log('newChart')
			this.$modal({
				component: 'NewChart',
				props: {
					categoryId: this.id,
				},
				on: {
					cancel: () => {
						console.log('cancel')
					},
					save: () => {
						console.log('save')
					}
				},
			})
		},
		handleChange(e) {
			if (e.added) {
				this.activeItem = e.added.element
			}
		},
		handleEnd(e) {
			let from = e.from.dataset.part
			let to = e.to.dataset.part
			if (from !== to && this.activeItem) {
				let index = this.list.findIndex((item) => item.title === this.activeItem.title)
				this.$set(this.list, index, { ... this.activeItem, status: parseInt(to)})
				this.activeItem = null
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.dashboard {
	&__wrap {
		padding: 12px 24px;
	}

	&__nav {
		&-item {
			margin-right: 32px;
			color: color(white);
			cursor: pointer;

			&:last-of-type {
				margin-right: 0;
			}
		}
	}

	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}
	&__tabs {
		/*margin-left: 28px;*/
	}
	&__tab {
		&-item {
			margin-left: 28px;
			cursor: pointer;

			&:hover,
			&.--active {
				.dashboard__tab-label {
					color: color(black);

					&:after {
						content: '';
						position: absolute;
						width: 100%;
						height: 3px;
						bottom: -5px;
						left: 0;
						background: linear-gradient(67.64deg, color(blue) 28.69%, color(violet-bright) 82.18%);
						transition: width 0.3s ease-in;
					}
				}
			}
		}
		&-label {
			position: relative;
			margin-left: 4px;
			color: color(gray-700);
		}
	}
	&__widgets {
		margin-top: 30px;
	}
	&__widget-col {
		width: 23.5%;
		margin-right: 2%;

		&:nth-of-type(4n) {
			margin-right: 0;
		}
	}
	&__widget {
		margin-bottom: 26px;
	}
	&__draggable {
		min-height: 160px;
	}
	&__section {
		margin-top: 12px;
	}
	&__onboard {
		position: fixed;
		bottom: 20px;
		right: 20px;
	}

	&__chart {
		width: 49%;
		margin-top: 24px;
	}
}
</style>
