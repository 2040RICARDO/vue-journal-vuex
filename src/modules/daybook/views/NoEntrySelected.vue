<template>
	<div class="d-flex justify-content-center">
		<h1 class="align-self-center">No hay nada seleccionado</h1>
	</div>
	<FabView />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
	name: "NoEntrySelected",
	components: {
		FabView: defineAsyncComponent(() => import("../components/FabView.vue")),
	},
};
</script>
<style lang="scss" scoped>
div {
	height: 100%;
}
</style>
