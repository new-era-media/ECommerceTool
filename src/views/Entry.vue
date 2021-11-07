<template lang="pug">
.entry
	h1 О Вас
	InputPlaceholder.entry__input(
		ref="input"
		v-model="name"
		:placeholder="placeholder"
		)
	Button.entry__btn(
		@click="save"
		:disabled="isEmpty"
		) Сохранить

</template>

<script>
import InputPlaceholder from '@/components/Elements/InputPlaceholder.vue'
import Button from '@/components/Button/Button.vue'

export default {
	components: { InputPlaceholder, Button },
	data() {
		return {
			name: '',
			placeholder: 'Имя и фамилия'
		}
	},
	computed: {
		isEmpty() {
			return !this.name
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.input.setFocus()
		})
	},
	methods: {
		async save() {
			try {
				let resp = await this.$api.common.editUserInfo({name: this.name})
				if (resp) {
					console.log('save')
				}
			} catch (error) {
				let err = error ? error.data.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
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