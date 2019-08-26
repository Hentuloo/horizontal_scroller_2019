class swiper {
    constructor() {
        this.initY = null;
        this.initX = null;
        this.activeScroll = false;

        document.addEventListener('touchstart', this.startMove);
        document.addEventListener('touchmove', this.directoryMove);

        this.swiperEvents = {
            swipeUp: new Event('swipeUp'),
            swipeDown: new Event('swipeDown'),
            swipeLeft: new Event('swipeLeft'),
            swipeRight: new Event('swipeRight'),
        };
    }
    startMove = e => {
        const { clientX, clientY } = e.touches[0];
        this.initY = clientY;
        this.initX = clientX;
    };
    directoryMove = e => {
        if (this.activeScroll || this.initX === null || this.initY === null) {
            return;
        }
        this.activeScroll = true;
        setTimeout(() => (this.activeScroll = false), 400);

        const { clientX, clientY } = e.touches[0];
        const diffX = clientX - this.initX;
        const diffY = clientY - this.initY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                window.dispatchEvent(this.swiperEvents.swipeLeft);
            } else {
                window.dispatchEvent(this.swiperEvents.swipeRight);
            }
        } else {
            if (diffY > 0) {
                window.dispatchEvent(this.swiperEvents.swipeUp);
            } else {
                window.dispatchEvent(this.swiperEvents.swipeDown);
            }
        }
        this.initX = null;
        this.initY = null;
    };
}

new swiper();
