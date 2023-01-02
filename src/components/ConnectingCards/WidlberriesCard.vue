<template lang="pug">
	CardTemplate(name="Wildberries")
		template(#img)
			img(src="../../assets/img/cards/WBlogo.png" width="132" height="30")
		.card__fields
			.form__input.mt-8
				v-text-field(
					outlined
					hide-details
					label="Название магазина")
				v-text-field.mt-4(
					outlined
					hide-details
					label="Как найти ключ API x64?")
				.ttp.mt-2(@click="howUseKey64")
					v-icon(color="#FA4860" size="14") mdi-help-circle-outline
					span.ml-1 Как найти ключ API x64?

				v-text-field.mt-4(
					outlined
					hide-details
					label="Ключ к новому API")
				.ttp.mt-2(@click="howUseKey")
					v-icon(color="#FA4860" size="14") mdi-help-circle-outline
					span.ml-1 Как найти ключ к новому API??
</template>

<script>
import CardTemplate from "@/components/ConnectingCards/CardTemplate";
export default {
	name: "OzonCard",
	components: {CardTemplate},
	methods: {
		howUseKey() {
			this.$modal({
				component: 'CardInfo',
				props: {
					title: 'Wildberries —  Как найти «Ключ к новому API»',
					lists: [
						'Чтобы найти «Ключ к новому API» войдите в личный кабинет «WB Партнеры» и перейдите в настройки.',
						'Нажмите «Доступ к новому API».',
						'Создайте и скопируйте новый ключ.'
					]
				}
			})
		},
		howUseKey64() {
			this.$modal({
				component: 'CardInfo',
				props: {
					title: 'Wildberries —  Как найти «Ключ API x64»',
					lists: [
						'Чтобы найти «Ключ API x64» зайдите в личный кабинет «WB партнеры».',
						'Отройте «Настройки» и перейдите в раздел «Доступ к API».',
						'Скопируйте ключ.',
					]
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	border-radius: 8px;
	padding: 24px 18px;
	width: 395px;
	background-color: white;
	@media screen and (max-width: 1280px) {
		width: 320px;
	}
	&__logo {
		height: 40px;
	}
}
.lightred {
	background-color: #FA4860;
}
.ttp {
	cursor: pointer;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.15px;
	color: #FA4860;
}
</style>
