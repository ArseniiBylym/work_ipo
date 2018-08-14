import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProgressCircle from '../../../ProgressBarCircle/ProgressBarCircle.index';

class ProjectItem extends Component {

  render() {
    const { item } = this.props;
    const finishDate = new Date(item.project_finish_date).valueOf();
    const nowDate = new Date().valueOf();
    const dayLeft = (finishDate - nowDate) / 24 / 60 / 60 / 1000;
    const daysFloored = Math.floor(dayLeft);

    return (
      <div className="project">
        <div className="project__header">
          <div className="project__header-right">
            <div className="project__title">
              {item.project_name}
            </div>
            <div className="project__field">
              {item.project_field}
            </div>
          </div>
          <div className="project__header-left">
            <div className="project__members">
              {`${item.project_team.length} members`}
            </div>
            <div className="project__menu">
              <div className="project__menu-button">
                <span className="project__menu-dots"></span>
                <span className="project__menu-dots"></span>
                <span className="project__menu-dots"></span>
              </div>
              <div className="project__menu-dropdown">
                <ul className="project__menu-list">
                  <li className="project__menu-item">
                    <Link to="/dash/" className="project__menu-link">
                      Statictic
                    </Link>
                  </li>
                  <li className="project__menu-item">
                    <Link to="#" className="project__menu-link">
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="project__middle">
          <div className="project__middle-right">
            <ProgressCircle dynamicValue={item.money_collected} staticValue={item.money_to_collect}/>
          </div>
          <div className="project__middle-left">
            <div className="project__middle-days">
              <div className="project__days">
                {`${item.days} days`}
              </div>
              <div className="project__days-left">
                {`${daysFloored} days left`}
              </div>
            </div>
          </div>
        </div>
        <div className="project__footer">
          <div className="project__footer-left">
            <div className="project__footer-be project__footer-field-title">
              To be collected
            </div>
            <div className="project__footer-already project__footer-field-title">
              Already Collected
            </div>
            <div className="project__footer-invested project__footer-field-title">
              Invested amount
            </div>
          </div>
          <div className="project__footer-right">
            <div className="project__footer-be-count project__footer-field-value">
              {`${item.money_to_collect} ILS`}
            </div>
            <div className="project__footer-already-count project__footer-field-value">
              {`${item.money_collected} ILS`}
            </div>
            <div className="project__footer-invested-count project__footer-field-value">
              {`${item.money_invested} ILS`}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectItem;
