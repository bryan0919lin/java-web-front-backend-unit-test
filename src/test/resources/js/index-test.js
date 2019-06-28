define(['index', 'axios', 'axios-mock-adapter'], function (indexVm, axios, MockAdapter) {
	describe('index', function () {
		it('Test init', function () {
			var mock = new MockAdapter(axios);
			mock.onGet('food').reply(200, [ {
				id : 100,
				imgUrl : 'imgUrl100',
				title : 'title100',
				detail : 'detail100'
			}, {
				id : 101,
				imgUrl : 'imgUrl101',
				title : 'title101',
				detail : 'detail101'
			} ]);
			
			indexVm.init();
			indexVm.$nextTick(function () {
				expect(indexVm.products.length).toBe(2);
			});
		});
	});	
});