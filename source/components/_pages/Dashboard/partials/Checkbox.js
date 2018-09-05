import React, { Component } from 'react';
import settings, {BASE_URL} from '../../../../utils/routesBack'
import axios from 'axios'

class Checkbox extends Component {

  constructor() {
    super();
    this.state = {
      checked: false,
    }
  }

  componentDidMount = () => {
    this.setState( prev => ({
      checked: this.props.checked,
    }))
  }

  checkHandle = (name) => {
    // this.props.click(name)
    console.log(!this.state.checked)

    axios({
      method: 'post',
      url: `${BASE_URL}/enterpreneur/1/settings`,
      data:{
        value: !this.state.checked,
        type: name
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState( prev => {
      return {
        checked: !prev.checked
      }
    })
  }

  render() {
    const { label } = this.props;
    const isCheckedClass = this.state.checked ? 'settings__checkbox-checked' : '';

    return (
      <div className="settings__checkbox-wrap">
        <label className="settings__checkbox-label">
          <input
            className={`settings__checkbox ${isCheckedClass}`}
            type="checkbox"
            name={name}
            onClick={()=>this.checkHandle(this.props.name)}
          />
          {label}
        </label>
      </div>
    );
  }

}

export default Checkbox;





// import React, { Component } from 'react';

// class Checkbox extends Component {

//   constructor() {
//     super();
//     this.state = {
//       checked: false,
//     }
//   }

//   componentDidMount = () => {
//     this.setState( prev => ({
//       checked: this.props.checked,
//     }))
//   }

//   checkHandle = () => {
//     this.setState( prev => {
//       return {
//         checked: !prev.checked
//       }
//     })
//   }

//   render() {
//     const { label } = this.props;
//     const isCheckedClass = this.state.checked ? 'settings__checkbox-checked' : '';

//     return (
//       <div className="settings__checkbox-wrap">
//         <label className="settings__checkbox-label">
//           <input
//             className={`settings__checkbox ${isCheckedClass}`}
//             type="checkbox"
//             name={name}
//             onClick={this.checkHandle}
//           />
//           {label}
//         </label>
//       </div>
//     );
//   }

// }

// export default Checkbox;
