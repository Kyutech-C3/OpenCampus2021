<template>
	<div class="tag-list-container">
		<div v-for="tag in tags" :key="tag.name" class="tag-container">
			<tag :tag="tag" :selectable="false" small />
		</div>
	</div>
</template>
<script>
import Tag from '../Tag.vue'
/**
 * type Tag = {
 * 	id: number
 * 	name: string,
 * 	color: string // ex) #FF00DD
 * }
 */
export default {
	name: 'TagList',
	components: {
		Tag
	},
	props: {
		tags: {
			type: Array,
			require: true,
			default: () => ([{
				id: 1,
				name: 'Hack',
				color: '#FF0000'
			}])
		}
	}
}
</script>
<style scoped>
.tag-list-container {
	display: flex;
	flex-direction: row;
}
.tag-container {
	margin-right: 10px;
}
</style>