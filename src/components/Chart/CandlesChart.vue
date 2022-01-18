<script>
import { Candlestick } from 'vue-chartjs-financial'

export default {
	extends: Candlestick,
	props: ['chartData', 'options'],
	mounted () {
		this.renderChart(this.chartData, this.options)
	},
}
</script>