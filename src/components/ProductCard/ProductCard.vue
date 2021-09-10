<template lang="pug">
	.card
		.card__content
			.card__title {{card.title}}
			.card__text {{card.text}}
		.card__img
			img(:src="getImgUrl()")
</template>
<script>
export default {
	props: {
		card: {
			type: Object,
			required: true,
		}
	},
	methods: {
		getImgUrl() {
			return require(this.card.img)
		}
	}
}
</script>
<style lang="scss" scoped>
.card {
	&__content {

	}
	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 1.35;
	}
	&__text {
		font-size: 16px;
		line-height: 1.75;
	}
}
</style>