import { useState } from 'react';
import './MainForm.css';
import { AutoComplete, DateRangePicker, Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function MainForm() {
    const data = ['England', 'Europe', 'Africa', 'Asia', 'Albania', 'Australia', 'Alabama', 'Austria'];

    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);

    const handleSelect = (value) => {
        // this function is called when user clicks on the suggestion list for destination.
    }

    const incrAdultCount = (event) => {
        setAdultCount(event.target.value + 1);
    };

    const decrAdultCount = (event) => {
        setAdultCount(event.target.value == 0 ? 0 : event.target.value - 1);
    };

    const incrChildrenCount = (event) => {
        setChildrenCount(event.target.value + 1);
    };

    const decrChildrenCount = (event) => {
        setChildrenCount(event.target.value == 0 ? 0 : event.target.value - 1);
    }

    return (
        <section className="main-form">
            <div className="container">
                <form className="rd-mailform1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="dropdown-content input-container">
                                    <AutoComplete data={data} onSelect={handleSelect} />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-container d-flex">
                                    <i className="fa fa-calendar"></i>
                                    <DateRangePicker />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="booking-form__input guests-input">
                                <Dropdown title={"Add Guest"}>
                                    <Dropdown.Item>
                                        <span className="guests-input__ctrl minus" id="adults-subs-btn" onClick={decrAdultCount}>-</span>
                                        <span className="guests-input__value"><span id="guests-count-adults">{adultCount}</span>Adults</span>
                                        <span className="guests-input__ctrl plus" id="adults-add-btn" onClick={incrAdultCount}>+</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <span className="guests-input__ctrl minus"  id="children-subs-btn" onClick={decrChildrenCount}>-</span>
                                        <span className="guests-input__value"><span id="guests-count-children">{childrenCount}</span>Children</span>
                                        <span className="guests-input__ctrl plus" id="children-add-btn" onClick={incrChildrenCount}>+</span>
                                    </Dropdown.Item>
                                </Dropdown>
                                {/* <div className="guests-input__options" id="guests-input-options"> */}
                                    
                                {/* </div> */}
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="text-center">
                        <a id="submit_btn" href="campersearch.html" className="contact_submit_btn" type="submit">Submit</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MainForm;