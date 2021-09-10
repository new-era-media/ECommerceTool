<template lang="pug">
	.ellipse(:class="classNames")
		EllipseSvg(v-if="smallEllipse")
		EllipseSvgXXl(v-else)

</template>

<script>
import EllipseSvg from '@/assets/svg/ellipse.svg'
import EllipseSvgXXl from '@/assets/svg/ellipse-xxl.svg'

export default {
	components: { EllipseSvg, EllipseSvgXXl },
	props: {
		size: {
			default: 'md',
			validator: value => ~['sm', 'md', 'lg', 'xl', 'xxl'].indexOf(value),
		},
		opacity: Boolean,
		type: {
			default: 'right',
			validator: value => ~['right', 'left'].indexOf(value),
		},
	},
	computed: {
		classNames() {
			const cn = [
				`--size-${this.size}`,
				`--type-${this.type}`,
				this.opacity && '--opacity',
			]

			return cn
		},
		smallEllipse() {
			return ~['sm', 'md', 'lg'].indexOf(this.type)
		}
	}
}
</script>

<style lang="scss" scoped>
.ellipse {
	&.--size {
		&-sm {
			width: 450px;
			height: 117px;
		}

		&-md {
			width: 776px;
			height: 208px;
		}
		&-lg {
			width: 776px;
			height: 208px;
		}
		&-xl {
			width: 1622px;
			height: 421px;
		}
		&-xxl {
			width: 2160px;
			height: 562px;
		}
	}
	&.--type {
		&-left {
			transform: rotate(21.75deg);
		}
		&-right {
			transform: rotate(-21.75deg);
		}
	}
	&.--opacity {
		opacity: 0.4;
	}
}
</style>