import React, { useState } from 'react';
import { Col } from 'reactstrap';

//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JobListGlobalFilter = ({ setGlobalFilter }) => {

    const [selectDate, setSelectDate] = useState();
    const dateChange = (date) => {
        setSelectDate(date);
    };

    const handleSelectStatus = (ele) => {
        const selectedValue = ele.value;
        setGlobalFilter(selectedValue === 'all' ? '' : selectedValue);
    };

    return (
        <React.Fragment>
            <Col xxl={2} lg={6}>
                <select className="form-control select2 mb-3 mb-xxl-0" defaultValue="Status" onChange={(e) => handleSelectStatus(e.target)}>
                    <option disabled>Status</option>
                    <option value="all">All</option>
                    <option value="Active">Active</option>
                    <option value="New">New</option>
                    <option value="Close">Close</option>
                </select>
            </Col>
            <Col xxl={2} lg={4}>
                <select className="form-control select2 mb-3 mb-xxl-0" defaultValue="Select Type" onChange={(e) => handleSelectStatus(e.target)}>
                    <option disabled>Select Type</option>
                    <option value="all">All</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>
            </Col>
            <Col xxl={2} lg={4}>
                <div id="datepicker1">
                    <DatePicker
                        placeholderText='Select Date'
                        className="form-control mb-3 mb-xxl-0"
                        selected={selectDate}
                        onChange={dateChange}
                    />
                </div>
            </Col>
            {/* <Col xxl={2} lg={4}>
                <div className='mb-3 mb-xxl-0'>
                    <button type="button" className="btn btn-soft-secondary w-100">
                        <i className="fab fa-filter-outline align-middle"></i> Filter</button>
                </div>
            </Col> */}
        </React.Fragment>
    );
};
export default JobListGlobalFilter;
