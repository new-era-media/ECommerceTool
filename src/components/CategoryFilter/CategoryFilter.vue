<template lang="pug">
.category-filter
	.category-filter__title.flex.items-center(v-if="filter.title")
		slot(name="icon")
		| {{filter.title}}
	template(v-if="options.length")
		.category-filter__search
			Input.category-filter__search-input(:value="search" v-model="search" :placeholder="filter.placeholder")
			Magnify.category-filter__search-icon
		.category-filter__result
			div
				.category-filter__result-group
					template(v-if="filterOptions.length")
						.category-filter__group(v-for="group of groupedOptions" :key="group.label")
							.category-filter__group-label {{group.label}}
							.category-filter__group-list
								Checkbox.category-filter__group-item(v-for="item in group.options"
									:key="item.label"
									:label="item.label"
									:value="item.value"
									@change="change(item)"
								)
					template(v-else)
						div Не удалось ничего найти
		.category-filter__chosen.flex.flex-wrap.items-center
			.category-filter__chosen-item.flex(v-for="item in checkedOptions" :key="item.label")
				.category-filter__chosen-label {{item.label}}
				.category-filter__chosen-remove(@click="removeItem(item)")
	template(v-else)
		.category-filter__empty
			| {{filter.empty}}

</template>

<script>
import Input from '@/components/Elements/Input.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Checkbox from '@/components/Elements/Checkbox.vue'
import { uniq } from 'lodash'

export default {
	components: { Input, Magnify, Checkbox },
	props: {
		filter: Object,
	},
	data() {
		return {
			search: '',
			checked: [],
			// options: [],
			options: [
				{
					value: false,
					label: 'ACRNM',
				},
				{
					value: false,
					label: 'Adfsdfsdf',
				},
				{
					value: false,
					label: 'Adsdsfgsdg',
				},
				{
					value: false,
					label: 'Afghh',
				},
				{
					value: false,
					label: 'Abmnm',
				},
				{
					value: false,
					label: 'Barilla',
				},
				{
					value: false,
					label: 'Bdfsdfsdf',
				},
				{
					value: false,
					label: 'Bdsdsfgsdg',
				},
				{
					value: false,
					label: 'Bfghh',
				},
				{
					value: false,
					label: 'Bbmnm',
				},
				{
					value: false,
					label: 'CCRNM',
				},
				{
					value: false,
					label: 'Cdfsdfsdf',
				},
				{
					value: false,
					label: 'Cdsdsfgsdg',
				},
				{
					value: false,
					label: 'Cfghh',
				},
				{
					value: false,
					label: 'Cbmnm',
				}
			]
		}
	},
	computed: {
		filterOptions() {
			return this.search ? this.options.filter((item) => item.label.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ) : this.options
		},
		groupedOptions() {
			let arr = this.filterOptions.map((item) => item.label[0])
			let letters = uniq(arr)
			let groupedArr = letters.map((letter) => {
				return {
					label: letter,
					options: this.filterOptions.filter((item) => item.label[0].toLowerCase() === letter.toLowerCase())
				}
			})
			return groupedArr
		},
		checkedOptions() {
			return this.options.filter((item) => item.value)
		}
	},
	methods: {
		change(item) {
			let index = this.filterOptions.findIndex((el) => el.label === item.label)
			let newItem = {
				label: item.label,
				value: !item.value,
			}
			this.$set(this.options, index, newItem)
			this.$emit('change', {filter: this.filter, checked: this.checkedOptions})
		},
		removeItem(item) {
			let index = this.filterOptions.findIndex((el) => el.label === item.label)
			let newItem = {
				label: item.label,
				value: false,
			}
			this.$set(this.options, index, newItem)
		}
	}
}
</script>

<style lang="scss" scoped>
.category-filter {

	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}
	&__search {
		position: relative;
		margin-top: 16px;

		&-input {
			width: 100%;
			padding-left: 40px;
		}
		&-icon {
			position: absolute;
			top: 50%;
			left: 8px;
			transform: translateY(-50%);
		}
	}
	&__result {
		width: 100%;
		max-height: 584px;
		overflow-y: scroll;
		margin-top: 16px;
		padding: 4px 0;
		background-color: color(white);
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 2px 2px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
	}
	&__group {
		margin-top: 24px;
		margin-bottom: 24px;

		&-label {
			padding: 0 12px;
			font-weight: 700;
		}
		&-list {
			margin-top: 4px;
		}
		&-item {
			padding: 12px;

			&:first-of-type {
				margin-top: 0;
			}
		}
	}
	&__chosen {
		margin-top: 16px;

		&-item {
			margin-right: 6px;
			margin-bottom: 6px;
		}
		&-label {
			font-size: 12px;
			line-height: 1.33;
		}
		&-remove {
			position: relative;
			width: 10px;
			height: 10px;
			margin-left: 8px;
			margin-top: 2px;
			cursor: pointer;

			&:before,
			&:after {
				content: '';
				position: absolute;
				width: 6px;
				height: 1px;
				top: 5px;
				left: 2px;
				background-color: color(violet);
			}
			&:before {
				transform: rotate(45deg);
			}
			&:after {
				transform: rotate(-45deg);
			}
		}
	}
	&__empty {
		margin-top: 16px;
		width: 90%;
		color: color(gray-700);
	}
}
</style>