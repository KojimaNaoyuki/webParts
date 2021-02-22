class MobileMenu {
    constructor() {
        console.log('class MobileMenu');
        this.DOM = {}; //DOM要素を格納するためのオブジェクト
        this.DOM.btn = document.querySelector('.drawer-meny-icon-burger');
        this.DOM.head = document.querySelector('.header');
        this._addEvent(); //イベントを付与
    }

    _toggle() {
        this.DOM.head.classList.toggle('drawer-meny-icon-burger-open');
    }

    _addEvent() {
        //dom要素にイベントを付与
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
    }
}