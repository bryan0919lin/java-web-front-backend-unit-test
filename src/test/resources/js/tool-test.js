define(['tool', 'axios', 'axios-mock-adapter'], function (indexVm, axios, MockAdapter) {
	describe('index', function () {
		it('Test addNewTodo', function () {
			indexVm.newTodoText = 'Bryan';
			indexVm.addNewTodo();
			
			expect(indexVm.todos[3].id).toBe(4);
			expect(indexVm.todos[3].title).toBe('Bryan');
		});
		
		it('Test showHelloMsg', function () {
			var mock = new MockAdapter(axios);
			mock.onPost('home/action1').reply(200, 'CCC');
			
			indexVm.msg = 'QQ';
			indexVm.showHelloMsg();
			indexVm.$nextTick(function () {
				expect(indexVm.helloMsg).toBe('CCC');
			});
		});
	});	
});