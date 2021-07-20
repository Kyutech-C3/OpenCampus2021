<template>
	<div class="tag-selector-container">
		<div class="tag-selector-header">
			<font-awesome-icon icon="search" />
			<div class="label">タグで探す</div>
			<TagButton class="all-select-button" name="クリア" color="#808080" :enabled="selectedTags.length > 0" small @click="clearSelectedTags" />
			<v-select class="tag-select" :options="options" :value="[]" @option:selected="handleSelect" />
		</div>
		<div class="tag-list-container">
			<div v-for="tag in selectedTags" :key="tag.name" class="tag-container">
				<tag
					:tag="tag"
					:deletable="true"
					@delete="handleUnSelect"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import TagButton from './TagButton'
import VSelect from 'vue-select'
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
		TagButton,
		VSelect
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
	computed: {
		options() {
			return this.tags.map(t => ({
				label: t.name,
				value: t
			}))
		},
		unSelectedTags() {
			const selectedTagIDs = this.selectedTags.map(t => t.id)
			return this.tags.filter(t => (!(t.id in selectedTagIDs)))
		},
		hasAllTagSelected() {
			return this.tags.length === this.selectedTags.length
		}
	},
	methods: {
		handleSelect(option) {
			const tag = option.value
			if( !this.selectedTags.find(t => t.id === tag.id) )
				this.$emit('selectTags', [...this.selectedTags, tag])
		},
		handleUnSelect(tag) {
			const tagIdx = this.selectedTags.findIndex(t => t.id === tag.id)
			if (tagIdx !== -1) {
				const temp = this.selectedTags.concat()
				temp.splice(tagIdx, 1)
				this.$emit('selectTags', temp)
			}
		},
		getSelected(tag) {
			return this.selectedTags.find((t) => (tag.id === t.id)) !== undefined
		},
		clearSelectedTags() {
			this.$emit('selectTags', [])
		}
	}
}
</script>
<style scoped>
.tag-selector-container {
	display: flex;
	flex-direction: column;
}

.tag-selector-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 1rem;
}

.label {
	margin-left: .5rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.all-select-button {
	margin-left: .5rem;
}

.tag-list-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.tag-container:last-child {
	margin-right: 0;
}

.tag-container {
	margin-right: .8rem;
}

.tag-select {
	margin-left: .5rem;
}
.tag-selector-header >>> .vs__dropdown-menu {
	width: auto;
	z-index: 10;
}
</style>
