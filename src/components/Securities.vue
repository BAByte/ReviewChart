<template>
    <div>
        <h3 class="line" v-for="(item, index) in dataArr" :key="item" @click="jumpDetails(item)">
            <span class=" sort">{{ index }}.</span>
            <span class="name">{{ item }}</span>
        </h3>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Securities',
    components: {
    },
    data() {
        return {
            dataArr: null
        }
    },
    mounted() {
        const { trace } = this.$route.query;
        const name = './' + trace
        const getFilesFun = require.context('/src/assets/record', false, /\.*$/);
        var fileContent
        getFilesFun.keys().forEach(key => {
            if (key == name) {
                fileContent = getFilesFun(key);
                return;
            }
        });
        const arr = [];
        for (var key in fileContent) {
            arr.push(key)
        }
        this.dataArr = arr
    },
    methods: {
        jumpDetails(params) {
            this.$router.push({
                name: 'SecuritiesDetails',
                query: {
                    securities: params
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
