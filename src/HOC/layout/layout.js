import React, { Component } from 'react';

import './layout.module.css';


import Header from '../../components/Header/header';
import Footer from '../../components/footer/footer'

class Layout extends Component {

    state = {
        showNav: false
    }
    togglesSidenav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.togglesSidenav(false)}
                    onOpenNav={() => this.togglesSidenav(true)}
                />
                {this.props.children}
                <Footer/>

            </div>
        )
    }
}


export default Layout;