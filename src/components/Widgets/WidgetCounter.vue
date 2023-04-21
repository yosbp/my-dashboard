<template>
	<a-card :bordered="false" class="widget-1">
		<a-statistic :title="title" :value="num" :prefix="prefix" :suffix="suffix" :precision="0" class="text-success"
			:class="'text-' + status">
		</a-statistic>
		<div class="icon" v-html="icon"></div>
	</a-card>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	value: {
		type: Number,
		default: 0,
	},
	prefix: {
		type: String,
		default: "",
	},
	suffix: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
	status: {
		type: String,
		default: "success",
	},
})

const num = ref(0)
const timer = ref(null)
const start = 0
const end = ref(props.value)

onMounted(() => {
  const count = end.value - start
  const time = 2 * 1000 
  const incrementsPerInterval = count / (time / 100) 

  timer.value = setInterval(() => {
    num.value += incrementsPerInterval
  }, 100) 
})

watch(num, (value) => {
  if (value >= end.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
});



</script>