<template lang="pug">
ModalBase.widgets(
	closable
	@close="close"
	title="Управление виджетами"
	)
	.widgets__list(v-if="list")
		Checkbox.widgets__checkbox(v-for="item of list" :key="item.id"
			:label="item.nameRu"
			:value="item.value"
			@change="change(item)"
			)
			template(#default)
				.widgets__item-title {{item.nameRu}}
				.widgets__item-text {{item.description}}

	template(#footer)
		Button.widgets__save(@click="save") Сохранить

</template>

<script>
import ModalBase from '@/components/Layout/ModalBase.vue'
import Checkbox from '@/components/Elements/Checkbox.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { ModalBase, Checkbox, Button },
	props: {
		categoryId: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			list: null,
			list2: [
				{
					title: 'Количество SKU',
					text: 'Наших брендов / ближайших конкурентов / всей категории',
					value: false,
				},
				{
					title: 'Доля полки',
					text: 'Share of shelf. Отношения SKU клиента/всего SKU',
					value: false,
				},
				{
					title: 'Процент доступных SKU',
					text: 'Availability rate. Отношение доступных SKU ко всем SKU бренда за период',
					value: false,
				},
				{
					title: 'Доля в премиальной выдаче поиска',
					text: '????',
					value: false,
				},
				{
					title: 'Доля в премиальной категорийной выдаче',
					text: 'Premium position share. Отношение количества SKU Бренда ко всем SKU в категории, попавшим в ТОП-8 по категорийной выдаче',
					value: false,
				},
				{
					title: 'Доля промо SKU',
					text: 'Отношение товаров со скидкой ко всем товарам',
					value: false,
				},
				{
					title: 'Средняя скидка',
					text: 'Average discount %. Средний уровень скидки на SKU, по которым была скидка',
					value: false,
				}
			]
		}
	},
	computed: {
		checkedWidgets() {
			let checked = this.list.filter((item) => item.value)
			return checked.map((item) => {
				return { id: item.id }
			})
		}
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			try {
				const resp = await this.$api.common.getSettingsWidgetList(this.categoryId)
				if (resp) {
					console.log(resp)
					this.list = resp.data.map((item) => {
						return { ...item, value: item.selected }
					})
				}
			} catch (error) {
				console.log(error)
			}
		},
		close() {
			this.$emit('close')
		},
		change(item) {
			let index = this.list.findIndex((el) => el.nameRu === item.nameRu)
			let newItem = { ...item, value: !item.value}
			this.$set(this.list, index, newItem)
		},
		async save() {
			try {
				const resp = await this.$api.common.editSettingsWidgetList(this.categoryId, { data: this.checkedWidgets })
				if (resp?.status === 'success') {
					this.$toast.success('Настройки виджетов сохранены')
					this.$emit('save')
					this.close()
				}
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.widgets {
	width: 1040px;
	padding: 30px 40px;
	background-color: color(gray-100);

	/deep/ .modal__close {
		top: 0;
		right: -10px;

		&:before,
		&:after {
			width: 3px;
			height: 24px;
			top: 5px;
		}
	}

	&__list {
		margin-top: 32px;
		margin-bottom: 26px;
	}

	&__checkbox {
		margin: 12px 0;
	}
	&__item {
		margin-top: 16px;

		&-title {
			font-size: 14px;
			line-height: 1.42;
		}
		&-text {
			color: color(gray-700);
			font-size: 12px;
			line-height: 1.33;
		}
	}

	&__save {
		margin-top: 8px;
	}
}
</style>