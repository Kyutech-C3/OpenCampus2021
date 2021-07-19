<template>
	<div class="image-asset-container">
		<img class="image" :src="src" >
	</div>
</template>
<script>
export default {
	name: 'YouTube',
	props: {
		src: {
			type: String,
			default: () => ('https://shared-vps.compositecomputer.club/media/images/system/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-02-01_003939.png')
		}
	},
}
</script>
<style scoped>
.image-asset-container {
	height: 100%;
	max-height: 600px;
	background-color: black;
}
.image {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>
