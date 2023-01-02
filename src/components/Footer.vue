<template lang="pug">
	footer
		.footer.d-flex.align-end
			.footer__menu
				router-link.footer__menu-element(v-for="list in lists" :key="list.id" :to="list.link") {{ list.label }}
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			lists: [
				{
					label: 'Руководство',
					link: '#',
					id: 1,
				},
				{
					label: 'Обратная связь и поддержка',
					link: '#',
					id: 2,
				}
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.footer {
	&__menu {
		padding: 16px 24px;
		margin-left: auto;
		&-element {
			color: #676767;
			margin-left: auto;
			font-size: 14px;
			line-height: 16px;
			letter-spacing: 0.15px;
			margin-right: 18px;
			&:nth-last-child(1) {
				margin-right: 0;
			}
			&:hover {
				color: #FA4860;
			}
		}
	}
}
</style>
