<template>
  <el-dialog :visible.sync="visible" :title="title" width="30%">
    <img :src="src" alt="大图" style="width: 100%; display: block;">
  </el-dialog>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      src: String,
      type: String
    },

    computed: {
      visible: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      },
      title() {
        return this.type
      }
    },

    created() {
      this.$nextTick(() => {
        console.log(this.src)
        console.log(this.type)
      })
    }
  };
</script>