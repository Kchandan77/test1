import React, { useState } from 'react'
import logo from '../Assets/Mobile – Graphic.png'
import eyelogo from '../Assets/see_password_icon.png'
import '../Style.css'
import { useFormik } from 'formik'

function MobileView() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: "",
            mobileNumber: "",
            email: "",
            description: "",
            password: "",
            cnfpassword: "",
        },
        onSubmit: values => {
            // console.log('Form data', values)
        },
        onReset: values => {
            // console.log('Form data', values)
        },
        validate: values => {
            //values.firstName values.lastName...
            //errors.firstName errors.lastNamme..
            //console.log('Form errors',formik.errors)
            let errors = {}
            if (!values.firstName) {
                errors.firstName = 'Required'

            }
            if (!values.lastName) {
                errors.lastName = 'Required'

            }
            if (!values.age) {
                errors.age = 'Required'

            }
            if (!values.mobileNumber) {
                errors.mobileNumber = 'Required'

            }
            if (!values.password) {
                errors.password = 'Required'

            }
            if (!values.cnfpassword) {
                errors.cnfpassword = 'Required'

            }

            if (!values.email) {
                errors.email = 'Required'
            }

            else if (!
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)
            ) {
                errors.email = 'Invalid email format'
            }
            return errors

        }

    })

    //console.log('Form values', formik.values)


    const [passwordShown, setPasswordShown] = useState(false);
    const passwordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div className='ImageLogo'>
            <div className="logoImage"><img style={{
                height: '100%',
                width: '100%'
            }} src={logo} alt="logo"></img></div>

            <div className="form">
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} style={{ "width": "100%" }}>
                    <h1 style={{ "textAlign": "center" }}>Create an account</h1>
                    <div className="row2">

                        <div className="card">
                            <div className='form-control'>
                                <label className="card_through_text">Personal Details</label>
                                <input
                                    className="inputBox"
                                    placeholder="First Name"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                />
                                {formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
                            </div>
                            <input
                                className="inputBox"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName} />
                            {formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}

                            <input className="inputBox"
                                placeholder="18-100"
                                name="age"
                                type='number'
                                onChange={formik.handleChange}
                                value={formik.values.age} min="18" max="100"
                            />
                            {formik.errors.age ? <div className='error'>{formik.errors.age}</div> : null}
                        </div>

                        <div className="card">

                            <input
                                className="inputBox"
                                placeholder="Mobile Number"
                                name="mobileNumber"
                                onChange={formik.handleChange}
                                value={formik.values.mobileNumber}
                            />
                            {formik.errors.mobileNumber ? <div className='error'>{formik.errors.mobileNumber}</div> : null}
                            <div className='form-control'>
                                <input
                                    className="inputBox"
                                    placeholder="Email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
                                {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                            </div>
                        </div>
                        <div className="card">
                            <label className="card_through_text">Password</label>
                            <div className="visible_eye">
                                <input
                                    className="inputBox"
                                    placeholder="Password"
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                                <span className="visible_eye_logo2"><img onClick={passwordVisiblity} src={eyelogo} alt="logo"></img></span>
                            </div>

                            <div className="visible_eye">
                                <input
                                    className="inputBox"
                                    placeholder="Confirm Password"
                                    type={passwordShown ? "text" : "password"}
                                    name="cnfpassword"
                                    onChange={formik.handleChange}
                                    value={formik.values.cnfpassword}
                                />
                                {formik.errors.cnfpassword ? <div className='error'>{formik.errors.cnfpassword}</div> : null}
                                <span className="visible_eye_logo2"><img onClick={passwordVisiblity} src={eyelogo} alt="logo"></img></span>
                            </div>
                        </div>


                        <div className="description">
                            <label >Description</label>
                            <textarea rows="4" />
                        </div >
                        <div>
                            <div style={{ "flex": "1" }}></div>
                            <label style={{ "fontSize": "10px", "color": "#A9A9A9", "marginLeft": "200px", "fontweight": "bold" }}>Max. 150 characters</label>
                        </div>
                    </div>


                    <div className="row2 button_row">
                        <button type='reset' className="button button1">RESET</button>
                        <button type='submit' className="button">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default MobileView
