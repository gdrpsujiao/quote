<template>
  <el-input
    v-model="inputValue"
    :type="type"
    :maxlength="maxlength"
    :minlength="minlength"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :suffix-icon="suffixIcon"
    :rows="rows"
    :class="{ 'no-border': noBorder }"
    @input="handleInput"
    @keyup.enter.native="handleEnter"
  >
    <template
      v-if="prepend"
      slot="prepend"
    >
      {{ prepend }}
    </template>
    <template
      v-if="append"
      slot="append"
    >
      {{ append }}
    </template>
  </el-input>
</template>
<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number],
      default: ''
    },
    minlength: {
      type: [String, Number],
      default: ''
    },
    rows: {
      type: Number,
      default: 2
    },
    readonly: {
      type: Boolean,
      default: false
    },
    prepend: {
      type: String,
      default: ''
    },
    append: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: this.value? this.value: ''
    }
  },
  watch: {
    value: function(val) {
      if(val !== this.inputValue) {
        this.inputValue = val
      }
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event)
    },
    handleEnter() {
      this.$emit('keyEnter')
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-input {
        width: 100%;
        & /deep/ .el-input-group__prepend {
          padding: 0 10px;
        }
        &.no-border /deep/ .el-input__inner {
          border: 0!important;
        }
    }
</style>