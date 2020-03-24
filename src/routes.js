import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './components/Home/home';
import Layout from './HOC/layout/layout';
import NewsArticle from './components/Articles/News/post/index';
import VideoArticle from './components/Articles/videos/video/index';
import NewsMain from './components/Articles/News/main/index';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={NewsMain}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                </Switch>
            </Layout>

        )
    }
}
export default Routes;