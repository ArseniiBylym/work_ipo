import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProfileButton from '../../partials/ProfileButton';
import FormField from '../../partials/FormField';
import Input from '../../../../formFields/FormField.input';
import Select from 'react-select';
import './profile.styl';

class Profile extends Component {

  render() {

    return (
      <div>
        <SecondaryHeader />
        <main className="dash-inner">
          <div className="profile">
            <div className="profile__buttons">
              <ProfileButton text="Edit" addedClassName="profile-button-edit" />
              <ProfileButton text="Save" addedClassName="profile-button-save" />
            </div>
            <div className="profile__form">
              <FormField label='First Name' addedClassName="" id='profile__first-name'>
                <Input
                  type="text"
                  errors={[]}
                  name="first-name"
                  label="First Name"
                  value="312"
                />
              </FormField>
              <FormField label='Last Name' addedClassName="" id='profile__last-name'>
                <Input
                  type="text"
                  errors={[]}
                  name="last-name"
                  label="Last Name"
                  value="312"
                />
              </FormField>
              <FormField label='Email' addedClassName="" id='profile__email'>
                <Input
                  type="email"
                  errors={[]}
                  name="email"
                  label="Email"
                  value="312@email.com"
                />
              </FormField>
              <FormField label='Phone' addedClassName="" id='profile__phone'>
                <Input
                  type="phone"
                  errors={[]}
                  name="phone"
                  label="phone"
                  value="+33112"
                />
              </FormField>
              <FormField label='Bank' addedClassName="" id='profile__bank'>
                <Select
                  className="profile__form-field-select"
                  options={[
                    {
                      value: 'Bank Hapoalim', label: 'Bank Hapoalim',
                    },
                    {
                      value: 'Bank Discount', label: 'Bank Discount',
                    },
                    {
                      value: 'Bank Leumi', label: 'Bank Leumi',
                    },
                    {
                      value: 'Bank Mizrahi', label: 'Bank Mizrahi',
                    },
                  ]}
                  placeholder="Select your Bank"
                  // menuIsOpen
                  name="bank"
                  label="Bank"
                  value="312"
                  onChange={(obj) => {console.warn(obj);}}
                />
              </FormField>
              <FormField label='Account Number' addedClassName="" id='profile__account'>
                <Input
                  type="text"
                  errors={[]}
                  name="account"
                  label="Account"
                  value="312@email.com"
                />
              </FormField>
              <FormField label='Password' addedClassName="" id='profile__password'>
                <Input
                  type="password"
                  errors={[]}
                  name="password"
                  label="Password"
                  value="312@email.com"
                />
              </FormField>
            </div>
          </div>
        </main>
      </div>
    );
  }

}

export default Profile;
