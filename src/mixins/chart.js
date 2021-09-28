import { Chart } from '@/plugins/chart'
import merge from 'lodash/merge'
export default {
	props: ['chartData', 'options', 'plugins'],
	mounted() {
		this.chart = new Chart(this.$refs.chart, {
			type: this.$options.type,
			data: this.chartData,
			options: merge({
				// default
				scales: {
					x: {
						grid: {
							display: false
						},
						ticks: {
							color: '#718096'
						}
					},
				}
			}, this.$options.overrides || {}, this.options),
			plugins: this.plugins,
		})
	},
	watch: {
		chartData(data) {
			this.chart.data = data
			this.chart.update()
		},
	}
}