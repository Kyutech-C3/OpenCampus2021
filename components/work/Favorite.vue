<template>
  <div class="favorite">
    <div @click="submitFavo" :id="(likedFlag ? 'favo_true' : 'likeFlag')">
      <font-awesome-icon :icon="['far', 'heart']" class="farHeart" v-if="!likedFlag"/>
      <font-awesome-icon :icon="['fas', 'heart']" class="fasHeart" v-if="likedFlag"/>
    </div>
    <div class="fa_num">{{likeSum}}</div>
  </div>
</template>

<script>
export default {
  props: {
    work_id: {
      type: Number,
      require: true
    },
    goods: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      likeSum: undefined,
      likedFlag: false,
    }
  },
  // mounted () {
  //   this.$nextTick( function () {
  //     console.log(this.work_id);
  //     this.$axios.get('works/' + String(this.work_id))
  //     .then((res) => {
  //       console.log(res)
  //       this.likeSum = res.data.goods;
  //     })
  //     .catch((err) => {
  //       alert(err);
  //       console.error(err);
  //     })
  //   })
  // },
  mounted () {
    this.$nextTick( function () {
      console.log(this.goods);
      this.likeSum = this.goods;
    })
  },
  methods: {
    submitFavo() {
      console.log(this.likedFlag);
      let payload = {
        goods: 1
      }
      this.$axios.post('works/' + String(this.work_id) + '/goods/', payload)
      .then((res) => {
        this.likeSum = res.data.goods;
      })
      .catch((err) => {
        alert(err);
        console.error(err);
      })
      this.likedFlag = true
    }
  }
};
</script>

<style scoped>
.favorite {
  display: flex;
  align-items: center;
}
#favo_true {
  pointer-events: none;
  opacity: 1.0;
  cursor: auto;
}
#favo_false {
  cursor: pointer;
}
.farHeart {
  width: 30px;
  height: auto;
  cursor: pointer;
  opacity: 0.4;
}
.fasHeart {
  width: 30px;
  height: auto;
  opacity: 0.4;
}
.farHeart:hover {
  opacity: 0.6;
}
.fa_num {
  font-size: 30px;
  margin-left: 10px;
  padding-bottom: 3px;
  opacity: 0.4;
}
</style>