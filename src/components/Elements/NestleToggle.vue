<template lang="pug">
	.toggle
		.toggle__title is Nestle:
		.toggle__btn(
			:class="classNames"
			@click="toggleNestleConfig"
		)
			| {{ label }}

</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters('app', ['getNestleConfig']),

		label() {
			return this.getNestleConfig ? 'ON' : 'OFF'
		},
		classNames() {
			const cn = [
				this.getNestleConfig ? '--violet' : '--gray',
				this.getNestleConfig ? '--on' : '--off'
			]
			return cn
		},
	},
	methods: {
		...mapActions('app', ['toggleNestleConfig']),
	},
}
</script>

<style lang="scss">
.toggle {
	position: fixed;
	bottom: 20px;
	left: 20px;
	z-index: 1000;
	opacity: .8;
	//display: flex;
	//flex-direction: column;
	//align-items: flex-end;

	&__title {
		margin-bottom: 4px;
		font-size: 12px;
	}

	&__btn {
		position: relative;
		padding: 4px 12px;
		color: color(white);
		font-weight: 700;
		border-radius: 20px;
		cursor: pointer;

		&.--violet {
			background-color: color(violet);
		}
		&.--gray {
			background-color: color(gray-600);
		}

		&.--on {
			padding-right: 30px;

			&:before {
				content: '';
				position: absolute;
				width: 15px;
				height: 15px;
				top: 6px;
				right: 10px;
				background-color: color(white);
				border-radius: 50%;
			}
		}
		&.--off {
			padding-left: 30px;

			&:before {
				content: '';
				position: absolute;
				width: 15px;
				height: 15px;
				top: 6px;
				left: 10px;
				background-color: color(white);
				border-radius: 50%;
			}
		}
	}
}
</style>