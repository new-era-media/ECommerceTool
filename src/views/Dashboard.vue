<template lang="pug">
.dashboard
	Menu(title="Дашборд")
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

}
</style>