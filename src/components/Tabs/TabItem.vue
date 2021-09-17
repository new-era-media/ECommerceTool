<template lang="pug">
	.tab(v-if="active")
		slot
</template>

<script>
export default {
	props: {
		title: String,
	},
	data() {
		return {
			active: false,
		}
	},
	methods: {
		setActive(value) {
			this.active = value
		},
	},
}
</script>

<style lang="scss" scoped>
.tab {

}
</style>