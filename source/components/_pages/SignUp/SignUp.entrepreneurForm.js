import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './SignUp.entrepreneur.style.styl'
import { dataToSubmit } from '../../formFields/utils'
import multiLang from '../../_HOC/lang.hoc'
import { imageToBase64 } from '../../formFields/utils'
import { convertObjectToArray } from '../../../utils/helpers'

import Input from '../../formFields/FormField.input'
import Select from '../../formFields/FormField.select'
import NDA from './SignUp.entrepreneur.NDA'
import InputFile from '../../formFields/FormField.file'
import TeamMembersFields from './TeamMembersFields'

const options = [
  {value: `AF`, label: `Afghanistan`},
  {value: `AX`, label: `Åland Islands`},
  {value: `AL`, label: `Albania`},
  {value: `DZ`, label: `Algeria`},
  {value: `AS`, label: `American Samoa`}
]

class EntrepreneurForm extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    // from SignUp.index
    contentText: PropTypes.object,
    countries: PropTypes.object
  }

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
    download: {
      download: false,
      errors: []
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
    ]
  }

  onDeleteValue = (name, id, node) => {
    const {teamMembers} = this.state
    const prevStateArray = teamMembers
    const arr = []

    Promise.all(teamMembers.map((item, index) => {
      if (id === index && name === `photo`) {
        return new Promise(
          (resolve, reject) => {

            arr.push({...teamMembers[id], [name]: {...teamMembers[id][name], value: ``}})
            node.value = ``
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
                arr.push({...teamMembers[id], [name]: {...teamMembers[id][name], value: base64}})
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
      ])
    })
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

  handleChangeErrorsFile = (name, errors) => {
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        errors: [...errors]
      }
    })
  }

  handleChangeValidationRules = (evt, rules) => {
    const {name} = evt.target
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        validationRules: [...rules]
      }
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

  handleChangeDownload = () => {
    return this.setState({
      download: {
        // eslint-disable-next-line
        ...this.state.download,
        download: true
      }
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

  getSelectOptions() {
    const {countries} = this.props
    const obj = {}

    for (const key in countries) {
      if(countries.hasOwnProperty(key)) {
        obj[key] = {
          value: countries[key],
          label: countries[key]
        }
      }
    }

    return convertObjectToArray(obj)
  }

  renderPage() {
    const {dir, contentText} = this.props
    const {teamMembers, financialReport, statementReport, companyPresentation, linkCompanyVideo, confirmCompanyPassword, companySales, companyName, ceoName, companyEmail, fundingSumToThisPoint, companyPassword, companyNumberVat, country, companyPhone} = this.state

    if (!contentText) return null
    return (
      <form className="sign-up__entrepreneur"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="sign-up__content">
          <div className="sign-up__title">
            {contentText[`ent.comp_info_req`]}
          </div>
          <div className="sign-up__container">
            <div className="sign-up__column">
              <Input type="text"
                name="companyName"
                {...companyName}
                label={contentText[`ent.comp_name`]}
                labelDone={contentText[`ent.comp_name.label`]}
                validation={[`required`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Input type="text"
                name="ceoName"
                {...ceoName}
                label={contentText[`ent.CEO_name`]}
                labelDone={contentText[`ent.CEO_name.label`]}
                validation={[`required`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Input type="email"
                name="companyEmail"
                {...companyEmail}
                label={contentText[`ent.comp_email`]}
                labelDone={contentText[`ent.comp_email.label`]}
                validation={[`required`, `email`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Input type="text"
                name="fundingSumToThisPoint"
                {...fundingSumToThisPoint}
                label={contentText[`ent.funding_sum`]}
                labelDone={contentText[`ent.funding_sum.label`]}
                validation={[`required`, `money`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Input type="password"
                name="companyPassword"
                {...companyPassword}
                label={contentText[`ent.password`]}
                labelDone={contentText[`ent.password.label`]}
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
                label={contentText[`ent.VAT`]}
                labelDone={contentText[`ent.VAT.label`]}
                validation={[`required`, `vat`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Select placeholder={contentText[`ent.comp_country`]}
                updateValue={this.handleChangeSelect}
                selected={country.selectedOption}
                value={country.value}
                options={this.getSelectOptions()}
                labelDone={contentText[`ent.comp_country.label`]}
              />
              <Input type="text"
                name="companyPhone"
                {...companyPhone}
                label={contentText[`ent.comp_phone`]}
                labelDone={contentText[`ent.comp_phone.label`]}
                validation={[`required`, `phone`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Input type="text"
                name="companySales"
                {...companySales}
                label={contentText[`ent.comp_sales`]}
                labelDone={contentText[`ent.comp_sales.label`]}
                validation={[`required`, `money`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <Input type="password"
                name="confirmCompanyPassword"
                {...confirmCompanyPassword}
                label={contentText[`ent.confirm_pass`]}
                labelDone={contentText[`ent.confirm_pass.label`]}
                validation={[`required`, `confirmPassword`]}
                password={companyPassword.value}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
            </div>
          </div>
        </div>

        <div className="sign-up__content">
          <div className="sign-up__title">
            {contentText[`ent.comp_info_req`]}
          </div>
          <div className="sign-up__container sign-up__container--center">
            <NDA updateValue={this.handleChangeDownload} />
          </div>
        </div>

        <div className="sign-up__content">
          <div className="sign-up__title">
            {contentText[`ent.comp_info_opt`]}
          </div>
          <div className="sign-up__container">
            <div className="sign-up__column">
              <Input type="text"
                name="linkCompanyVideo"
                {...linkCompanyVideo}
                label={contentText[`ent.video_link`]}
                labelDone={contentText[`ent.video_link.label`]}
                validation={[`youtube`]}
                changeValue={this.handleChangeValue}
                changeErrors={this.handleChangeErrors}
              />
              <InputFile {...companyPresentation}
                name="companyPresentation"
                updateValue={this.handleChangeValue}
                label={contentText[`ent.presentation`]}
                labelDone={contentText[`ent.presentation.label`]}
                validation={[`maxSize`]}
                updateErrors={this.handleChangeErrorsFile}
              />
            </div>
            <div className="sign-up__column">
              <InputFile {...statementReport}
                name="statementReport"
                label={contentText[`ent.stat_report`]}
                labelDone={contentText[`ent.stat_report.label`]}
                updateValue={this.handleChangeValue}
                validation={[`maxSize`]}
                updateErrors={this.handleChangeErrorsFile}
              />
              <InputFile {...financialReport}
                name="financialReport"
                label={contentText[`ent.fin_report`]}
                labelDone={contentText[`ent.fin_report.label`]}
                updateValue={this.handleChangeValue}
                validation={[`maxSize`]}
                updateErrors={this.handleChangeErrorsFile}
              />
            </div>
          </div>
        </div>

        <div className="sign-up__content">
          <div className="sign-up__title">
            {contentText[`ent.team_members`]}
          </div>
          <div className="sign-up__container">
            <TeamMembersFields config={teamMembers}
              updateValue={this.onUpdateValue}
              updateErrors={this.onUpdateErrors}
              deletePhoto={this.onDeleteValue}
              content = {contentText}
            />
          </div>
          <div className="sign-up__add-button-wrapper">
            <button className="sign-up__add-button button button-bordered"
              type="button"
              dir={dir}
              onClick={this.onAddNewTeamMember}
            >
              <span className="sign-up__add-button-text">
                {contentText.team_add_member_btn}
              </span>
            </button>
          </div>
        </div>

        <div className="sign-up__button-wrapper">
          <button type="submit"
            className="sign-up__submit-button button button-main"
            disabled={this.disabledButton()}
            dir={dir}
          >
            {contentText.sign_up_btn}
          </button>
        </div>

      </form>
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

export default multiLang(EntrepreneurForm)