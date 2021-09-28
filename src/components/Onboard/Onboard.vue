<template lang="pug">
.onboard
	.onboard__close(@click="close")
	.onboard__content(@click="showOnboarding")
		.onboard__title.flex.items-center
			IdeaIcon.onboard__title-icon(:size="18")
			| Как настроить дашборд?
		.onboard__text
			| Расскажем, как управлять виджетами и фильтровать данные
</template>

<script>
import IdeaIcon from '@/assets/svg/idea.svg'

export default {
	components: { IdeaIcon },
	methods: {
		close() {
			console.log('close onboard tootlip')
			this.$emit('close')
		},
		showOnboarding() {
			this.$modal({
				component: 'Onboarding',
				props: {

				},
				on: {
					cancel: () => {
						console.log('cancel')
					},
					save: () => {
						console.log('save')
					}
				},
			})
			this.close()
		},
	}
}
</script>

<style lang="scss" scoped>
.onboard {
	position: relative;
	padding: 16px 22px;
	background-color: color(white);
	box-shadow: 0 0 8px rgba(70, 150, 236, 0.2);
	cursor: pointer;

	&__close {
		position: absolute;
		width: 28px;
		height: 28px;
		top: 11px;
		right: 10px;
		margin-left: auto;
		color: color(gray-700);
		transition: color 160ms;
		outline: none;
		cursor: pointer;

		&:before,
		&:after {
			position: absolute;
			content: ' ';
			height: 14px;
			width: 2px;
			top: 7px;
			left: 12px;
			background-color: color(primary);
			transition: color 0.3s ease-out;
		}
		&:before {
			transform: rotate(45deg);
		}
		&:after {
			transform: rotate(-45deg);
		}
	}

	&__title {
		font-weight: 600;
		font-size: 14px;
		line-height: 1.14;

		&-icon {
			margin-right: 8px;
		}
	}
	&__text {
		margin-top: 10px;
	}
}
</style>