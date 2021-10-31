export const TimingResolution = {
	ms: 1,
	s: Math.pow(1000, 1),
	m: Math.pow(1000, 2),
}

export default (timingResolution = TimingResolution.s, minTrackedMS = 600) => ({
	props: {
		track: Boolean,
	},
	data() {
		return {
			trackedTime: null,
		}
	},
	methods: {
		startTrack() {
			if(!this.track) return

			this.trackedTime = new Date().getTime()
		},
		endTrack() {
			if(!this.track) return

			const diff = new Date().getTime() - this.trackedTime

			if(diff > minTrackedMS) {
				this.$emit('track-end', diff / timingResolution)
			}
		},
	},
})
