<template lang="pug">
	v-data-table.virtual-scroll.mt-6(
		:headers="headers"
		:items="tableData"
		disable-pagination
		fixed-header
		:loading="loading"
		hide-default-footer
		mobile-breakpoint="0"
		:height="height"
		width="100%"
	)
		v-progress-linear(v-slot:progress color="blue" indeterminate)
		template(v-slot:item="{item, index}")
			template
				tr.lazy(:class="index === tableData.length - 1 ? 'footer' : ''" @click.stop="handleClick(index)")
					slot(name="row" :item="item")

</template>

<script>
export default {
	name: "LazyTable",
	props: {
		tableData: {
			type: Array,
			required: true,
		},
		headers: {
			type: Array,
			required: true,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		lazyLoad: {
			type: Boolean,
			default: true,
		},
		height: {
			type: String,
			default: 'auto',
		}
	},
	data: () => {
		return {
			observer: null,
			number: 0,
		}
	},
	mounted() {
		if (this.lazyLoad) {
			this.useObs()
		}
	},
	destroyed() {
		if (this.lazyLoad) {
			this.observer.disconnect();
		}
	},
	watch: {
		tableData: {
			handler() {
				if (this.lazyLoad) {
					this.$nextTick(()=> {
						const node = document.querySelector('.footer')
						this.observer.observe(node);
					})
				}
			}
		}
	},
	methods: {
		onIntersect (entries) {
			this.number = entries[0].target.getAttribute('number')
		},
		useObs() {
			const options = {
				root: document.querySelector(".virtual-scroll"),
				rootMargin: "0px",
				threshold: .1,
			}

			this.observer = new IntersectionObserver((entries, obs) => {
				entries.forEach(({ target, isIntersecting}) => {
					if (!isIntersecting) {
						return;
					}

					if (isIntersecting && target) {
						obs.unobserve(target);
						this.addNewFields()
					}
				})
			}, options);

			const node = document.querySelector('.footer')
			this.observer.observe(node);
		},
		addNewFields() {
			this.$emit('update')
		},
		handleClick(value) {
			this.$emit('handle-click', value)
		},
	}
}
</script>

<style scoped>
.virtual-scroll {
	overflow: auto;
}
td {
	text-align: center;
}
.table-col {
	text-align: left;
}
</style>
