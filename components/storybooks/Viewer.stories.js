import Viewer from "../work/Viewer.vue";
export default { title: "Viewer" };

const youtubeMediaAsset = {
  "id": 2,
  "youtube_video_id": "CcMRnj_fVjs",
  "image": "",
  "sketchfab_embed_html": "",
  "soundcloud_embed_html": "",
  "work": 2
}

export const YouTubeViewer = () => ({
  components: { Viewer },
  template: '<div><Viewer /></div>',
  props: {
    default: {
      mediaAssets: [
        youtubeMediaAsset
      ]
    }
  }
});
