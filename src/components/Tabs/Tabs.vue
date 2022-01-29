<template lang="pug">
.tabs(:class="classNames")
	.tabs__header
		.tabs__label(v-for="(tab, i) of tabs" :key="tab._uid" :class="labelClassNames(tab, i)" @click="openTab(i)") {{tab.title}}

	.tabs__content
		slot
</template>

<script>
export default {
	props: {
		defaultTabIndex: {
			default: 0,
		},
		type: {
			default: 'violet',
			validator: value => ~[
				'violet', 'gray',
			].indexOf(value),
		},
	},
	data() {
		return {
			active: null,
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.openTab(this.defaultTabIndex)
		})
	},
	computed: {
		tabs() {
			this.active

			console.log(this.$children)

			return this.$children
		},
		classNames() {
			const cn = [
				`--type-${this.type}`,
			]

			return cn
		},
	},
	methods: {
		labelClassNames(tab, i) {
			const cn = []

			if(i === this.active) {
				cn.push('--active')
			}

			return cn
		},
		openTab(index) {
			this.active = index

			this.$children
				.forEach((tab, i) => {
					tab.setActive(i === index)
				})
		},
	},
}
</script>

<style lang="scss" scoped>
.tabs {
	display: flex;
	flex-wrap: wrap;

	&__content {
		width: 100%;
	}

	&__header {
		border-radius: 6px;
		padding: 2px;
		display: flex;
		margin-right: auto;
	}
	&__label {
		position: relative;
		color: color(gray-700);

		&.--active {
			color: color(black);

			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 3px;
				bottom: -1px;
				left: 0;
				background: linear-gradient(67.64deg, color(blue) 28.69%, color(violet-bright) 82.18%);
				transition: width 0.3s ease-in;
			}

		}
	}
	&.--type {
		&-violet {
			& .tabs__label {
				&.--active {
					&:after {
						background: linear-gradient(67.64deg, color(blue) 28.69%, color(violet-bright) 82.18%);
					}
				}
			}
		}
		&-gray {
			& .tabs__label {
				&.--active {
					&:after {
						background: color(gray-500);
					}
				}
			}
		}
	}
}
</style>
