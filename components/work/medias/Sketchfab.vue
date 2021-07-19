<template>
	<div class="sketchfab-container" v-html="sketchfabEmbedHTML">
	</div>
</template>
<script>
export default {
	name: 'Sketchfab',
	props: {
		sketchfabEmbedHTML: {
			type: String,
			default: () => ('<div class="sketchfab-embed-wrapper"> <iframe title="GLOCK" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4a92e03e98ea42b58a56a8235cee8ddd/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/glock-4a92e03e98ea42b58a56a8235cee8ddd?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> GLOCK </a> by <a href="https://sketchfab.com/h1ggs?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> h1ggs </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>')
		}
	},
}
</script>
<style scoped>
.sketchfab-container {
	width: 100%;
	height: 100%;
}
</style>
<style>
.sketchfab-embed-wrapper {
	width: 100%;
	height: 100%;
}
.sketchfab-embed-wrapper iframe {
	width: 100%;
	height: 100%;
}
.sketchfab-embed-wrapper p {
	display: none;
}
</style>