<template lang="pug">
.entry
	h1 О Вас
	InputPlaceholder.entry__input(:value="value" :placeholder="placeholder")
	Button.entry__btn(@click="save" :disabled="isEmpty") Сохранить

</template>

<script>
import InputPlaceholder from '@/components/Elements/InputPlaceholder.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { InputPlaceholder, Button },
	data() {
		return {
			value: '',
			placeholder: 'Имя и фамилия'
		}
	},
	computed: {
		isEmpty() {
			return !this.value
		},
	},
	methods: {
		save() {
			console.log('save')
		}
	}
}
</script>

<style lang="scss" scoped>
.entry {
	text-align: center;

	&__input {
		display: block;
		margin-top: 20px;
		width: 316px;

	}
	&__btn {
		margin: 20px auto;
	}
}
</style>