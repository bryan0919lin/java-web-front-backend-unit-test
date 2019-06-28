'use strict';

(function (factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = factory(Vue, components, axios, BootstrapNative);
    } else if (typeof define === 'function' && define.amd) {
        define(['vue', 'vue-components', 'axios', 'bootstrap-native'], factory);
    } else {
        this.indexVm = factory(Vue, components, axios, BootstrapNative);
    }
})((function (Vue, components, axios, BootstrapNative) {
	components();
	var indexVm = new Vue({
		el : '#index',
		data : {
			products: []
		},
		methods : {
			init: function () {
				var $this = this;
				axios.get('food').then(function (response) {
					console.log($this.products);
					response.data.forEach(function (p) {
						$this.products.push(p);
					});
				}).catch(function (error) {
					console.log(error);
				});
			},
			showHelloMsg : function () {
				var $this = this;
				axios.post('home/action1', this.msg, {
					headers:{
				        'Content-Type': 'text/plain'
				    }
				}).then(function (response) {
				    console.log(response);
				    $this.helloMsg = response.data;
				}).catch(function (error) {
				    console.log(error);
				    $this.helloMsg = 'error';
				});
			}
		},
		created : function () {
			console.log('init');
			this.init();
		},
		updated: function () {
			// This will enable the data attributes of the bootstrap javascript functionality.
			if (BSN) {
				BSN.initCallback();
			}
		}
	});

	return indexVm;
}));