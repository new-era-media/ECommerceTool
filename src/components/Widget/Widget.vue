<template lang="pug">
.widget
	.widget__content
		.widget__title.flex.items-center.justify-end {{widget.title}}
		.widget__list
			.widget__item.--brand
				| {{brandValue}}
				ArrowUpIcon.widget__item-trend.--positive(v-if="counters.brand.trend === 1" :size="18")
				ArrowDownIcon.widget__item-trend.--negative(v-if="counters.brand.trend === -1" :size="18")
			.widget__item.--competitor {{competitorValue}}
			.widget__item.--other {{otherValue}}
		.widget__progress.flex.justify-start
			.widget__progress-brand(:style="{width: `${getPrecent(counters.brand.value, total)}%`}")
			.widget__progress-competitor(:style="{width: `${getPrecent(counters.competitor.value, total)}%`}")
			.widget__progress-other(:style="{width: `${getPrecent(counters.other.value, total)}%`}")
</template>

<script>
import ArrowUpIcon from 'vue-material-design-icons/ArrowUpThick.vue'
import ArrowDownIcon from 'vue-material-design-icons/ArrowDownThick.vue'

export default {
	props: {
		widget: Object,
		type: {
			default: 'count',
			validator: value => ~[
				'count', 'percent',
			].indexOf(value),
		}
	},
	components: { ArrowUpIcon, ArrowDownIcon },
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
		}
	}
}
</script>

<style lang="scss" scoped>
.widget {
	position: relative;
	padding: 16px 34px 20px 34px;
	background-color: color(white);
	border-radius: 8px;
	overflow: hidden;

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

		&.--brand {
			color: color(blue-bright);
			font-size: 24px;
			line-height: 1.37;
		}
		&.--competitor {
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

		&-brand {
			/*min-width: 10%;*/
			height: 100%;
			background-color: color(blue-bright);
		}
		&-competitor {
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
}
</style>