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

			&:hover {
				color: color(violet);
			}
		}
	}
}
</style>