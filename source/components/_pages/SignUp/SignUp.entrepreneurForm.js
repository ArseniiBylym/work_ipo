import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './SignUp.entrepreneur.style.styl'
import {dataToSubmit} from '../../formFields/utils'
import multiLang from '../../_HOC/lang.hoc'
import {imageToBase64} from '../../formFields/utils'

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
    dir: PropTypes.string
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
        firstName: ``,
        lastName: ``,
        position: ``,
        linkFacebook: ``,
        linkLinkedIn: ``,
        photo: ``
      }
      {
        firstName: ``,
        lastName: ``,
        position: ``,
        linkFacebook: ``,
        linkLinkedIn: ``,
        photo: ``
      }
      {
        firstName: ``,
        lastName: ``,
        position: ``,
        linkFacebook: ``,
        linkLinkedIn: ``,
        photo: ``
      }
      {
        firstName: ``,
        lastName: ``,
        position: ``,
        linkFacebook: ``,
        linkLinkedIn: ``,
        photo: ``
      }

    ],
    image: {
      optional: true,
      value: `asasaffffffffffffffffffffffffffffffffffffffffffffffffffffffsa`,
      errors: [],
      validationRules: []
    },

  }

  onUpdateValue = async (event, id) => {
    const {value, name, files} = event.target
    let arr = [];

    // const newState = this.state.teamMembers.map((item, index) => {
    //
    //   if (id === index) return {...this.state.teamMembers[id], [name]: value}
    //
    //   return item
    // })
    //
    // return this.setState({
    //   teamMembers: [
    //     ...newState
    //   ]
    // })

     Promise.
     all( this.state.teamMembers.map( (item, index)=>{
       if ( name !== `photo`) {
         return new Promise(
           (resolve, reject) => {
             if (id === index && name !== `photo`) {
               resolve();
               arr.push({...this.state.teamMembers[id], [name]: value})
               // return {...this.state.teamMembers[id], [name]: value}
             }

             if (id === index && name === `photo`) {
               imageToBase64(files[0])

                 .then((asdf)=>{
                   console.log('1-----------------------------------------', asdf);
                   resolve();
                   arr.push( {...this.state.teamMembers[id], photo: asdf});
                   //return  {...this.state.teamMembers[id], photo: asdf}
                 });


             } else {
               resolve();
               arr.push(item);
             }

           }
         )
       } else {
         return item;
       }


     }


       )
     )

      .then(
        () => {


        return this.setState({
          teamMembers: [
            ...arr
          ]
        })
      });



    //
    // ));
    // const newState =  await this.state.teamMembers.map(async (item, index) => {
    //
    //   if (id === index && name !== `photo`) return {...this.state.teamMembers[id], [name]: value}
    //
    //   if (id === index && name === `photo`) {
    //     let asdf = await imageToBase64(files[0]);
    //     console.log('1-----------------------------------------', asdf)
    //     return  {...this.state.teamMembers[id], photo: asdf}
    //       // .then(base64 => {
    //       //   this.setState({
    //       //      image: {
    //       //         value: asdf
    //       //       }
    //       //   })
    //       // })
    //   }
    //
    //   return item
    // })

    // let qwer = await newState;
    // console.log('2-----------------------------------------');
    // Promise
    //   .all(Object.keys(obj).map(key => new Promise(
    //     (resolve, reject) => {
    //       obj[key]
    //         .count()
    //         .then((count) => {
    //           const resObj = {};
    //           resObj[key] = count;
    //           result.push(resObj);
    //           resolve();
    //         }, err => reject(err))
    //     }
    //   )))
    //   .then(() => {
    //     res.json(result);
    //   });



  }

  onAddNewTeamMember = () => {
    return this.setState({
      teamMembers: this.state.teamMembers.concat([
        {
          firstName: ``,
          lastName: ``,
          position: ``,
          linkFacebook: ``,
          linkLinkedIn: ``,
          photo: ``
        }
      ]),
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
        if (key === `download`) errors.push(!download.download)
        if (key === `download`) continue
        if (key === `teamMembers`) continue
        if (key === `image`) continue

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

  render() {
    // ==================================================
    console.log('--- team members', this.state.teamMembers)
    // ==================================================
    const {dir} = this.props
    const {teamMembers, financialReport, statementReport, companyPresentation, linkCompanyVideo, confirmCompanyPassword, companySales, companyName, ceoName, companyEmail, fundingSumToThisPoint, companyPassword, companyNumberVat, country, companyPhone} = this.state
    return (
      <form className="sign-up__entrepreneur"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="sign-up__content">
          <div className="sign-up__title">Company Information (Required fields)</div>
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

        <div className="sign-up__content">
          <div className="sign-up__title">NDA Signing (Required fields)</div>
          <div className="sign-up__container sign-up__container--center">
            <NDA updateValue={this.handleChangeDownload} />
          </div>
        </div>

        <div className="sign-up__content">
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

        <div className="sign-up__content">
          <div className="sign-up__title">Team Members (Optional fields)</div>
          <div className="sign-up__container">
            <div>
              {this.state.image.value}
            </div>

            <TeamMembersFields config={teamMembers} updateValue={this.onUpdateValue} />
          </div>
          <div className="sign-up__add-button-wrapper">
            <button className="sign-up__add-button button button-bordered"
              type="button"
              dir={dir}
              onClick={this.onAddNewTeamMember}
            >
              <span className="sign-up__add-button-text">
                add another team member
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
            Sign up
          </button>
        </div>

      </form>
    )
  }

}

export default multiLang(EntrepreneurForm)