<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<button class="btn btn-primary" @click="gotoDaybook">asdsd</button>
	</div>
</template>

<script>
export default {
	name: "HomeView",
	methods: {
		gotoDaybook() {
			this.$router.push({ name: "no-entry" });
		},
	},
};
</script>
