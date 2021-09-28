<template lang="pug">
	a(v-if="native" :class="classNames" v-bind="$attrs" v-on="$listeners")
		slot
	RouterLink(v-else :class="classNames" v-bind="$attrs" v-on="$listeners")
		slot
</template>

<script>
	export default {
		props: {
			native: Boolean,
			unstyled: Boolean,
		},
		computed: {
			classNames() {
				return {
					link: !this.unstyled,
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
.link {
	position: relative;
	display: inline-block;
	line-height: 24px;
	color: color(primary);
	cursor: pointer;

	&:after {
		content: '';
		position: absolute;
		width: 0;
		height: 3px;
		bottom: -1px;
		left: 0;
		transition: width 0.3s ease-out;
	}

	&:hover {
		color: color(violet-dark);

		&:after {
			width: 100%;
			background: linear-gradient(67.64deg, color(blue) 28.69%, color(violet-bright) 82.18%);
			transition: width 0.3s ease-in;
		}

	}
}
</style>