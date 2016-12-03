//actions.js用来触发注册的事件和传入参数

import * as types from './mutation-types'

export default {
    //this.$store.dispatch('addTotalTime', this.totalTime);
    //我猜想上面的冒泡会执行这个函数,并且给两个参数,一个是store.commit,一个是上面的第二个参数
    addTotalTime ({ commit }, time) {
        commit(types.ADD_TOTAL_TIME, time);
    },
    decTotalTime ({ commit }, time) {
        commit(types.DEC_TOTAL_TIME, time);
    },
    savePlan ({ commit }, plan) {
        commit(types.SAVE_PLAN, plan);
    },
    deletePlan ({ commit }, plan) {
        commit(types.DELETE_PLAN, plan);
    }
}