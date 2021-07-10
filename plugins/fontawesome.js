import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 1. 利用したいアイコンを以下にてimportする
import {
	faTimes,
	faSearch,
	faComments,
	faPaperPlane,
	faHeart as faSolidHeart,
	faExternalLinkAlt,
	faAngleUp
} from '@fortawesome/free-solid-svg-icons'
import {
	faYoutube,
	faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
	faCommentDots,
	faHeart,
} from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false

// 2. 利用したいアイコンを以下にてlibrary.addする
library.add(
	faTimes,
	faSearch,
	faYoutube,
	faCommentDots,
	faComments,
	faPaperPlane,
	faHeart,
	faSolidHeart,
	faTwitter,
	faExternalLinkAlt,
	faAngleUp
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/**
 * <!-- 利用 -->
 * <font-awesome-icon icon="times" />
 * 
 * <!-- brandsの場合 -->
 * <font-awesome-icon :icon="['fab', 'youtube']" />
 * <!-- regularの場合 -->
 * <font-awesome-icon :icon="['far', 'youtube']" />
 */
