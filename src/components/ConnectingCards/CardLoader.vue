<template lang="pug">
	.loader.mt-8
		InfinityLoader
		.mt-2 Подключаем {{ name }} магазина...
</template>

<script>
import InfinityLoader from "@/components/ConnectingCards/InfinityLoader";
export default {
	name: "CardLoader",
	components: {InfinityLoader},
	props: {
		name: {
			type: String,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.loader {
	max-width: 355px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #212121;
}
</style>
