import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Filter = ({
  articles,
  handleSelectFilter,
  handleSelectPractice,
  practices,
  practiceFilter,
  claimFilter,
}) => {
  return (
    <div className="my-3 mr-auto d-flex align-items-center justify-content-start">
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
