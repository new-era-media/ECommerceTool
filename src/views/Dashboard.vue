<template lang="pug">
.dashboard
	Menu(title="Дашборд")
		nav.dashboard__nav.flex.items-center
			.dashboard__nav-item Наши бренды
			.dashboard__nav-item Близкие конкуренты
			.dashboard__nav-item Другие бренды
			.dashboard__nav-item Ритейлеры
			.dashboard__nav-item
				Tooltip(trigger="clickToToggle")
					template(slot="reference")
						div 16 мар. 2021 – 23 мар. 2021
					Period

	.dashboard__wrap.container
		.dashboard__section.flex.justify-between.items-center
			.flex.items-center
				.dashboard__title Данные у ритейлеров
				.dashboard__tabs.flex
					.dashboard__tab-item.flex.items-center.--active
						ComparisonIcon
						.dashboard__tab-label Сравнение
					.dashboard__tab-item.flex.items-center
						MarkItem(color="blue")
						.dashboard__tab-label Наши бренды
					.dashboard__tab-item.flex.items-center
						MarkItem(color="orange")
						.dashboard__tab-label Близкие конкуренты
					.dashboard__tab-item.flex.items-center
						MarkItem(color="gray")
						.dashboard__tab-label Другие бренды категории
				//Tabs.dashboard__tabs
					TabItem(title="Сравнение")
						.dashboard__tab-header
							| Сравнение 1
					TabItem(title="Наши бренды")
						.dashboard__tab-header
							| Наши бренды 1
					TabItem(title="Близкие конкуренты")
						.dashboard__tab-header
							| Близкие конкуренты 1
					TabItem(title="Другие бренды категории")
						.dashboard__tab-header
							| Другие бренды категории 1

			Button.dashboard__settings(type="violet-outline" size="sm" @click="settings")
				SettingsIcon(:size="18")
		.dashboard__widgets.flex.flex-wrap
			Widget.dashboard__widget(:widget="sku")
			Widget.dashboard__widget(v-for="(item, index) of list" :key="index" :widget="item" type="percent")
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
import Tabs from '@/components/Tabs/Tabs.vue'
import TabItem from '@/components/Tabs/TabItem.vue'
import Button from '@/components/Button/Button.vue'
import SettingsIcon from 'vue-material-design-icons/Cog.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import ComparisonIcon from '@/assets/svg/comparison.svg'
import Widget from '@/components/Widget/Widget.vue'
import OnboardTooltip from '@/components/Onboard/Onboard.vue'
import MarkItem from '@/components/Elements/MarkItem.vue'
import ChartItem from '@/components/Chart/ChartItem'
import LineChart from '@/components/Chart/LineChart'
import BarChart from '@/components/Chart/BarChart'
import Tooltip from '@/components/Elements/Tooltip.vue'
import Period from '@/components/Period/Period.vue'

export default {
	components: {
		Menu,
		Tabs,
		TabItem,
		Button,
		SettingsIcon,
		PlusIcon,
		ComparisonIcon,
		Widget,
		OnboardTooltip,
		MarkItem,
		ChartItem,
		LineChart,
		BarChart,
		Tooltip,
		Period,
	},
	data() {
		return {
			tabs: [

			],
			sku: {
				title: 'Количество SKU',
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
				}
			},
			list: [
				{
					title: 'Доля полки',
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
		}
	},
	computed: {
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
		}
	},
	methods: {
		onboardClose() {
			this.onboardShow = false
		},
		settings() {
			console.log('widgets settings')
			this.$modal({
				component: 'WidgetSettings',
				props: {

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
		}
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
	&__widget {
		width: 23.5%;
		margin-right: 2%;
		margin-bottom: 26px;

		&:nth-of-type(4n) {
			margin-right: 0;
		}
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