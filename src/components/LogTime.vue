<!--LogTime属于TimeEntries组件的一个子路由,是TimeEntries里面的一个子功能-->
<!--需要去配置一下TimeEntries的路由,并且使用webpack的懒加载,减少首页的加载时间-->
<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="Date"
        /><!--input与data里的date绑定,下同-->
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="number"
          class="form-control"
          v-model="totalTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
          type="text"
          class="form-control"
          v-model="comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button><!--触发save-->
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link><!--返回计划展示组件上-->
    <hr>
  </div>
</template>

<script>
    export default {
        name : 'LogTime',
        data () {
            return {
                date : '',
                totalTime : '',
                comment : ''
            }
        },
        methods : {
            save () {
                const plan = {
                    name : '二哲',
                    image : 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
                    date : this.date,
                    totalTime : this.totalTime,
                    comment : this.comment
                };
                this.$store.dispatch('savePlan', plan);//把设置的计划保存
                this.$store.dispatch('addTotalTime', this.totalTime);//把当前计划的时间累加到总时间上
                this.$router.go(-1);//路由history后退一步
            }
        }
    }
</script>