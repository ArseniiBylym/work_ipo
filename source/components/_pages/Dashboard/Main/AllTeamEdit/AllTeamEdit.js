import React, {Component} from 'react'
import SecondaryHeader from '../../SecondaryHeader';
import './AllTeamEdit.styl'
import NewTeamMember from '../CreateNew/newTeamMember/NewTeamMember';
import TeamMembersFields from '../../../SignUp/TeamMembersFields';
import Input from '../../../../formFields/FormField.input'
import {dataToSubmit} from '../../../../formFields/utils'
import {imageToBase64} from '../../../../formFields/utils'
import { connect } from 'react-redux';

import TeamMemberEditItem from './TeamMemberEditItem/TeamMemberEditItem';
import CreateNewProjectButton from '../../partials/CreateNewProjectButton'
import multiLang from '../../../../_HOC/lang.hoc'

class AllTeamEdit extends Component {
	state = {
		// teamMembers: [
		      
	 //      ]

	}

	componentDidMount = () => {
		const {content, lang} = this.props;
		if(!content) return 
		let data = content.company_projects.team_members
		console.log(data)
		let members = data.map((item, i) => {
			return({
				id: Date.now() + Math.random(),
		        firstName: {
		          optional: true,
		          value: item.first_name,
		          errors: [],
		          validationRules: []
		        },
		        lastName: {
		          optional: true,
		          value: item.last_name,
		          errors: [],
		          validationRules: []
		        },
		        position: {
		          optional: true,
		          value: item.position,
		          errors: [],
		          validationRules: []
		        },
		        linkFacebook: {
		          optional: true,
		          value: item.fb_link,
		          errors: [],
		          validationRules: []
		        },
		        linkLinkedIn: {
		          optional: true,
		          value: item.linkedin_link,
		          errors: [],
		          validationRules: []
		        },
		        photo: {
		          optional: true,
		          value: item.photo,
		          errors: [],
		          validationRules: []
		        }
			})
		})
		this.setState((prevState)=> {
			return({
				teamMembers: [
				...members
				]
			})
		})
	}
	clickOnInput = (e) => {
	  
	 //  	if(!this.state.isBackdrop) {
	 //    	e.preventDefault();
	 // 	}

	 //  	this.setState({
	 //    	isBackdrop: true,
		//     currentInputTarget: e.target
		// })
	}

	onUpdateValue = (event, id) => {

	    const {value, name, files} = event.target
	    const {teamMembers} = this.state
	    const prevStateArray = teamMembers
	    const arr = []

	    Promise.all(teamMembers.map((item, index) => {
	      if (id === index && name === `photo`) {
	        return new Promise(
	          (resolve, reject) => {
	            imageToBase64(files[0])
	              .then((base64) => {
	                arr.push({...teamMembers[id], [name]: {...teamMembers[id][name], path: base64, value: files[0].name}})
	                resolve()
	              })
	          }
	        )
	      } else if (id === index) {
	        return new Promise(
	          (resolve, reject) => {
	            arr.push({...teamMembers[id], [name]: {...teamMembers[id][name], value}})
	            resolve()
	          }
	        )
	      } else {
	        return item
	      }
	    }))
	      .then(
	        () => {
	          const rez = prevStateArray.map(item => {
	            if (item.id === arr[0].id) {
	              return arr[0]
	            }
	            return item
	          })

	          return this.setState({
	            teamMembers: [
	              ...rez
	            ]
	          })
	        })

	}

	onUpdateErrors = (evt, errors, id) => {
	    const {name} = evt.target
	    const {teamMembers} = this.state
	    const prevStateArray = teamMembers
	    const arr = []

	    Promise.all(teamMembers.map((item, index) => {
	      if (id === index) {
	        return new Promise(
	          (resolve, reject) => {
	            arr.push({...teamMembers[id], [name]: {...teamMembers[id][name], errors: [...errors]}})
	            resolve()
	          }
	        )
	      } else {
	        return item
	      }
	    }))
	      .then(
	        () => {
	          const rez = prevStateArray.map(item => {
	            if (item.id === arr[0].id) {
	              return arr[0]
	            }
	            return item
	          })

	          return this.setState({
	            teamMembers: [
	              ...rez
	            ]
	          })
	        })
	}

	saveTeamMembers = evt => {
	  evt && evt.preventDefault && evt.preventDefault()
	  dataToSubmit(this.state)
	    .then(data => {

	      if (DEV) {
	        // ==================================================
	        window.console.table(data)
	        // ==================================================
	      }

	    })
	  }


	render () {

		const teamMembers = this.state.teamMembers
		if(!teamMembers) return null
		// const teamMembers = this.state.teamMembers.map((item, i) => {
		// 	return <TeamMemberEditItem key={item.id} config={item} index={i} length={3}/>
				
		// })

		return (
			<div className='AllTeamEdit'> 
				<SecondaryHeader controls={false} button={true}/>
				{/*<div className='createNewTab__main-header'>
			        <span>My projects</span> / <span>All Team Edit</span>
			        <CreateNewProjectButton />
		        </div>*/}
	        	<div className='dash-inner'>
				 	<div className='AllTeamEdit__header'>
				 		All Team Edit
				 	</div>
				 	<div className='AllTeamEdit__save-button' onClick={this.saveTeamMembers}>
				 		SAVE
				 	</div>
				 	<div className='AllTeamEdit__main-container'>
					 	<div className="sign-up__container">
					 		<NewTeamMember config={teamMembers}
					 			showPosition={true}
			                    clickInput={this.clickOnInput}
			                    updateValue={this.onUpdateValue}
			                    updateErrors={this.onUpdateErrors}
			                />
		                </div>
				 		{/*{teamMembers}*/}
				 	</div>
			 	</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	content: state.allProjects,
	// content: state.pageContent,
	// items: state.projects.items
})
// const mapDispatchToProps = {getPageContent}


export default connect(mapStateToProps, null)(
	multiLang(AllTeamEdit)
);

// export default AllTeamEdit

// <TeamMemberEditItem key={item.id} config={item} index={i} lenght={3}/>