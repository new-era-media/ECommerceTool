<template lang="pug">
	.layout.d-flex.flex-column
		Header
		.content
			slot
		Footer
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
	name: "AuthLayout",
	components: {Footer, Header},
}
</script>

<style scoped>
.layout {
	background-image: url(../../../src/assets/img/footer-bg.png);
	background-position: 0 100%;
	height: 100%;
	min-height: 100vh;
	background-color: #FAFAFA;
}
.content {
	width: 100%;
	height: 100%;
}
</style>
