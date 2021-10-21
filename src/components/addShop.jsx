import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../css/addshop.css";
import { setshopdata, shopdataarray } from "../redux/actions";
let AddShop = () => {
  let areaArray = [
    "None",
    "Thane",
    "Pune",
    "Mumbai Suburban",
    "Nashik",
    "Nagpur",
    "Ahmednagar",
    "Solapur",
  ];
  let categoryArray = [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
  ];
  let dispatch = useDispatch();
  let history=useHistory();
  let minDate="1980-01-01";
  let data = useSelector((state) => state.shopData);
  let [formErrors,setFormErrors]=useState({});
  let handleformvalidation=()=>{
    const {shop_name,area,category,opening_date,closing_date}=data;
    let formErrors={}
    let isformValid=true;
    if(!shop_name){
      isformValid=false;
      formErrors["shopnameerr"]="Shop Name is required";
    }
    if(shop_name){
      let regEx = /^[A-Za-z]+$/;
      if(!(shop_name.match(regEx))){
        isformValid=false;
      formErrors["shopnameerr"]="Alphabets Only";
      }
    }
    if (!area) {
      isformValid = false;
      formErrors["areaerr"] = "Select Area";
    }
    if (!category) {
      isformValid = false;
      formErrors["categoryerr"] = "Select Category";
    }
    if (!opening_date) {
      isformValid = false;
      formErrors["openingdateerr"] = "Select Date";
    }
    if (!closing_date) {
      isformValid = false;
      formErrors["closingdateerr"] = "Select Date";
    }

    setFormErrors(formErrors);
    return isformValid;
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    if(handleformvalidation()){
       dispatch(shopdataarray(data));
       alert("Shop Added");
       history.push("/");
    }
    else{

    }
  }
  return (
    <>
      <div className="addshopmain-container">
        <div className="container-fluid">
          <div className="addshop-container col-xl-6 col-lg-6 col-md-6 col-sm-12 mx-auto">
            <form>
              <div className="form-group row">
                <label
                  htmlFor="inputshopname"
                  className="col-sm-3 col-form-label"
                >
                  Shop Name :
                </label>
                <div className="col-sm-4">
                  <input
                    onChange={(e) => {
                      dispatch(
                        setshopdata({ shop_name: e.currentTarget.value })
                      );
                    }}
                    type="text"
                    className="form-control"
                    id="inputshopname"
                    placeholder="Shop Name"
                  />
                  {formErrors.shopnameerr ? (
                    <p>{formErrors.shopnameerr}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputarea" className="col-sm-3 col-form-label">
                  Area :
                </label>
                <div className="col-sm-4">
                  <select
                    onChange={(e) => {
                      dispatch(setshopdata({ area: e.currentTarget.value }));
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select ...</option>
                    {areaArray.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                  {formErrors.areaerr ? <p>{formErrors.areaerr}</p> : ""}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputcategory"
                  className="col-sm-3 col-form-label"
                >
                  Category :
                </label>
                <div className="col-sm-4">
                  <select
                    onChange={(e) => {
                      dispatch(
                        setshopdata({ category: e.currentTarget.value })
                      );
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select ...</option>
                    {categoryArray.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                  {formErrors.categoryerr ? (
                    <p>{formErrors.categoryerr}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputopeningdate"
                  className="col-sm-3 col-form-label"
                >
                  Opening Date :
                </label>
                <div className="col-sm-4">
                  <input
                    onChange={(e) => {
                      dispatch(setshopdata({ opening_date: e.target.value }));
                    }}
                    type="date"
                    className="form-control"
                    id="inputopeningdate"
                  />
                  {formErrors.openingdateerr ? (
                    <p>{formErrors.openingdateerr}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputenddate"
                  className="col-sm-3 col-form-label"
                >
                  Ending Date :
                </label>
                <div className="col-sm-4">
                  <input
                    onChange={(e) => {
                      dispatch(setshopdata({ closing_date: e.target.value }));
                    }}
                    type="date"
                    min={data.opening_date ? data.opening_date : minDate}
                    className="form-control"
                    id="inputenddate"
                  />
                  {formErrors.closingdateerr ? (
                    <p>{formErrors.closingdateerr}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
              value="Submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddShop;
