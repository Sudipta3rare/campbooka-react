import './MainForm.css';

function MainForm() {
    return (
        <section className="main-form">
            <div className="container">
                <form className="rd-mailform1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="dropdown-content input-container">
                                    <input id="destinationSearchBox" type="text" className="form-control" placeholder="Search Destination" onkeyup="putDataInDropdown()" />
                                    <div id="searchDropdown" className="special"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-container d-flex">
                                    <i className="fa fa-calendar"></i
                                    ><input id="calender" type="text" className="form-control" name="daterange" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="booking-form__input guests-input">
                                <button
                                    className="form-control"
                                    name="guests-btn"
                                    id="guests-input-btn"
                                >
                                    Add Guest
                                </button>
                                <div className="guests-input__options" id="guests-input-options">
                                    <div>
                                        <span className="guests-input__ctrl minus" id="adults-subs-btn"
                                        >-</span
                                        >
                                        <span className="guests-input__value"
                                        ><span id="guests-count-adults">1</span>Adults</span
                                        >
                                        <span className="guests-input__ctrl plus" id="adults-add-btn"
                                        >+</span
                                        >
                                    </div>
                                    <div>
                                        <span
                                            className="guests-input__ctrl minus"
                                            id="children-subs-btn"
                                        >-</span
                                        >
                                        <span className="guests-input__value"
                                        ><span id="guests-count-children">0</span>Children</span
                                        >
                                        <span className="guests-input__ctrl plus" id="children-add-btn"
                                        >+</span
                                        >
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="text-center">
                        <a id="submit_btn" href="campersearch" className="contact_submit_btn" type="submit">Submit</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MainForm;