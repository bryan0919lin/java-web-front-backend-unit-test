'use strict';

(function (factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = factory(Vue, components, axios);
    } else if (typeof define === 'function' && define.amd) {
        define(['vue', 'vue-components', 'axios'], factory);
    } else {
        this.indexVm = factory(Vue, components, axios);
    }
})((function (Vue, components, axios) {
	components();
	var indexVm = new Vue({
		el : '#todo-list-example',
		data : {
			newTodoText : '',
			todos : [ {
				id : 1,
				title : 'Do the dishes',
			}, {
				id : 2,
				title : 'Take out the trash',
			}, {
				id : 3,
				title : 'Mow the lawn'
			} ],
			nextTodoId : 4,
			
			msg: '',
			helloMsg: ''
		},
		methods : {
			addNewTodo : function () {
				this.todos.push({
					id : this.nextTodoId++,
					title : this.newTodoText
				})
				this.newTodoText = '';
			},
			showHelloMsg : function () {
				var $this = this;
				axios.post('home/action1', this.msg, {
					headers:{
				        'Content-type': 'text/plain'
				    }
				}).then(function (response) {
				    console.log(response);
				    $this.helloMsg = response.data;
				}).catch(function (error) {
				    console.log(error);
				    $this.helloMsg = 'error';
				});
			}
		}
	});
	
	return indexVm;
}));