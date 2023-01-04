<template lang="pug">
	Popper(
		:trigger="trigger"
		:force-show="force"
		:options="options"
		:root-class="rootClasses"
		:append-to-body="appendToBody"
		@show="show"
		@hide="hide"
	)
		slot(name="reference" slot="reference")

		.popper
			slot

</template>

<script>
import Tracker from '@/mixins/tracker'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'

export default {
	components: { Popper },
	mixins: [Tracker()],
	props: {
		appendToBody: Boolean,
		flat: Boolean,
		trigger: {
			type: String,
			default: 'hover',
		},
		offset: {
			type: String,
			default: '0, 0',
		},
		force: Boolean,
		placement: {
			type: String,
			default: 'bottom',
		},
		type: {
			default: 'light',
		},
	},
	computed: {
		options() {
			return {
				placement: this.placement,
				modifiers: {
					offset: {
						offset: this.offset,
					},
				},
			}
		},
		rootClasses() {
			const classes = [`tooltip--${this.type}`]

			if(this.flat) {
				classes.push('tooltip--flat')
			}

			return classes.join(' ')
		},
	},
	methods: {
		show() {
			this.$emit('show')
			this.startTrack()
		},
		hide() {
			this.$emit('hide')
			this.endTrack()
		},
	},
}
</script>

<style lang="scss">
@mixin popper-type($bg, $fg) {
	.popper {
		background: color($bg);
		color: color($fg);
	}

	@each $side in (bottom, right, left, top) {
		.popper[x-placement^="#{$side}"] .popper__arrow {
			border-#{$side}-color: color($bg) !important;
		}
	}
}

.popper {
	box-shadow: 0 20px 45px rgba(24, 26, 28, 0.16), 0px -1px 6px rgba(29, 33, 38, 0.05);
	border-radius: 4px;
	//padding: 15px 20px;
	line-height: 19px;
	min-width: 240px;
	text-align: left;
	max-width: 450px;
	border: 1px solid color(gray-400);
}

.tooltip--dark {
	@include popper-type(black-80, white);

	.popper {
		min-width: 80px;
		box-shadow: none;
		border: none;
	}
	.popper__arrow {
		display: none;
	}
}

.tooltip--light {
	@include popper-type(white, primary)
}

.tooltip--flat .popper {
	padding: 0;
}
</style>
