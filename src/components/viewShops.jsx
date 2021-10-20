import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "../css/viewShops.css";
import { areafilter, categoryfilter, statusfilter } from "../redux/actions";
import ShopList from "./shopList";
let ViewShops = () => {
  let areaArray = [
    "NONE",
    "Thane",
    "Pune",
    "Mumbai Suburban",
    "Nashik",
    "Nagpur",
    "Ahmednagar",
    "Solapur",
  ];
  let categoryArray = [
    "NONE",
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
  ];
  let statusArray = ["NONE", "Open", "Close"];
  let dataArray = useSelector((state) => state.shopDataArray);
  let dispatch = useDispatch();
  let areaSelected = useSelector((state) => state.areaFilter);
  let categorySelected = useSelector((state) => state.categoryFilter);
  let statusSelected = useSelector((state) => state.statusFilter);
  let todayDate = new Date().toISOString().slice(0, 10);
  let filteredArray = dataArray.filter((e) => {
    if (areaSelected === "NONE" || areaSelected === "Select ...") return true;
    else if (e.area === areaSelected) return true;
    else 
    return false
  });
  dataArray = filteredArray;
  filteredArray = dataArray.filter((e) => {
    if (categorySelected === "NONE" || categorySelected === "Select ...")
      return true;
    else if (e.category === categorySelected) return true;
    else return false;
  });
  dataArray = filteredArray;
  filteredArray = dataArray.filter((e) => {
    if (statusSelected === "NONE" || statusSelected === "Select ...")
      return true;
    else if (statusSelected === "Open") {
      if (e.opening_date <= todayDate && e.closing_date >= todayDate)
        return true;
      else return false;
    } else if (statusSelected === "Close") {
      if (e.closing_date < todayDate || e.opening_date > todayDate) return true;
      else return false;
    } else return false;
  });
  dataArray = filteredArray;

  return (
    <>
      <div className="viewshopsmain-container">
        <div className="container-fluid">
          <div className="viewshops-container">
            <div className="filter-container row">
              <div className="col-xs-12 col-sm-12 col-md-12 filter">
                <div className="m-2">
                  <label for="inputarea" className=" col-form-label">
                    Area
                  </label>{" "}
                  <select
                    onChange={(e) => {
                      dispatch(areafilter(e.currentTarget.value));
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select ...</option>
                    {areaArray.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                </div>
                <div className="m-2">
                  <label for="inputcategory" className=" col-form-label">
                    Category
                  </label>
                  <select
                    onChange={(e) => {
                      dispatch(categoryfilter(e.currentTarget.value));
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select ...</option>
                    {categoryArray.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                </div>
                <div className="m-2">
                  <label for="inputstatus" className="col-form-label">
                    Status
                  </label>
                  <select
                    onChange={(e) => {
                      dispatch(statusfilter(e.currentTarget.value));
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select ...</option>
                    {statusArray.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="shoplist-container">
              <div className="row">
                <div className="col-11 mx-auto">
                  {dataArray.map((e, index) => {
                    return <ShopList key={index} i={index} data={e} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewShops;
