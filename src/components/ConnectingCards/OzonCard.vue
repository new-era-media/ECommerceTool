<template lang="pug">
	CardTemplate(name="ozon")
		template(#img)
			img(src="../../assets/img/cards/ozonlogo.png" width="132" height="30")
		.card__fields
			.form__input.mt-8
				v-text-field(
					outlined
					hide-details
					label="Название магазина" dense)
				v-text-field.mt-4(
					outlined
					hide-details
					label="Client ID" dense)
				v-text-field.mt-4(
					outlined
					hide-details
					label="Ключ API" dense)
				.ttp.mt-2(@click="setting")
						v-icon(color="#FA4860" size="14") mdi-help-circle-outline
						span.ml-1 Как настроить?
</template>

<script>
import CardTemplate from "@/components/ConnectingCards/CardTemplate";
export default {
	name: "OzonCard",
	components: {CardTemplate},
	methods: {
		setting() {
			this.$modal({
				component: 'CardInfo',
				props: {
					title: 'Настройка OZON',
					lists: [
							'Зайдите в личный кабинет «Ozon Seller».',
							'Отройте «Настройки».',
							'В разделе «Seller API» выберите «API и ключи».',
							'Установите тип токена «Администратор», присвойте ему название и нажмите кнопку «Создать ключ».',
							'Скопируйте появившийся ключ и Client ID.'
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
