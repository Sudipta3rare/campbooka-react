import { useState } from 'react';
import './MainForm.css';
import { AutoComplete, DateRangePicker, Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { API_BASE_URL } from '../configuration/Constants';
import { useNavigate } from 'react-router-dom';

function MainForm() {
    const requestOptions = {
        method: "GET", headers: { "Content-Type": "application/json"}
    };    

    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
    const [data, setData] = useState([]);
    const [placeId, setPlaceId] = useState(0);

    const navigate = useNavigate();

    const handleSearchChange = async (value) => {
        if(value) {
            const response = await fetch(API_BASE_URL + "/api/searchLocation/" + value, requestOptions);
            const responseData = await response.json();
            setData(responseData);
        }
    }

    const onSelectHandler = (value) => setPlaceId( data.find(d => (d.locationName + ", " + d.countryName) === value).id );
    const incrAdultCount = () => setAdultCount(adultCount + 1);
    const decrAdultCount = () => setAdultCount(adultCount === 0 ? 0 : adultCount - 1);
    const incrChildrenCount = () => setChildrenCount(childrenCount + 1);
    const decrChildrenCount = () => setChildrenCount(childrenCount === 0 ? 0 : childrenCount - 1);

    const handleDateRangeChange = (value) => {
        if(value)
            setDateRange({  startDate: value[0],  endDate: value[1] });
        // setDateRange is async func. 
    }

    const onClickButtonHandler = () => {
        navigate("/campersearch", {
            state: {
                id: placeId,  
                adCount: adultCount, 
                chCount: childrenCount,
                dtRange: dateRange
            }
        });
    }

    return (
        <section className="main-form">
            <div className="container">
                <form className="rd-mailform1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="dropdown-content input-container">
                                    <AutoComplete 
                                        data={data.map(d => d.locationName + ", " + d.countryName)} 
                                        onChange={handleSearchChange} 
                                        placeholder='Search Destination' 
                                        onSelect={onSelectHandler}
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-container d-flex">
                                    <i className="fa fa-calendar"></i>
                                    <DateRangePicker onChange={handleDateRangeChange}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="booking-form__input guests-input">
                                <Dropdown title={adultCount + " Adults " + childrenCount + " Children"}>
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
                        <a id="submit_btn" onClick={onClickButtonHandler} className="contact_submit_btn" type="submit">Submit</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MainForm;