import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { API_BASE_URL } from "../configuration/Constants";
import Cookies from "universal-cookie";
import useAuth from "../hooks/useAuth";


function LoginTab() {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const { setAuth } = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from =  "/userdashboard" //location?.state?.from?.pathname || "/"
    const cookies = new Cookies();

    

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
        body: null
    };

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPwd(event.target.value);
    }

    async function handleLoginClick(event) {

        requestOptions.body = JSON.stringify({ "email": username, "password": pwd });

        const response = await fetch(API_BASE_URL + "/auth/signin", requestOptions);
        const responseData = await response.json();
        const jwtToken = response.headers.get("Token");
        const hours = process.env.REACT_APP_COOKIES_EXPIRY_IN_HOURS;

        // this is not a httpOnly cookie - but a normal
        // in later stages of development we might shift to httponly cookie for enhanced security.
        
        cookies.set("JWT", jwtToken, {
            sameSite: "strict", 
            path: "/",
            expires: new Date(new Date().getTime() + (hours * 60 * 60 * 1000))
        });
        setAuth({jwtToken});
        navigate("/userdashboard", { state: { email: username } } );
    }

    return (
        <div className="tab-pane active" id="tabs-1" role="tabpanel">
            <div className="form-sec" id="my_form">
                <form className="rd-mailform1" name="loginform" id="loginform" action="" method="post">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="user_login" value={username} name="log" onChange={handleUsernameChange} placeholder="Email or Phone Number" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input className="form-control" id="user_pass" type="password" value={pwd} name="pwd" placeholder="Password" onChange={handlePasswordChange} />
                            </div>
                        </div>
                    </div>
                    <div className="text-left m-login">
                        <a onClick={handleLoginClick} className="contact_submit_btn m-btn1 btn btn-primary">Login</a>
                        <input type="hidden" name="redirect_to" />
                        <input type="hidden" name="testcookie" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginTab;