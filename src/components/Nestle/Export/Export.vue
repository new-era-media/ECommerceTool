<template lang="pug">
	.export.flex.items-center(
		:class="classNames"
		@click="$emit('click')"
	)
		.export__icon
			CalendarExport(:size="18")
		.export__label Export
</template>

<script>
import CalendarExport from 'vue-material-design-icons/CalendarExport.vue'

export default {
	components: {
		CalendarExport,
	},
	props: {
		type: {
			default: 'gray',
			validator: value => ~[
				'white', 'gray',
			].indexOf(value),
		},
	},
	computed: {
		classNames() {
			const cn = [
				`--type-${this.type}`,
			]

			return cn
		},
	},
}
</script>

<style lang="scss" scoped>
.export {
	cursor: pointer;

	&.--type {
		&-white {
			color: color(white);
		}
		&-gray {
			color: color(gray-500);
		}
	}

	&__icon {
		margin-right: 4px;
	}
}
</style>