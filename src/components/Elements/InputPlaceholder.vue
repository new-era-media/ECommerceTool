<template lang="pug">
	.input__wrap.relative(:class="{'--focus': isFocus}")
		Input(
			ref="input"
			v-model="currValue"
			@focus="onFocus"
			@blur="onBlur"
			@input="input"
			)
		.input__placeholder {{ placeholder }}

</template>
<script>
import Input from '@/components/Elements/Input.vue'

export default {
	components: { Input },
	props: {
		value: String,
		placeholder: String,
	},
	data() {
		return {
			isFocus: false,
			currValue: this.$props.value || '',
		}
	},
	methods: {
		setFocus() {
			this.$refs.input.setFocus()
		},
		onFocus() {
			this.isFocus = true
		},
		onBlur() {
			this.isFocus = false
		},
		input() {
			this.$emit('input', this.currValue)
		},
	}
}
</script>
<style lang="scss" scoped>
	.input {

		&__wrap {
			input {
				width: 100%;
				padding-right: 36px;
			}

			&.--focus {
				.input__placeholder {
					color: color(violet);
				}
				input {
					border-color: color(violet);
				}
			}
		}
		&__placeholder {
			position: absolute;
			padding: 0 5px;
			top: -6px;
			left: 12px;
			font-size: 10px;
			letter-spacing: 0.3px;
			background-color: color(white);
		}
	}
</style>