import React, { Component, Fragment } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import { getProjects } from '../../../../../redux/actions/projectsActions';
import { Link } from 'react-router-dom'
import axios from 'axios'

import {formDataToSubmit} from '../../../../formFields/utils.js'
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

import { getMyProfileData } from '../../../../../redux/reducers/getMyProfileData.reducer'
import { connect } from 'react-redux';
import multiLang from '../../../../_HOC/lang.hoc'
import {profile} from '../../../../../utils/routesBack'

const options = [
  {value: `AF`, label: `Afghanistan`},
  {value: `AX`, label: `Åland Islands`},
  {value: `AL`, label: `Albania`},
  {value: `DZ`, label: `Algeria`},
  {value: `AS`, label: `American Samoa`}
]

class MyProfile extends Component {

state = {
	activeButtonEdit: true,
	activeButtonSave: true,
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
    	let inputs = document.querySelectorAll('MyProfile input ')
    	console.log(inputs)
    	// if(this.state.activeButtonEdit = false){

	    //   let inputs = [...document.querySelectorAll('.MyProfile input')]
	     
	    //   console.log(inputs)
     //  }
     

      const {lang, content, getMyProfileData} = this.props
	  getMyProfileData(lang, profile)

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
		      value: `${info.funding_sum}`,
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
		      value: `${info.last_year_sales}`,
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

      

     //  axios({
	    //   method: 'get',
	    //   url: 'http://192.168.88.170:3000/enterpreneur/myprofile/1',
	      
	    // })
	    // .then(function (response) {
	    //   console.log(response.data.data.pageContent);

	    // })
	    // .catch(function (error) {
	    //   console.log(error);
	    // });

    	// getPageContent(lang, 'profile')
    }
    
  	onTeamMemberClick = (id) => {
  		console.log('click', id)
  	}
  	onTeamMemberEdit = (e) => {
  		console.log('edit')
  	}

    componentDidUpdate = (prevProps, prevState) => {
      console.log('updated')
      console.log(this.state.activeButtonEdit)
      if(prevState.activeButtonEdit != this.state.activeButtonEdit){

	      let inputs = [...document.querySelectorAll('.MyProfile input')]
	     
	      inputs.forEach((item, i) => {
	      	if (this.state.activeButtonEdit == true) {
	      		item.readOnly = true
	      	}
	      	else {
	      		item.readOnly = false
	      	}
	      })
	      console.log(inputs)
      }
    }
    changeActiveButtonEdit = () => {
    	this.setState((prevState) => {
    		return {
    			activeButtonEdit: !prevState.activeButtonEdit
    		}
    	})
    }
    changeActiveButtonSave = () => {
    	this.setState((prevState) => {
    		return {
    			activeButtonSave: false
    		}
    	})
    	setTimeout(() => {
    		this.setState({
    			activeButtonSave: true
    		})
    	}, 300)

    	// const myProfileToSubmit = {
    	// 	ceo_name: this.state.ceoName.value
    	// 	company_email: this.state.companyEmail.value
    	// 	company_name: this.state.companyName.value
    	// 	funding_sum: this.state.fundingSumToThisPoint.value
    	// 	password: this.state.companyPassword.value
    	// 	vat_number: this.state.companyNumberVat.value
    	// 	country_of_registration: this.state.country
    	// 	company_phone: this.state.companyPhone.value
    	// 	last_year_sales: this.state.companySales.value
    	// 	video_url: this.state.linkCompanyVideo.value
    	// 	company_presentation:this.state.companyPresentation.value
    	// 	statement_report:this.state.statementReport.value
    	// 	financial_report:this.state.financialReport.value
    	// }

    	axios({
			method: 'put',
		    url: `http://192.168.88.170:3000/enterpreneur/1/myprofile`,
		    data:{
		        ceo_name: this.state.ceoName.value,
	    		company_email: this.state.companyEmail.value,
	    		company_name: this.state.companyName.value,
	    		funding_sum: this.state.fundingSumToThisPoint.value,
	    		password: this.state.companyPassword.value,
	    		vat_number: this.state.companyNumberVat.value,
	    		country_of_registration: this.state.country,
	    		company_phone: this.state.companyPhone.value,
	    		last_year_sales: this.state.companySales.value,
	    		video_url: this.state.linkCompanyVideo.value,
	    		company_presentation:this.state.companyPresentation.value,
	    		statement_report:this.state.statementReport.value,
	    		financial_report:this.state.financialReport.value,
		    }
		})
		.then(function (response) {
	      console.log(response);
	    })
	    .catch(function (error) {
	      console.log(error);
	    });

    	// formDataToSubmit(this.state)
    	// .then((resolve) => return true)
    	// console.log(this.state)
    }


	renderPage() {
		const {profile, lang} = this.props
		if(!profile.pageContent) return null

			// console.log(profile.pageContent)
		const data = profile.pageContent
		const langObj = data[2][lang]
		const countries = [];
		for (let key in langObj) {
			countries.push({
				value: key,
				label: langObj[key]
			})
		}
		// console.log(options)
		// console.log(countries)

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
				        	<div className={!this.state.activeButtonEdit ? 'MyProfile__switch-button' : 'MyProfile__switch-button active'}
				        		  onClick={this.changeActiveButtonEdit}>
				        		{data[1][lang].edit_btn}
				        	</div>
				        	<div className={!this.state.activeButtonSave ? 'MyProfile__switch-button' : 'MyProfile__switch-button active'} 
				        		 onClick={this.changeActiveButtonSave}>
				        		{data[1][lang].save_btn}
				        	</div>
			        	</div>
			            <div className='createNewTab__header'>
				              {data[1][lang].conpany_info_req}            
			            </div>
			            <div className="sign-up__container">
				            <div className="sign-up__column">
								<Input type="text"
					                name="companyName"
					                {...companyName}
					                label={data[1][lang][`ent.comp_name`]}
					                labelDone={data[1][lang][`ent.comp_name.label`]}
					                validation={[`required`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					            <Input type="text"
					                name="ceoName"
					                {...ceoName}
					                label={data[1][lang][`ent.CEO_name`]}
					                labelDone={data[1][lang][`ent.CEO_name.label`]}
					                validation={[`required`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					            <Input type="email"
					                name="companyEmail"
					                {...companyEmail}
					                label={data[1][lang][`ent.comp_email`]}
					                labelDone={data[1][lang][`ent.comp_email.label`]}
					                validation={[`required`, `email`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					            />
					            <Input type="text"
					                name="fundingSumToThisPoint"
					                {...fundingSumToThisPoint}
					                label={data[1][lang][`ent.funding_sum`]}
					                labelDone={data[1][lang][`ent.funding_sum.label`]}
					                validation={[`required`, `money`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					            />
					            <Input type="password"
					                name="companyPassword"
					                {...companyPassword}
					                label={data[1][lang][`ent.password`]}
					                labelDone={data[1][lang][`ent.password.label`]}
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
					                label={data[1][lang][`ent.VAT`]}
					                labelDone={data[1][lang][`ent.VAT.label`]}
					                validation={[`required`, `vat`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					              <Select placeholder={data[1][lang][`ent.comp_country`]}
					                updateValue={this.handleChangeSelect}
					                selected={country.selectedOption}
					                value={country.value}
					                options={countries}
					                labelDone={data[1][lang][`ent.comp_country.label`]}
					              />
					              <Input type="text"
					                name="companyPhone"
					                {...companyPhone}
					                label={data[1][lang][`ent.comp_phone`]}
					                labelDone={data[1][lang][`ent.comp_phone.label`]}
					                validation={[`required`, `phone`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					              <Input type="text"
					                name="companySales"
					                {...companySales}
					                label={data[1][lang][`ent.comp_sales`]}
					                labelDone={data[1][lang][`ent.comp_sales.label`]}
					                validation={[`required`, `money`]}
					                changeValue={this.handleChangeValue}
					                changeErrors={this.handleChangeErrors}
					              />
					              <Input type="password"
					                name="confirmCompanyPassword"
					                {...confirmCompanyPassword}
					                label={data[1][lang][`ent.password`]}
					                labelDone={data[1][lang][`ent.password.label`]}
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
				               <div className="sign-up__title">{data[1][lang][`ent.comp_info_opt`]}</div>
		              			<div className="sign-up__container">
			              	 		<div className="sign-up__column">
						              <Input type="text"
						                name="linkCompanyVideo"
						                {...linkCompanyVideo}
						                label={data[1][lang][`ent.video_link`]}
						                labelDone={data[1][lang][`ent.video_link.label`]}
						                validation={[`youtube`]}
						                changeValue={this.handleChangeValue}
						                changeErrors={this.handleChangeErrors}
						              />
						              <InputFile {...companyPresentation}
						                name="companyPresentation"
						                updateValue={this.handleChangeValue}
						                label={data[1][lang][`ent.presentation`]}
						                labelDone={data[1][lang][`ent.presentation`]}
						                validation={[`maxSize`]}
						                updateErrors={this.handleChangeErrorsFile}
						              />
						            </div>
						            <div className="sign-up__column">
						              <InputFile {...statementReport}
						                name="statementReport"
						                label={data[1][lang][`ent.stat_report`]}
						                labelDone={data[1][lang][`ent.stat_report`]}
						                updateValue={this.handleChangeValue}
						                validation={[`maxSize`]}
						                updateErrors={this.handleChangeErrorsFile}
						              />
						              <InputFile {...financialReport}
						                name="financialReport"
						                label={data[1][lang][`ent.fin_report`]}
						                labelDone={data[1][lang][`ent.fin_report`]}
						                updateValue={this.handleChangeValue}
						                validation={[`maxSize`]}
						                updateErrors={this.handleChangeErrorsFile}
						              />
						            </div>
					              </div>
				              </div>
				              
			              </div>
			              <div className='dash-inner dash-inner--wrapper-item'>
			              		<div className="MyProfile__NDA sign-up__title">{data[1][lang][`ent.NDA_signing`]}</div>
				              	<div className='MyProfile__NDA__content'>
									<div className='MyProfile__NDA__link'>
										<a href={file}
									        download
									        className="sign-up__download-link"
									        
									      >
									        {data[1][lang][`ent.download`]}
									      </a>
									</div>  
					              	<div className="MyProfile__NDA sign-up__title-download-link">
								        {data[1][lang][`ent.pre_signed`]}
								    </div>
					              </div>
			              </div>
		              </div>
		            <div className='dash-inner'>
		              	<div className='MyProfile__NDA--team-members'>
		              	 	<div className="sign-up__title">{data[1][lang][`ent.team_members`]}</div>
		              	 	<div className='team-members--statistic'>
		              	 		<div>{teamMembers.length} {data[1][lang][`members`]}</div> 
		              	 		<Link to={`${this.props.match.path}/all_team_edit`} >
                          			<div onClick={this.onTeamMemberEdit}>{data[1][lang][`team_edit`]}</div>
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

	render () {
		return(
			<Fragment>
			{this.renderPage()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	content: state.allProjects,
	profile: state.profile,
	// items: state.projects.items
})
const mapDispatchToProps = {getMyProfileData}


export default connect(mapStateToProps, mapDispatchToProps)(
	multiLang(MyProfile)
);
