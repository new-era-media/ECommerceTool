<template lang="pug">
.select
	Tooltip.select__tip(trigger="clickToToggle")
		template(slot="reference")
			.select__current.flex.items-center
				.select__title {{ current.name }}
				ChevronDownIcon(:size="16")
		.select__list
			.select__item(
				v-for="(item, index) in list"
				:key="index"
				:class="{'--active': item.id === currentId}"
				@click="change(item)"
				)
				.select__item-title {{ item.name }}
				.select__item-addon {{ addon }}

</template>

<script>
import Tooltip from '@/components/Elements/Tooltip.vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'

export default {
	components: {
		Tooltip,
		ChevronDownIcon,
	},
	props: {
		list: {
			type: Array,
			default: () => [],
		},
		currentId: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			addon: '5 наших брендов, 4 близких конкурентов'
		}
	},
	computed: {
		current() {
			return this.list.find((el) => el.id === this.currentId)
		}
	},
	methods: {
		change(item) {
			if (item.id === this.currentId) {
				return false
			}
			this.$emit('change', item)
		},
	},
}
</script>

<style lang="scss" scoped>
.select {
	&__tip {
		/deep/ .popper {
			padding: 0;
			border-radius: 0;

			&__arrow {
				display: none;
			}
		}
	}
	&__current {
		font-weight: 600;
		letter-spacing: 0.8px;
		cursor: pointer;
	}
	&__title {
		margin-right: 5px;
	}
	&__list {

	}
	&__item {
		min-width: 450px;
		padding: 14px 20px;
		font-size: 14px;
		cursor: pointer;

		&:first-of-type {
			padding-top: 8px;
		}

		&-title {
			color: color(violet);
			font-weight: 600;
			line-height: 1.41;
		}
		&-addon {
			color: color(gray-700);
		}
		&.--active {
			background-color: rgba(#5744D6, 0.1);
			cursor: default;

			& .select__item-title {
				color: color(primary);
			}
		}
		&:hover {
			background-color: rgba(#5744D6, 0.05);
		}
	}
}
</style>