<template lang="pug">
	AuthLayout
		p 1231313

	//.form.d-flex.align-center.justify-center
	//	.form__label Добро пожаловать
	//	.form__input
	//		v-text-field(
	//			outlined
	//			hide-details
	//			label="Фамилия и имя")
	//	.form__button
	//		Button(@click="use") Сохранить
</template>

<script>
import AuthLayout from "@/components/Layout/AuthLayout";
import Button from "@/components/Button/Button";
export default {
	name: "EnterName",
	components: {Button, AuthLayout},
	methods: {
		use() {}
	}
}
</script>

<style scoped>

</style>
