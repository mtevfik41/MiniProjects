import React from "react";

import Grid from './components/Grid'
import Footer from './components/Footer'

function App() {

    const DATA = [
        { title: 'Expanding Cards', href: process.env.PUBLIC_URL + '/Projects/ExpandingCards/index.html' },
        { title: 'Progress Steps', href: process.env.PUBLIC_URL + '/Projects/ProgressSteps/index.html' },
        { title: 'Rotating Navigation', href: process.env.PUBLIC_URL + '/Projects/RotatingNavigation/index.html' },
        { title: 'Hidden Search Widget', href: process.env.PUBLIC_URL + '/Projects/HiddenSearchWidget/index.html' },
        { title: 'Blurry Loading', href: process.env.PUBLIC_URL + '/Projects/BlurryLoading/index.html' },
        { title: 'Scroll Animation', href: process.env.PUBLIC_URL + '/Projects/ScrollAnimation/index.html' },
        { title: 'Form Wave Animation', href: process.env.PUBLIC_URL + '/Projects/FormWaveAnimation/index.html' },
        { title: 'Split Landing Page', href: process.env.PUBLIC_URL + '/Projects/SplitLandingPage/index.html' },
        { title: 'Animated Navigation', href: process.env.PUBLIC_URL + '/Projects/AnimatedNavigation/index.html' },
        { title: 'Background Slider', href: process.env.PUBLIC_URL + '/Projects/BackgroundSlider/index.html' },
        { title: 'Button RippleEffect', href: process.env.PUBLIC_URL + '/Projects/ButtonRippleEffect/index.html' },
        { title: 'Dad Jokes', href: process.env.PUBLIC_URL + '/Projects/DadJokes/index.html' },
        { title: 'Drink Water', href: process.env.PUBLIC_URL + '/Projects/DrinkWater/index.html' },
        { title: 'Event Key Codes', href: process.env.PUBLIC_URL + '/Projects/EventKeyCodes/index.html' },
        { title: 'FAQ Collapse', href: process.env.PUBLIC_URL + '/Projects/FAQCollapse/index.html' },
        { title: 'Incrementing Counter', href: process.env.PUBLIC_URL + '/Projects/IncrementingCounter/index.html' },
        { title: 'Movie App', href: process.env.PUBLIC_URL + '/Projects/MovieApp/index.html' },
        { title: 'Random Choice Picker', href: process.env.PUBLIC_URL + '/Projects/RandomChoicePicker/index.html' },
        { title: 'Sound Board', href: process.env.PUBLIC_URL + '/Projects/SoundBoard/index.html' },
        { title: 'Theme Clock', href: process.env.PUBLIC_URL + '/Projects/ThemeClock/index.html' },


    ];
    return (
        <div>
            <Grid items={DATA}>

            </Grid>
            <Footer></Footer>
        </div>
    );
}

export default App;
