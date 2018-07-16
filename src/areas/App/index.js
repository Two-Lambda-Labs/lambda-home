import React    from 'react';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';

import Welcome from 'areas/Welcome';
import About from 'areas/About';
import Projects from 'areas/Projects';
import Contact from 'areas/Contact';

import './style.css';


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        current: 0,
      }
    }

    render() {
        const options = {
            sectionClassName: 'section',
            anchors: ['welcome', 'about', 'projects','contact'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            arrowNavigation: true,
            scrollCallback: (states) => this.setState({current: states.activeSection})
        };

        const {current} = this.state

        return (
            <div className="app-container">
                <SectionsContainer className="container" {...options} activeSection={current}>
                    <Section><Welcome /></Section>
                    <Section><About /></Section>
                    <Section><Projects /></Section>
                    <Section><Contact /></Section>
                </SectionsContainer>
            </div>
        )
    }
}

export default App;
