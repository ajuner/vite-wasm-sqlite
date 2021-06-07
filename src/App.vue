<template>
	<div>
		<div class="row">
			<div class="col-sm-4"></div>
			<div class="col-sm-4">
				<b>Wasm - Triple the number</b>
			</div>
			<div class="col-sm-4"></div>
		</div>
		<hr />
		<div class="row">
			<div class="col-sm-2"></div>
			<div class="col-sm-4">Place a number in the box</div>
			<div class="col-sm-4">Click the button</div>
			<div class="col-sm-2"></div>
		</div>
		<div class="row">
			<div class="col-sm-2"></div>
			<div class="col-sm-4">
				<input type="text" id="numberInput" v-model="text" placeholder="1" />
			</div>
			<div class="col-sm-4">
				<button class="bg-light" id="buttonOne" @click="handleTriple">Triple the number</button>
			</div>
			<div class="col-sm-2"></div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
	setup() {
		const text = ref(1);
		let triple: any;
		const handleTriple = () => {
			alert(triple.double(text.value))
			alert(triple.add(text.value, text.value))
		}
		onMounted(async () => {
			const response = await fetch("lib.wasm");
			const buffer = await response.arrayBuffer();
			const module = await WebAssembly.compile(buffer);
			const instance = await WebAssembly.instantiate(module);
			console.log(instance.exports)
			triple = instance.exports;
		});
		return {
			handleTriple,
			text,
		};
	},
});
</script>
