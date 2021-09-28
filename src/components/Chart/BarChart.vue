<template lang="pug">
	.chart
		canvas(ref="chart")
</template>

<script>
import chart from '@/mixins/chart'
export default {
	name: 'BarChart',
	type: 'bar',
	mixins: [chart],
}
</script>

<style lang="scss" scoped>
.chart {
	position: relative;
	height: 300px;
}
</style>