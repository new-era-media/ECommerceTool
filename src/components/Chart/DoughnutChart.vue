<template lang="pug">
	.chart
		canvas(ref="chart")
</template>

<script>
import chart from '@/mixins/chart'
export default {
	name: 'DoughnutChart',
	type: 'doughnut',
	mixins: [chart],
	overrides: {
		scales: {
			x: {
				display: false,
			},
			y: {
				display: false,
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.chart {
	position: relative;
	height: 300px;
}
</style>
