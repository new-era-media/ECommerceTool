<template lang="pug">
	input(
		:class="classNames"
		type="text"
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
	}
}
</script>
<style lang="scss" scoped>
.input {
	height: 40px;
	line-height: 40px;
	padding: 0 15px;
	border: 1px solid #9E9E9E;
	border-radius: 4px;
	outline: none;
}
</style>