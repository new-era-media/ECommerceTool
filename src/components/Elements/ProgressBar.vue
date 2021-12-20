<template lang="pug">
	Progress(
		ref="bar"
		color="#5744D6"
		:height="2"
		:trickleSpeed="150"
		:speed="320"
	)
</template>

<script>
import { vueTopprogress } from 'vue-top-progress'

export default {
	components: { Progress: vueTopprogress },
	created() {
		this.$bus.$on('progress:start', () => this.$refs.bar.start())
		this.$bus.$on('progress:stop', () => this.$refs.bar.done())
		this.$bus.$on('progress:fail', () => this.$refs.bar.fail())
	},
}
</script>
