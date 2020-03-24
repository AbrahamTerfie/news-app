import React, { Component } from 'react';
import styles from './videoslist.module.css';
import axios from 'axios';
import { URL } from '../../../config';
import Buttons from '../buttons/buttons';
import VideosListTemplate from './videoslistTemplate';
class VideosList extends Component {
    state = {

        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }


    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }
    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
                .then(response => {
                    this.setState({
                        teams: response.data
                    })
                })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    videos: [...this.state.videos, ...response.data],
                    start,
                    end
                })
            })
    }



    renderVideos = () => {
        let template = null;
        switch (this.props.type) {
            case ('card'):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
                break;
            default:
                template = null
        }
        return template;
    }


    loadmore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)

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

                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList;