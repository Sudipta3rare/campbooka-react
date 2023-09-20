
import './HostFaq.css';
function HostFaq() {
    return (
        <section class="faq">
        <h3 class="section-head">
            Frequently  Asked  Question
          </h3>
          <div class="container-fluid">
          <div class="faq-wrap">
           <div class="row">
             <div class="col-md-6">
              <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">     
                        <span class="title">Do you offer a free consultation? </span>
                        <span class="accicon"><i class="fa fa-angle-down rotate-icon up-arrow"></i></span>
                    </div>
                    <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">     
                        <span class="title">Do you offer a free consultation?</span>
                        <span class="accicon"><i class="fa fa-angle-down rotate-icon up-arrow"></i></span>
                    </div>
                    <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">
                        <span class="title">Do you offer a free consultation?</span>
                        <span class="accicon"><i class="fa fa-angle-down rotate-icon up-arrow"></i></span>
                    </div>
                    <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                        <div class="card-body">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
             </div>
            
             <div class="col-md-6">
              <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" data-toggle="collapse" data-target="#collapsefour" aria-expanded="true">     
                        <span class="title">Do you offer a free consultation? </span>
                        <span class="accicon"><i class="fa fa-angle-down rotate-icon up-arrow"></i></span>
                    </div>
                    <div id="collapsefour" class="collapse show" data-parent="#accordionExample">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapseTwo">     
                        <span class="title">Do you offer a free consultation?</span>
                        <span class="accicon"><i class="fa fa-angle-down rotate-icon up-arrow"></i></span>
                    </div>
                    <div id="collapsefive" class="collapse" data-parent="#accordionExample">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header collapsed" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false">
                        <span class="title">Do you offer a free consultation?</span>
                        <span class="accicon"><i class="fa fa-angle-down rotate-icon up-arrow"></i></span>
                    </div>
                    <div id="collapsesix" class="collapse" data-parent="#accordionExample">
                        <div class="card-body">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
             </div>
           </div>
          </div>
      </div>
      </section>
    )
}
export default HostFaq;