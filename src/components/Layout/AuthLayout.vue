<template lang="pug">
	div
		slot
		//Header
		//.content
		//	slot
		//Footer
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
	name: "AuthLayout",
	components: {Footer, Header},
	mounted() {
		console.log(this.$slots)
	}
}
</script>

<style scoped>
.layout {
	background-image: url(../../../src/assets/img/footer-bg.png);
	background-position: 0 100%;
}
.content {
	height: 100%;
}
</style>
