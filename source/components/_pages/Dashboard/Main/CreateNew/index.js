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
import {formDataToSubmit} from '../../../../formFields/utils'
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
      value: '',
      errors: [],
      validationRules: []
    },
    moneyCollected: {
      value: '',
      errors: [],
      validationRules: []
    },
    fieldOfProject: {
      value: '',
      errors: [],
      validationRules: []
    },
    timePeriod: {
      value: '',
      errors: [],
      validationRules: []
    },
    linkToVideo: {
      value: '',
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
        file: {
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

    console.log(this.props.match.params.projectId)
    console.log(this.props.allProjects.company_projects.projects)

    //Fill forms fields if user in redact current project mode
    if (this.props.match.params.projectId) {

      //find current project
      let currentProjectData = null
      this.props.allProjects.company_projects.projects.forEach((item, i) => {
        if (item.id == this.props.match.params.projectId) {
          currentProjectData = item;
        }
      })
      console.log(currentProjectData)

      //Form data string to end period of collected
      let newDateToCollected = Math.floor((new Date(currentProjectData.project_finish_date) - Date.now()) / 1000 / 60 / 60 / 24)
      console.log(newDateToCollected)

      //create Array of team members

      let teamMembersItems = []
      if(currentProjectData.project_team.length > 0)
      {
        teamMembersItems = currentProjectData.project_team.map((item, i) => {
          return {
            id: Date.now() + Math.random(),
            firstName: {
              optional: true,
              value: `${item.first_name}`,
              errors: [],
              validationRules: []
            },
            lastName: {
              optional: true,
              value: `${item.last_name}`,
              errors: [],
              validationRules: []
            },
            position: {
              optional: true,
              value: `${item.position}`,
              errors: [],
              validationRules: []
            },
            photo: {
              optional: true,
              value: `${item.photo}`,
              errors: [],
              validationRules: []
            },
            linkFacebook: {
              optional: true,
              value: `${item.fb_link}`,
              errors: [],
              validationRules: []
            },
            linkLinkedIn: {
              optional: true,
              value: `${item.linkedin_link}`,
              errors: [],
              validationRules: []
            }
          }
        })
      }

      //Create Array of project files
      let projectFilesItems = []
      if (currentProjectData.project_files.length > 0) {

        projectFilesItems = currentProjectData.project_files.map((item, i) => {
          return {
            id: Date.now() + Math.random(),
            file: {
              optional: true,
              value: ``,
              path: `${item}`,
              errors: [],
              validationRules: []
            }
          }
        })
      }

      this.setState({

        isBackdrop: false,
        currentInputTarget: ``,
        currentPhotoDataTransfer: '',
        projectName: {
          value: `${currentProjectData.project_name}`,
          errors: [],
          validationRules: []
        },
        moneyCollected: {
          value: `${currentProjectData.money_to_collect}`,
          errors: [],
          validationRules: []
        },
        fieldOfProject: {
          value: `${currentProjectData.project_field}`,
          errors: [],
          validationRules: []
        },
        timePeriod: {
          value: `${newDateToCollected}`, //currentProjectData.project_finish_date, // !!!!!!!!!!! Need to count days left to final date
          errors: [],
          validationRules: []
        },
        linkToVideo: {
          value: `${currentProjectData.video_url}`,
          errors: [],
          validationRules: []
        },
        projDescription: {
          optional: true,
          value: `${currentProjectData.project_description}`,
          errors: [],
          validationRules: []
        },
        tashkifProjFile: {
          optional: true,
          value: `${currentProjectData.tashkif_file}`,
          errors: [],
          validationRules: []
        },
        projFiles: [
          ...projectFilesItems
        ],
        teamMembers: [
          ...teamMembersItems
        ]

      })

      

    }
  }
  

  handleChangeValue = (evt, file) => {
    const {name, type, value, checked} = evt.target
    if (type === `file`) {
      return this.setState({
        [name]: {
          // eslint-disable-next-line
          ...this.state[name],
          value: file

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
                arr.push({...teamMembers[id], [name]: {...teamMembers[id][name], path: base64, value: files[0]}})
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


    //---------------------
    console.log(event.target.name)

    const {value, name, files} = event.target;
    console.log(files[0])


     const {projFiles} = this.state
     const newProjFiles = projFiles.map((item, i) => {
      if (i == id) {
        return {
          ...item,
          file: {
            ...item.file,
            path: files[0],
            value: files[0]}
          }
      }
      return item
     })

     this.setState({
      projFiles: [
        ...newProjFiles
      ]
     })

     setTimeout(()=> {
      console.log(this.state)
     }, 500)

     //---------------------------------------

   
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

    let temp = this.state


    //Form date string
    let date = new Date(Date.now() + (parseInt( temp.timePeriod.value) * 24 * 60 * 60 * 1000))
    let month = date.getMonth()+1;
    if (month < 10) {
      month = '0' + month
    }
    let day = date.getDate()
    if (day < 10) {
      day = '0' + day
    }
    let newDate = '' + date.getFullYear() + '-' + month + '-' + day + ' ' + date.toTimeString().split(' ')[0]
    console.log(newDate)


    //Form array of the project files
    let projFilesArr = temp.projFiles.map((item, i) => {
      console.log(item.file.path)
      return item.file.path
    })
    console.log(projFilesArr)


    //Form arr for the team members
    let projTeam = temp.teamMembers.map((item, i) => {
      return {
              first_name: item.firstName.value,
              last_name: item.lastName.value,
              position: item.position.value,
              fb_link: item.linkFacebook.value,
              linkedin_link: item.linkLinkedIn.value,
              photo: item.photo.path,
        }
    })
    
    const data = new FormData()

    let promise = new Promise((resolve, reject) => {


      data.append('project_name', temp.projectName.value)
      data.append('project_field', temp.fieldOfProject.value)
      data.append('project_description', temp.projDescription.value)
      data.append('money_to_collect', temp.moneyCollected.value)
      data.append('video_url', temp.linkToVideo.value)
      data.append('project_finish_date', newDate)
      data.append('project_team', JSON.stringify(projTeam))

      let tashkifFilePromise = new Promise((resolve, reject) => {

          console.log('1')
          resolve(data.append('tashkif_file', temp.tashkifProjFile.value))
      })

      let filesArrPromise = new Promise((resolve, reject) => {

          console.log('2')

            // data.append('project_files', temp.projFiles[0].file.path)
            // data.append('project_files', temp.projFiles[0].file.path)


            // resolve()

          // let arr = []
          const formFilesArr = () => {
            for (let i = 0; i< temp.projFiles.length; i++) {
              // arr.push(temp.projFiles[i].file.path)
              data.append('project_files', temp.projFiles[i].file.path)
            }
          }
          // formFilesArr()

          // data.append('project_files', projFilesArr)
          // data.append('project_files', projFilesArr)

          resolve(formFilesArr())
      })

      Promise.all([tashkifFilePromise, filesArrPromise])
      .then(() => {
        console.log('3')
        resolve(data)
      })

    })

    promise.then(data => {

      for (let p of data) {
        console.log(p);
      }

      let path = '';
      let method = ''
      if(this.props.match.params.projectId) {
        path = `enterpreneur/1/project/${this.props.match.params.projectId}`
        method = 'put'
        console.log(this.props.match.params.projectId)
      } else {
        method = 'post'
        path = `enterpreneur/1/createproject`
      }

      console.log(this.state)

       axios({
        method: `${method}`,
          url: `http://192.168.88.170:3000/${path}`,
           headers: {
            'language': 'en'
          },
          data: data,
      })
      .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    .catch(error => {console.log(error.message)})


  }

  addOneMoreField = () => {

    const {projFiles} = this.state
    
    if (projFiles.length >= 10) return

    return this.setState(  {
      projFiles: projFiles.concat([
          {
            id: Date.now() + Math.random(),
            file: {
              optional: true,
              value: ``,
              path: ``,
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
    const secHeaderName = [data[0][lang][`title.my_projects`], data[0][lang][`title.create`]]

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
       <SecondaryHeader controls={false} text={secHeaderName}/>
        <main className="dash-inner">
          <div className='createNewTab__board'>
            <div className='createNewTab__header'>
              {data[0][lang].general}
            </div>

            <form className="sign-up__entrepreneur"
              noValidate
              onSubmit={this.handleSubmit}>

              <div id='inputForm' className="sign-up__column">
                <div  className='sign-up__row'>
                  <Input type="text"
                    name="projectName"
                    {...projectName}
                    dir={dir}
                    label={data[0][lang][`project_name`]}
                    labelDone={data[0][lang][`project_name.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="moneyCollected"
                    {...moneyCollected}
                    dir={dir}
                    label={data[0][lang][`money_to_collect`]}
                    labelDone={data[0][lang][`money_to_collect.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="fieldOfProject"
                    {...fieldOfProject}
                    dir={dir}
                    label={data[0][lang][`field`]}
                    labelDone={data[0][lang][`field.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="timePeriod"
                    {...timePeriod}
                    dir={dir}
                    label={data[0][lang][`time_period`]}
                    labelDone={data[0][lang][`time_period.label`]}
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                </div>
                  <Input type="text"
                    name="linkToVideo"
                    {...linkToVideo}
                    dir={dir}
                    label={data[0][lang][`video_link`]}
                    labelDone={data[0][lang][`video_link.label`]}
                    validation={[`required`, `youtube`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Textarea {...projDescription}
                    name="projDescription"
                    dir={dir}
                    updateValue={this.handleChangeValue}
                    changeValue={this.handleChangeValue}
                    validation={[`maxSize`]}
                    label={data[0][lang][`project_descr`]}
                    labelDone={data[0][lang][`project_descr.label`]}
                    changeErrors={this.handleChangeErrors}
                  />
                  <InputFile {...tashkifProjFile}
                    name="tashkifProjFile"
                    dir={dir}
                    updateValue={this.handleChangeValue}
                    label={data[0][lang][`tashkif_file`]}
                    labelDone={data[0][lang][`tashkif_file.label`]}
                    validation={[`maxSize`]}

                  />
                  <NewInputFileField config={projFiles}
                    
                    selfValues={projFile}
                    name="file"
                    dir={dir}
                    updateValue={this.onUpdateNewInputFileValue}
                    label={data[0][lang][`project_file`]}
                    labelDone={data[0][lang][`project_file.label`]}
                    validation={[`maxSize`]}

                  />


                </div>
                <div className='addNewFileButton__wrapper' onClick={this.addOneMoreField}>
                  <div className='addNewFileButton__item' dir={dir}> {data[0][lang][`add_file_link`]}</div>
                </div>
              </form>

              <div className='createNewTab__header'>
                {data[0][lang][`team_members`]}
              </div>

              <form className="sign-up__entrepreneur" noValidate onSubmit={this.handleSubmit}>

                <div className="sign-up__container">
                  <NewTeamMember config={teamMembers}
                    showPosition={false}
                    data={teamMember.pageContent[1][lang]}

                    dir={dir}
                    updateValue={this.onUpdateValue}
                    updateErrors={this.onUpdateErrors}
                  />
                </div>
               
                <div className="sign-up__add-button-wrapper ">
                  <button className="sign-up__add-button button button-bordered"
                    type="button"
                    dir={dir}
                    onClick={this.onAddNewTeamMember}>
                    <span className="sign-up__add-button-text" dir={dir}>
                      {data[0][lang][`add_member_btn`]}
                    </span>
                  </button>
                  <button className="button button-color-green"
                    type="button"
                    dir={dir}
                    onClick={this.handleSubmit}>
                    <span className="" dir={dir}>
                      {data[0][lang][`create_btn`]}
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
  teamMember: state.teamMember,
  allProjects: state.allProjects
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



// updateValue={this.onUpdateNewInputFileValue}