<template lang="pug">
	footer.footer.container
		.flex.justify-between.items-center
			.footer__copy
				| © 2022 Dentsu Russia. Commerce Analytics Tool
			.footer__logo.flex.items-center
				img.footer__logo-cat(src="~@/assets/img/cat-logo-bw.png")
				img.footer__logo-dentsu(src="~@/assets/img/dentsu-logo.png")
</template>

<style lang="scss" scoped>
.footer {
	padding: 36px 24px;
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	color: color(gray-landing);

	&__copy {
		font-size: 13px;
		font-weight: 500;
		line-height: 1.3;
	}
	&__logo {
		&-cat {
			width: 111px;
		}
		&-dentsu {
			width: 72px;
			margin-left: 25px;
		}
	}
}
</style>