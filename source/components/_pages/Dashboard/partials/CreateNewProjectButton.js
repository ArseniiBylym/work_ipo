import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import multiLang from '../../../_HOC/lang.hoc'



class createNewProjectButton extends Component {

	renderPage() {
		const {content, lang} = this.props
		if(!content) return
		return (
			<Link to='/dash/projects/createNew' className='CreateNewProjectButton'>
				<div className='CreateNewProjectButton'>
					{content.pageContent[1][lang].create_btn}
					{/*CREATE NEW PROJECT*/}
					
				</div>
			</Link>
			)
	}

	render() {
		return (
			<Fragment>
				{this.renderPage()}
			</Fragment>

			
		)
	}
}


const mapStateToProps = state => {
  return {
    content: state.allProjects
  }
}

export default connect(mapStateToProps, null)(
  multiLang(createNewProjectButton)
  );

// export default withRouter(createNewProjectButton)