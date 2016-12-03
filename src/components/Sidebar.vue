<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }} 小时</h1>
    </div>

  </div>
</template>

<script>
    //单文件组件export输出方式
    //里面可以加入组件名和数据,方法以及其他
    export default {
        name : 'Sidebar',
        computed : {
            time() {
                return this.$store.state.totalTime
            }
        }
    }
</script>