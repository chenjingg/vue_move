import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
		msg:'陈',
		msg1:'劲',
		msg2:'18',
		msg3:'男'
	},
	mutations:{
		playMail(state,data){
			state.personMail=data
		},//既做保存首页新建人员信息，也做相应子页面获取数据后需要改变的操作
		HomeChange1(state,data1){
			state.msg=data1
		}
	},//只有mutations才有权修改state的值，修改时同步操作，如需异步修改将方法写在action中
	actions:{
		HomeChange2(context,data1){
			setTimeout(()=>{
				context.commit('HomeChange1',data1)
			},1000)
			
		}
	},//actions用于处理异步的任务函数定时器之类,但是还是需要在mutations中写入修改的方法，通过context.commit去调用
	getters:{
		changeGetter(state){
			return state.msg+state.msg1
		}
	}//getters中的方法会对引入的state数据进行包装并返回新数值，不会影响到原state中的数据,组件中以函数名的字符串当值方式使用
})

