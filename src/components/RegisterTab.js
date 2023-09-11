import { useState } from "react";
import { API_BASE_URL } from "../configuration/Constants";

function RegisterTab(props) {

    const [fullname, setFullname] = useState('');
    const [emailId, setEmailId] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [pwd, setPwd] = useState('');
    const [confPwd, setConfPwd] = useState('');

    function updateName(event) {
        setFullname(event.target.value);
    }

    function updateEmail(event) {
        setEmailId(event.target.value);
    }

    function updateMobile(event) {
        setPhoneNo(event.target.value);
    }

    function updatePassword(event) {
        setPwd(event.target.value);
    }

    function updateConfPwd(event) {
        setConfPwd(event.target.value);
    }

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
        body: null
    };

    async function handleUserRegistration(event) {
        event.preventDefault();

        requestOptions.body = JSON.stringify({
            name: fullname,
            email: emailId,
            mobileNumber: phoneNo,
            password: pwd,
        });
        const response = await fetch(API_BASE_URL + "/auth/signup", requestOptions);

        props.doRegister(response.status); 
    }

    return (
        <div className="tab-pane active" id="tabs-2" role="tabpanel">
            <div className="form-sec" id="my_form">
                <form className="rd-mailform1 reg_frm" method="post">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control reg_name" 
                                    id="rg_name" 
                                    name="name" 
                                    placeholder="Name" value={fullname} onChange={updateName} required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control reg_email" 
                                    id="rg_email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={emailId} onChange={updateEmail} required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control reg_ph" 
                                    placeholder="Contact Number" 
                                    value={phoneNo} onChange={updateMobile} required/>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control reg_pass"  
                                    placeholder="*Password" 
                                    value={pwd} onChange={updatePassword} required/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control reg_c_pass" 
                                    placeholder="*Confirm Password" 
                                    value={confPwd} onChange={updateConfPwd} required />
                            </div>
                        </div>
                    </div>
                    <div className="text-left m-login">
                        <button className="contact_submit_btn m-btn1 btn btn-primary" type="submit" onClick={handleUserRegistration} >
                            Register
                        </button>
                    </div>
                </form>
                <span className="my-reg" style={{ color: "green" }}></span>
            </div>
        </div>
    )
}
export default RegisterTab;