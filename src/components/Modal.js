
function Modal() {
    return (
        <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content login">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Login | Register
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs m-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active m-btn1"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  >Login</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link m-btn1"
                  data-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  >Register</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="form-sec" id="my_form">
                  <form
                    class="rd-mailform1"
                    name="loginform"
                    id="loginform"
                    action=""
                    method="post"
                  >
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="user_login"
                            size="20"
                            value=""
                            name="log"
                            placeholder="Email or Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="user_pass"
                            type="password"
                            size="20"
                            value=""
                            name="pwd"
                            placeholder="*Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="text-left m-login">
                      <a
                        href="camp-DashBoard.html"
                        type="submit"
                        class="contact_submit_btn m-btn1 btn btn-primary"
                        >Login</a
                      >
                      <input type="hidden" value="" name="redirect_to" />
                      <input type="hidden" value="1" name="testcookie" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="tab-pane" id="tabs-2" role="tabpanel">
                <div class="form-sec" id="my_form">
                  <form class="rd-mailform1 reg_frm" method="post">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control reg_name"
                            id="rg_name"
                            name="name"
                            required
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control reg_email"
                            id="rg_email"
                            name="email"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control reg_ph"
                            required
                            placeholder="Contact Number"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control reg_pass"
                            required
                            placeholder="*Password"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control reg_c_pass"
                            required
                            placeholder="*Confirm Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="text-left m-login">
                      <button
                        class="contact_submit_btn m-btn1 btn btn-primary"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <span class="my-reg" style="color: green"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Modal;