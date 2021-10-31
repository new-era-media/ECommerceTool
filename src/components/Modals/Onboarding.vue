<template lang="pug">
ModalBase.onboarding(
	closable
	@close="close"
	)
	template(#header)
		.onboarding__title.flex.items-center
			IdeaIcon.onboarding__title-icon
			| Как настроить дашборд?
	.onboarding__container
		.onboarding__slider(:style="styleObject")
			.onboarding__item.flex.justify-around.items-end
				div
					img.onboarding__item-img(src="@/assets/img/onboarding/onboarding-1.png")
					.onboarding__item-content
						.onboarding__item-title Скрытие и добавление виджетов и графиков
						.onboarding__item-text
							| Чтобы убрать виджет, в меню виджета/графика нажмите Убрать виджет с дашборда.
							br
							| Вы можете добавить обратно скрытые виджеты и новые графики
							br
							| через кнопку +
						Button.onboarding__item-btn(@click="next(1)") Далее о изменении порядка виджетов и графиков
			.onboarding__item.flex.justify-around.items-end
				div
					img.onboarding__item-img(src="@/assets/img/onboarding/onboarding-2.png")
					.onboarding__item-content
						.onboarding__item-title Изменение порядка виджетов и графиков
						.onboarding__item-text
							| Зажав на виджете или графике левую кнопку мыши и перетащив в нужное место вы можете менять их порядок в дашборде
						Button.onboarding__item-btn(@click="next(2)") Далее о блоках
			.onboarding__item.flex.justify-around.items-end
				div
					img.onboarding__item-img(src="@/assets/img/onboarding/onboarding-3.png")
					.onboarding__item-content
						.onboarding__item-title Быстрая фильтрация данных категории
						.onboarding__item-text
							| По-умолчанию в дашборде показаны данные для выбранных при настройке категории ваших брендов, брендов конкурентов у выбранных ритейлеров  за последние 365 дней.
							br
							| Период, фильтр списка ваших брендов, ближайших конкурентов и других брендов можно сузить используя фильтры в панели дашборда.
						Button.onboarding__item-btn(@click="close") Закрыть

	.onboarding__nav.flex.justify-between
		.onboarding__nav-item(
			v-for="(item, index) in slideCount"
			:key="index"
			:class="{'--active': activeSlide === index}"
			@click="goTo(index)"
			)

</template>

<script>
import ModalBase from '@/components/Layout/ModalBase.vue'
import IdeaIcon from '@/assets/svg/idea.svg'
import Button from '@/components/Button/Button.vue'

export default {
	components: { ModalBase, IdeaIcon, Button },
	data() {
		return {
			activeSlide: 0,
			slideCount: 3,
		}
	},
	computed: {
		styleObject: function() {
			const width = 0 - (this.activeSlide * 980)
			return {
				transform: 'translateX('+width+'px)'
			}
		},
	},
	methods: {
		close() {
			this.$emit('close')
		},
		next(step) {
			if(this.activeSlide < 3) {
				this.activeSlide++
			}
		},
		goTo(num) {
			this.activeSlide = num
		},
	}
}
</script>
<style lang="scss" scoped>
.onboarding {
	width: 1028px;
	background-color: color(gray-100);

	/deep/ .modal__close {
		top: 0;
		right: 0;

		&:before,
		&:after {
			width: 3px;
			height: 24px;
			top: 5px;
		}
	}

	&__title {
		font-size: 24px;
		&-icon {
			margin-right: 8px;
		}
	}
	&__container {
		width: 980px;
		height: 456px;
		margin-top: 62px;
		margin-bottom: 40px;
		overflow: hidden;
	}
	&__slider {
		width: 2940px;
		height: 456px;
		display: flex;
		overflow: hidden;
		transition: all .3s ease;
	}
	&__item {
		width: 980px;
		height: 456px;
		text-align: center;

		&:nth-of-type(2) {
			//margin-top: 102px;

			.onboarding__item-content {
				margin-top: 60px;
			}
			.onboarding__item-btn {
				margin-top: 64px;
			}
		}
		&:nth-of-type(3) {
			//margin-top: 110px;

			.onboarding__item-content {
				margin-top: 48px;
			}
			.onboarding__item-btn {
				margin-top: 32px;
			}
		}

		&-img {
			margin: 0 auto;
		}
		&-content {
			width: 620px;
			margin: 12px auto 0 auto;
		}
		&-title {
			font-weight: 600;
			font-size: 20px;
			line-height: 1.35;
		}
		&-text {
			margin-top: 8px;
			font-size: 14px;
			line-height: 1.42;
		}
		&-btn {
			margin: 28px auto 0 auto;
		}
	}
	&__nav {
		width: 72px;
		margin: 0 auto 30px auto;

		&-item {
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: rgba(87, 68, 214, 0.2);
			cursor: pointer;

			&.--active {
				background-color: color(violet);
			}
		}
	}
}
</style>