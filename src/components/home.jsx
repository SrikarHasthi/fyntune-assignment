import { useHistory } from "react-router";
import "../css/home.css"
let Home = () => {
    let history=useHistory();
  return (
    <div>
      <div className="main-container">
        <div className="container-fluid">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mx-auto">
            <div className="home-container">
              <h1>WELCOME!</h1>
              <h3>SHOP-LIST</h3>
              <button
                onClick={() => {
                  history.push("/addShop");
                }}
                className="btn btn-primary"
              >
                ADD NEW SHOP
              </button>
              <button
                onClick={() => {
                  history.push("/viewShops");
                }}
                className="btn btn-primary"
              >
                VIEW ALL SHOPS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
