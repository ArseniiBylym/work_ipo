import React, {Component, Fragment} from 'react';
import './TermsOfService.styl';
import SecondaryHeader from '../../SecondaryHeader';

import { getTermsOfService } from '../../../../../redux/reducers/getTermsOfService.reducer';
import { projects, terms_of_service } from '../../../../../utils/routesBack'
import { connect } from 'react-redux';
import multiLang from '../../../../_HOC/lang.hoc'

class TermsOfService extends Component  {

	
	componentDidMount = () => {
		console.log(this.props)
	    const {lang, getTermsOfService} = this.props
	    // getTermsOfService(lang, projects)
	    getTermsOfService(lang, terms_of_service)
	}


	renderPage() {

		const {lang, terms} = this.props
		if(!terms.pageContent) return null
			console.log(terms)
		const mainText = terms.pageContent[1][lang].descr
		console.log(mainText)
		const secHeaderName = [terms.pageContent[1][lang].terms]
		return(
			<div className='TermsOfService'>
				<SecondaryHeader controls={false} button={false} text={secHeaderName}/>
				
				{/*<div className='TermsOfService__main-header'>
					Terms of service
				</div>*/}
				 <div className="dash-inner">
				 	<div>
						<p>{mainText}</p>
				   </div>
				 </div>
			</div>
		)
	}

	render() {
		return(
			<Fragment>
			{this.renderPage()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
  return {
    terms: state.termsOfService
  }
}
const mapDispatchToProps = {getTermsOfService}

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(TermsOfService)
)
// export default TermsOfService