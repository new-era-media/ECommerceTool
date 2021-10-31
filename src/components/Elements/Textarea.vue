<template lang="pug">
	textarea(
		:class="classNames"
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
				'textarea',
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
	}
}
</script>
<style lang="scss" scoped>
.textarea {
	border: 1px solid color(gray-700);
	border-radius: 4px;
	outline: none;
	padding: 6px 15px;
	resize: none;

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