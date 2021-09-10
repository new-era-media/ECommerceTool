<template lang="pug">
	.input__wrap.relative
		Input(v-bind="$props" :type="inputType")
		.input__icon(@click="togglePass")
			EyeHideIcon(v-if="showPass")
			EyeIcon(v-else)

</template>
<script>
import Input from '@/components/Elements/Input.vue'
import EyeIcon from '@/assets/svg/eye.svg'
import EyeHideIcon from '@/assets/svg/eye-slash-solid.svg'

export default {
	components: { Input, EyeIcon, EyeHideIcon },
	props: {
		value: String,
		placeholder: String,
	},
	data() {
		return {
			showPass: false,
		}
	},
	computed: {
		inputType() {
			return this.showPass ? 'text' : 'password'
		}
	},
	methods: {
		togglePass() {
			this.showPass = !this.showPass
		}
	}
}
</script>
<style lang="scss" scoped>
.input {
	&__wrap {
		input {
			width: 100%;
			padding-right: 36px;
		}
	}
	&__icon {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		cursor: pointer;
		color: color(gray-700);
	}
}
</style>