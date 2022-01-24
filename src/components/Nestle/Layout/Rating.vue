<template lang="pug">
	.rating.flex
		Star.icon(v-for="star in fillStars" :key="`fillStars-${star}`")
		StarHalfFull.icon(v-if="isHalfFull")
		StarOutline.icon(v-for="star in emptyStars" :key="`emptyStars-${star}`")
</template>

<script>
import StarOutline from "vue-material-design-icons/StarOutline.vue";
import StarHalfFull from "vue-material-design-icons/StarHalfFull.vue";
import Star from "vue-material-design-icons/Star.vue";

export default {
	name: "Rating",
	components: {
		StarOutline,
		StarHalfFull,
		Star,
	},
	props: {
		rating: Number
	},
	computed: {
		fillStars() {
			return Math.floor(this.rating);
		},
		isHalfFull() {
			return !Number.isInteger(this.rating);
		},
		emptyStars(){
			return Math.ceil(this.rating) - this.fillStars;
		},
	},
}
</script>

<style scoped>
.icon {
	color: yellowgreen;
}
</style>
