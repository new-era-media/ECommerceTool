<template lang="pug">
ModalBase.new-chart(
	closable
	@close="close"
	title="Новый график"
	)
	.new-chart__content.flex.justify-between
		.new-chart__col
			.new-chart__item
				.new-chart__item-title
					| Доля полки
				Radio(v-model='shelfShareModel' @input='changeOptions' :options='shelfShareOptions')
					template(#default="{option}")
						.new-chart__checkbox-title {{option.title}}
						.new-chart__checkbox-text(v-if="option.text") {{option.text}}

			.new-chart__item
				.new-chart__item-title
					| Количество SKU
				Radio(v-model='amountSKUModel' @input='changeOptions' :options='amountSKUOptions')
					template(#default="{option}")
						.new-chart__checkbox-title {{option.title}}
						.new-chart__checkbox-text(v-if="option.text") {{option.text}}

			.new-chart__item
				.new-chart__item-title
					| Доступность SKU
				Radio(v-model='availabilitySKUModel' @input='changeOptions' :options='availabilitySKUOptions')
					template(#default="{option}")
						.new-chart__checkbox-title {{option.title}}
						.new-chart__checkbox-text(v-if="option.text") {{option.text}}
		.new-chart__col
			.new-chart__item
				.new-chart__item-title
					| Премиальная выдача у ритейлеров
				Radio(v-model='premiumModel' @input='changeOptions' :options='premiumOptions')
					template(#default="{option}")
						.new-chart__checkbox-title {{option.title}}
						.new-chart__checkbox-text(v-if="option.text") {{option.text}}

			.new-chart__item
				.new-chart__item-title
					| Премиальная выдача у ритейлеров
				Radio(v-model='feedbackModel' @input='changeOptions' :options='feedbackOptions')
					template(#default="{option}")
						.new-chart__checkbox-title {{option.title}}
						.new-chart__checkbox-text(v-if="option.text") {{option.text}}

			.new-chart__item(v-for="item of list" :key="item.id")
				.new-chart__item-title
					| !!! {{ item.groupName }}
				Radio(v-model='listModel' @input='changeOptions' :options='list')
					template(#default="{option}")
						.new-chart__checkbox-title {{option.name}}
						.new-chart__checkbox-text(v-if="option.period") {{option.period}}

	template(#footer)
		Button.new-chart__save(:disabled="true" @click="addChart") Добавить график

</template>

<script>
import ModalBase from '@/components/Layout/ModalBase.vue'
import Radio from '@/components/Elements/Radio.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { ModalBase, Radio, Button },
	props: {
		categoryId: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			shelfShareModel: -1,
			shelfShareOptions: [
				{
					value: 0,
					title: 'По всем ритейлерам',
					text: 'Сейчас',
				},
				{
					value: 1,
					title: 'По всем ритейлерам',
					text: 'Динамика по датам',
				},
				{
					value: 2,
					title: 'У конкретного ритейлера',
					text: 'Динамика по датам',
				}
			],
			amountSKUModel: -1,
			amountSKUOptions: [
				{
					value: 0,
					title: 'По всем ритейлерам',
					text: 'Динамика по датам',
				},
				{
					value: 1,
					title: 'У конкретного ритейлера',
					text: 'Динамика по датам',
				},
				{
					value: 2,
					title: 'Минимальные и максимальные цены в категории',
					text: 'Динамика по датам',
				}
			],
			availabilitySKUModel: -1,
			availabilitySKUOptions: [
				{
					value: 0,
					title: 'По всем ритейлерам',
					text: 'Динамика по датам',
				},
				{
					value: 1,
					title: 'У конкретного ритейлера',
					text: 'Динамика по датам',
				},
				{
					value: 2,
					title: 'Средняя динамика доступности по всем ритейлерам',
					text: 'Динамика по датам',
				}
			],
			premiumModel: -1,
			premiumOptions: [
				{
					value: 0,
					title: 'В поисковой выдаче',
					text: 'Сейчас',
				},
				{
					value: 1,
					title: 'В категорийной выдачи',
					text: 'Сейчас',
				},
			],
			feedbackModel: -1,
			feedbackOptions: [
				{
					value: 0,
					title: 'Количество оценок',
					text: 'Сейчас',
				},
				{
					value: 1,
					title: 'Количество комментариев',
					text: 'Сейчас',
				},
			],
			list: [],
			listModel: -1,
		}
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			const resp = await this.$api.common.getSettingsChartList(this.id)
			if (resp) {
				debugger
				this.list = resp.data.map((item) => {
					return { ...item, value: item.selected }
				})
			}
		},
		close() {
			this.$emit('close')
		},
		changeOptions() {
			console.log('changeOptions')
		},
		addChart() {
			console.log('addChart')
		},
	}
}
</script>

<style lang="scss" scoped>
.new-chart {
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

	&__content {
		margin-top: 30px;
	}

	&__col {
		width: 44.2%;
	}

	&__item {
		margin-bottom: 24px;

		&-title {
			margin-bottom: 10px;
			font-weight: 600;
			font-size: 20px;
			line-height: 1.35;
		}

		/deep/ .radio__item {
			margin-bottom: 14px;

			&:first-of-type {
				margin-top: 18px;
			}
		}
	}
	&__checkbox {
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
		margin-top: 10px;
	}
}
</style>