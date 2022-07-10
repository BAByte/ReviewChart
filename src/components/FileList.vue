<template>
  <div>
    <h3 class="line" v-for="(item, index) in dataArr" :key="item" @click="jumpSecurities(item)">
      <span class="sort">{{ index }}.</span>
      <span class="name">{{ item }}</span>
    </h3>
  </div>
</template>

<script>

export default {
  name: 'FileList',
  components: {
  },
  data() {
    return {
      dataArr: null
    }
  },
  mounted() {
    const getFilesFun = require.context('/src/assets/record', false, /\.*$/);
    const files = {};
    getFilesFun.keys().forEach(key => {
      files[key.replace(/(\.\/|\.json)/g, '')] = getFilesFun(key)
    });
    const arr = [];
    for (let key in files) {
      arr.push(key)
    }
    this.dataArr = arr
  },
  methods: {
    jumpSecurities(params) {
      this.$router.push({
        name: 'Securities',
        query: {
          trace: params
        }
      })
    }
  }
}
</script>

<style scoped>
.line {
  padding-bottom: 16px;
  border-bottom: 1px solid #666;
}

.sort {
  margin-right: 16px;
}
</style>
