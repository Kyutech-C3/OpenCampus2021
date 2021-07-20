<template>
	<div class="page-wrapper">
		<Header 
			class="header"
			:title="work_data.title"
			:team="work_data.team"
			:tags="work_data.tags"
			:description="work_data.description"
			:card_image="work_data.card_image"
			:work_id="work_data.id"
			:work_link="work_data.work_link"
			:download_link="work_data.download_link"
			:goods="work_data.goods"
			:media_assets="work_data.media_assets"
			:created_at="work_data.created_at"
		/>
		<Comment class="comments" :work_num="work_data.id" :comment_list="work_data.comments" />
	</div>
</template>
<script>
import CommentCard from '@@/components/work/Comment.vue'
import Header from '@@/components/work/Header.vue'
import Footer from '@@/components/Footer.vue'

export default {
	components: {
		Comment: CommentCard,
		Header: Header,
		Footer: Footer
	},
	head: {
		title: '作品詳細'
	},
	data() {
		return {
			work_data: {}
		}
	},
	async asyncData({ params, $axios }) {
		console.log('hoge')
		const res = await $axios.get('works/' + params.work).catch((err) => {
			alert(err);
			console.error(err);
		})
		console.log(res)
		return { work_data: res.data }
	},
}
</script>
<style lang="css" scoped>
.page-wrapper{
	width: 80%;
	margin: auto;
}
.header {
	margin-bottom: 30px;
}
.comments {
	padding-bottom: 60px;
}
@media screen and (max-width: 1300px) {
	.page-wrapper {
		width: 100%;
		margin: auto;
	}
}
</style>