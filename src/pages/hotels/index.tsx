import { useState } from "react";
import { Input } from "../../components/forms";
import HotelListItem from "../../components/hotel/HotelListItem";

function Filter() {
  const [maxPrice, setMaxPrice] = useState(300000);

  return (
    <div className="accordion border sticky-lg-top" style={{ top: 94 }}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button fw-bold"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            style={{ backgroundColor: "transparent" }}
          >
            Filter
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show border-top"
        >
          <div className="accordion-body p-0">
            <div className="vstack gap-2">
              <div className="p-3 border-bottom">
                <div className="">
                  <Input placeholder="Destination / hotel name" />
                </div>
              </div>
              {/* <div className="scrollbar-custom overflow-auto p-3 border-bottom">
                <div className="small text-muted mb-3">TOPICS</div>
                <input
                  type="search"
                  placeholder="Filter topic"
                  className="form-control mb-3"
                />
                <div
                  className="vstack gap-2"
                  style={{ maxHeight: 250, minHeight: 100 }}
                >
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="topic"
                      className="form-check-input"
                    />
                    <label className="form-check-label">AWS</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="topic"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Kubernetes</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="topic"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Docker</label>
                  </div>

                  <a href="#" className="invisible p-1"></a>
                </div>
              </div> */}

              <div className="p-3 border-bottom">
                <div className="small text-muted mb-3">PRICE RANGE</div>
                <div className="vstack">
                  <input
                    type="range"
                    className="form-range"
                    id="priceRange"
                    step={1000}
                    min={10000}
                    max={300000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  ></input>
                  <div className="hstack">
                    <div>10000Ks</div>
                    <div className="flex-grow-1"></div>
                    <div>{maxPrice}Ks</div>
                  </div>
                </div>
              </div>

              <div className="p-3 border-bottom">
                <div className="small text-muted mb-3">HOTEL TYPE</div>
                <div className="vstack gap-2">
                  <div className="form-check">
                    <input
                      id="type1"
                      type="checkbox"
                      name="level"
                      className="form-check-input"
                    />
                    <label htmlFor="type1" className="form-check-label">
                      Hotel
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="type2"
                      type="checkbox"
                      name="level"
                      className="form-check-input"
                    />
                    <label htmlFor="type2" className="form-check-label">
                      Motel
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="type3"
                      type="checkbox"
                      name="level"
                      className="form-check-input"
                    />
                    <label htmlFor="type3" className="form-check-label">
                      Guest House
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <div className="small text-muted mb-3">FACILITIES</div>
                <div className="vstack gap-2">
                  <div className="form-check">
                    <input
                      id="facility1"
                      type="checkbox"
                      name="level"
                      className="form-check-input"
                    />
                    <label htmlFor="facility1" className="form-check-label">
                      Breakfast
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="facility2"
                      type="checkbox"
                      name="level"
                      className="form-check-input"
                    />
                    <label htmlFor="facility2" className="form-check-label">
                      Swimming pool
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="facility3"
                      type="checkbox"
                      name="level"
                      className="form-check-input"
                    />
                    <label htmlFor="facility3" className="form-check-label">
                      Internet
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-3 pt-0">
                <button className="btn btn-primary w-100">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hotels() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-3 mb-3">
          <Filter />
        </div>
        <div className="col-lg-9">
          <div className="row row-cols-1 g-3">
            <div className="col">
              <HotelListItem />
            </div>
            <div className="col">
              <HotelListItem />
            </div>
            <div className="col">
              <HotelListItem />
            </div>
            <div className="col">
              <HotelListItem />
            </div>
            <div className="col">
              <HotelListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
