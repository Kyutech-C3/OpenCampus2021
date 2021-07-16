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

const soundcloudMediaAsset = {
  "id": 3,
  "youtube_video_id": null,
  "image": null,
  "sketchfab_embed_html": "",
  "soundcloud_embed_html": '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/432318780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lion-smusic" title="Lion ́sMusic" target="_blank" style="color: #cccccc; text-decoration: none;">Lion ́sMusic</a> · <a href="https://soundcloud.com/lion-smusic/poolside-identity-chuunibyou-kendrick-lamar" title="Poolside Identity - Chuunibyou × Kendrick Lamar" target="_blank" style="color: #cccccc; text-decoration: none;">Poolside Identity - Chuunibyou × Kendrick Lamar</a></div>',
  "work": 2
}

export const AllKindViewer = () => ({
  components: { Viewer },
  template: '<div><Viewer :mediaAssets="mediaAssets"/></div>',
  props: {
    mediaAssets: {
      default: [
        imageMediaAsset,
        youtubeMediaAsset,
        soundcloudMediaAsset
      ]
    }
  }
});
