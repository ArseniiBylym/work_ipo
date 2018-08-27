import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import { getProjects } from '../../../../../redux/actions/projectsActions';
import { connect } from 'react-redux';

import './index.styl';
import Input from '../../../../formFields/FormField.input';
import Textarea from '../../../../formFields/FormField.textarea';
import InputFile from '../../../../formFields/FormField.file';
import TeamMembersFields from '../../../SignUp/TeamMembersFields';
import NewTeamMember from './newTeamMember/NewTeamMember';
import {dataToSubmit} from '../../../../formFields/utils'
import NewInputFileField from './NewInputFileField/NewInputFileField';
import {imageToBase64} from '../../../../formFields/utils'

import Backdrop from './Backdrop/Backdrop';


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

  render() {

    const {dir} = this.props
    // const { items } = this.props;
    const {teamMembers, projectName, moneyCollected, fieldOfProject, timePeriod, linkToVideo, projDescription, tashkifProjFile, projFile, projFiles } = this.state
    // const teamMembers = [...this.state.teamMembers][0];
    // console.log(teamMembers.firstName);
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
              General Project Information            
            </div>

            <form className="sign-up__entrepreneur"
              noValidate
              onSubmit={this.handleSubmit}>

              <div id='inputForm' className="sign-up__column">
                <div  className='sign-up__row'>
                  <Input type="text"
                    name="projectName"
                    {...projectName}
                    label="Enter your Project Name"
                    labelDone="Project Name"
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="moneyCollected"
                    {...moneyCollected}
                    label="Enter Money to be Collected"
                    labelDone="Money Collected"
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="fieldOfProject"
                    {...fieldOfProject}
                    label="Enter a Field of your Project"
                    labelDone="Field of Project"
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Input type="text"
                    name="timePeriod"
                    {...timePeriod}
                    label="Enter a Time Period to Collect Money"
                    labelDone="Time Period"
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                </div>
                  <Input type="text"
                    name="linkToVideo"
                    {...linkToVideo}
                    label="Addlink to your video"
                    labelDone="Link to video"
                    validation={[`required`]}
                    changeValue={this.handleChangeValue}
                    changeErrors={this.handleChangeErrors}
                  />
                  <Textarea {...projDescription}
                    name="projDescription"
                    updateValue={this.handleChangeValue}
                    changeValue={this.handleChangeValue}
                    validation={[`maxSize`]}
                    label={`Enter your Project description (summery)`}
                    labelDone={`Project Description`}
                    changeErrors={this.handleChangeErrors}
                  />
                  <InputFile {...tashkifProjFile}
                    name="tashkifProjFile"
                    updateValue={this.handleChangeValue}
                    label={`Upload Tashkif project file`}
                    labelDone={`Tashkif file`}
                    validation={[`maxSize`]}
                    updateErrors={this.handleChangeErrorsFile}
                  />
                  <NewInputFileField config={projFiles}
                    clickInput={this.clickOnInput}
                    selfValues={projFile}
                    name="photo"
                    updateValue={this.onUpdateNewInputFileValue}
                    label={`Upload your Company Presentation`}
                    labelDone={`Company Presentation`}
                    validation={[`maxSize`]}
                    updateErrors={this.onUpdateNewInputFileErrors}
                  />


                </div>
                <div className='addNewFileButton__wrapper' onClick={this.addOneMoreField}>
                  <div className='addNewFileButton__item'> + Add another file</div>
                </div>
              </form>

              <div className='createNewTab__header'>
                Team Members (optional)            
              </div>

              <form className="sign-up__entrepreneur" noValidate onSubmit={this.handleSubmit}>

                <div className="sign-up__container">
                  <NewTeamMember config={teamMembers}
                    showPosition={false}
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
                      add another team member
                    </span>
                  </button>
                  <button className="button button-color-green"
                    type="button"
                    dir={dir}
                    onClick={this.handleSubmit}>
                    <span className="">
                      CREATE
                    </span>
                  </button>
                </div>
                
              </form>
          </div>
        </main>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      items: state.projects.items,
    }
  }, { getProjects }
)(CreateNew);


