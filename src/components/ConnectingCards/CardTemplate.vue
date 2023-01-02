<template lang="pug">
	.card(:class="{lightred: false}")
		pre {{ src }}
		.card__logo
			slot(name="img")
		template
			slot
			Button.mt-4 Подключить магазин {{ name }}
		CardLoader(:name="name")
		CardConnected(:name="name")
		CardError(:name="name")

		.add.d-flex.align-center.mt-4
			v-icon(color="#9C9C9C") mdi-plus
			span.ml-1 Добавить еще магазин
</template>

<script>
import Button from "@/components/Button/Button";
import CardConnected from "@/components/ConnectingCards/CardConnected";
import CardLoader from "@/components/ConnectingCards/CardLoader";
import CardError from "@/components/ConnectingCards/CardError";
export default {
	name: "CardTemplate",
	components: {CardError, CardLoader, CardConnected, Button},
	props: {
		name: {
			type: String,
			required: true,
		},
		src: {
			type: String,
			required: true,
		}
	},
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
</style>
