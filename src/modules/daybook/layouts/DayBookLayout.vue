<template>
	<NavbarView />
	<div class="d-flex">
		<div class="col-4">
			<EntryList />
		</div>
		<div class="col">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
	name: "DayBookLayout",
	components: {
		NavbarView: defineAsyncComponent(() =>
			import(/* webpackChunkName: "Navbar" */ "../components/NavbarView.vue")
		),
		EntryList: defineAsyncComponent(() =>
			import(/* webpackChunkName: "EntryList" */ "../components/EntryList.vue")
		),
	},
};
</script>
