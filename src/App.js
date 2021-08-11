import React from "react";

import Grid from './components/Grid'

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
        { title: 'Button Ripple Effect', href: process.env.PUBLIC_URL + '/Projects/ButtonRippleEffect/index.html' },
        { title: 'Dad Jokes', href: process.env.PUBLIC_URL + '/Projects/DadJokes/index.html' },
        { title: 'Drink Water', href: process.env.PUBLIC_URL + '/Projects/DrinkWater/index.html' },
        { title: 'Event Key Codes', href: process.env.PUBLIC_URL + '/Projects/EventKeyCodes/index.html' },
        { title: 'FAQ Collapse', href: process.env.PUBLIC_URL + '/Projects/FAQCollapse/index.html' },
        { title: 'Incrementing Counter', href: process.env.PUBLIC_URL + '/Projects/IncrementingCounter/index.html' },
        { title: 'Movie App', href: process.env.PUBLIC_URL + '/Projects/MovieApp/index.html' },
        { title: 'Random Choice Picker', href: process.env.PUBLIC_URL + '/Projects/RandomChoicePicker/index.html' },
        { title: 'Sound Board', href: process.env.PUBLIC_URL + '/Projects/SoundBoard/index.html' },
        { title: 'Theme Clock', href: process.env.PUBLIC_URL + '/Projects/ThemeClock/index.html' },
        { title: 'Auto Text Effect', href: process.env.PUBLIC_URL + '/Projects/AutoTextEffect/index.html' },
        { title: 'Content Placeholder', href: process.env.PUBLIC_URL + '/Projects/ContentPlaceholder/index.html' },
        { title: 'Double Heart Click', href: process.env.PUBLIC_URL + '/Projects/DoubleHeartClick/index.html' },
        { title: 'Double Vertical Slider', href: process.env.PUBLIC_URL + '/Projects/DoubleVerticalSlider/index.html' },
        { title: 'Drag N Drop', href: process.env.PUBLIC_URL + '/Projects/DragNDrop/index.html' },
        { title: 'Drawing App', href: process.env.PUBLIC_URL + '/Projects/DrawingApp/index.html' },
        { title: 'Github Profiles', href: process.env.PUBLIC_URL + '/Projects/GithubProfiles/index.html' },
        { title: 'Kinetic CSS Loader', href: process.env.PUBLIC_URL + '/Projects/KineticCSSLoader/index.html' },
        { title: 'Sticky Navbar', href: process.env.PUBLIC_URL + '/Projects/StickyNavbar/index.html' },
        { title: 'Toast Notification', href: process.env.PUBLIC_URL + '/Projects/ToastNotification/index.html' },
    ];
    return (
        <div>
            <Grid items={DATA}>

            </Grid>
        </div>
    );
}

export default App;
