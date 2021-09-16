<template lang="pug">
	.checkbox.flex.items-center(:class="classNames" @click="change")
		.checkbox__icon.flex.justify-around.items-center
			CheckIcon.checkbox__icon-check(:size="18" fillColor="#5744D6")
		.checkbox__label {{label}}

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
			required: true
		},
		value: [String, Boolean],
	},
	computed: {
		classNames() {
			let cn = [
				this.value ? '--active' : '',
				this.disabled ? '--disabled' : '',
			]

			return cn
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
		border-radius: 4px;
		border: 2px solid color(gray-500);

		&-check {
			display: none;
		}
	}
	&__label {
		margin-left: 8px;
	}

	&.--active {
		background-color: rgba(color(violet), 0.05);
		.checkbox__icon {
			border-color: color(violet);

			&-check {
				display: block;
			}
		}
		.checkbox__label {
			color: color(violet);
		}
	}
	&.--disabled {
		opacity: 0.5;
		cursor: default;
	}
}
</style>
