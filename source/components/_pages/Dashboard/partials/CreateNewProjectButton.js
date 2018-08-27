import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'



class createNewProjectButton extends Component {
	render() {
		return (
			<Link to='/dash/projects/createNew' className='CreateNewProjectButton'>
				<div className='CreateNewProjectButton'>
					CREATE NEW PROJECT
				</div>
			</Link>
		)
	}
}

export default withRouter(createNewProjectButton)