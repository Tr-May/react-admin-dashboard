import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row py-3 bg-dark bg-opacity-25">
        {/* <h2 className="text-muted">STATS</h2> */}
        <div className="d-flex flex-column flex-lg-row">
          <div className="col">
            <div className="card mt-3 d-flex flex-row justify-content-around py-2 align-items-center">
              <i className="bi bi-currency-dollar fs-4 text-success"></i>
              <div>
                <span>Sales</span>
                <h2>432</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 d-flex flex-row justify-content-around py-2 align-items-center">
              <i className="bi bi-truck fs-4 text-warning"></i>
              <div>
                <span>Delivery</span>
                <h2>270</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 d-flex flex-row justify-content-around py-2 align-items-center">
              <i className="bi bi-graph-up-arrow fs-4 text-danger"></i>
              <div>
                <span>Increase</span>
                <h2>20%</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mt-3 d-flex flex-row justify-content-around py-2 align-items-center">
              <i className="bi bi-currency-dollar fs-4 text-info"></i>
              <div>
                <span>Sales</span>
                <h2>432</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-3 bg-dark bg-opacity-25">
        {/* <h2 className="text-muted">Charts</h2> */}
        <div className="col-md-8 p3 mt-2">
          <LineChart />
        </div>
        <div className="col-md-4 p3 mt-2">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
