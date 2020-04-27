import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NowShowingPage from './components/views/NowShowing';
import ComingSoonPage from './components/views/ComingSoon';
import BookTicketPage from './components/views/BookTicket';
import AboutUsPage from './components/views/AboutUs';

const Router = () => {
        return (
            <Switch>
                <Route exact path="/" component={NowShowingPage}/>
                {/* <Route path="/upcoming" component={ComingSoonPage}/>
                <Route path="/buyTicket" component={BookTicketPage}/>
                <Route path="/aboutUs" component={AboutUsPage}/> */}
            </Switch>
        )
    }


export default Router;