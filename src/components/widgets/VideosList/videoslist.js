import React, { Component } from 'react';
import styles from './videoslist.module.css';
import axios from 'axios';
import { URL } from '../../../config';
import Buttons from '../buttons/buttons';

class VideosList extends Component {
    state = {

        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }
    loadmore = () => {


    }
    renderButton = () => {
        return this.props.loadmore ?
            <Buttons
                type="loadmore"
                loadmore={() => this.loadmore()}
                cta="Load More Videos"
            />
            :
            <Buttons type="linkTo" cta="More Videos" linkTo="/" />
    }

    renderTitle = () => {
        return this.props.title ?
            <h3><strong> NBA</strong> videos </h3>
            : null
    }
    render() {
        return (
            <div className={styles.VideosList_wrapper}>
                {this.renderTitle()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList;