<template lang="pug">
	.addon(:class="classNames")
		.addon__ref
			slot
		.addon__el
			slot(name="addon")
</template>

<script>
export default {
	props: {
		right: Boolean,
	},
	computed: {
		classNames() {
			return {
				'--right': this.right
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.addon {
	position: relative;
	display: inline-flex;
	width: 100%;

	&__ref {
		flex-grow: 1;
		max-width: 100%;
	}

	&__el {
		position: absolute;
		left: -12px;

		@at-root .addon.--right & {
			left: unset;
			right: -12px;
		}
	}
}
</style>