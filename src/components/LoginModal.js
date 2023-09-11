import { useState } from "react";
import LoginTab from "../components/LoginTab";
import RegisterTab from "./RegisterTab";

function LoginModal(props) {
    const [toggleLoginOrReg, setToggleLoginOrReg] = useState(true); // true for login | false for register

    return (
        <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            style={{display: "block"}} >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content login">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            Login | Register
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.doCloseModal} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="nav nav-tabs m-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active m-btn1" data-toggle="tab" role="tab" onClick={() => setToggleLoginOrReg(true)}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-btn1" data-toggle="tab" role="tab" onClick={() => setToggleLoginOrReg(false)}>Register</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            { toggleLoginOrReg ? <LoginTab /> : <RegisterTab /> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;