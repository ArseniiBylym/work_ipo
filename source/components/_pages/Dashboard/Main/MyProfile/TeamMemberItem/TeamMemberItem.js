import React from 'react'
import './TeamMemberItem.styl'
import { Link } from 'react-router-dom'

function TeamMemberItem (props) {
	
	return(
		<Link to={`${props.path}/${props.config.id}`} key={props.config.id}>
			<div className='TeamMemberItem' onClick={()=> props.click(props.config.id)}>
				<div className='TeamMemberItem__photo'>
					<img src={props.config.photo.value} alt='Team member' />
				</div>
				<div className='TeamMemberItem__name'>{props.config.firstName.value} {props.config.lastName.value}</div>
				<div className='TeamMemberItem__position'>{props.config.position.value}</div>
			</div>
		</Link>

	)
}

export default TeamMemberItem