<template lang="pug">
	.checkbox.flex.items-center(:class="classNames" @click="change")
		.checkbox__icon.flex.justify-around.items-center
			CheckIcon.checkbox__icon-check(:size="iconSize" :fillColor="checkboxColor")
		.checkbox__label
			slot
				| {{label}}

</template>

<script>
import CheckIcon from 'vue-material-design-icons/Check.vue'

export default {
	components: { CheckIcon },
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
		},
		value: [String, Boolean],
		type: {
			default: 'violet',
			validator: value => ~[
				'violet', 'gray',
			].indexOf(value),
		},
		size: {
			default: 'md',
			validator: value => ~['sm', 'md'].indexOf(value),
		},
	},
	computed: {
		classNames() {
			let cn = [
				this.value ? '--active' : '',
				this.disabled ? '--disabled' : '',
				`--size-${this.size}`,
				`--type-${this.type}`,
			]

			return cn
		},
		checkboxColor() {
			return this.type === 'violet' ? '#5744D6' : '#000000'
		},
		iconSize() {
			return this.size === 'md' ? 18 : 14
		},
	},
	methods: {
		change() {
			if (this.disabled) {
				return false
			}
			this.$emit('change', this)
		}
	}
}
</script>

<style lang="scss" scoped>
.checkbox {
	cursor: pointer;

	&__icon {
		width: 24px;
		height: 24px;

		&-check {
			display: none;
		}
	}
	&__label {
		margin-left: 8px;
	}
	&.--type {
		&-violet {
			.checkbox__icon {
				border-radius: 4px;
				border: 2px solid color(gray-500);
			}

			&.--active {
				.checkbox__icon {
					border-color: color(violet);

					&-check {
						display: block;
					}
				}
			}
		}
		&-gray {
			.checkbox__icon {
				border-radius: 1px;
				border: 1px solid color(gray-light);
			}
			&.--active {
				.checkbox__icon {
					&-check {
						display: block;
					}
				}
			}
		}
	}

	&.--size {
		&-sm {
			.checkbox {
				&__icon {
					width: 18px;
					height: 18px;
				}
			}
		}
		&-md {

		}
	}
	&.--disabled {
		opacity: 0.5;
		cursor: default;
	}
}
</style>
