import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	//PieController,
	//PolarAreaController,
	//RadarController,
	//ScatterController,
	CategoryScale,
	LinearScale,
	//LogarithmicScale,
	//RadialLinearScale,
	TimeScale,
	//TimeSeriesScale,
	//Decimation,
	//Filler,
	//Legend,
	//Title,
	Tooltip
} from 'chart.js'

Chart.register(
		ArcElement,
		LineElement,
		BarElement,
		PointElement,
		BarController,
		BubbleController,
		DoughnutController,
		LineController,
		CategoryScale,
		LinearScale,
		TimeScale,
		Tooltip
)

import Vue from 'vue'
import 'chartjs-adapter-dayjs-3'
import ChartDataLabels from 'chartjs-plugin-datalabels'


const defaultColor = '#2196F3'

Chart.overrides.line.spanGaps = true
Chart.overrides.doughnut.borderWidth = 0

let d = Chart.defaults
d.color = '#A0AEC0'
d.font.family = 'OpenSans'
d.font.size = 10
d.animation = false
d.maintainAspectRatio = false
d.locale = 'en'
//d.scale.ticks.callback = Vue.prototype.$utils.formatNumber
d.scale.ticks.format = { notation: 'compact' }
d.scale.ticks.maxRotation = 0
d.scale.ticks.padding = 16
d.scale.ticks.backdropPadding = 0
d.scale.title.padding = 0
d.scale.grid.color = '#E2E8F0'
d.scale.grid.drawBorder = false
d.scale.grid.drawTicks = false
d.scales.time.time.tooltipFormat = 'll'
d.scales.linear.ticks.maxTicksLimit = 4
d.scales.linear.ticks.autoSkipPadding = 100
d.scales.time.ticks.maxTicksLimit = 4
d.scales.time.ticks.autoSkipPadding = 100


let e = d.elements
e.point.radius = 0
e.point.hoverRadius = 4
e.point.borderWidth = 1
e.point.borderColor = 'rgba(0,0,0,0)'
e.line.fill = false
e.line.borderWidth = 2.5
e.line.backgroundColor = defaultColor
e.line.borderColor = defaultColor
e.bar.backgroundColor = defaultColor

d.plugins.legend = false
/*let l = d.plugins.legend
l.position = 'bottom'
l.align = 'start'
l.labels.usePointStyle = true
l.labels.color = '#434C5D'
l.labels.boxWidth = 8
l.labels.padding = 30*/

const t = d.plugins.tooltip
t.intersect = false
t.backgroundColor = '#FFFFFF'
t.borderColor = '#E0E0E0'
t.borderWidth = 1
t.titleColor = '#212121'
t.bodyColor = '#212121'
t.padding = {
	x: 20,
	y: 15
}
t.cornerRadius = 5
t.caretPadding = 10
t.titleMarginBottom = 10
t.bodySpacing = 5
t.usePointStyle = true
t.boxWidth = 10
t.multiKeyBackground = defaultColor
t.callbacks.label = function(context) {
	const label = context.dataset.label || ''
	return ' ' + context.formattedValue + (label ? ' ' + label : '')
}
t.callbacks.labelColor = function (context) {
	const color = context.dataset.backgroundColor || defaultColor
	return {
		borderColor: '#FFFFFF',
		backgroundColor: Array.isArray(color) ? color[context.dataIndex] : color
	}
}


d.set('plugins.datalabels', {
	backgroundColor: '#FFFFFF',
	borderColor: '#E0E0E0',
	borderWidth: 1,
	borderRadius: 12,
	color: function (c) {
		const data = c.dataset.data[c.dataIndex]
		const val = typeof data.y !== 'undefined' ? data.y : data
		return val > 0 ? '#F44336' : 'red'
	},
	display: 'auto',
	clip: false,
	font: {
		size: 10,
		lineHeight: .8,
	},
	padding: {
		top: 5,
		left: 8,
		bottom: 5,
		right: 8
	},
	/*opacity: function(c) {
		return c.dataset.data[c.dataIndex].y ? 1 : 0
	},*/
	formatter: (value) => {
		const val = typeof value.y !== 'undefined' ? value.y : value
		return (val < 0 ? '−' : '') + Vue.prototype.$utils.formatNumber(Math.abs(val))
	},
	align: 'center',
})

export { Chart, ChartDataLabels }
