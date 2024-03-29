class Scroller {
    constructor(sections, navElements) {
        this.sections = sections;
        this.navElements = navElements;

        this.activeSection = 0;

        this.activeScroll = false;
        this.defaultActiveElement();
        this.changeActive = {
            byId: index => {
                this.activeSection = index;
                this.scrollToActive();
            },
            next: () => {
                if (this.activeSection >= this.sections.length - 1) return;
                this.activeSection += 1;
                this.scrollToActive();
            },
            prev: () => {
                if (this.activeSection <= 0) return;
                this.activeSection -= 1;
                this.scrollToActive();
            },
        };
    }

    defaultActiveElement = () => {
        const activeIndex = this.sections.findIndex(
            el => el.getBoundingClientRect().x >= 0,
        );
        this.activeSection = activeIndex;
        this.scrollToActive();
    };

    scrollToActive = () => {
        this.sections[this.activeSection].scrollIntoView({
            behavior: 'smooth',
        });

        for (let i = 0; i < this.sections.length; i++) {
            if (i === this.activeSection) {
                this.navElements[i].classList.add(
                    'navigation__element--active',
                );
                this.sections[i].classList.add('sections__element--active');
            } else {
                this.navElements[i].classList.remove(
                    'navigation__element--active',
                );
                this.sections[i].classList.remove('sections__element--active');
            }
        }
    };

    wheelScroll = e => {
        if (this.activeScroll) return;
        this.activeScroll = true;
        setTimeout(() => (this.activeScroll = false), 400);
        const { deltaY } = e;

        if (deltaY < 0) {
            if (this.activeSection <= 0) return;
            this.activeSection -= 1;
            this.scrollToActive();
        } else {
            if (this.activeSection >= this.sections.length - 1) return;
            this.activeSection += 1;
            this.scrollToActive();
        }
    };
}
