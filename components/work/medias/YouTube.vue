<template>
	<div class="youtube-container">
		<iframe
			class="player"
			:src="youtubeSourceURL"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>
<script>
export default {
	name: 'YouTube',
	props: {
		youtubeID: {
			type: String,
			default: () => ('Lhu7zb1hers')
		}
	},
	computed: {
		youtubeSourceURL() {
			return `https://www.youtube.com/embed/${this.youtubeID}`
		}
	}
}
</script>
<style scoped>
.player {
	width: 100%;
	height: 100%;
	min-height: 500px;
}
.youtube-container {
	height: 100%;
}
</style>
