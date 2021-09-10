<template lang="pug">
	button.flex.items-center(v-on="listeners" :class="classNames")
		slot
			span(v-if="label" v-text="label")

</template>

<script>
export default {
	props: {
		label: String,
		type: {
			default: 'violet',
			validator: value => ~[
				'violet', 'violet-outline', 'empty',
			].indexOf(value),
		},
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
			}
		},
		classNames() {
			const cn = [
				'button',
				`--type-${this.type}`,
			]

			return cn
		},
	},
}
</script>

<style lang="scss" scoped>
.button {
	height: 40px;
	padding: 0 18px;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	border-radius: 20px;

	&:active,
	&:focus {
		outline: none;
	}

	&.--type {
		&-violet {
			color: color(white);
			background: linear-gradient(67.64deg, #2954DF 28.69%, #733BD1 82.18%);
		}
		&-violet-outline {
			color: color(violet);
			border: 2px solid color(violet);
		}
		&-empty {
			color: color(violet);
		}
	}
	&:disabled {
		color: color(gray-400)!important;
		background: color(gray-100)!important;
		cursor: default;
	}
}
</style>