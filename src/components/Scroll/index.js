import React from "react";

import { scrollToTop } from "services/scroll";

export class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        scrollToTop();
    }
    
    render() {
        return null;
    }
}