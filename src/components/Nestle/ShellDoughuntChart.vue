<template lang="pug">
	.chart
		DoughnutChart(
			:chartData="chartData"
			:options="options"
		)
		.chart__info
			.chart__info-percent {{ percent }}%
			div of
			.chart__info-data {{ value }} products are availible
</template>

<script>
import DoughnutChart from "@/components/Chart/DoughnutChart";
export default {
	name: "ShellDoughuntChart",
	components: {
		DoughnutChart,
	},
	props: {
		options: {
			type: Object,
			required: true
		},
		chartData:  {
			type: Object,
			required: true
		},
		percent: {
			type: Number,
			required: true
		},
		value: {
			type: Number,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.chart{
	position: relative;
	&__info{
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		&-percent{
			font-weight: 800;
			font-size: 24px;
		}
	}
}
</style>