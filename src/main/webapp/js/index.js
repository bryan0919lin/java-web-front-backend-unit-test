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
    var loginTokenCookieName = 'loginToken';
    var indexVm = new Vue({
        el : '#index',
        data : {
            newFood: {
                imgUrl: null,
                title: null,
                detail: null
            },
            editable: false,
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
                var loginModal = document.getElementById('login');
                createFoodModal.addEventListener('show.bs.modal', function (event) {
                    // Reset the form data
                    $this.newFood.title = '';
                    $this.newFood.imgUrl = '';
                    $this.newFood.detail = '';
                }, false);

                createFoodModal.addEventListener('shown.bs.modal', function (event) {
                    var loginToken = $this.getCookie(loginTokenCookieName);
                    if (!loginToken) {
                        new BootstrapNative.Modal(loginModal).show();
                    } else {
                        axios.get('login/status', {
                            params: {},
                            headers: {
                                'Authorization': 'Bearer ' + loginToken
                            } 
                        }).then(function (response) {
                            if (!response.data) {
                                new BootstrapNative.Modal(loginModal).show();
                            }
                        }).catch(function (error) {
                            new BootstrapNative.Modal(loginModal).show();
                        });
                    }
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
            checkLogin: function () {
                var $this = this;
                return !!$this.getCookie(loginTokenCookieName);
            },
            setCookie: function (name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "")  + expires + "; path=/";
            },
            getCookie: function (name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
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