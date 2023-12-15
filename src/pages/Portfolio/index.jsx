import React, { useState, useEffect } from 'react';
import BootingScreen from './components/screen/booting_screen';
import Desktop from './components/screen/desktop';
import LockScreen from './components/screen/lock_screen';
import Navbar from './components/screen/navbar';
import ReactGA from 'react-ga';

const Portfolio = () => {
    const [state, setState] = useState({
        screen_locked: false,
        bg_image_name: 'wall-1',
        booting_screen: true,
        shutDownScreen: false
    });

    useEffect(() => {
        getLocalData();
    }, []);

    const setTimeOutBootScreen = () => {
        setTimeout(() => {
            setState(prevState => ({ ...prevState, booting_screen: false }));
        }, 2000);
    };

    const getLocalData = () => {
        // Get Previously selected Background Image
        let bg_image_name = localStorage.getItem('bg-image');
        if (bg_image_name !== null && bg_image_name !== undefined) {
            setState(prevState => ({ ...prevState, bg_image_name }));
        }

        let booting_screen = localStorage.getItem('booting_screen');
        if (booting_screen !== null && booting_screen !== undefined) {
            // user has visited site before
            setState(prevState => ({ ...prevState, booting_screen: false }));
        } else {
            // user is visiting site for the first time
            localStorage.setItem('booting_screen', false);
            setTimeOutBootScreen();
        }

        // get shutdown state
        let shut_down = localStorage.getItem('shut-down');
        if (shut_down !== null && shut_down !== undefined && shut_down === 'true') shutDown();
        else {
            // Get previous lock screen state
            let screen_locked = localStorage.getItem('screen-locked');
            if (screen_locked !== null && screen_locked !== undefined) {
                setState(prevState => ({ ...prevState, screen_locked: screen_locked === 'true' ? true : false }));
            }
        }
    };

    const lockScreen = () => {
        // google analytics
        ReactGA.pageview('/lock-screen');
        ReactGA.event({
            category: `Screen Change`,
            action: `Set Screen to Locked`
        });

        document.getElementById('status-bar').blur();
        setTimeout(() => {
            setState(prevState => ({ ...prevState, screen_locked: true }));
        }, 100); // waiting for all windows to close (transition-duration)
        localStorage.setItem('screen-locked', true);
    };

    const unLockScreen = () => {
        ReactGA.pageview('/desktop');

        window.removeEventListener('click', unLockScreen);
        window.removeEventListener('keypress', unLockScreen);

        setState(prevState => ({ ...prevState, screen_locked: false }));
        localStorage.setItem('screen-locked', false);
    };

    const changeBackgroundImage = (img_name) => {
        setState(prevState => ({ ...prevState, bg_image_name: img_name }));
        localStorage.setItem('bg-image', img_name);
    };

    const shutDown = () => {
        ReactGA.pageview('/switch-off');
        ReactGA.event({
            category: `Screen Change`,
            action: `Switched off the Ubuntu`
        });

        document.getElementById('status-bar').blur();
        setState(prevState => ({ ...prevState, shutDownScreen: true }));
        localStorage.setItem('shut-down', true);
    };

    const turnOn = () => {
        ReactGA.pageview('/desktop');

        setState(prevState => ({ ...prevState, shutDownScreen: false, booting_screen: true }));
        setTimeOutBootScreen();
        localStorage.setItem('shut-down', false);
    };

    return (
        <div
            id="monitor-screen"
            className="w-screen overflow-hidden"
            style={{
                height: "100svh"
            }}
        >
            <LockScreen
                isLocked={state.screen_locked}
                bgImgName={state.bg_image_name}
                unLockScreen={unLockScreen}
            />
            <BootingScreen
                visible={state.booting_screen}
                isShutDown={state.shutDownScreen}
                turnOn={turnOn}
            />
            <Navbar lockScreen={lockScreen} shutDown={shutDown} />
            <Desktop bg_image_name={state.bg_image_name} changeBackgroundImage={changeBackgroundImage} />
        </div>
    );
}

export default Portfolio