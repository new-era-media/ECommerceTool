<template lang="pug">
.mark(:class="classNames")

</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'black',
		},
	},
	computed: {
		classNames() {
			const cn = [
				`--${this.color}`,
			]

			return cn
		},
	}
}
</script>

<style lang="scss" scoped>
.mark {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	border: 2px solid color(gray-700);

	&.--black {
		border-color: color(black);
	}
	&.--blue {
		border-color: color(blue-bright);
	}
	&.--orange {
		border-color: color(orange);
	}
	&.--gray {
		border-color: color(gray-700);
	}
}
</style>