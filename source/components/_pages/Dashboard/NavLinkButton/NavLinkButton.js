import React from 'react'

function NavLinkButton (props) {
    return (
        <div className={props.classNameToProps}> 
            {/* <div className='NavLinkButton__backdrop' /> */}
            <div className='NavLinkButton__button' onClick={props.click}>
                <div className="NavLinkButton__button--line"></div>
                <div className="NavLinkButton__button--line"></div>
                <div className="NavLinkButton__button--line"></div>
            </div>
        </div>
    )
}

export default NavLinkButton

// function buttonSVG() {
//     return (

//     )
// }