import Header from "../work/Header.vue";
export default { title: "Header" };

export const header1 = () => ({
  components: { Header },
  template: '<Header :title="title" :team="team" :tags="tags" :description="description" :card_image="card_image" :work_id="work_id" :download_link="download_link" :goods="goods" :media_assets="media_assets" :created_at="created_at"/>',
  props: {
    title: {
      default: "hoge",
    },
    team: {
      type: Object,
      requireed: true,
      default: {
        id: 0,
        name: "hoge1, hoge2, hoge3, hoge4, hoge5"
      },
    },
    tags: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    card_image: {
        type: String,
        required: true,
        default: null
    },
    work_id: {
        type: Number,
        require: true,
        default: 1
    },
    download_link: {
        type: String,
        required: true,
        default: ""
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

