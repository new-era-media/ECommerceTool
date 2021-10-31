<template lang="pug">
	input(
		ref="input"
		:class="classNames"
		:type="type",
		:placeholder="placeholder"
		v-on="listeners"
		v-model="model"
		)

</template>
<script>
import { omit } from 'lodash'

export default {
	props: {
		value: String,
		placeholder: String,
		type: {
			default: 'text',
			validator: value => ~[
				'text', 'password',
			].indexOf(value),
		},
	},
	computed: {
		model: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('input', value)
			},
		},
		classNames() {
			const cn = [
				'input',
				// `--size-${this.size}`,
				// `--type-${this.type}`,
			]

			return cn
		},
		listeners() {
			return {
				...omit(this.$listeners, ['input']),
			}
		}
	},
	methods: {
		setFocus() {
			this.$refs.input.focus()
		},
	}
}
</script>
<style lang="scss" scoped>
.input {
	height: 40px;
	line-height: 40px;
	padding: 0 15px;
	border: 1px solid color(gray-700);
	border-radius: 4px;
	outline: none;

	&::-webkit-input-placeholder {
		color: color(gray-700);
	}
	&::-moz-placeholder          {
		color: color(gray-700);
	}/* Firefox 19+ */
	&:-moz-placeholder           {
		color: color(gray-700);
	}/* Firefox 18- */
	&:-ms-input-placeholder      {
		color: color(gray-700);
	}
}
</style>