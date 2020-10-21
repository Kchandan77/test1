import React, { Component } from 'react'
import '../App.css'
import logoImage from '../Assets/Web – Graphic.png'
import eyelogo from '../Assets/see_password_icon.png'
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class LoginForms extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      mobileNumber: null,
      email: null,
      description: null,
      password: null,
      cnfPassword: null,
      formErrors: {
        firstName: "",
        lastName: "",
        age: "",
        mobileNumber: "",
        email: "",
        description: "",
        password: "",
        cnfPassword: ""
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Age:${this.state.age}
        Mobile Number:${this.state.mobileNumber}
        Email: ${this.state.email}
        Description:${this.state.description}
        Password: ${this.state.password}
        Confirm Password:${this.state.cnfPassword}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "age":
        formErrors.age =
          value.length < 2 ? "age must in between 18 to 100" : "";
        break;
      case "mobileNumber":
        formErrors.mobileNumber =
          value.length < 10 ? "Mobile number must be a 10 digit number" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "cnfPassword":
        formErrors.cnfPassword =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { password, cnfpassword } = this.state;
    if (password !== cnfpassword) {
      alert("passwords dont match");
    }
    else {
      alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
      console.log(this.state);
      this.setState({
        firstName: "",
        lastName: "",
        age: "",
        mobileNumber: "",
        email: "",
        description: "",
        password: "",
        cnfpassword: "",
      })
    }
  }
  handleReset = () => {
    this.setState({

      firstName: "",
      lastName: "",
      age: "",
      mobileNumber: "",
      email: "",
      description: "",
      password: "",
      cnfpassword: "",
    })
  }

  handlePassWordVisibility = (event) => {
    const { passwordShown, setPasswordShown } = this.state;
    setPasswordShown(passwordShown ? false : true);
  }
  agehandler = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  mobilehandler = (event) => {
    this.setState({
      mobileNumber: event.target.value
    })
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="logoImage"><img src={logoImage} alt="logoImage"></img></div>
        <div className="form">
          <form >
            <h1> Create an account</h1>
            <div className="row1">
              <div className="allrows firstname">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div >
              <div className="allrows lastname">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="allrows age">
                <label htmlFor="age">Age</label>
                <input
                  className={formErrors.age.length > 2 ? "error" : 100}
                  placeholder="18-20"
                  type="number"
                  value={this.state.age} min="18" max="100"
                  pattern="[-+]?[0-9]"
                  name="age"
                  noValidate
                  /*onChange={this.agehandler} */
                  onChange={this.handleChange}
                />
                {formErrors.age.length > 2 && (
                  <span className="errorMessage">{formErrors.age}</span>
                )}

              </div>
            </div>
            <div className="row1">
              <div className="allrows mobile">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  className={formErrors.mobileNumber.length > 0 ? "error" : null}
                  placeholder="xxxxx xxxxx"
                  type="number"
                  name="mobileNumber"
                  noValidate
                  /*onChange={this.mobilehandler}  */
                  onChange={this.handleChange}
                />
                {formErrors.mobileNumber.length > 0 && (
                  <span className="errorMessage">{formErrors.mobileNumber}</span>
                )}
              </div >
              <div className="allrows email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="abc@xxx.zzz"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange} />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
            </div>
            <div className="row1">
              <div className="description">
                <label style={{ "fontweight": "bold", "fontsize": "15px" }}>Description</label>
                <textarea rows="4" />
              </div >
              <div style={{ "flex": "1" }}></div>
              <label style={{ "fontSize": "10px", "color": "#A9A9A9", "marginRight": "5px", "fontweight": "bold" }}>Max. 150 characters</label>
            </div>
            <div className="row1">
              <div className="allrows mobile">
                <label htmlFor="password">Password</label>
                <div className="visible_eye">
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}

                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                  <span className="visible_eye_logo"><img onClick={this.handlePassWordVisibility} src={eyelogo} alt="logo"></img></span>
                </div>
              </div>
              <div className="allrows email">
                <label htmlFor="cnfpassword">Confirm Password</label>
                <div className="visible_eye">
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Confirm Password"
                    type="password"
                    name="cnfpassword"
                    noValidate
                    onChange={this.handleChange}

                  />
                  <span className="visible_eye_logo"><img onChange={this.handlePassWordVisibility} src={eyelogo} alt="logo"></img></span>
                </div>
              </div>
            </div>

            <div className="row1 button_row">
              <button className="button button1" onClick={this.handleReset}>RESET</button>
              <button className="button" type="submit" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          </form>
        </div>

      </div>

    );
  }
}

export default LoginForms;
