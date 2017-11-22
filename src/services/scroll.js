import Scroll from "react-scroll";

const scroll = Scroll.animateScroll;

export const scrollToTop = () => {
    scroll.scrollToTop({
        smooth: true,
        duration: 700
    });
}

export const scrollToElem = (e) => {
    if (!e) {
        console.warn("Tried to scroll to non-existant element");
        return;
    }
    
    const eTop = e.getBoundingClientRect().top;

    const nav = document.getElementById("nav").getBoundingClientRect();
    const navSize = nav.top + nav.height;

    const domTop = document.documentElement.scrollTop;
    
    const to = eTop - navSize + domTop;

    scroll.scrollTo(to, {
        smooth: true
    });
}


export const scrollToId = (id) => {
    const e = document.getElementById(id);
    if (!e) {
        console.warn("Tried to scroll to non-existant id: ", id);
        return;
    }
    
    scrollToElem(e);
}