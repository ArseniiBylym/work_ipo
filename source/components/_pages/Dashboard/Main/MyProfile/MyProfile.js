import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import { getProjects } from '../../../../../redux/actions/projectsActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import './MyProfile.styl';
import Input from '../../../../formFields/FormField.input';
import Textarea from '../../../../formFields/FormField.textarea';
import InputFile from '../../../../formFields/FormField.file';
import TeamMembersFields from '../../../SignUp/TeamMembersFields';
import Select from '../../../../formFields/FormField.select'
import {dataToSubmit} from '../../../../formFields/utils'
import {imageToBase64} from '../../../../formFields/utils'
import SignUp from '../../../SignUp/SignUp.index.js'
import Entrepreneur from '../../../SignUp/SignUp.entrepreneurForm'
import NDA from '../../../SignUp/SignUp.entrepreneur.NDA'
import file from '../../../SignUp/images/Edo.pdf'
import TeamMemberItem from './TeamMemberItem/TeamMemberItem'
import CreateNewProjectButton from '../../partials/CreateNewProjectButton';

import unknownUser from '../CreateNew/Backdrop/img/Unknown-avatar.jpg';
import { getPageContent } from '../../../../../redux/reducers/pageContent.reducer'
import multiLang from '../../../../_HOC/lang.hoc'

const options = [
  {value: `AF`, label: `Afghanistan`},
  {value: `AX`, label: `Åland Islands`},
  {value: `AL`, label: `Albania`},
  {value: `DZ`, label: `Algeria`},
  {value: `AS`, label: `American Samoa`}
]

class MyProfile extends Component {

state = {
    companyName: {
      value: ``,
      errors: [],
      validationRules: []
    },
    ceoName: {
      value: ``,
      errors: [],
      validationRules: []
    },
    companyEmail: {
      value: ``,
      errors: [],
      validationRules: []
    },
    fundingSumToThisPoint: {
      value: ``,
      errors: [],
      validationRules: []
    },
    companyPassword: {
      value: ``,
      errors: [],
      validationRules: []
    },
    companyNumberVat: {
      value: ``,
      errors: [],
      validationRules: []
    },
    country: {
      selectedOption: ``,
      value: ``,
      errors: [],
      validationRules: []
    },
    companyPhone: {
      value: ``,
      errors: [],
      validationRules: []
    },
    companySales: {
      value: ``,
      errors: [],
      validationRules: []
    },
    confirmCompanyPassword: {
      value: ``,
      errors: [],
      validationRules: []
    },




    linkCompanyVideo: {
      optional: true,
      value: ``,
      errors: [],
      validationRules: []
    },
    companyPresentation: {
      optional: true,
      value: ``,
      errors: [],
      validationRules: []
    },
    statementReport: {
      optional: true,
      value: ``,
      errors: [],
      validationRules: []
    },
    financialReport: {
      optional: true,
      value: ``,
      errors: [],
      validationRules: []
    },


    download: {
      download: false,
      errors: []
    },


    teamMembers: []
  }

	handleChangeValue = (evt, file) => {
	    const {name, type, value, checked} = evt.target
	    if (type === `file`) {
	      return this.setState({
	        [name]: {
	          // eslint-disable-next-line
	          ...this.state[name],
	          value: file.name
	        }
	      })
	    } else {
	      return this.setState({
	        [name]: {
	          // eslint-disable-next-line
	          ...this.state[name],
	          value: type === `checkbox` ? checked : value
	        }
	      })
	    }
  	}

  	handleChangeErrors = (evt, errors) => {
	    const {name} = evt.target
	    return this.setState({
	      [name]: {
	        // eslint-disable-next-line
	        ...this.state[name],
	        errors: [...errors]
	      }
	    })
	}

    handleChangeSelect = (selectedOption) => {
	    return this.setState({
	      country: {
	        // eslint-disable-next-line
	        ...this.state.country,
	        value: selectedOption.value,
	        selectedOption
	      }
	    })
	}

	handleChangeErrorsFile = (name, errors) => {
	    return this.setState({
	      [name]: {
	        // eslint-disable-next-line
	        ...this.state[name],
	        errors: [...errors]
	      }
	    })
	}

    componentDidMount = () => {
     
      const {lang, content} = this.props
      if(!content) return
      const info = content.company_projects;

  		let members = info.team_members.map((item, i) => {
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
      this.setState((prevState)=>{
      	return({
      		...prevState,
	      	companyName: {
		      value: info.company_name,
		      errors: [],
		      validationRules: []
		    },
		    ceoName: {
		      value: info.ceo_name,
		      errors: [],
		      validationRules: []
		    },
		    companyEmail: {
		      value: info.company_email,
		      errors: [],
		      validationRules: []
		    },
		    fundingSumToThisPoint: {
		      value: parseInt(info.funding_sum),
		      errors: [],
		      validationRules: []
		    },
		    companyPassword: {
		      value: info.password,
		      errors: [],
		      validationRules: []
		    },
		    companyNumberVat: {
		      value: info.vat_number,
		      errors: [],
		      validationRules: []
		    },
		    country: {
		      selectedOption: ``,
		      value: info.country_of_registration,
		      errors: [],
		      validationRules: []
		    },
		    companyPhone: {
		      value: info.company_phone,
		      errors: [],
		      validationRules: []
		    },
		    companySales: {
		      value: info.last_year_sales,
		      errors: [],
		      validationRules: []
		    },
		    confirmCompanyPassword: {
		      value: info.password,
		      errors: [],
		      validationRules: []
		    },
		    teamMembers: [
		    	...prevState.teamMembers,
		    	...members
		    ]


      	}
  		)

      })

    	// getPageContent(lang, 'profile')
    }
    componentDidUpdate() {
    	console.log(this.state)
    }
  	onTeamMemberClick = (id) => {
  		console.log('click', id)
  	}
  	onTeamMemberEdit = (e) => {
  		console.log('edit')
  	}

    componentDidUpdate = () => {
      console.log('updated')
      // console.log(this.props)
    }

	render () {


		// console.log(this.props.match.path)
    const {teamMembers, financialReport, statementReport, companyPresentation, linkCompanyVideo, confirmCompanyPassword, companySales, companyName, ceoName, companyEmail, fundingSumToThisPoint, companyPassword, companyNumberVat, country, companyPhone} = this.state

    const teamMembersList = teamMembers.map((item, index) => {

    	return <TeamMemberItem  key={item.id} config={item} id={index} click={this.onTeamMemberClick} path={this.props.match.path} props/>
  
    })
		return(
			<div className='MyProfile'> 
       <SecondaryHeader controls={false} button={true}/>
		        {/*<div className='createNewTab__main-header'>
              <span>My profile</span>
              <CreateNewProjectButton />
            </div>*/}
		        <div className='dash-inner'>
			        <div className='MyProfile__board'> 
			        	<div className='MyProfile__switch-button-container'>
				        	<div className='MyProfile__switch-button'>
				        		EDIT
				        	</div>
				        	<div className='MyProfile__switch-button active' onClick={()=> console.log(this.state)}>
				        		SAVE
				        	</div>
			        	</div>
			            <div className='createNewTab__header'>
				              Company Information (Required fields)            
			            </div>
			            <div className="sign-up__container">
				            <div className="sign-up__column">
								<Input type="text"
					                name="companyName"
					                {...companyName}
					                label="Enter your Company Name"
					                labelDone="Company Name"
					                validation={[`required`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					            <Input type="text"
					                name="ceoName"
					                {...ceoName}
					                label="Enter CEO Name"
					                labelDone="CEO Name"
					                validation={[`required`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					            <Input type="email"
					                name="companyEmail"
					                {...companyEmail}
					                label="Enter your Company Email"
					                labelDone="Company Email"
					                validation={[`required`, `email`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					            />
					            <Input type="text"
					                name="fundingSumToThisPoint"
					                {...fundingSumToThisPoint}
					                label="Enter a Funding Sum to This Point"
					                labelDone="Funding Sum to This Point"
					                validation={[`required`, `money`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					            />
					            <Input type="password"
					                name="companyPassword"
					                {...companyPassword}
					                label="Enter your Password"
					                labelDone="Password"
					                validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					                changeValidationRules={this.handleChangeValidationRules}
					            />
				            </div>
			                <div className="sign-up__column">
			                	<Input type="text"
					                name="companyNumberVat"
					                {...companyNumberVat}
					                label="Enter Private Company Number (VAT)"
					                labelDone="Private Company Number (VAT)"
					                validation={[`required`, `vat`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					              <Select placeholder="Select a Country of Registration"
					                updateValue={this.handleChangeSelect}
					                selected={country.selectedOption}
					                value={country.value}
					                options={options}
					                labelDone={`Country`}
					              />
					              <Input type="text"
					                name="companyPhone"
					                {...companyPhone}
					                label="Enter your Company Phone Number"
					                labelDone="Company Phone Number"
					                validation={[`required`, `phone`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					              <Input type="text"
					                name="companySales"
					                {...companySales}
					                label="Enter your Company Sales in the Last Year"
					                labelDone="Company Sales"
					                validation={[`required`, `money`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					              <Input type="password"
					                name="confirmCompanyPassword"
					                {...confirmCompanyPassword}
					                label="Confirm your Password"
					                labelDone="Password"
					                validation={[`required`, `confirmPassword`]}
					                password={companyPassword.value}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
			                </div>
			            </div>
					</div>
				</div>

				<div className='dash-inner--wrapper'>
					<div className='dash-inner dash-inner--wrapper-item'>
							<div className='MyProfile__board-title'> 

							</div>
			               <div className='MyProfile__board'> 
				               <div className="sign-up__title">Company Information (Optional fields)</div>
		              			<div className="sign-up__container">
			              	 		<div className="sign-up__column">
						              <Input type="text"
						                name="linkCompanyVideo"
						                {...linkCompanyVideo}
						                label="Add a Link of your Company Video"
						                labelDone="Company Video"
						                validation={[`youtube`]}
						                changeValue={this.handleChangeValue}
						                changeErrors={this.handleChangeErrors}
						              />
						              <InputFile {...companyPresentation}
						                name="companyPresentation"
						                updateValue={this.handleChangeValue}
						                label={`Upload your Company Presentation`}
						                labelDone={`Company Presentation`}
						                validation={[`maxSize`]}
						                updateErrors={this.handleChangeErrorsFile}
						              />
						            </div>
						            <div className="sign-up__column">
						              <InputFile {...statementReport}
						                name="statementReport"
						                label={`Upload Latest Statement Report`}
						                labelDone={`Statement Report`}
						                updateValue={this.handleChangeValue}
						                validation={[`maxSize`]}
						                updateErrors={this.handleChangeErrorsFile}
						              />
						              <InputFile {...financialReport}
						                name="financialReport"
						                label={`Upload Latest Financial Report`}
						                labelDone={`Financial Report`}
						                updateValue={this.handleChangeValue}
						                validation={[`maxSize`]}
						                updateErrors={this.handleChangeErrorsFile}
						              />
						            </div>
					              </div>
				              </div>
				              
			              </div>
			              <div className='dash-inner dash-inner--wrapper-item'>
			              		<div className="MyProfile__NDA sign-up__title">NDA Signing (Required fields)</div>
				              	<div className='MyProfile__NDA__content'>
									<div className='MyProfile__NDA__link'>
										<a href={file}
									        download
									        className="sign-up__download-link"
									        
									      >
									        Download File
									      </a>
									</div>  
					              	<div className="MyProfile__NDA sign-up__title-download-link">
								        Pre-Signed NDA
								    </div>
					              </div>
			              </div>
		              </div>
		            <div className='dash-inner'>
		              	<div className='MyProfile__NDA--team-members'>
		              	 	<div className="sign-up__title">Team Members (Optional fields)</div>
		              	 	<div className='team-members--statistic'>
		              	 		<div>{teamMembers.length} members</div>
		              	 		<Link to={`${this.props.match.path}/all_team_edit`} >
                          			<div onClick={this.onTeamMemberEdit}>All Team Edit</div>
                        		</Link>
		              	 	</div>
		              	 	<div className='team-members-content'>
		              	 		{teamMembersList}
		              	 	</div>
		              	</div>
		            </div>
	              	

				
			</div>
		)
	}
}

const mapStateToProps = state => ({
	content: state.allProjects,
	// content: state.pageContent,
	items: state.projects.items
})
// const mapDispatchToProps = {getPageContent}


export default connect(mapStateToProps, null)(
	multiLang(MyProfile)
);
