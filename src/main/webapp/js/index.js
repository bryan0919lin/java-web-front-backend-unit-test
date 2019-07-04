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
            newFood: {
                imgUrl: null,
                title: null,
                detail: null
            },
            title: '',
            products: []
        },
        methods : {
            init: function () {
                var $this = this;

                // Trigger updated event to bind bootstrap javascript
                $this.newFood.title = '';
                $this.newFood.imgUrl = '';
                $this.newFood.detail = '';

                var createFoodModal = document.getElementById('add');
                createFoodModal.addEventListener('show.bs.modal', function (event) {
                    // Reset the form data
                    $this.newFood.title = '';
                    $this.newFood.imgUrl = '';
                    $this.newFood.detail = '';
                }, false);
                
                $this.getAllFoods();
            },
            getAllFoods: function () {
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
            addFood: function () {
                var $this = this;
                axios.post('food', $this.newFood).then(function (response) {
                    console.log(response);
                    if (!response.data) {
                        alert('Create food failed!');
                    } else {
                        $this.getAllFoods();
                    }
                }).catch(function (error) {
                    console.log(error);
                    alert('Create food failed!');
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
        mounted : function () {
            console.log('mounted');
            this.init();
        },
        updated: function () {
            console.log('updated');
            // This will enable the data attributes of the bootstrap javascript functionality.
            if (BSN) {
                BSN.initCallback();
            }
        }
    });

    return indexVm;
}));