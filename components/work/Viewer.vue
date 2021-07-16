<template>
	<div>
		<div class="container">
			<hooper>
				<slide v-for="mediaAsset in mediaAssets" :key="mediaAsset.id">
					<you-tube v-if="mediaAsset.youtube_video_id !== null" :youtubeID="mediaAsset.youtube_video_id" />
				</slide>
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
			</hooper>
		</div>
	</div>
</template>
<script>
import {
	Hooper,
	Slide,
	Pagination as HooperPagination
} from 'hooper'
import 'hooper/dist/hooper.css'
import YouTube from './YouTube.vue'

export default {
	name: 'Viewer',
	components: {
		Hooper,
		Slide,
		HooperPagination,
		YouTube,
	},
	props: {
		mediaAssets: {
			type: Array,
			default: () => ({
				"id": 2,
				"youtube_video_id": "CcMRnj_fVjs",
				"image": "",
				"sketchfab_embed_html": "",
				"soundcloud_embed_html": "",
				"work": 2
			})
		}
	}
}
</script>
<style scoped>
.container {

}
</style>