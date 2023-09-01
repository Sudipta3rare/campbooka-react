function LoginModal(props) {
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
                                <a className="nav-link active m-btn1" data-toggle="tab" href="#tabs-1" role="tab">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-btn1" data-toggle="tab" href="#tabs-2" role="tab">Register</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="form-sec" id="my_form">
                                    <form className="rd-mailform1" name="loginform" id="loginform" action="" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="user_login" size="20" value="" name="log"
                                                        placeholder="Email or Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="user_pass" type="password" size="20" value="" name="pwd"
                                                        placeholder="*Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left m-login">
                                            <a href="camp-DashBoard.html" type="submit"
                                                className="contact_submit_btn m-btn1 btn btn-primary">Login</a>
                                            <input type="hidden" value="" name="redirect_to" />
                                            <input type="hidden" value="1" name="testcookie" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="form-sec" id="my_form">
                                    <form className="rd-mailform1 reg_frm" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_name" id="rg_name" name="name" required
                                                        placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_email" id="rg_email" name="email" required
                                                        placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_ph" required placeholder="Contact Number" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_pass" required placeholder="*Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_c_pass" required placeholder="*Confirm Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left m-login">
                                            <button className="contact_submit_btn m-btn1 btn btn-primary" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                    <span className="my-reg" style={{ color: "green" }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;