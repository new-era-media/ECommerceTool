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

			&:hover {
				background: linear-gradient(67.64deg, color(blue) 28.69%, color(violet-bright) 82.18%);
				box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 2px 2px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.2);
			}
			&:disabled {
				color: color(gray-600);
				background: color(gray-300);
				cursor: default;
			}
		}
		&-violet-outline {
			color: color(violet);
			border: 2px solid color(violet);

			&:hover {
				background-color: color(gray-300);
			}
			&:disabled {
				color: color(gray-600);
				border-color: color(gray-400);
				cursor: default;
			}
		}
		&-empty {
			color: color(violet);
		}
	}
}
</style>