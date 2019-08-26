document.addEventListener('DOMContentLoaded', () => {
    const pages = [...document.querySelectorAll('.sections__element')];
    const navElements = [...document.querySelectorAll('.navigation__element')];
    const ScrollerClass = new Scroller(pages, navElements);

    window.addEventListener('wheel', ScrollerClass.wheelScroll);

    navElements.forEach((el, index) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            ScrollerClass.changeActive.byId(index);
        });
    });

    window.addEventListener('swipeUp', () => ScrollerClass.changeActive.prev());
    window.addEventListener('swipeDown', () =>
        ScrollerClass.changeActive.next(),
    );
    window.addEventListener('swipeLeft', () =>
        ScrollerClass.changeActive.prev(),
    );
    window.addEventListener('swipeRight', () =>
        ScrollerClass.changeActive.next(),
    );
    window.addEventListener('keydown', e => {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 37:
                ScrollerClass.changeActive.prev();
                break;
            case 38:
                ScrollerClass.changeActive.prev();
                break;
            case 39:
                ScrollerClass.changeActive.next();
                break;
            case 40:
                ScrollerClass.changeActive.next();
                break;
            default:
                return;
        }
    });
});
