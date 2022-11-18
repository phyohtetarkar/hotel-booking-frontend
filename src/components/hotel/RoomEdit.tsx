import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { WifiIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { AutocompleteSelect, Input } from "../forms";

function FacilitiesRow() {
  return (
    <div className="hstack rounded p-2 border">
      <WifiIcon width={20} color={"green"} className="flex-shrink-0" />
      <span className="text-dark ms-2 small">Free wifi Free Wifi</span>
      <div role="button" className="link-danger ms-2">
        <XCircleIcon className="flex-shrink-0" width={20} />
      </div>
    </div>
  );
}

function RoomEdit({ create = {} }) {
  const list = [1, 2];

  return (
    <div className="pb-5">
      <div className="header-bar">
        <div className="container py-4">
          <div className="hstack">
            <div>
              <h3 className="fw-bold">{create ? "Create" : "Update"} Room</h3>
              <nav aria-label="breadcrumb col-12">
                <ol className="breadcrumb mb-1">
                  <li className="breadcrumb-item">
                    <Link href="/profile/hotels">Hotels</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/profile/hotels/1">Bagan View Hotel</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {create ? "Create" : "Update"} Room
                  </li>
                </ol>
              </nav>
            </div>
            <div className="ms-auto">
              <button className="btn btn-accent py-2 px-3 ms-2">
                {create ? "Create" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="vstack gap-3">
          <div className="card">
            <div className="card-header bg-white py-3 px-md-4">
              <h5 className="mb-0">General</h5>
            </div>
            <div className="card-body p-md-4">
              <div className="row g-4 mb-4">
                <div className="col-lg-6">
                  <Input
                    label="Title *"
                    id="titleInput"
                    name="title"
                    type="text"
                    placeholder="Enter room title"
                  />
                </div>

                <div className="col-lg-6">
                  <Input
                    label="Bed Type *"
                    id="bedInput"
                    name="bed"
                    type="text"
                    placeholder="Enter bed type"
                  />
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-6">
                  <Input
                    label="Adult *"
                    id="adultInput"
                    name="adult"
                    type="number"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    label="Child *"
                    id="childInput"
                    name="child"
                    type="number"
                  />
                </div>
              </div>

              <div className="row g-4 my-4">
                <div className="col-auto">
                  <div className="form-check form-switch">
                    <input
                      id="breakfastCheck"
                      className="form-check-input rounded-pill"
                      type="checkbox"
                    ></input>
                    <label
                      htmlFor="breakfastCheck"
                      className="form-check-label fw-medium"
                    >
                      Breakfast included
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-check form-switch">
                    <input
                      id="freeCancellationCheck"
                      className="form-check-input rounded-pill"
                      type="checkbox"
                    ></input>
                    <label
                      htmlFor="freeCancellationCheck"
                      className="form-check-label fw-medium"
                    >
                      Free cancellation
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-white py-3 px-md-4">
              <h5 className="mb-0">Pricing</h5>
            </div>
            <div className="card-body p-md-4">
              <div className="row g-4">
                <div className="col-lg-6">
                  <Input
                    label="Price per night *"
                    id="priceInput"
                    name="price"
                    type="text"
                    placeholder="Enter price per night"
                  />
                </div>
                <div className="col-lg-6">
                  <label className="form-label">Discount</label>
                  <AutocompleteSelect<string, string>
                    placeholder="Choose discount"
                    getOptionLabel={(v) => v}
                    getOptionValue={(v) => v}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <div className="card-header bg-white py-3 px-md-4">
              <h5 className="mb-0">Promotion</h5>
            </div>
            <div className="card-body p-md-4">
              <div className="row g-4">
                <div className="col-lg-6">
                  <label className="form-label">Discount</label>
                  <AutocompleteSelect<string, string>
                    placeholder="Choose discount"
                    getOptionLabel={(v) => v}
                    getOptionValue={(v) => v}
                  />
                </div>
              </div>
            </div>
          </div> */}

          <div className="card">
            <div className="card-header bg-white py-3 px-md-4">
              <h5 className="mb-0">Images</h5>
            </div>
            <div className="card-body p-md-4">
              <div className="d-flex flex-wrap gap-2">
                <button
                  className="btn btn-light-gray hstack justify-content-center"
                  style={{ width: 120, height: 120 }}
                >
                  <PlusIcon width={44} strokeWidth={2} className="text-muted" />
                </button>
              </div>
            </div>
            {/*   <div className="card-footer px-4 py-3">
              <span className="text-muted">
                Room image can upload up to <strong>5</strong> images with
                dimension constraint of at most <strong>600x600</strong> pixels.
              </span>
            </div> */}
          </div>

          <div className="card">
            <div className="card-header bg-white p-3">
              <div className="hstack">
                <h5 className="mb-0 flex-grow-1">Amenities/Facilities</h5>
                <div className="ms-auto">
                  <Link href="#" className="btn btn-primary">
                    Add new
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="hstack gap-2">
                {list.map((i) => (
                  <FacilitiesRow key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomEdit;
