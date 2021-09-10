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
				this.$emit('textarea', value)
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
				...omit(this.$listeners, ['textarea']),
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.textarea {
	border: 1px solid #9E9E9E;
	border-radius: 4px;
	outline: none;
	padding: 6px 15px;
	resize: none;
}
</style>