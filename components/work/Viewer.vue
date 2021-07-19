<template>
	<div class="container">
		<hooper :settings="options" style="height: auto; width: 100%;">
			<slide v-for="mediaAsset in mediaAssets" :key="mediaAsset.id" style="height: auto; width: 100%;">
				<you-tube v-if="mediaAsset.youtube_video_id !== null" :youtubeID="mediaAsset.youtube_video_id" />
				<image-asset v-if="mediaAsset.image !== null" :src="mediaAsset.image" />
				<sound-cloud v-if="mediaAsset.soundcloud_embed_html !== ''" :soundcloudEmbedHTML="mediaAsset.soundcloud_embed_html" />
				<sketchfab v-if="mediaAsset.sketchfab_embed_html !== ''" :sketchfabEmbedHTML="mediaAsset.sketchfab_embed_html" />
			</slide>
			<slide v-if="mediaAssets.length === 0">
				<div class="wrapper">
					<div class="title">アセットがありません</div>
				</div>
			</slide>
			<hooper-pagination slot="hooper-addons"></hooper-pagination>
			<hooper-navigation slot="hooper-addons"></hooper-navigation>
		</hooper>
	</div>
</template>
<script>
import {
	Hooper,
	Slide,
	Pagination as HooperPagination,
	Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'
import YouTube from './medias/YouTube'
import ImageAsset from './medias/ImageAsset'
import SoundCloud from './medias/SoundCloud.vue'
import Sketchfab from './medias/Sketchfab.vue'

export default {
	name: 'Viewer',
	data () {
		return {
			options: {
				itemsToShow: 1,
				wheelControl: false,
				centerMode: true,
				infiniteScroll: true
      },
		}
	},
	components: {
		Hooper,
		Slide,
		HooperPagination,
		HooperNavigation,
		YouTube,
		ImageAsset,
		SoundCloud,
		Sketchfab
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

<style>
.hooper-next svg, .hooper-prev svg {
	width: 45px;
	height: 45px;
	fill: rgba(0, 0, 0, 0.5);
	stroke: rgba(255, 255, 255, 0.5);
}
</style>
