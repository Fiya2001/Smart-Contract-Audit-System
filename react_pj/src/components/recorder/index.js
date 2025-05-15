import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import {
  Icon
} from './RecordElements';


function Record() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");

  const sortOptions = ["contractaddress", "threatscore", "securityscore", "blockscan", "actions"];

  const history = useHistory();

  console.log('history',history);
  const handleSignInClick = () => {
    history.goBack(); 
  };

  useEffect(() => {
    loadusersData(0, 4, 0);
  }, []);

  const loadusersData = async (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        return await axios
          .get(
            `http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:5000/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
      case "filter":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:5000/users?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
      default:
        return await axios
          .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  console.log("data", data);

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    setSortValue("");
    loadusersData(0, 4, 0);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    loadusersData(0, 4, 0, "search");
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    loadusersData(0, 4, 0, "sort", value);
    setSortValue(value);
  };

  const handleFilter = async (value) => {
    loadusersData(0, 4, 0, "filter", value);

  };

  const renderPagination = () => {
    if (data.length < 4 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={() => loadusersData(4, 8, 1, operation)}>
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadusersData(
                  (currentPage - 1) * 4,
                  currentPage * 4,
                  -1,
                  operation,
                  sortFilterValue
                )
              }
            >
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>

          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadusersData(
                  (currentPage + 1) * 4,
                  (currentPage + 2) * 4,
                  1,
                  operation,
                  sortFilterValue
                )
              }
            >
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadusersData(
                  (currentPage - 1) * 4,
                  currentPage * 4,
                  -1,
                  operation
                )
              }
            >
              Prev
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      );
    }
  };


  return (
    <MDBContainer>

      <Icon to="/"> SmartSystem</Icon>
      <div
          style={{
            margin: "auto",
            padding: "20px",
            maxWidth: "250px",
            alignContent: "center",
          }}
        ><Button onClick={handleSignInClick} >Home</Button></div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* <MDBBtn type="submit" color="dark">
          Search
        </MDBBtn>
        <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
          Reset
        </MDBBtn> */}
      </form>
      <div style={{ marginTop: "100px" }}>
        <h2 className="text-center">
          Record For SmartSystem
        </h2>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Contract Address</th>
                  <th scope="col">Security Score</th>
                  <th scope="col">Blockscan</th>
                  <th scope="col">Threat Score</th>
                  <th scope="col">Actions</th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      No Data Found
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.contractaddress}</td>
                      <td>{item.securityscore}</td>
                      <td>{item.blockscan}</td>
                      <td>{item.threatscore}</td>
                      <td>{item.actions}</td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "250px",
            alignContent: "center",
          }}
        >
          {renderPagination()}
        </div>
      </div>
      {data.length > 0 && (
        <MDBRow>
          <MDBCol size="8">
            <h5>Sort By:</h5>
            <select
              style={{ width: "50%", borderRadius: "2px", height: "35px" }}
              onChange={handleSort}
              value={sortValue}
            >
              <option>Please Select Value</option>
              {sortOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </MDBCol>
          <MDBCol size="4">
            <h5>Filter By Actions:</h5>
            <MDBBtnGroup>
              <MDBBtn color="success" onClick={() => handleFilter("Active")}>
                Active
              </MDBBtn>
              <MDBBtn
                color="danger"
                style={{ marginLeft: "2px" }}
                onClick={() => handleFilter("Inactive")}
              >
                Inactive
              </MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

export default Record;
