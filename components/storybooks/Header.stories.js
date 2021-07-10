import Header from "../work/Header.vue";
export default { title: "Header" };

export const header1 = () => ({
  components: { Header },
  template: '<header :title="title" :team="team" :tags="tags" :description="description" :card_image="card_image" :work_id="work_id" :download_link="download_link" :goods="goods" :media_assets="media_assets" :created_at="created_at"/>',
  props: {
    title: {
      default: "hoge",
    },
    team: {
      default: "hoge",
    },
    tags: {
        type: Array,
        required: true,
        default: null
    },
    description: {
        type: String,
        required: true,
        default: "enpty"
    },
    card_image: {
        type: String,
        required: true,
        default: null
    },
    work_id: {
        type: Number,
        require: true,
        default: 0
    },
    download_link: {
        type: String,
        required: true,
        default: null
    },
    goods: {
        type: Number,
        required: true,
        default: 0
    },
    media_assets: {
        type: Object,
        required: true,
        default: null
    },
    created_at: {
        type: String,
        required: true,
        default: "2021-07-24T16:29:49.212Z"
    }
  }
});

