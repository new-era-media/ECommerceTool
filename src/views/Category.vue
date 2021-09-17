<template lang="pug">
.category
	Menu(title="Настройки категории Кофе в зернах")
	.container
		.category__wrap
			.category__text Эти настройки будут по-умолчанию использоваться в дашборде и разделе SKU брендов
			.category__list.flex.justify-between
				.category__item
					CategoryFilter(:filter="brands" @change="change")
						template(#icon)
							.category__item-icon.--blue
				.category__item
					CategoryFilter(:filter="competitors" @change="change")
						template(#icon)
							.category__item-icon.--orange
				.category__item
					CategoryFilter(:filter="retailers" @change="change")
				.category__item
					CategoryFilter(:filter="keywords" @change="change")
			Button.category__save(type="violet" :disabled="isEmpty") Сохранить настройки и перейти к дашборду
			.category__text Для показа данных мониторинга выберите минимум 1 бренд как свой или близкого конкурента, а также ритейлера
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Button from '@/components/Button/Button.vue'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter.vue'

export default {
	components: { Menu, Button, CategoryFilter },
	data() {
		return {
			options: [
				{
					value: false,
					label: 'ACRNM',
				},
				{
					value: false,
					label: 'Adfsdfsdf',
				},
				{
					value: false,
					label: 'Adsdsfgsdg',
				},
				{
					value: false,
					label: 'Afghh',
				},
				{
					value: false,
					label: 'Abmnm',
				},
				{
					value: false,
					label: 'BCRNM',
				},
				{
					value: false,
					label: 'Bdfsdfsdf',
				},
				{
					value: false,
					label: 'Bdsdsfgsdg',
				},
				{
					value: false,
					label: 'Bfghh',
				},
				{
					value: false,
					label: 'Bbmnm',
				},
				{
					value: false,
					label: 'CCRNM',
				},
				{
					value: false,
					label: 'Cdfsdfsdf',
				},
				{
					value: false,
					label: 'Cdsdsfgsdg',
				},
				{
					value: false,
					label: 'Cfghh',
				},
				{
					value: false,
					label: 'Cbmnm',
				}
			],
			filters: {
				brands: false,
				competitors: false,
				retailers: false,
				keywords: false,
			}
		}
	},
	computed: {
		brands() {
			return {
				slug: 'brands',
				title: 'Наши бренды',
				placeholder: 'Название бренда',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			}
		},
		competitors() {
			return {
				slug: 'competitors',
				title: 'Близкие конкуренты',
				placeholder: 'Название бренда',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			}
		},
		retailers() {
			return {
				slug: 'retailers',
				title: 'Ритейлеры',
				placeholder: 'Название ритейлера',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			}
		},
		keywords() {
			return {
				slug: 'keywords',
				title: 'Ключевые запросы',
				placeholder: 'Ключевые запросы',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			}
		},
		isEmpty() {
			return !this.filters.brands || !this.filters.competitors || !this.filters.retailers || !this.filters.keywords
		}
	},
	methods: {
		change(data) {
			console.log('filter change')
			this.filters[data.filter.slug] = data.checked.length
		}
	}
}
</script>

<style lang="scss" scoped>
.category {
	&__wrap {
		padding: 8px 24px;
	}
	&__text {
		font-size: 14px;
		line-height: 1.42;
	}
	&__list {
		margin-top: 26px;
	}
	&__item {
		width: 23.5%;

		&-icon {
			width: 16px;
			height: 16px;
			margin-right: 8px;
			border-radius: 50%;
			border: 3px solid color(white);

			&.--blue {
				border-color: color(blue-bright);
			}
			&.--orange {
				border-color: color(orange);
			}
		}
	}
	&__save {
		margin-top: 30px;
		margin-bottom: 18px;
	}
}
</style>