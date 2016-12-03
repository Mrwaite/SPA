//给mutation上面的规定的操作,绑定上具体的方法

//导入方法名
import * as types from './mutation-types'

export default {
    //增加总时间
    [types.ADD_TOTAL_TIME] (state, time) {
        state.totalTime = state.totalTime + time;
    },
    //减少总时间
    [types.DEC_TOTAL_TIME] (state, time) {
        state.totalTime = state.totalTime - time;
    },
    //添加一条计划
    [types.SAVE_PLAN] (state, plan) {
        //设置默认的名字和头像地址
        const name = '二哲';
        const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';

        state.list.push(
            Object.assign({ name : name, avatar : avatar }, plan)
        )
    }
}