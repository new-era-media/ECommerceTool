<template lang="pug">
.setting(:key="id")
	template(v-if="loading")
		.container Loading...
	template(v-else)
		Menu(:title="categoryTitle")
		.container
			.setting__wrap
				.setting__text Эти настройки будут по-умолчанию использоваться в дашборде и разделе SKU брендов
				.setting__list.flex.justify-between
					.setting__item
						CategoryFilter(:filter="brands" @change="change")
							template(#icon)
								.setting__item-icon.--blue
					.setting__item
						CategoryFilter(:filter="competitors" @change="change")
							template(#icon)
								.setting__item-icon.--orange
					.setting__item
						CategoryFilter(:filter="retailers" @change="change")
					.setting__item
						CategoryFilter(:filter="search" @change="change")
				Button.setting__save(type="violet" :disabled="isEmpty" @click="save") Сохранить настройки и перейти к дашборду
				.setting__text Для показа данных мониторинга выберите минимум один свой бренд или близкого конкурента, а также ритейлера.
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'
import Button from '@/components/Button/Button.vue'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter.vue'

import { findIndex, forEach } from 'lodash'

export default {
	components: {
		Menu,
		Button,
		CategoryFilter
	},
	props: {
		categories: {
			type: Array,
			default: () => [],
		}
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
			filters1: {
				brands: false,
				competitors: false,
				retailers: false,
				search: false,
			},
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		categoryTitle() {
			let category = this.categories.find((el) => el.id === this.id)
			return `Настройки категории ${category.name}`
		},
		brandsOptions() {
			return this.brands ? this.brands.options : null
		},
		competitorsOptions() {
			return this.competitors ? this.competitors.options : null
		},
		retailersOptions() {
			return this.retailers ? this.retailers.options : null
		},
		searchOptions() {
			return this.brands ? this.search.options : null
		},
		filters() {
			return {
				brands: this.brandsOptions ? this.brandsOptions.filter((item) => item.value).map((item) => {
					return { id: item.id }
				}) : false,
				competitors: this.competitorsOptions ? this.competitorsOptions.filter((item) => item.value).map((item) => {
					return { id: item.id }
				}) : false,
				retailers: this.retailersOptions ? this.retailersOptions.filter((item) => item.value).map((item) => {
					return { id: item.id }
				}) : false,
				search: this.searchOptions ? this.searchOptions.filter((item) => item.value).map((item) => {
					return { id: item.id }
				}) : false,
			}
		},
		isEmpty() {
			return !(this.filters.brands?.length || this.filters.competitors?.length) || !this.filters.retailers?.length
		},
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			try {
				const { brands, competitors, retailers, search } = await this.$api.common.getCategorySettings(this.id)
				this.brands = { ...this.brandsDefault, options: brands.map((item) => {
						return { ...item, value: item.selected, disabled: false }
					})}
				this.competitors = { ...this.competitorsDefault, options: competitors.map((item) => {
						return { ...item, value: item.selected, disabled: false }
					})}
				this.retailers = { ...this.retailersDefault, options: retailers.map((item) => {
						return { ...item, value: item.selected }
					})}
				this.search = { ...this.searchDefault, options: search.map((item) => {
						return { ...item, value: item.selected }
					})}

				this.setDisabledItems()

				this.loading = false
			} catch (error) {
				let err = error ? error.data.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		setDisabledBrands(newItem) {
			let index = findIndex(this.brands.options, (item) => item.id === newItem.id)
			if (typeof(index) === 'number') {
				this.$set(this.brands.options, index, { ...this.brands.options[index], disabled: newItem.value })
			}
		},
		setDisabledCompetitors(newItem) {
			let index = findIndex(this.competitors.options, (item) => item.id === newItem.id)
			if (typeof(index) === 'number') {
				this.$set(this.competitors.options, index, { ...this.competitors.options[index], disabled: newItem.value })
			}
		},
		setDisabledItems(filter, newItem) {
			if (filter && newItem) {
				switch(filter) {
					case 'brands':
						this.setDisabledCompetitors(newItem)
						break

					case 'competitors':
						this.setDisabledBrands(newItem)
						break
				}
			} else {
				let brands = this.brands.options.filter((item) => item.value)
				let competitors = this.competitors.options.filter((item) => item.value)

				forEach(brands, (item) => {
					this.setDisabledCompetitors(item)
				})
				forEach(competitors, (item) => {
					this.setDisabledBrands(item)
				})
			}
		},
		change(data) {
			let filter = data.filter.slug
			if (['brands', 'competitors'].includes(filter)) {
				this.setDisabledItems(filter, data.item)
			}

			// this.filters[data.filter.slug] = data.checked.length ? data.checked.map((el) => {
			// 	return {id: el.id}
			// }) : false
		},
		async save() {
			console.log(this.filters)
			try {
				const resp = await this.$api.common.editCategorySettings(this.id, this.filters)
				if (resp) {
					// this.$toast.success('Настройки категории сохранены')
					this.$router.push({name: 'Category.Dashboard', params: {id: this.id}})
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
.setting {
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