<template lang="pug">
	.input(:class="{'--focus': isFocus}")
		.input__placeholder
			span(v-show="isVisiblePlaceholder") {{placeholder}}
		input.input__el(
			ref="input"
			type="text",
			:placeholder="placeholder"
			v-on="listeners"
			@focus="focusHandler"
			@blur="blurHandler"
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
	data() {
		return {
			isFocus: false,
		}
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
		listeners() {
			return {
				...omit(this.$listeners, ['input']),
			}
		},
		isVisiblePlaceholder() {
			return this.model.length
		},
	},
	methods: {
		setFocus() {
			this.$refs.input.focus()
		},
		focusHandler() {
			this.isFocus = true
		},
		blurHandler() {
			this.isFocus = false
		},
	}
}
</script>
<style lang="scss" scoped>
.input {
	border-bottom: 1px solid color(gray-light);

	&.--focus {
		border-bottom: 1px solid transparent;

		.input__placeholder {
			color: color(red-light)
		}
	}

	&__placeholder {
		min-height: 16px;
		color: color(gray-extralight);
		font-size: 13px;
		line-height: 1.23;
	}

	&__el {
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 17px;
		font-weight: 600;
		border-bottom: 2px solid transparent;
		outline: none;

		&:focus {
			border-bottom: 2px solid color(red-light);
		}
	}

	&::-webkit-input-placeholder {
		color: color(gray-600);
	}
	&::-moz-placeholder          {
		color: color(gray-600);
	}/* Firefox 19+ */
	&:-moz-placeholder           {
		color: color(gray-600);
	}/* Firefox 18- */
	&:-ms-input-placeholder      {
		color: color(gray-600);
	}
}
</style>