import React from "react";

export default function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.data.packageName}
          </h5>
          <h6 className="card-price text-center">
            {props.data.currency}
            {props.data.price}
            <span className="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.data.features.map((plan) => {
              return (
                <li className={plan.isEnabled ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={`fas ${
                        plan.isEnabled ? "fa-check" : "fa-times"
                      }`}
                    ></i>
                  </span>
                  {plan.isBold ? (
                    <strong>{plan.name}</strong>
                  ) : (
                    <span>{plan.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <button
              className="btn btn-primary text-uppercase"
              onClick={() => {
                props.handleSubscribe(props.data.packageName);
              }}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
