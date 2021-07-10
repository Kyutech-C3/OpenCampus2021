<template>
	<div class="tag-list-container">
		<div v-for="(tag) in tags" :key="tag.name" class="tag-container">
			<tag
				:tag="tag"
				:selectable="true"
				:selected="getSelected(tag)"
				@select="handleSelect(tag)"
				@unSelect="handleUnSelect(tag)"
			/>
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
	model: {
		prop: 'selectedTags',
		event: 'selectTags'
	},
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
		},
		selectedTags: {
			type: Array,
			require: true,
			default: () => ([])
		}
	},
	methods: {
		handleSelect(tag) {
			if( !this.selectedTags.find(t => t.id === tag.id) )
				this.$emit('selectTags', [...this.selectedTags, tag])
		},
		handleUnSelect(tag) {
			const tagIdx = this.selectedTags.findIndex(t => t.id === tag.id)
			if (tagIdx !== -1) {
				this.selectedTags.splice(tagIdx, 1)
				this.$emit('selectTags', this.selectedTags)
			}
		},
		getSelected(tag) {
			return this.selectedTags.find((t) => (tag.id === t.id)) !== undefined
		}
	}
}
</script>
<style scoped>
.tag-list-container {
	display: flex;
	flex-direction: row;
}

.tag-container:last-child {
	margin-right: 0;
}

.tag-container {
	margin-right: 10px;
}
</style>