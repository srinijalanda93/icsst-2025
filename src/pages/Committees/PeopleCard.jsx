import React from "react";

export default function PeopleCard({
  name = "",
  desg = "",
  college = "",
  place = "",
  chair = false,
}) {
  return (
    <div
      className="col-lg-3 col-md-6 col-12 m-0 p-2 "
      style={{ fontFamily: "Nunito", fontSize: "14px" }}
    >
      <div class="card nk-shadow h-100">
        <div class="card-body">
          {chair ? (
            <div>
              <h5 style={{ fontWeight: "bolder" }} class="card-title">
                {name}
              </h5>
              <p style={{ fontWeight: "bolder" }}>{chair}</p>
            </div>
          ) : (
              <h5 class="fs-5 card-title">{name}</h5>
            )}
          {desg && <p className="card-text m-0 p-0"> {desg}</p>}
          {college && <p class="card-text m-0 p-0">{college}</p>}
          {place && <p class="card-text m-0 p-0">{place}</p>}
        </div>
      </div>
    </div>
  );
}
