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
	color: #212121;
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
		color: #3D2F9E;

		&:after {
			width: 100%;
			background: linear-gradient(67.64deg, #426EFD 28.69%, #8D4DF9 82.18%);
			transition: width 0.3s ease-in;
		}

	}
}
</style>