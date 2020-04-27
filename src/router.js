import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NowShowingPage from './components/views/NowShowing';
import ComingSoonPage from './components/views/ComingSoon';
import BuyNowPage from './components/views/BuyNow';
import AboutUsPage from './components/views/AboutUs';

const Router = () => {
        return (
            <Switch>
                <Route exact path="/" component={NowShowingPage}/>
                {/* <Route path="/upcoming" component={ComingSoonPage}/> */}
                <Route path="/buyNow" component={BuyNowPage}/>
                {/* <Route path="/aboutUs" component={AboutUsPage}/> */}
            </Switch>
        )
    }


export default Router;