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

const imageMediaAsset = {
  "id": 3,
  "youtube_video_id": null,
  "image": "https://shared-vps.compositecomputer.club/media/images/system/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-02-01_003939.png",
  "sketchfab_embed_html": "",
  "soundcloud_embed_html": "",
  "work": 2
}

export const YoutubeViewer = () => ({
  components: { Viewer },
  template: '<div><Viewer :mediaAssets="mediaAssets"/></div>',
  props: {
    mediaAssets: {
      default: [
        imageMediaAsset,
        youtubeMediaAsset
      ]
    }
  }
});
