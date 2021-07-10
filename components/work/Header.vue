<template>
    <div>
        <dev>
            <span>{{title}}</span>
            <download :download_link="download_link" />
            <favorite :goods="goods"/>
        </dev>
        <div>
            <viewer :media_assets="media_assets" :card_image="card_image"/>
            <div>
                <div>
                    <font-awesome-icon :icon="['fas', 'users']" />
                    <span>メンバー</span>
                </div>
                <div>{{team}}</div>
                <div>
                    <font-awesome-icon :icon="['fas', 'redo']" />
                    <span>{{created_at}}</span>
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'tags']" />
                    <span>タグ</span>
                </div>
                <div class="tag">
                    <Tag 
                    v-for="tag in tags"
                    :tag="tag"
                    :key="tag.id"
                    />
                </div>
            </div>
        </div>
        <div>
            <div>{{direction}}</div>
        </div>
    </div>
</template>

<script>
import Favorite from "./Favorite.vue"
import Download from "./Download.vue"
import Viewer from "./Viewer.vue"
export default {
    components: {
        Favorite,
        Download,
        Viewer
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
            default: null
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
    }
}
</script>

<style scoped>

</style>