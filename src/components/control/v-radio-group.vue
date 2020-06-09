<template>
  <div class="v-radio-group">
    <el-radio-group 
      v-model="radio"
      :disabled="disabled"
      @change="changeRadio">
      <template v-if="!button">
        <el-radio
          v-for="(item, index) in list"
          :key="index"
          :border="border"
          :disabled="disabledList.includes(item[valueKey])"
          :label="item[valueKey]">{{ item[labelKey] }}</el-radio>
      </template>
      <template v-else>
        <el-radio-button
          v-for="(item, index) in list"
          :key="index"
          :disabled="disabledList.includes(item[valueKey])"
          :label="item[valueKey]">{{ item[labelKey] }}</el-radio-button>
      </template>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'VRadioGroup',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    labelKey: {
      type: String,
      default: 'name'
    },
    valueKey: {
      type: String,
      default: 'id'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledList: {
      type: Array,
      default: () => ([])
    },
    button: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      radio: ''
    }
  },
  computed: {
    isNumber() {
      const id = this.list[0][this.valueKey]
      return typeof id === 'number'? true: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if(val === null || val === '') {
          this.radio = ''
        }
        else if(val !== this.radio) {
          this.radio = this.isNumber? Number(val): String(val)
        }
      }
    },
    radio: {
      handler(val) {
        if(val !== this.value) {
          this.$emit('input', val)
          this.$emit('change', val)
        }
      }
    }
  },
  methods: {
    // 這樣寫不知道爲什麽必須改變兩次才會觸發 element 的表單校驗
    changeRadio(val) {
      // this.$emit('input', val)
      // this.$emit('change', val)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>