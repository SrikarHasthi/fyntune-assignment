import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { shopdataarraydelete } from "../redux/actions";
import "../css/shopList.css"
let ShopList = (props) => {
  let dataArray = useSelector((state) => state.shopDataArray);
  let dispatch=useDispatch();
  let todayDate = new Date().toISOString().slice(0, 10);
 
  return (
    <>
      <div className="shop-list">
        <div className="row justify-content-center">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-sx-6 content">
            {props.data.shop_name}
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-sx-6 content">
            {props.data.area}
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-sx-6 content">
            {props.data.category}
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-sx-6 content">
            {props.data.opening_date <= todayDate &&
            props.data.closing_date >= todayDate
              ? "Open"
              : "Close"}
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-sx-6 content">
            <span
              onClick={(e) => {
                dataArray.splice(props.i, 1);
                dispatch(shopdataarraydelete(dataArray));
              }}
              className="material-icons-outlined"
              style={{ cursor: "pointer" }}
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopList;
