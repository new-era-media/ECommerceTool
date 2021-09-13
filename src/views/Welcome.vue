<template lang="pug">
.welcome.container
	h1.welcome__title Добро пожаловать в Ecomm monitoring
	.welcome__list.flex.justify-between
		.welcome__item
			PointerIcon.welcome__item-icon
			.welcome__item-title.flex.justify-center.items-center Выберите категорию
			.welcome__item-content.flex.flex-wrap.justify-center
				Button.welcome__item-product(v-for="product of products" :key="product.id"
					type="violet-outline" @click="chooseProduct(product)"
				) {{product.title}}
			ArrowIcon.welcome__item-next
		.welcome__item
			SettingsIcon.welcome__item-icon
			.welcome__item-title.flex.justify-center.items-center Настройте категорию
			.welcome__item-text
				| Укажите Ваши интересы в рамках категории: свои бренды, близких конкурентов для сравнения и ритейлеров.
			ArrowIcon.welcome__item-next
		.welcome__item
			CalendarIcon.welcome__item-icon
			.welcome__item-title.flex.justify-center.items-center Настройте актуальный вид дашборда, SKU брендов
			.welcome__item-text
				| Настройте фильтр периода статистики или данные по конкретным брендам. Еще, Вы можете скрывать виджеты и графики, которые вам не нужны и менять их порядок

</template>
<script>
import PointerIcon from '@/assets/svg/pointer.svg'
import SettingsIcon from '@/assets/svg/settings.svg'
import CalendarIcon from '@/assets/svg/calendar.svg'
import ArrowIcon from '@/assets/svg/arrow.svg'
import Button from '@/components/Button/Button.vue'

export default {
	components: { PointerIcon, SettingsIcon, CalendarIcon, ArrowIcon, Button },
	data() {
		return {
			products: [
				{
					id: 1,
					title: 'Кофейные капсулы',
				},
				{
					id: 2,
					title: 'Кофе в зернах',
				},
				{
					id: 3,
					title: 'Собачий корм',
				},
				{
					id: 4,
					title: 'Кошачий корм',
				},
				{
					id: 5,
					title: 'Сладкие батончики',
				}
			]
		}
	},
	methods: {
		chooseProduct(product) {
			console.log('chooseProduct:', product.title)
		}
	}
}
</script>
<style lang="scss" scoped>
.welcome {
	margin-top: 24px;
	padding: 0 30px;

	&__title {
		text-align: center;
	}
	&__list {
		margin-top: 60px;
	}
	&__item {
		position: relative;
		width: 32%;
		text-align: center;

		&-icon {
			height: 42px;
			margin: 0 auto;
		}
		&-title {
			height: 54px;
			margin-top: 32px;
			font-weight: 600;
			font-size: 20px;
			line-height: 1.35;
		}
		&-product {
			margin: 10px 10px 0 10px;
		}
		&-text {
			margin-top: 14px;
			font-size: 16px;
			line-height: 1.75;
			letter-spacing: 0.5px;
		}
		&-next {
			position: absolute;
			width: 46px;
			height: 24px;
			top: 10px;
			right: -25px;
		}
	}
}
</style>