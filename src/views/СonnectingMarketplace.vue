<template lang="pug">
	.connecting.d-flex.flex-column.justify-center.align-center
		.connecting__icon
			v-icon(color="#212121" size="32") mdi-cog
		.connecting__title.mt-4.mx-3 Подключите свои магазины в маркетплейсах
		.connecting__subtitle.mt-2.mx-3 После подключения и загрузки данных Вы увидите статистику в разделе Аналитика
		.connecting__cards.d-flex.flex-wrap.justify-center.mt-8
			OzonCard.mx-3.my-4
			WildberiesCard.mx-3.my-4
			YandexCard.mx-3.my-4
</template>

<script>
import OzonCard from "@/components/ConnectingCards/OzonCard";
import WildberiesCard from "@/components/ConnectingCards/WidlberriesCard";
import YandexCard from "@/components/ConnectingCards/YandexCard";
export default {
	name: "ConnectingMarketplace",
	components: {YandexCard, WildberiesCard, OzonCard}
}
</script>

<style lang="scss" scoped>
.connecting {
	width: 100%;
	&__title {
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		color: #212121;
	}
	&__subtitle {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		letter-spacing: 0.15px;
		color: #212121;
	}
	&__cards {
		@media screen and (max-width: 1060px) {
			flex-direction: column;
		}
	}
}
</style>
