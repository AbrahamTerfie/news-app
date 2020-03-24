import React from 'react';
import styles from '../videoslist.module.css';


import VideosListTemplate from '../videoslistTemplate';


const VideosRelated = (props) => (
    <div className={styles.relatedWrapper}>
          
        
        <VideosListTemplate
            data={props.data}
            teams={props.teams}


        />
    </div>

)


export default VideosRelated;