import React from 'react';
import Carousel from '../../partials/Carousel';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import DownloadButton from '../../../../DownloadButton/DownloadButton.index';
import uuid from 'uuid/v4';

export default function({members}) {
  return (
    <div>
      <div className="project-top project-block">
        <div className="project-top__video-wrap">
          <iframe
            className="project-top__video"
            frameBorder="0"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div className="project-top__info">
          <div className="project-top__info-list">
            <div className="project-top__info-item project-top__info-item-field">
              <div className="project-top__info-field project-top__info-title">
                Field
              </div>
            </div>
            <div className="project-top__info-item">
              <div className="project-top__info-title">
                To be Collected
              </div>
              <div className="project-top__info-value">
                376
              </div>
            </div>
            <div className="project-top__info-item">
              <div className="project-top__info-title">
                Already Collected
              </div>
              <div className="project-top__info-value">
                376
              </div>
            </div>
            <div className="project-top__info-item">
              <div className="project-top__info-title">
                Invested Amount
              </div>
              <div className="project-top__info-value invested">
                376
              </div>
            </div>
            <div className="project-top__info-item">
              <div className="project-top__info-days">
                18012321 days
              </div>
              <div className="project-top__info-days">
                15312 daus left
              </div>
            </div>
          </div>
          <div className="project-top__info-descr-wrap">
            <div className="project-top__info-descr-title">
              Project Summary
            </div>
            <div className="project-top__info-descr-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
      <div className="project-bottom ">
        <div className="project__team project-block">
          <div className="project__team-header">
            <div className="project__team-title">
              Our Team
            </div>
            <div className="project__team-members">
              10 members
            </div>
          </div>
          <div className="project__team-carsl">
            <Carousel rows={10} item={carslItem} items={ createItemsArray(members) } itemsWrapper={carsItemsWrap}/>
          </div>
        </div>
        <div className="project__docs project-block">
          <div className="project__docs-header">
            Documentation
          </div>
          <div className="project__docs-tabs">
            <Tabs defaultActiveTabIndex={0} height={30} tabsAddClassName={'project__docs-tabs-tabs'}>
              <Tab title="Tashkif">
                <div className="project__docs-download-wrap">
                  <DownloadButton
                    className="project__docs-tabs-button"
                    label="File Name.xls"
                  />
                </div>
              </Tab>
              <Tab title="Other Documents">
                <div className="project__docs-download-wrap">
                  <DownloadButton
                    className="project__docs-tabs-button"
                    label="Presentation Name. pptx"
                  />
                  <DownloadButton
                    className="project__docs-tabs-button"
                    label="File Name.xls"
                  />
                  <DownloadButton
                    className="project__docs-tabs-button"
                    label="Report.pdf"
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )

  function createItemsArray(items) {
    return items.map( item => {
      return carslItem(item);
    })
  }
}

function carsItemsWrap({children}) {
  return (
    <div className="project__team-items-column">
      {children}
    </div>
  )
}

function carslItem({src, name, post}) {
  return (
    <div className="project__team-item" key={uuid()}>
      <div className="project__team-item-img-wrap">
        <img className="project__tem-item-img" src={src} />
      </div>
      <div className="project__team-item-desrc">
        <div className="project__team-item-name">
          {name}
        </div>
        <div className="project__team-item-posе">
          {post}
        </div>
      </div>
    </div>
  )
}
