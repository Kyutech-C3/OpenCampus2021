<template>
    <div>
        <dev class="header_top">
            <div class="header_left">
                <span class="title">{{title}}</span>
                <download :download_link="download_link" class="download" v-if="download_link != ull"/>
            </div>
            <div class="l">
                <favorite :work_id="work_id" :goods="goods" class="favorite"/>
            </div>
        </dev>
        <div class="header_mid">
            <viewer :media_assets="media_assets" :card_image="card_image" class="viewer"/>
            <div class="work_info">
                <div class="member_title">
                    <font-awesome-icon :icon="['fas', 'users']" />
                    <span>メンバー</span>
                </div>
                <div class="member">
                    {{team.name}}
                </div>
                <div class="created_at">
                    <font-awesome-icon :icon="['fas', 'redo']" />
                    <span>{{ getDate(created_at) }}</span>
                </div>
                <div class="tag_title">
                    <font-awesome-icon :icon="['fas', 'tags']" />
                    <span>タグ</span>
                </div>
                <tag-list :tags="tags" class="tags" />
            </div>
        </div>
        <div class="header_bottom">
            <div>{{description}}</div>
        </div>
    </div>
</template>

<script>
import Favorite from "./Favorite.vue"
import Download from "./Download.vue"
import Viewer from "./Viewer.vue"
import TagList from './TagList.vue'
export default {
    components: {
        Favorite,
        Download,
        Viewer,
        TagList
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
            require:true,
        },
        download_link: {
            type: String,
            required:true,
            default: "a"
        },
        goods: {
            type: Number,
            required: true,
            default: 0
        },
        media_assets: {
            type: Object,
            required: true
        },
        created_at: {
            type: String,
            required: true,
            default: "2021-07-24T16:29:49.212Z"
        }
    },
    methods: {
		getDate(datetime) {
			let formatted_datetime = new Date(datetime);
			return `${formatted_datetime.getFullYear()}/${this.zeroPadding(formatted_datetime.getMonth()+1, 2)}/${this.zeroPadding(formatted_datetime.getDate(), 2)} ${this.zeroPadding(formatted_datetime.getHours(), 2)}:${this.zeroPadding(formatted_datetime.getMinutes(), 2)}:${this.zeroPadding(formatted_datetime.getSeconds(), 2)}`
		},
		zeroPadding(num,length) {
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
    height: 70px;
}
.title {
    align-self: center;
    font-size: 30px;
    font-weight: bold;
}
.download {
    align-self: center;
    margin-left: 10px;

}
.header_mid {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    height: auto;
}
.viewer {
    width: 100%;
    height: auto;
}
.work_info {
    margin-left: 20px;
    width: 400px;
    height: 550px;
}
.member_title {
    font-size: 15px;
}
.member {
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 20px;
}
.tag_title {
    margin-bottom: 15px;
}
.created_at {
    font-size: 20px;
    margin-bottom: 20px;
}
.header_bottom {
    padding-left: 7%;
}

@media screen and (max-width: 1300px) {
    .header_mid {
        display: block;
    }
    .viewer {
        width: 100%;
        height: 550px;
    }
    .work_info {
        margin-top: 20px;
        margin-left: 0px;
        padding-left: 100px;
        padding-right: 100px;
        width: 100%;
        height: auto;
    }
}
@media screen and (max-width: 900px) {
    .viewer {
        width: 100%;
        height: 350px;
    }
    .work_info {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        height: auto;
    }
}
@media screen and (max-width: 481px) {
    .viewer {
        width: 100%;
        height: 200px;
    }
    .work_info {
        width: 100%;
        height: auto;
    }
}
</style>