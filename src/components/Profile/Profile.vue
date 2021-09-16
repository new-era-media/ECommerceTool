<template lang="pug">
.profile
	ProfileIcon.profile__icon
</template>

<script>
import ProfileIcon from '@/assets/svg/profile.svg'
import { mapState } from 'vuex'

export default {
	components: { ProfileIcon },
	computed: {
		...mapState('app', ['user']),
	},
}
</script>

<style lang="scss" scoped>
.profile {
	&__icon {
		margin-right: 12px;
	}
}
</style>