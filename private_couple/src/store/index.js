import Vue from 'vue';
import Vuex from 'vuex';
import persistedstate from 'vuex-persistedstate';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		email: '',
		username: '',
		itemList: [],
		checkedList: [],
		courseList: [],
		startItem: [],
		startList: [],
		lastItemList: [],
		lastCourseList: [],
		errorMessage: '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations,
	actions,
	plugins: [
		persistedstate({
			paths: ['username', 'email', 'startList'],
		}),
	],
});
