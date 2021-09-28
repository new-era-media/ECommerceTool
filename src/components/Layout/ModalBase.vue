<template lang="pug">
	.modal
		.modal__header
			slot(name="header")
				.modal__title(v-if="title") {{title}}
			button.modal__close(v-if="closable" @click="$emit('close')")
		.modal__content
			slot
		.modal__footer(v-if="hasFooterSlot")
			slot(name="footer")
</template>

<script>
export default {
	props: {
		title: String,
		closable: Boolean,
	},
	computed: {
		hasFooterSlot() {
			return !!this.$slots.footer
		}
	}
}
</script>

<style lang="scss" scoped>
	.modal {
		background: color(white);
		color: color(primary);
		width: 656px;
		padding: 24px;

		&__header {
			position: relative;
			display: flex;
			align-items: center;
			margin-bottom: 16px;
		}

		&__close {
			position: absolute;
			width: 32px;
			height: 32px;
			top: 4px;
			right: 4px;
			margin-left: auto;
			color: color(gray-700);
			transition: color 160ms;
			outline: none;

			&:before,
			&:after {
				position: absolute;
				content: ' ';
				height: 18px;
				width: 2px;
				top: 7px;
				left: 14px;
				background-color: color(violet);
				transition: color 0.3s ease-out;
			}
			&:before {
				transform: rotate(45deg);
			}
			&:after {
				transform: rotate(-45deg);
			}

			&:hover {
				&:before,
				&:after {
					background-color: color(violet-dark);
					transition: color 0.3s ease-in;
				}
			}
		}

		&__title {
			font-size: 24px;
		}

		&__content {

		}

		&__footer {
			margin-top: 16px;
			padding-top: 16px;
			border-top: 1px solid color(gray-300);
		}
	}
</style>
