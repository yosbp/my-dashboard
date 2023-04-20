<template>
	<div>
		<canvas ref="chart" :style="{ 'height': height + 'px' }"></canvas>
	</div>
</template>

<script setup>
import { Chart, registerables } from 'chart.js';
import { onBeforeUnmount, onMounted, ref } from 'vue';
Chart.register(...registerables);
const chart = ref(null)

const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
	height: {
		type: Number,
		default: 220,
	},
})

onMounted(() => {
	let ctx = chart.value.getContext("2d");
	chart.value = new Chart(ctx, {
		type: "bar",
		data: props.data,
		options: {
			layout: {
				padding: {
					top: 30,
					right: 15,
					left: 10,
					bottom: 5,
				},
			},
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
			},
			tooltips: {
				enabled: true,
				mode: "index",
				intersect: false,
			},
			scales: {
				y: {
					grid: {
						display: true,
						color: "rgba(255, 255, 255, .2)",
						zeroLineColor: "#ffffff",
						borderDash: [6],
						borderDashOffset: [6],
					},
					ticks: {
						suggestedMin: 0,
						suggestedMax: 1000,
						display: true,
						color: "#fff",
						font: {
							size: 14,
							lineHeight: 1.5,
							weight: '600',
							family: "Open Sans",
						},
					},
				},
				x: {
					grid: {
						display: false,
					},
					ticks: {
						display: true,
						color: "#fff",
						font: {
							size: 14,
							lineHeight: 1.5,
							weight: '600',
							family: "Open Sans",
						},
					},
				},
			},
		}
	});
})

onBeforeUnmount(() => {
	chart.value.destroy();
})
</script>

<style lang="scss" scoped>
canvas {
	background-image: linear-gradient(to right, #00369E, #005CFD, #A18DFF);
}
</style>