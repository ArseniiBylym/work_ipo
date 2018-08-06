import React from 'react'
import PropTypes from 'prop-types'

PhotoUploader.propTypes = {
  // from SignUp.entrepreneurForm
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  index: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  hidePreview: PropTypes.func,
}

function PhotoUploader(props) {

  const onButtonClick = evt => {
    const {hidePreview} = props
    evt && evt.preventDefault && evt.preventDefault()
    hidePreview()
  }

  const renderPreview = () => {
    const {src, alt} = props

    return (
      <div className="sign-up__preview">
        <a href="#"
          className="sign-up__button"
          onClick={onButtonClick}
        >
          <span className="sign-up__button-text">Delete image</span>
        </a>
        <img src={src} alt={alt} />
      </div>
    )
  }

  const renderLabel = () => {
    const {index, name} = props

    return (
      <label className="sign-up__photo-text" htmlFor={index ? `${name + index}-id` : `${name}-id`}>
        Upload Photo of a Team Member
      </label>
    )
  }

  const {index, name, changeValue, src} = props
  return (
    <div className="sign-up__photo-wrapper">
      {src && renderPreview()}
      {!src && renderLabel()}
      <input type="file"
        name={name}
        id={index ? `${name + index}-id` : `${name}-id`}
        onChange={changeValue}
        className="sign-up__photo-input"
      />

    </div>

  )

}

export default PhotoUploader