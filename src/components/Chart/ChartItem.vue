<template lang="pug">
.chart-item
	.flex.justify-between.items-center
		.chart-item__title {{title}}
		.chart-item__menu
			Download.chart-item__icon(
				:size="20"
				@click="download"
			)
			DeleteOutline.chart-item__icon(
				:size="20"
				@click="remove"
			)
	.chart-item__content
		slot
</template>

<script>
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue'
import Download from 'vue-material-design-icons/Download.vue'

export default {
	components: {
		DeleteOutline,
		Download,
	},
	props: {
		title: {
			type: String,
			required: true,
		}
	},
	methods: {
		download() {
			this.$emit('download')
		},
		remove() {
			this.$emit('remove')
		},
	},
}
</script>

<style lang="scss" scoped>
.chart-item {
	padding: 16px;
	background-color: color(white);
	border-radius: 8px;

	&__menu {
		display: none;
		color: color(gray-700);
	}

	&:hover &__menu {
		display: flex;
		align-items: baseline;
	}

	&_hover &__title {
		color: color(primary);
	}

	&__icon {
		margin: 0 12px;
	}

	&__title {
		min-height: 20px;
		font-weight: 600;
		color: color(gray-700);
	}
	&__content {
		padding-top: 16px;
		min-height: 400px;
	}
}
</style>