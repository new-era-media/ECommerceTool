<template lang="pug">
.widget
	template(v-if="!loading")
		Tooltip(trigger="hover")
			template(slot="reference")
				.widget__menu
					DotsVertical.widget__menu-icon(:size="18")
			.widget__tooltip
				.flex
					InformationOutline.widget__tooltip-icon(:size="24")
					div
						.widget__tooltip-title
							| availability rate
							| {{ widget.nameEn }}
						.widget__tooltip-desc
							| Отношение доступных SKU ко всем SKU бренда за период
							| {{widget.description}}
				.widget__tooltip-remove.flex.items-center(@click="remove")
					DeleteOutline.widget__tooltip-icon(:size="24")
					| Убрать виджет с дашборда

	.widget__content
		template(v-if="loading")
			PuSkeleton.widget__skeleton(width="220px" color="#E0E0E0")
			PuSkeleton.widget__skeleton(width="180px" color="#E0E0E0")
			PuSkeleton.widget__skeleton(width="74px" color="#E0E0E0")
			PuSkeleton.widget__skeleton(width="84px" color="#E0E0E0")
		template(v-else)
			.widget__title.flex.items-center.justify-end {{widget.title}}
			.widget__list
				.widget__item.--brands
					| {{brandValue}}
					ArrowUpIcon.widget__item-trend.--positive(v-if="counters.brand.trend === 1" :size="18")
					ArrowDownIcon.widget__item-trend.--negative(v-if="counters.brand.trend === -1" :size="18")
				.widget__item.--competitors {{competitorValue}}
				.widget__item.--other {{otherValue}}
			.widget__progress.flex.justify-start
				.widget__progress-brands(:style="{width: `${getPrecent(counters.brand.value, total)}%`}")
				.widget__progress-competitors(:style="{width: `${getPrecent(counters.competitor.value, total)}%`}")
				.widget__progress-other(:style="{width: `${getPrecent(counters.other.value, total)}%`}")
</template>

<script>
import Tooltip from '@/components/Elements/Tooltip.vue'
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import InformationOutline from 'vue-material-design-icons/InformationOutline.vue'
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUpThick.vue'
import ArrowDownIcon from 'vue-material-design-icons/ArrowDownThick.vue'

export default {
	components: {
		Tooltip,
		DotsVertical,
		InformationOutline,
		DeleteOutline,
		ArrowUpIcon,
		ArrowDownIcon,
	},
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
		widget: Object,
		type: {
			default: 'count',
			validator: value => ~[
				'count', 'percent',
			].indexOf(value),
		}
	},
	computed: {
		counters() {
			return this.widget.counters
		},
		isCount() {
			return this.type === 'count'
		},
		brandValue() {
			return this.isCount ? this.$utils.formatNumber(this.counters.brand.value) : `${this.counters.brand.value}%`
		},
		competitorValue() {
			return this.isCount ? this.$utils.formatNumber(this.counters.competitor.value) : `${this.counters.competitor.value}%`
		},
		otherValue() {
			if (this.counters.other.value) {
				return this.isCount ? this.$utils.formatNumber(this.counters.other.value) : `${this.counters.other.value}%`
			} else {
				return '–'
			}

		},
		total() {
			return this.counters.brand.value + this.counters.competitor.value + this.counters.other.value
		}
	},
	methods: {
		getPrecent(item, total) {
			return item * 100 / total
		},
		remove() {
			this.$emit('remove', this.widget.widgetId)
		},
	}
}
</script>

<style lang="scss" scoped>
.widget {
	position: relative;
	padding: 16px 34px 20px 34px;
	background-color: color(white);
	border-radius: 8px;

	&__menu {
		display: none;
	}

	&:hover &__menu {
		position: absolute;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 32px;
		height: 32px;
		top: 16px;
		left: 16px;
		cursor: pointer;

		&-icon {
			position: relative;
		}

		&:hover {
				&:after {
					position: absolute;
					content: '';
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: color(violet);
					opacity: 10%;
					border-radius: 50%;
				}
			}
	}

	&__tooltip {
		padding-top: 10px;

		&-title {
			font-weight: 600;
		}
		&-desc {
			margin-top: 5px;
			margin-bottom: 20px;
		}
		&-icon {
			margin-right: 12px;
		}
		&-remove {
			position: relative;
			padding-top: 16px;
			color: color(violet);
			cursor: pointer;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: -20px;
				right: -20px;
				height: 1px;
				background-color: color(gray-600);
			}
		}
	}

	&__content {
		text-align: right;
	}

	&__title {
		height: 38px;
		color: color(gray-700);
		font-weight: 600;
	}
	&__list {
		margin-top: 6px;
	}
	&__item {
		position: relative;
		font-size: 16px;
		line-height: 1.5;

		&.--brands {
			color: color(blue-bright);
			font-size: 24px;
			line-height: 1.37;
		}
		&.--competitors {
			color: color(orange);
		}
		&.--other {
			color: color(gray-800);
		}

		&-trend {
			position: absolute;
			top: 50%;
			right: -20px;
			transform: translateY(-50%);

			&.--positive {
				color: color(green);
			}
			&.--negative {
				color: color(red);
			}
		}
	}
	&__progress {
		position: absolute;
		width: 100%;
		height: 8px;
		bottom: 0;
		left: 0;
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
		overflow: hidden;

		&-brands {
			/*min-width: 10%;*/
			height: 100%;
			background-color: color(blue-bright);
		}
		&-competitors {
			/*min-width: 10%;*/
			height: 100%;
			background-color: color(orange);
		}
		&-other {
			/*min-width: 10%;*/
			height: 100%;
			background-color: color(gray-700);
		}
	}
	&__skeleton {
		display: block;
		margin-top: 10px;

		/deep/ span {
			border-radius: 12px;
		}
	}
}
</style>