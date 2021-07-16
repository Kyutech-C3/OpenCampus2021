<template>
	<div>
		<div class="container">
			<hooper :itemsToShow="1">
				<slide v-for="mediaAsset in mediaAssets" :key="mediaAsset.id">
					<you-tube v-if="mediaAsset.youtube_video_id !== null" :youtubeID="mediaAsset.youtube_video_id" />
					<image-asset v-if="mediaAsset.image !== null" :src="mediaAsset.image" />
				</slide>
				<slide v-if="mediaAssets.length === 0">
					<div class="wrapper">
						<div class="title">アセットがありません</div>
					</div>
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
import YouTube from './medias/YouTube'
import ImageAsset from './medias/ImageAsset'

export default {
	name: 'Viewer',
	components: {
		Hooper,
		Slide,
		HooperPagination,
		YouTube,
		ImageAsset,
	},
	props: {
		mediaAssets: {
			type: Array,
			default: () => ([])
		}
	},
	created() {
		console.debug(this.mediaAssets)
	}
}
</script>
<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
}
.title {
	text-align: center;
}
</style>