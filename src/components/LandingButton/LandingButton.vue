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
			default: 'red',
			validator: value => ~[
				'red', 'red-outline',
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
	padding: 20px 25px;
	font-size: 15px;
	font-weight: 600;
	line-height: 1.2;
	border-radius: 8px;

	&:active,
	&:focus {
		outline: none;
	}

	&.--type {
		&-red {
			color: color(white);
			background-color: color(red-light);
			border: 4px solid color(red-light);

			&:hover {
				box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 2px 2px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.2);
			}
		}
		&-red-outline {
			color: color(red-light);
			border: 4px solid color(red-light);


		}
	}
}
</style>