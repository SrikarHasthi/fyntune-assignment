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
  let data = useSelector((state) => state.shopData);
  return (
    <>
      <div className="addshopmain-container">
        <div className="container-fluid">
          <div className="addshop-container col-xl-6 col-lg-6 col-md-6 col-sm-12 mx-auto">
            <form>
              <div className="form-group row">
                <label htmlFor="inputshopname" className="col-sm-3 col-form-label">
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
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputcategory" className="col-sm-3 col-form-label">
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
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputopeningdate" className="col-sm-3 col-form-label">
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
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputenddate" className="col-sm-3 col-form-label">
                  Ending Date :
                </label>
                <div className="col-sm-4">
                  <input
                    onChange={(e) => {
                      dispatch(setshopdata({ closing_date: e.target.value }));
                    }}
                    type="date"
                    className="form-control"
                    id="inputenddate"
                  />
                </div>
              </div>
            </form>
            <button
              onClick={() => {
                dispatch(shopdataarray(data));
                alert("Shop Added");
                history.push("/");
              }}
              type="submit"
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
