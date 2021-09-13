<template lang="pug">
footer.footer.container
	.flex.justify-end
		nav.footer__nav.flex.justify-between
			.footer__nav-item(@click="onboarding") Руководство
			.footer__nav-item(@click="feedback") Обратная связь и поддержка
</template>

<script>
export default {
	methods: {
		onboarding() {
			console.log('onboarding')
		},
		feedback() {
			console.log('feedback')
			this.$modal({
				component: 'Feedback',
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
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	padding: 22px;

	&__nav {
		width: 320px;

		&-item {
			font-size: 14px;
			line-height: 1.6;
			cursor: pointer;
			transition: color 0.3s ease-out;

			&:hover {
				color: color(violet);
				transition: color 0.3s ease-in;
			}
		}
	}
}
</style>