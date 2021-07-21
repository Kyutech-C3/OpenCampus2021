<template>
    <div>
        <dev class="header_top">
            <div class="header_left">
                <span class="title">{{title}}</span>
            </div>
            <div class="l">
                <favorite :work_id="work_id" :goods="goods" class="favorite"/>
            </div>
        </dev>
        <div class="header_mid">
            <div class="viewer">
                <viewer :mediaAssets="media_assets" />
            </div>
            <div class="work_info">
                <download :workID="work_id" class="download" v-if="download_link != null"/>
                <div class="member_title">
                    <font-awesome-icon :icon="['fas', 'users']" />
                    <span>制作者</span>
                </div>
                <div class="member">
                    {{team.name}}
                </div>
                <work-link v-if="work_link" :to="work_link" />
                <div class="tag_title">
                    <font-awesome-icon :icon="['fas', 'tags']" />
                    <span>タグ</span>
                </div>
                <tag-list :tags="tags" class="tags" />
            </div>
        </div>
        <div class="header_bottom">
            <div class="description">{{description}}</div>
        </div>
    </div>
</template>

<script>
import Favorite from "./Favorite.vue"
import Download from "./Download.vue"
import Viewer from "./Viewer.vue"
import TagList from './TagList.vue'
import WorkLink from './WorkLink.vue'
export default {
    components: {
        Favorite,
        Download,
        Viewer,
        TagList,
        WorkLink
    },
    data() {
        return {
            style: true
        }
    },
    props: {
        title: {
            type: String,
            required: true,
            default: "hoge",
        },
        team: {
            type: Object,
            required: true
        },
        tags: {
            type: Array,
            required: true,
            default: [
                {
                    "id": 0,
                    "name": "hoge1",
                    "color": "#234"
                },
                {
                    "id": 1,
                    "name": "hoge2",
                    "color": "#432"
                },
                {
                    "id": 2,
                    "name": "hoge2",
                    "color": "#234"
                },
                {
                    "id": 3,
                    "name": "hoge3",
                    "color": "#432"
                },
                {
                    "id": 4,
                    "name": "hoge1",
                    "color": "#234"
                },
                {
                    "id": 5,
                    "name": "hoge2",
                    "color": "#432"
                },
                {
                    "id": 6,
                    "name": "hoge2",
                    "color": "#234"
                },
                {
                    "id": 7,
                    "name": "hoge3",
                    "color": "#432"
                }
            ]
        },
        description: {
            type: String,
            required: true,
            default: "enpty"
        },
        card_image: {
            type: String,
            required: true,
            default: "enpty"
        },
        work_id: {
            type: Number,
            require: true,
        },
        work_link: {
            type: String,
            required: false,
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
            type: Array,
            required: true
        },
    },
    methods: {
		zeroPadding(num, length) {
			return ('0000000000' + num).slice(-length);
		}
	}
}
</script>

<style scoped>
.header_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    height: auto;
}
.title {
    align-self: center;
    font-size: 30px;
    font-weight: bold;
}
.download {
    font-size: 20px;
}
.header_mid {
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 30px;
    height: auto;
    width: 100%;
}
.viewer {
    width: 100%;
}
.work_info {
    margin-top: 20px;
    margin-left: 20px;
    width: 100%;
    height: auto;
}
.member_title {
    font-size: 20px;
    margin-top: 20px;
}
.member {
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 20px;
}
.tag_title {
    margin-bottom: 15px;
    font-size: 20px;
}
.created_at {
    font-size: 20px;
    margin-bottom: 20px;
}
.header_bottom {
    padding-left: 7%;
}
.description::selection, .member::selection {
    background: #4565863d;
}
.description {
	white-space: pre-wrap;
}
.member_title, .title, .created_at, .tag_title, .tags {
    -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media screen and (min-width: 1300px) {
    .viewer {
        width: 70%;
    }
    .work_info {
        margin-left: 0px;
        padding-left: 20px;
        width: 30%;
        height: auto;
    }
}
@media screen and (max-width: 1300px) {
    .viewer {
        width: 100%;
    }
    .work_info {
        width: 100%;
        height: auto;
        margin-right: 20px;
    }
}
@media screen and (max-width: 481px) {
    .viewer {
        width: 100%;
    }

}

.viewer_mock {
    background-color: blue;
}
</style>
