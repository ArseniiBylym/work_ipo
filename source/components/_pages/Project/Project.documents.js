import React, { Fragment } from 'react'
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

const mockFiles = [file1, file2, file3]

ProjectDocuments.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Project.index
  contentText: PropTypes.object
}

function ProjectDocuments(props) {

  let companyPresentation =  undefined
  const setCompanyPresentationRef = node => companyPresentation = node

  let companyStateman =  undefined
  const setCompanyStatemanRef = node => companyStateman = node

  const downloadAllCompanyDocumentation = () => {
    companyPresentation.click()
    companyStateman.click()
  }

  const renderDocuments = () => {
    // TODO download from back
    const {contentText} = props

    return mockFiles.map(file => {
      return (
        <DownloadButton key = {file}
          file={file}
          className={`project-page__tabs-button`}
          multiple={false}
          text={contentText.download_file}
          label={`Name.ext`}
        />
      )
    })
  }

  const downloadAllDocumentation = () => {
    // TODO download all from back zip
    console.log(`Download all`)
  }

  const renderPage = () => {
    const {dir, contentText} = props

    if(!contentText) return null

    return (
      <div>
        <section className="project-page__section" dir={dir}>
          <h1 className="project-page__subtitle">
            {contentText[`doc.title`]}
          </h1>
          <div className="project-page__text">
            <p>
              {contentText[`doc.descr`]}
            </p>
          </div>
          <div className="project-page__tabs">
            <Tabs defaultActiveTabIndex={0} height={100}>
              <Tab title={contentText.tashkif_tab}>
                <div className="project-page__tabs-content">
                  <DownloadButton file={file1}
                    className={`project-page__tabs-button-center`}
                    multiple={false}
                    text={contentText.download_file}
                  />
                </div>
              </Tab>
              <Tab title={contentText.project_docs_tab}>
                <div className="project-page__tabs-content">
                  {renderDocuments()}
                </div>
                <div className="project-page__tabs-content project-page__tabs-content--footer">
                  <DownloadButton multiple dir={dir}
                    className={`project-page__tabs-button-center`}
                    onClick={downloadAllDocumentation}
                    text={contentText.download_all_btn}
                  />
                </div>
              </Tab>
              <Tab title={contentText.company_docs_tab}>
                <div className="project-page__tabs-content project-page__tabs-content--center">
                  <DownloadButton file={file4}
                    className={`project-page__tabs-button-center`}
                    multiple={false}
                    text={contentText.download_file}
                    label={`Company Presentation.pptx`}
                    setRef={setCompanyPresentationRef}
                  />
                  <DownloadButton file={file5}
                    className={`project-page__tabs-button-center`}
                    multiple={false}
                    text={contentText.download_file}
                    label={`Financial statement/report.pdf`}
                    setRef={setCompanyStatemanRef}
                  />
                </div>
                <div className="project-page__tabs-content project-page__tabs-content--footer">
                  <DownloadButton multiple
                    className={`project-page__tabs-button-center`}
                    onClick={downloadAllCompanyDocumentation}
                    text={contentText.download_all_btn}
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>
    )
  }

  return (
    <Fragment>
      {renderPage()}
    </Fragment>
  )

}

export default multiLang(ProjectDocuments)