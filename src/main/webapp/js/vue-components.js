'use strict';

(function (factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = factory(Vue);
    } else if (typeof define === 'function' && define.amd) {
        define(['vue'], factory);
    } else {
        this.components = factory(Vue);
    }
})((function (Vue) {
    var components = function () {
        Vue.component('todo-item', {
            template: '\
              <li>\
                {{ title }}\
                <button v-on:click="$emit(\'remove\')">Remove</button>\
              </li>\
            ',
            props: ['title']
        });
        
        Vue.component('product-item', {
            template: '\
              <div class="col-md-6 col-lg-4">\
                <div class="portfolio-item mx-auto" data-toggle="modal" v-bind:data-target="\'#productModal\' + product.id">\
                  <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">\
                    <div class="portfolio-item-caption-content text-center text-white">\
                      <i class="fas fa-plus fa-3x"></i>\
                    </div>\
                  </div>\
                  <img class="img-fluid" v-bind:src="product.imgUrl" alt="">\
                </div>\
                <div class="portfolio-modal modal fade" v-bind:id="\'productModal\' + product.id" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">\
                  <div class="modal-dialog modal-xl" role="document">\
                    <div class="modal-content">\
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                        <span aria-hidden="true">\
                          <i class="fas fa-times"></i>\
                        </span>\
                      </button>\
                      <div class="modal-body text-center">\
                        <div class="container">\
                          <div class="row justify-content-center">\
                            <div class="col-lg-8">\
                              <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{{ product.title }}</h2>\
                              <div class="divider-custom">\
                                <div class="divider-custom-line"></div>\
                                <div class="divider-custom-icon">\
                                  <i class="fas fa-star"></i>\
                                </div>\
                                <div class="divider-custom-line"></div>\
                              </div>\
                              <img class="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="">\
                              <p class="mb-5">{{ product.detail }}</p>\
                              <button class="btn btn-primary" href="#" data-dismiss="modal">\
                                <i class="fas fa-times fa-fw"></i>\
                                Close Window\
                              </button>\
                            </div>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            ',
            props: ['product']
        });
    }
    
    return components;
}));

