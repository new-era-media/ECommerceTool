<template lang="pug">
	.page
		.page__inner.container.flex.justify-between.items-center
			.page__content.relative
				slot(name="content")
					slot(name="bg")
						.page__bg
							EllipseItem(size="xl" type="left")
					.relative
						img.page__logo(src="~@/assets/img/logo.png")
						h1.page__title
							| Система мониторинга
							br
							| рынка электронной торговли
						slot(name="bottom")
			.page__form.relative.flex.justify-around.items-center
				slot(name="form")
</template>
<script>
import EllipseItem from '@/components/Elements/EllipseItem.vue'

export default {
	components: { EllipseItem },

}

</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	max-height: 100vh;
	overflow: hidden;

	&__inner {
		width: 100%;
		height: 100%;
		max-height: 880px;
		padding: 20px 0;
	}

	&__content {
		width: 45%;
		margin-left: 108px;
	}
	&__bg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-672px, -116px);
	}
	&__logo {
		width: 334px;
	}
	&__title {
		margin-top: 2px;
		margin-left: 40px;
	}
	&__btn {
		margin-top: 30px;
		margin-left: 40px;
	}
	&__form {
		width: 41%;
		height: 100%;
		padding: 74px 100px 74px 108px;
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
		background-color: color(white);
		//overflow: hidden;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: -100%;
			width: 100%;
			height: 100%;
			background-color: color(white);
		}
	}
}
</style>