<template lang="pug">
	.radio(:class="classNames")
		.radio__item.flex.items-center(
			v-for="option of options"
				:key="option[valueField]"
				:class="{ '--active': option.value === value }"
				@click="select(option)"
			)
				.radio__item-icon
				.radio__item-label
					slot(:option="option")
						| {{option.label}}
</template>

<script>
	export default {
		props: {
			options: Array,
			value: [String, Number, Array],
			valueField: {
				type: String,
				default: 'value',
			},
			type: {
				default: 'violet',
				validator: value => ~[
					'violet', 'black'
				].indexOf(value),
			}
		},
		computed: {
			classNames() {
				const cn = [
					`--type-${this.type}`,
				]

				return cn
			}
		},
		methods: {
			select(option) {
				this.$emit('input', option.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.radio {
		&__item {
			cursor: pointer;
			position: relative;
			/*padding-left: 36px;*/
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}

			&-icon {
				position: relative;
				width: 24px;
				height: 24px;
				margin-right: 14px;

				&:before {
					content: '';
					position: absolute;
					top: 2px;
					left: 5px;
					width: 24px;
					height: 24px;
					border-radius: 50%;
					box-shadow: 0 0 0 1px color(gray-500) inset;
				}
			}



			&.--active {
				.radio__item-icon {
					&:before {
						box-shadow: 0 0 0 2px color(violet) inset;
					}
					&:after {
						content: '';
						position: absolute;
						width: 12px;
						height: 12px;
						top: 8px;
						left: 11px;
						border-radius: 50%;
						background-color: color(violet);
					}
				}
			}
		}
		&.--type {
			&-black {

			}
		}
	}
</style>
