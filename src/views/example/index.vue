<template>
  <div class="example">
    <h1>{{ test }} webhook - 6</h1>
    <el-button @click="testClick">
      修改 vuex
    </el-button>
    <h1>{{ $t('example.test') }}</h1>
    <el-button @click="langClick">
      修改 語言
    </el-button>
    <el-button @click="network().login">
      測試接口跨域
    </el-button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { login } from '@/api'
export default {
  name: 'Example',
  data() {
    return {
      index: 0 ,
    }
  },
  computed: {
    ...mapState('example', ['test'])
  },
  methods: {
    ...mapActions('example', ['setExample']),
    testClick() {
      this.setExample(this.test + this.index)
      this.index++
    },
    langClick() {
      const lang = localStorage.getItem('lang') === 'en-US' ? 'zh-CN' : 'en-US'
      localStorage.setItem('lang', lang)
      this.$i18n.locale = lang
    },
    network() {
      return {
        login: async () => {
          let { data } = await login({
            username: 'test',
            password: 'test'
          })
          console.log(data)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.example {
    h1 {
        text-align: center;
    }
}
</style>