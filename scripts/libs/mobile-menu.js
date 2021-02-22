export class MobileMenu {
    constructor() {
        console.log('class MobileMenu');
        this.DOM = {}; //DOM要素を格納するためのオブジェクト
        this.DOM.btn = document.querySelector('.drawer-meny-icon-burger');
        this.DOM.head = document.querySelector('.header');
        this.DOM.global = document.querySelector('.global-container');
        this.DOM.mobileMenuList = document.querySelector('.mobile-menu-container');
        this.DOM.menuListContant = document.querySelectorAll('.menu-list');
        this._addEvent(); //イベントを付与
    }

    _toggle() {
        this.DOM.head.classList.toggle('drawer-meny-icon-burger-open');
        this.DOM.global.classList.toggle('mobile-open');
        this.DOM.mobileMenuList.classList.toggle('mobile-open');
    }

    _addEvent() {
        //dom要素にイベントを付与
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        
        //メニューのリスト一つ一つにイベントを付与
        this.DOM.menuListContant.forEach(element => {
            element.addEventListener('click', this._toggle.bind(this));
        });
    }
}