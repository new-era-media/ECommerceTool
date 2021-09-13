<template lang="pug">
	transition(name="backdrop")
		.backdrop(@click.self="closeAllModals" v-if="modals.length")
			transition-group(name="modal")
				component(
				v-for="modal in modals"
					:key="modal._uid"
					:is="modal.component"
				v-bind="modal.props"
				v-on="modal.on"
					@close="close(modal._uid)"
				)
</template>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		computed: {
			...mapState('modal', ['modals']),
		},
		methods: {
			...mapMutations('modal', ['openModal', 'closeModal', 'closeAllModals']),
			close(uid) {
				this.closeModal(uid)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.backdrop {
		position: fixed;
		display: flex;
		flex-direction: column;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(#000, .4);
		align-items: center;
		z-index: 100;
		padding: 10vh 0;
		overflow: auto;

		&-enter-active, &-leave-active {
			transition: opacity 160ms;
		}
		&-enter, &-leave-to {
			opacity: 0;
		}
	}

	.modal-enter-active, .modal-leave-active {
		transition: all 320ms;
	}
	.modal-enter, .modal-leave-to {
		opacity: 0;
		transform: translateY(20px);
	}

</style>
