<template>
  <div class="index">
    <div class="header">
      <div class="nav">
        <div class="fl"><h1></h1></div>
        <div class="fr">
          <NavUl />
        </div>
      </div>
      <div class="title"></div>
      <div class="message"></div>
    </div>
  </div>
</template>

<script>
import NavUl from '../components/nav.vue'
export default {
  data () {
    return {
    }
  },

  created () {
    this.getinit()
  },
  components: {
    NavUl
  },
  methods: {
    async getinit () {
      const res = await this.$Axios.get('GET/index')
      console.log(res)
    }
  }
}
</script>

<style scoped lang='less'>
.header {
  height: 566px;
  width: 100%;
  padding: 34px 50px 0;
  background: url('../assets/img/logbgc.jpg');
}
.fl {
  float: left;
  height: 39px;
  width: 183px;
  background-color: pink;
}
.fr {
  float: right;
  height: 47px;
  width: 1008px;
}
</style>
