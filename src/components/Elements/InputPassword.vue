<template lang="pug">
	.input__wrap.relative
		Input(v-bind="$props" :type="inputType")
		.input__icon(@click="togglePass")
			EyeOffIcon(v-if="showPass")
			EyeIcon(v-else)

</template>
<script>
import Input from '@/components/Elements/Input.vue'
import EyeIcon from 'vue-material-design-icons/Eye.vue'
import EyeOffIcon from 'vue-material-design-icons/EyeOff.vue'

export default {
	components: { Input, EyeIcon, EyeOffIcon },
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
		color: color(gray-800);
	}
}
</style>