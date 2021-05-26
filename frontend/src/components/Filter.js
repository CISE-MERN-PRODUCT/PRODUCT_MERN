import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
// import YearPicker from 'react-year-picker';
import YearPicker from '../yearPicker';

const Filter = ({
  articles,
  handleSelectFilter,
  handleSelectPractice,
  practices,
  practiceFilter,
  claimFilter,
  handleYearTo,
  handleYearFrom,
  setYearFrom,
  setYearTo,
  yearTo,
  yearFrom,
}) => {
  return (
    <div className="my-3 align-self-start d-flex align-items-center ">
      <div className="mr-3 d-flex align-items-center">
        <Form.Label className="mx-2">From: </Form.Label>
        <YearPicker
          max={yearTo}
          min={1950}
          onChange={(date) => {
            if (date < yearTo || yearTo === 0) setYearFrom(date);
          }}
        ></YearPicker>
        <Form.Label className="mx-2">To: </Form.Label>
        <YearPicker
          max={new Date().getFullYear()}
          min={2010}
          // selected={new Date().getFullYear()}
          onChange={(date) => {
            if (date > yearFrom) setYearTo(date);
          }}
        ></YearPicker>
      </div>
      {articles && (
        <>
          <span className="mr-2">SE Practice: </span>
          <Dropdown onSelect={handleSelectPractice}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" style={{ minWidth: '80px' }}>
              {practiceFilter}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All</Dropdown.Item>

              {practices.map((practice, index) => (
                <Dropdown.Item eventKey={practice.name} key={index}>
                  {practice.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}

      {practiceFilter !== 'All' && (
        <>
          <span className="ml-4 mr-2">Claim: </span>
          <Dropdown onSelect={handleSelectFilter}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" style={{ minWidth: '80px' }}>
              {claimFilter}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All</Dropdown.Item>

              {practices
                .find((practice) => practice.name === practiceFilter)
                .claims.map((claim, index) => (
                  <Dropdown.Item eventKey={claim} key={index}>
                    {claim}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </div>
  );
};

export default Filter;
