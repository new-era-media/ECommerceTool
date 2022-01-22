<template lang="pug">
	.checkbox.flex.items-center(:class="classNames" @click="change")
		.checkbox__icon.flex.justify-around.items-center
			CheckIcon.checkbox__icon-check(:size="18" :fillColor="checkboxColor")
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
	},
	computed: {
		classNames() {
			let cn = [
				this.value ? '--active' : '',
				this.disabled ? '--disabled' : '',
				`--type-${this.type}`,
			]

			return cn
		},
		checkboxColor() {
			return this.type === 'violet' ? '#5744D6' : '#000000'
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
	&.--disabled {
		opacity: 0.5;
		cursor: default;
	}
}
</style>
