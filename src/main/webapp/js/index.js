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
			products : [ {
				id : 1,
				img : 'img/portfolio/cabin.png',
				title : 'Very Cool',
				detail : 'A very very long detail that you may be scared, ha ha ha.'
			}, {
				id : 2,
				img : 'img/portfolio/cake.png',
				title : 'Very Cool 2',
				detail : 'A very very long detail that you may be scared, ha ha ha 2.'
			}, {
				id : 3,
				img : 'img/portfolio/circus.png',
				title : 'Very Cool 3',
				detail : 'A very very long detail that you may be scared, ha ha ha 3.'
			}, {
				id : 4,
				img : 'img/portfolio/game.png',
				title : 'Very Cool 4',
				detail : 'A very very long detail that you may be scared, ha ha ha 4.'
			}, {
				id : 5,
				img : 'img/portfolio/safe.png',
				title : 'Very Cool 5',
				detail : 'A very very long detail that you may be scared, ha ha ha 5.'
			}, {
				id : 6,
				img : 'img/portfolio/submarine.png',
				title : 'Very Cool 6',
				detail : 'A very very long detail that you may be scared, ha ha ha 6.'
			} ],
		},
		methods : {
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

	// This will enable the data attributes of the bootstrap javascript functionality.
	if (BSN) {
		BSN.initCallback();
	}
	
	return indexVm;
}));