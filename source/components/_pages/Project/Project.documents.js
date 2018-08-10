import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'

import Tabs from '../../Tabs/Tabs.index'
import Tab from '../../Tabs/Tabs.item'
import DownloadButton from '../../DownloadButton/DownloadButton.index'

// mockData
import file1 from './images/6-facts-to-know-before-owning-a-puppy.jpg'
import file2 from './images/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg'
import file3 from './images/main-qimg-257388444c388cf0b2a5d1cac72b40fe-c.jpeg'
import file4 from './images/puppy.jpg'
import file5 from './images/shutterstock-100765450.jpg'

ProjectDocuments.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function ProjectDocuments(props) {

  let presentation =  undefined
  const setPresentationRef = node => presentation = node

  let file =  undefined
  const setFileRef = node => file = node

  let report =  undefined
  const setReportRef = node => report = node

  const downloadAllDocumentation = () => {
    presentation.click()
    file.click()
    report.click()
  }

  let companyPresentation =  undefined
  const setCompanyPresentationRef = node => companyPresentation = node

  let companyStateman =  undefined
  const setCompanyStatemanRef = node => companyStateman = node

  const downloadAllCompanyDocumentation = () => {
    companyPresentation.click()
    companyStateman.click()
  }

  const {dir} = props
  return (
    <div>
      <section className="project-page__section" dir={dir}>
        <h1 className="project-page__subtitle">
          Documentation
        </h1>
        <div className="project-page__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="project-page__tabs">
          <Tabs defaultActiveTabIndex={0} height={100}>
            <Tab title={`Tashkif`}>
              <div className="project-page__tabs-content">
                <DownloadButton file={file1}
                  className={`project-page__tabs-button-center`}
                  multiple={false}
                  text={`Download file`}
                />
              </div>
            </Tab>
            <Tab title={`Project Documents`}>
              <div className="project-page__tabs-content">
                <DownloadButton file={file2}
                  className={`project-page__tabs-button`}
                  multiple={false}
                  text={`Download file`}
                  label={`Presentation Name.pptx`}
                  setRef={setPresentationRef}
                />
                <DownloadButton file={file3}
                  className={`project-page__tabs-button`}
                  multiple={false}
                  text={`Download file`}
                  label={` File Name.xls`}
                  setRef={setFileRef}
                />
                <DownloadButton file={file4}
                  className={`project-page__tabs-button`}
                  multiple={false}
                  text={`Download file`}
                  label={`Report.pdf`}
                  setRef={setReportRef}
                />
              </div>
              <div className="project-page__tabs-content project-page__tabs-content--footer">
                <DownloadButton multiple
                  className={`project-page__tabs-button-center`}
                  onClick={downloadAllDocumentation}
                  text={`Download all`}
                />
              </div>
            </Tab>
            <Tab title={`Company Documents`}>
              <div className="project-page__tabs-content project-page__tabs-content--center">
                <DownloadButton file={file4}
                  className={`project-page__tabs-button-center`}
                  multiple={false}
                  text={`Download file`}
                  label={`Company Presentation.pptx`}
                  setRef={setCompanyPresentationRef}
                />
                <DownloadButton file={file5}
                  className={`project-page__tabs-button-center`}
                  multiple={false}
                  text={`Download file`}
                  label={`Financial statement/report.pdf`}
                  setRef={setCompanyStatemanRef}
                />
              </div>
              <div className="project-page__tabs-content project-page__tabs-content--footer">
                <DownloadButton multiple
                  className={`project-page__tabs-button-center`}
                  onClick={downloadAllCompanyDocumentation}
                  text={`Download all`}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  )

}

export default multiLang(ProjectDocuments)