import React from 'react';

import TeamiNfo from '../../Elements/teaminfo';

const Header = (props) => {


    const teamiNfo = (team) => {
        return team ? (
            <TeamiNfo team={team} />
        ) : null;
    }
    return (
        <div>
            {teamiNfo(props.teamData)}
        </div>
    )
}

export default Header;