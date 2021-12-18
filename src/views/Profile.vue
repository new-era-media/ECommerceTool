<template lang="pug">
.profile
	Header(:nav="[]")
	Menu(:title="title")
		template(#title)
			.flex.items-baseline
				| {{title}}
				.profile__email {{ email }}

		nav.profile__nav.flex
			.profile__nav-item(@click="change('name')") Изменить имя
			.profile__nav-item(@click="change('pass')") Сменить пароль
			.profile__nav-item.--logout(@click="logout") Выйти
	.profile__list.container.flex.items-start
		.profile__card.profile__rate(v-if="tariff")
			.flex.justify-between
				div
					span.profile__sub Тариф
					| {{ tariff.name }}
				.color-violet
					| Все тарифы
			div
				.profile__subtitle Описание пакета
				.profile__item(v-for="(item, index) in tariff.description" :key="`tariff-${index}`")
					| - {{ item }}

		.profile__card.profile__geo
			div
				span.profile__sub Гео
				| {{ geo }}
			div
				.profile__subtitle Категории
				.profile__item(v-for="(item, index) of category" :key="`category-${index}`")
					| - {{ item }}
</template>
<script>
import Header from '@/components/Layout/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
import { mapActions } from 'vuex'

export default {
	components: {
		Header,
		Menu,
	},
	data() {
		return {
			title: '',
			email: '',
			tariff: null,
			geo: '',
			category: null,
		}
	},
	mounted() {
		this.fetch()
	},
	methods: {
		...mapActions('app', ['logout']),
		async fetch() {
			try {
				const resp = await this.$api.common.getUserInfo()
				if (resp) {
					this.title = `${resp.name} • Клиент`
					this.email = resp.email
					this.geo = resp.geo
					this.category = resp.categoryList
					this.tariff = {
						name: resp.tariffName,
						description: resp.tariffDescription,
					}
				}
			} catch (error) {
				let err = error ? error.data?.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
		change(item) {
			this.$modal({
				component: 'Personal',
				props: {

				},
			})
			console.log('change', item)
		},
	}
}
</script>
<style lang="scss" scoped>
.profile {

	&__email {
		margin-left: 16px;
		font-size: 14px;
		line-height: 1.42;
	}

	&__nav {
		&-item {
			margin-right: 32px;
			color: color(white);
			cursor: pointer;

			&:last-of-type {
				margin-right: 10px;
			}

			&.--logout {
				color: color(orange);
			}
		}
	}

	&__list {
		padding: 32px 20px;
	}
	&__card {
		margin-right: 20px;
		padding: 16px 28px;
		background-color: color(white);
	}
	&__rate {
		width: 400px;
	}
	&__geo {
		width: 290px;
	}
	.color-violet {
		color: color(violet);
	}
	&__sub,
	&__subtitle {
		font-weight: 600;
		line-height: 1.71;
	}
	&__sub {
		margin-right: 8px;
	}
	&__subtitle {
		margin: 10px 0 4px 0;
	}
	&__item {
		margin-top: 1px;
	}
}
</style>
