import React, { Component, Fragment } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
// import { getProjects } from '../../../../../redux/actions/projectsActions';

import './index.styl';
import Input from '../../../../formFields/FormField.input';
import Textarea from '../../../../formFields/FormField.textarea';
import InputFile from '../../../../formFields/FormField.file';
import TeamMembersFields from '../../../SignUp/TeamMembersFields';
import NewTeamMember from './newTeamMember/NewTeamMember';
import {dataToSubmit} from '../../../../formFields/utils'
import NewInputFileField from './NewInputFileField/NewInputFileField';
import {imageToBase64} from '../../../../formFields/utils'
import axios from 'axios'

import Backdrop from './Backdrop/Backdrop';

import multiLang from '../../../../_HOC/lang.hoc'
import { connect } from 'react-redux';
import {createNew} from '../../../../../utils/routesBack'
import {getCreateNewProject} from '../../../../../redux/reducers/getCreateNewProject.reducer'

import {teamMember} from '../../../../../utils/routesBack'
import {getTeamMember} from '../../../../../redux/reducers/getTeamMemberEdit.reducer'


// import multiLang from '../../../../_HOC/lang.hoc'
// import {createNew} from '../../../../../utils/routesBack'
// import {getCreateNewProject} from '../../../../../redux/reducers/getCreateNewProject.reducer'


class CreateNew extends Component {

  state = {
    isBackdrop: false,
    currentInputTarget: ``,
    currentPhotoDataTransfer: '',
    projectName: {
      value: ``,
      errors: [],
      validationRules: []
    },
    moneyCollected: {
      value: ``,
      errors: [],
      validationRules: []
    },
    fieldOfProject: {
      value: ``,
      errors: [],
      validationRules: []
    },
    timePeriod: {
      value: ``,
      errors: [],
      validationRules: []
    },
    linkToVideo: {
      value: ``,
      errors: [],
      validationRules: []
    },
    projDescription: {
      optional: true,
      value: ``,
      errors: [],
      validationRules: []
    },
    tashkifProjFile: {
      optional: true,
      value: ``,
      errors: [],
      validationRules: []
    },
    projFiles: [
      {
        id: Date.now() + Math.random(),
        photo: {
          optional: true,
          value: ``,
          path: ``,
          errors: [],
          validationRules: []
        }
      }
    ],
    teamMembers: [
      {
        id: Date.now() + Math.random(),
        firstName: {
          optional: true,
          value: ``,
          errors: [],
          validationRules: []
        },
        lastName: {
          optional: true,
          value: ``,
          errors: [],
          validationRules: []
        },
        position: {
          optional: true,
          value: ``,
          errors: [],
          validationRules: []
        },
        photo: {
          optional: true,
          value: ``,
          errors: [],
          validationRules: []
        },
        linkFacebook: {
          optional: true,
          value: ``,
          errors: [],
          validationRules: []
        },
        linkLinkedIn: {
          optional: true,
          value: ``,
          errors: [],
          validationRules: []
        }
      }
    ]
  }

  componentDidMount = () => {
    const {dir, lang, getCreateNewProject, getTeamMember} = this.props
    getCreateNewProject(lang, createNew)
    getTeamMember(lang, teamMember)
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

  onUpdateNewInputFileValue = (event, id) => {
    console.log(event.target.name)

    const {value, name, files} = event.target;

    const {projFiles} = this.state
    const prevStateArray = projFiles
    const arr = [];
    const currentImage = this.state.currentPhotoDataTransfer

    Promise.all(projFiles.map((item, index) => {
      if (id === index && name === `photo`) {
        return new Promise(
          (resolve, reject) => {
            imageToBase64(files[0])
              .then((base64) => {
                arr.push({...projFiles[id], [name]: {...projFiles[id][name], path: base64, value: files[0].name}})
                resolve()
              })
          }
        )
      } else if (id === index) {
        return new Promise(
          (resolve, reject) => {
            arr.push({...projFiles[id], [name]: {...projFiles[id][name], value}})
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
            projFiles: [
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

  onUpdateNewInputFileErrors = (evt, errors, id) => {

    const name = evt.target.name
    const {projFiles} = this.state
    const prevStateArray = projFiles
    const arr = []

    Promise.all(projFiles.map((item, index) => {
      if (id === index) {
        return new Promise(
          (resolve, reject) => {
            arr.push({...projFiles[id], [name]: {...projFiles[id][name], errors: [...errors]}})
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
            projFiles: [
              ...rez
            ]
          })
        })
  }

  


  disabledButton = () => {
    const array = []
    const errors = []
    const {download} = this.state

    /* eslint-disable */
    for (const key in this.state) {
      if (this.state.hasOwnProperty(key)) {

        if (key === `download`) {
          errors.push(!download.download)
          continue
        }

        if (key === `teamMembers`) continue

        errors.push(!!this.state[key].errors.length)

        if (this.state[key].optional === true && this.state[key].value === ``) array.push(true)
        else array.push(!!this.state[key].value)
      }
    }
    /* eslint-enabled */
    return (array.includes(false) || errors.includes(true))
  }

  onAddNewTeamMember = () => {
    const {teamMembers} = this.state
    return this.setState({
      teamMembers: teamMembers.concat([
        {
          id: Date.now() + Math.random(),
          firstName: {
            optional: true,
            value: ``,
            errors: [],
            validationRules: []
          },
          lastName: {
            optional: true,
            value: ``,
            errors: [],
            validationRules: []
          },
          position: {
            optional: true,
            value: ``,
            errors: [],
            validationRules: []
          },
          linkFacebook: {
            optional: true,
            value: ``,
            errors: [],
            validationRules: []
          },
          linkLinkedIn: {
            optional: true,
            value: ``,
            errors: [],
            validationRules: []
          },
          photo: {
            optional: true,
            value: ``,
            errors: [],
            validationRules: []
          }
        }
      ]),
    })
  }

 handleSubmit = evt => {









    let createNewProjectForSubmit = {
      project_name:this.state.projectName.value,
      project_field:this.state.fieldOfProject.value,
      money_to_collect:this.state.moneyCollected.value,
      project_start_date:this.state.timePeriod.value,
      video_url:this.state.linkToVideo.value,
      project_description:this.state.projDescription.value,
      tashkif_file:this.state.tashkifProjFile.value,
      project_files: this.state.projFiles.map((item, i) => {
        return item.photo.value
      }),
      project_team: this.state.teamMembers.map((item, i) => {
        return {
              first_name: item.firstName.value,
              last_name: item.lastName.value,
              position: item.position.value,
              fb_link: item.linkFacebook.value,
              linkedin_link: item.linkLinkedIn.value,
              photo: item.photo.value,
        }
      })

    }

    axios({
      method: 'put',
        url: `http://192.168.88.170:3000/enterpreneur/1/createproject`,
        data: createNewProjectForSubmit
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });








  // evt && evt.preventDefault && evt.preventDefault()
  // dataToSubmit(this.state)
  //   .then(data => {

  //     if (DEV) {
        // ==================================================
        // window.console.table(data)
        // ==================================================
    //   }

    // })
  }

  addOneMoreField = () => {

    const {projFiles} = this.state

    return this.setState(  {
      projFiles: projFiles.concat([
          {
            id: Date.now() + Math.random(),
            photo: {
              optional: true,
              value: ``,
              errors: [],
              validationRules: []
            }
          }
      ])
    })
  }


hideBackdrop = () => {
  this.setState({
    isBackdrop: false
  })
}

clickOnInput = (e) => {
  
  if(!this.state.isBackdrop) {
    e.preventDefault();
  }

  this.setState({
    isBackdrop: true,
    currentInputTarget: e.target
  })
}

updateCurrentPhoto = (obj) => {
  this.setState({
    name: obj.name,
    path: obj.path
  })
}

addPhotoToTheField = (photo) => {
  const name = photo.name;
  const path = photo.path;

  let tempArrProjFiles = this.state.projFiles.slice();
  let tempArrTeamMembers = this.state.teamMembers.slice();

  let newArrProjFiles = tempArrProjFiles.map((item, index) => {
    if (item.id == this.state.currentInputTarget.id) {
      return {
        ...item,
        photo: {
          ...item.photo,
          value: name, 
          path: path
        }
      }

    } else {
      return item;
    }

  })

  let newArrTeamMembers = tempArrTeamMembers.map((item, index) => {
    if (item.id == this.state.currentInputTarget.id) {
      return {
        ...item,
        photo: {
          ...item.photo,
          value: name,
          path: path
        }
      }
    } else {
      return item
    }
  })

   
    this.setState({
      currentInputTarget: '',
      projFiles: newArrProjFiles,
      teamMembers: newArrTeamMembers
    })

}



  renderPage() {

    const {dir, lang, createNew, teamMember} = this.props
    if(!createNew.pageContent) return null
    if(!teamMember.pageContent) return null

      // console.log(createNew.pageContent)
    // console.log(teamMember.pageContent)
    const data = createNew.pageContent

    const {teamMembers, projectName, moneyCollected, fieldOfProject, timePeriod, linkToVideo, projDescription, tashkifProjFile, projFile, projFiles } = this.state
    let backdrop = null;
    if(this.state.isBackdrop) {

      backdrop = <Backdrop 
                  close={this.hideBackdrop} 
                  changeCurrentPhoto={this.updateCurrentPhoto} 
                  hideBackdrop={this.hideBackdrop}
                  addPhotoToTheField={this.addPhotoToTheField}
                  target={this.state.currentInputTarget}
                /> 
    }

    return (
      <div className='createNewTab'>
        {backdrop}
        
        {/*<div className='createNewTab__main-header secondary-header'>
          <span>My projects</span> / <span>Create a New project</span>
        </div>*/}
       <SecondaryHeader controls={false} />
        <main className="dash-inner">
          <div className='createNewTab__board'> 
            <div className='createNewTab__header'>
              {data[1][lang].general}           
            </div>

            <form className="sign-up__entrepreneur"
              noValidate
              onSubmit={this.handleSubmit}>

              <div id='inputForm' className="sign-up__column">
                <div  className='sign-up__row'>
                  <Input type="text"
                    name="projectName"
                    {...projectName}
                    label={data[1][lang][`project_name`]}
                    labelDone={data[1][lang][`project_name.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="moneyCollected"
                    {...moneyCollected}
                    label={data[1][lang][`money_to_collect`]}
                    labelDone={data[1][lang][`money_to_collect.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="fieldOfProject"
                    {...fieldOfProject}
                    label={data[1][lang][`field`]}
                    labelDone={data[1][lang][`field.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="timePeriod"
                    {...timePeriod}
                    label={data[1][lang][`time_period`]}
                    labelDone={data[1][lang][`time_period.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                </div>
                  <Input type="text"
                    name="linkToVideo"
                    {...linkToVideo}
                    label={data[1][lang][`video_link`]}
                    labelDone={data[1][lang][`video_link.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Textarea {...projDescription}
                    name="projDescription"
                    updateValue={this.handleChangeValue}
                    changeValue={this.handleChangeValue}
                    validation={[`maxSize`]}
                    label={data[1][lang][`project_descr`]}
                    labelDone={data[1][lang][`project_descr.label`]}
                    changeErrors={this.handleChangeErrors}
                  />
                  <InputFile {...tashkifProjFile}
                    name="tashkifProjFile"
                    updateValue={this.handleChangeValue}
                    label={data[1][lang][`tashkif_file`]}
                    labelDone={data[1][lang][`tashkif_file.label`]}
                    validation={[`maxSize`]}
                    updateErrors={this.handleChangeErrorsFile}
                  />
                  <NewInputFileField config={projFiles}
                    clickInput={this.clickOnInput}
                    selfValues={projFile}
                    name="photo"
                    updateValue={this.onUpdateNewInputFileValue}
                    label={data[1][lang][`project_file`]}
                    labelDone={data[1][lang][`project_file.label`]}
                    validation={[`maxSize`]}
                    updateErrors={this.onUpdateNewInputFileErrors}
                  />


                </div>
                <div className='addNewFileButton__wrapper' onClick={this.addOneMoreField}>
                  <div className='addNewFileButton__item'> {data[1][lang][`add_file_link`]}</div>
                </div>
              </form>

              <div className='createNewTab__header'>
                {data[1][lang][`team_members`]}            
              </div>

              <form className="sign-up__entrepreneur" noValidate onSubmit={this.handleSubmit}>

                <div className="sign-up__container">
                  <NewTeamMember config={teamMembers}
                    showPosition={false}
                    data={teamMember.pageContent[1][lang]}
                    clickInput={this.clickOnInput}
                    updateValue={this.onUpdateValue}
                    updateErrors={this.onUpdateErrors}
                  />
                </div>
               
                <div className="sign-up__add-button-wrapper ">
                  <button className="sign-up__add-button button button-bordered"
                    type="button"
                    dir={dir}
                    onClick={this.onAddNewTeamMember}>
                    <span className="sign-up__add-button-text">
                      {data[1][lang][`add_member_btn`]}
                    </span>
                  </button>
                  <button className="button button-color-green"
                    type="button"
                    dir={dir}
                    onClick={this.handleSubmit}>
                    <span className="">
                      {data[1][lang][`create_btn`]}
                    </span>
                  </button>
                </div>
                
              </form>
          </div>
        </main>
      </div>
    );
  }

  render() {
    return(
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }

}


const mapStateToProps = state => ({
  createNew: state.createNew,
  teamMember: state.teamMember
})

const mapDispatchToProps = dispatch => {
  return {
    getCreateNewProject: (lang, createNew) => (dispatch(getCreateNewProject(lang, createNew))),
    getTeamMember: (lang, teamMember) => (dispatch(getTeamMember(lang, teamMember)))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(CreateNew)
);

