import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import Checkbox from '../../partials/Checkbox';
import './settings.styl';

const checkboxes = [
  {
    checked: true,
    label:'Project on evaluation stage',
    name: 'evaluation',
  },
  {
    checked: false,
    label:'Deleted project',
    name: 'deleted',
  },
  {
    checked: true,
    label:'Project became running',
    name: 'running',
  },
  {
    checked: false,
    label:'Edited project',
    name: 'edited',
  },
  {
    checked: false,
    label:'Subscription on project',
    name: 'subscr',
  },
  {
    checked: false,
    label:'Project days left',
    name: 'left',
  },
  {
    checked: true,
    label:'Purchases of project',
    name: 'purchase',
  }
  
]

class Settings extends Component {

  render() {
    return (
        <div>
        <SecondaryHeader controls={false} button={true}/>
          {/*<div className='createNewTab__main-header'>
            <span>Settings</span>
          </div>*/}
          <main className="dash-inner">
            <div className="settings">
              <div className="settings__header">
                Settings
              </div>
              <div className="settings__descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="settings__form">
                  {checkboxes.map( checkbox => {
                    return (
                      <Checkbox {...checkbox} key={checkbox.name}/>
                    )
                  })}
              </div>
            </div>
          </main>
        </div>
    );
  }

}

export default Settings;
