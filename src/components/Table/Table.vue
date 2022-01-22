<template lang="pug">
	.curtain(ref="curtain")
		.curtain__box(:class="{ '--active': hasCurtain }")
		.wrap(@scroll="onScroll" ref="wrap")
			table.table(ref="table" :class="{ '--scrolled': scrolled }")
				thead.thead
					tr
						th.th(
							v-for="col of columns"
							:style="colStyles(col)"
							:class="colClassNames(col)"
						)
							.th__cell(:class="cellClass(col)")
								slot(
									v-if="col.slotCaption"
									:name="col.slotCaption"
								)
								WithAddon(v-else :right="col.alignRight")
									.fa.far(slot="addon" v-if="sort && sort.field === col.sort") 

									.th__cell-content(:class="{'--right': col.alignRight}")
										.th__cell-title
											| {{col.title}}

										//Tooltip.th__cell-tooltip(v-if="col.tooltip" trigger="hover" placement="top" append-to-body)
											FontAwesome.far(slot="reference") 
											|  {{col.tooltip}}
				tbody.tbody
					tr.tr(v-for="(row, index) of rows")
						td.td(v-for="col of columns" :class="colClassNames(col)")
							.td__cell
								.cell(:class="cellClass(col)")
									slot(
										v-if="col.slot"
										:name="col.slot"
										:item="row"
										:value="col.value ? col.value(row, index) : null"
										:index="index"
										:col="col"
									)
									div(v-else) {{col.value(row, index)}}
		slot
</template>

<script>
import WithAddon from '@/components/Elements/WithAddon'
// import Tooltip from '@/components/Elements/Tooltip'
// import HoverOverflow from '@/components/Elements/HoverOverflow'
import { throttle, take } from 'lodash'

export default {
	props: {
		columns: Array,
		data: Array,
		sort: Object,
		maxCount: {},
	},
	components: {
		WithAddon,
	},
	data() {
		return {
			hasCurtain: false,
			scrolled: false,
		}
	},
	mounted() {
		this.hasCurtain = this.$refs.wrap.clientWidth < this.$refs.table.clientWidth
	},
	computed: {
		rows() {
			if(this.maxCount) {
				return take(this.data, this.maxCount)
			}

			return this.data
		}
	},
	methods: {
		cellClass(col) {
			return [
				col.cellClass,
				col.alignRight && 'aright',
				col.sort && this.sort && this.sort.field === col.sort && '--sort'
			]
		},
		onScroll: throttle(function () {
			this.hasCurtain = this.$refs.wrap.clientWidth + this.$refs.wrap.scrollLeft <= (this.$refs.table.clientWidth - 10)
			this.scrolled = Boolean(this.$refs.wrap.scrollLeft)
		}, 200),
		colClassNames(col) {
			const cn = {}

			if(col.fixed) {
				cn['--fixed'] = true
			}

			if(col.widthMobile) {
				cn['--mobile'] = true
			}

			return cn
		},
		colStyles(col) {
			const styles = {

			}

			if(col.width) {
				styles.width = col.width + 'px'
			}

			if(col.widthMobile) {
				styles['--mobile-width'] = (typeof col.widthMobile === 'number' ? col.widthMobile : 120) + 'px'
			}

			return styles
		}
	}
}
</script>

<style lang="scss" scoped>
.aright {
	text-align: right;
}

.curtain {
	position: relative;

	&__box {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 60px;
		background: linear-gradient(to right, rgba(color(gray-200), 0), rgba(color(gray-200), 1));
		opacity: 1;
		transition: opacity 160ms linear;
		pointer-events: none;
		user-select: none;
		z-index: 1;

		&:not(.--active) {
			opacity: 0;
		}
	}
}

.wrap {
	max-width: 100%;
	overflow-x: auto;
	position: relative;
}

.table {
	width: 100%;
	table-layout: fixed;
}

.th {
	text-align: left;
	padding: 5px 15px 0 20px;
	color: color(gray-800);
	font-weight: 400;
	font-size: 12px;
	line-height: 1.33;

	&:first-child {
		padding-left: 0;
		padding-right: 0;
	}

	&.--fixed {
		background: color(white);
		position: sticky;
		left: 0;
		z-index: 2;
	}

	&__cell {
		position: relative;

		&-content {
			display: flex;

			&.--right {
				justify-content: flex-end;
			}
		}

		&-title {
			//white-space: nowrap;
			max-width: 100%;
		}

		&-tooltip {
			margin-left: 6px;
		}


		@at-root .table.--scrolled .th.--fixed & {
			position: relative;

			&:after {
				content: '';
				position: absolute;
				right: 0;
				top: -10px;
				bottom: -10px;
				width: 1px;
				background: color(gray-200);
			}
		}
	}

	&__cell.--sort {
		color: color(gray-700);
	}
}

.td {
	padding: 10px 15px 10px 20px;

	&:first-child {
		padding-left: 0;
		padding-right: 0;
	}

	&.--fixed {
		position: sticky;
		left: 0;
		z-index: 2;
		background: color(white);

	}

	&__cell {
		@at-root .table.--scrolled .td.--fixed & {
			position: relative;

			&:after {
				content: '';
				position: absolute;
				right: 0;
				top: -10px;
				bottom: -10px;
				width: 1px;
				background: color(gray-200);
			}
		}
	}
}

.tr {
	&:first-child{
		border-top: 1px color(gray-200) solid;
	}

	border-bottom: 1px solid color(gray-300);

	&:hover {
		background-color: color(white);
		cursor: pointer;
	}
}

.thead {
	//border-bottom: 1px solid color(gray-300);
}
</style>
