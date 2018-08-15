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
      <div className="projects">
        <div className="projects__header">
          <div className="projects__header-right">
            <div className="projects__title">
              {item.project_name}
            </div>
            <div className="projects__field">
              {item.project_field}
            </div>
          </div>
          <div className="projects__header-left">
            <div className="projects__members">
              {`${item.project_team.length} members`}
            </div>
            <div className="projects__menu">
              <div className="projects__menu-button">
                <span className="projects__menu-dots"></span>
                <span className="projects__menu-dots"></span>
                <span className="projects__menu-dots"></span>
              </div>
              <div className="projects__menu-dropdown">
                <ul className="projects__menu-list">
                  <li className="projects__menu-item">
                    <Link to="/dash/" className="projects__menu-link">
                      Statictic
                    </Link>
                  </li>
                  <li className="projects__menu-item">
                    <Link to="#" className="projects__menu-link">
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__middle">
          <div className="projects__middle-right">
            <ProgressCircle dynamicValue={item.money_collected} staticValue={item.money_to_collect}/>
          </div>
          <div className="projects__middle-left">
            <div className="projects__middle-days">
              <div className="projects__days">
                {`${item.days} days`}
              </div>
              <div className="projects__days-left">
                {`${daysFloored} days left`}
              </div>
            </div>
          </div>
        </div>
        <div className="projects__footer">
          <div className="projects__footer-left">
            <div className="projects__footer-be project__footer-field-title">
              To be collected
            </div>
            <div className="projects__footer-already project__footer-field-title">
              Already Collected
            </div>
            <div className="projects__footer-invested project__footer-field-title">
              Invested amount
            </div>
          </div>
          <div className="projects__footer-right">
            <div className="projects__footer-be-count project__footer-field-value">
              {`${item.money_to_collect} ILS`}
            </div>
            <div className="projects__footer-already-count project__footer-field-value">
              {`${item.money_collected} ILS`}
            </div>
            <div className="projects__footer-invested-count project__footer-field-value">
              {`${item.money_invested} ILS`}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectItem;
