<template lang="pug">
.category(:key="id")
	template(v-if="loading")
		.container Loading...
	template(v-else)
		Header(:nav="nav")
		Menu(:title="categoryTitle")
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
						CategoryFilter(:filter="search" @change="change")
				Button.category__save(type="violet" :disabled="isEmpty" @click="save") Сохранить настройки и перейти к дашборду
				.category__text Для показа данных мониторинга выберите минимум один свой бренд или близкого конкурента, а также ритейлера.
</template>

<script>
import Header from '@/components/Layout/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
import Button from '@/components/Button/Button.vue'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter.vue'

export default {
	components: {
		Header,
		Menu,
		Button,
		CategoryFilter
	},
	data() {
		return {
			loading: true,
			brandsDefault: {
				slug: 'brands',
				title: 'Наши бренды',
				placeholder: 'Название бренда',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			},
			competitorsDefault: {
				slug: 'competitors',
				title: 'Близкие конкуренты',
				placeholder: 'Название бренда',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			},
			retailersDefault: {
				slug: 'retailers',
				title: 'Ритейлеры',
				placeholder: 'Название ритейлера',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			},
			searchDefault: {
				slug: 'search',
				title: 'Ключевые запросы',
				placeholder: 'Ключевые запросы',
				empty: 'По этой катетегории пока не добавленно ключевых запросов. Если они вам нужны, пожалуйста, напишите вашему менеджеру с просьбой их добавить. '
			},
			brands: null,
			competitors: null,
			retailers: null,
			search: null,
			filters: {
				brands: false,
				competitors: false,
				retailers: false,
				search: false,
			},
			nav: [
				{
					page: 'category',
					title: 'Настройки категории',
					active: true,
				}
			],
			categories: [],
		}
	},
	mounted() {
		this.fetch()
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		categoryTitle() {
			let category = this.categories.find((el) => el.id === this.id)
			return `Настройки категории ${category.name}`
		},
		isEmpty() {
			return !(this.filters.brands || this.filters.competitors) || !this.filters.retailers
		},
	},
	methods: {
		async fetch() {
			try {
				let [listResp, categoryResp] = await Promise.all([
					this.$api.common.getCategoryList(),
					this.$api.common.getCategory(this.id),
				])
				this.categories = listResp

				this.brands = { ...this.brandsDefault, options: categoryResp.brands}
				this.competitors = { ...this.competitorsDefault, options: categoryResp.competitors}
				this.retailers = { ...this.retailersDefault, options: categoryResp.retailers}
				this.search = { ...this.searchDefault, options: categoryResp.search}

				this.loading = false
			} catch (error) {
				let err = error ? error.data.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		change(data) {
			this.filters[data.filter.slug] = data.checked.length ? data.checked.map((el) => {
				return {id: el.id}
			}) : false
		},
		async save() {
			try {
				let resp = await this.$api.common.editCategorySettings(this.id, this.filters)
				if (resp) {
					this.$toast.success('Настройки категории сохранены')
				}
			} catch (error) {
				let err = error ? error.data.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
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