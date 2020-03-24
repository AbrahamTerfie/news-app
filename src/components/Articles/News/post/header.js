import React from 'react'
import TeamiNfo from '../../Elements/teaminfo';

import PostData from '../../Elements/postdata';

const Header = (props) => {

    const teamiNfo = (team) => {
        return team ? (
            <TeamiNfo team={team} />
        )  : null;
    }



    const postData =( date,author) => (
        <PostData data={{date,author}}/>
    )

    return (
        <div>
            {teamiNfo(props.teamData)}
            {postData(props.date,props.author)}
        </div>
    )
}


export default Header;