import React, {Component} from 'react';
import './LogOut.styl';
import { logout } from '../../../../../redux/actions/authActions';
import { connect } from 'react-redux';
import { withRouter, Link, NavLink } from 'react-router-dom';



class LogOut extends Component {

	logOut = () => {
		console.log('You has logged out!')
		// props.click()
		// logout()
		console.log(logout)
		logout()


	}

	render() {


	return (
		<div className='LogOut' onClick={this.props.click}>
			<div className='LogOut__backdrop' >
			</div>
			<div className='LogOut__modal-wrapper'>
				<div className='LogOut__close-button' onClick={this.props.click}>
					{closeButtonSvg()}
				</div>
				<div className='LogOut__text'> {this.props.toOutQuestion} {/*Are you sure you want to log out*/} </div>
				<div className='LogOut__button' onClick={this.props.logOutRedux}>
				{this.props.text}
					{/*LOG OUT*/}
				</div>
			</div>
		</div>
	)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		logOutRedux: () => dispatch({type: 'LOGOUT'})
	}
}

export default withRouter(
  connect(null, mapDispatchToProps)(LogOut)
);

function closeButtonSvg () {
	return (
		<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="22.5" cy="22.5" r="22.5" fill="#36436B"/>
			<rect width="3.57089" height="28.5672" rx="1.78545" transform="translate(11.5531 13.5555) scale(0.987754 1.0121) rotate(-45)" fill="white"/>
			<rect width="3.57089" height="28.5672" rx="1.78545" transform="translate(30.9526 11.0001) scale(0.987754 1.0121) rotate(45)" fill="white"/>
		</svg>
	)
}
