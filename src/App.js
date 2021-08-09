import React from "react";

import Grid from './components/Grid'

function App() {

    const DATA = [
        {title: 'Expanding Cards', href: process.env.PUBLIC_URL + 'Projects/ExpandingCards/index.html'},
        {title: 'Progress Steps', href: process.env.PUBLIC_URL + 'Projects/ProgressSteps/index.html'},
        {title: 'Rotating Navigation', href: process.env.PUBLIC_URL + 'Projects/RotatingNavigation/index.html'},
        {title: 'Hidden Search Widget', href: process.env.PUBLIC_URL + 'Projects/HiddenSearchWidget/index.html'},
        {title: 'Blurry Loading', href: process.env.PUBLIC_URL + 'Projects/BlurryLoading/index.html'},
        {title: 'Scroll Animation', href: process.env.PUBLIC_URL + 'Projects/ScrollAnimation/index.html'},
        {title: 'Form Wave Animation', href: process.env.PUBLIC_URL + 'Projects/FormWaveAnimation/index.html'},


    ];
    return (
        <div>
            <Grid items={DATA}>

            </Grid>
        </div>
    );
}

export default App;
