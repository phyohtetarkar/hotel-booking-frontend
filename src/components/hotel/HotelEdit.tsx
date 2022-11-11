import { PhotoIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Input, Select, Textarea } from "../forms";

function HotelEdit({ create = {} }) {
  return (
    <div className="pb-5">
      <div className="bg-primary">
        <div className="container py-4">
          <div className="hstack">
            <div>
              <div className="px-2">
                {create ? (
                  <h3 className="text-light text-lg-start">Create Hotel</h3>
                ) : (
                  <h3 className="text-light text-lg-start">Edit Hotel</h3>
                )}
              </div>
              <div className="row px-2">
                <nav aria-label="breadcrumb col-12">
                  <ol className="breadcrumb mb-1">
                    <li className="breadcrumb-item">
                      <Link href="/profile/hotels" className="text-light">
                        Hotels
                      </Link>
                    </li>
                    {create ? (
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Create Hotel
                      </li>
                    ) : (
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Edit Hotel
                      </li>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
            <div className="ms-auto">
              {create ? (
                <button className="btn btn-accent py-2 px-3 ms-2">
                  Create
                </button>
              ) : (
                <button className="btn btn-accent py-2 px-3 ms-2">
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-3">
          <div className="col-md-8 col-lg-7">
            <div className="card">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Hotel information</h5>
              </div>
              <div className="card-body">
                <div className="vstack">
                  <div className="row g-3">
                    <div className="col-lg-12">
                      <Input
                        label="Name *"
                        id="shopNameInput"
                        name="name"
                        type="text"
                        placeholder="Enter hotel name"
                      />
                    </div>
                    <div className="col-lg-12">
                      <Input
                        label="Slug *"
                        id="slugInput"
                        name="slug"
                        type="text"
                        placeholder="https://hotelmyanmar.com/page/slug"
                      />
                    </div>
                    <div className="col-lg-12">
                      <Input
                        label="Address"
                        id="addressInput"
                        name="address"
                        type="text"
                        placeholder="Enter hote address"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Input
                        label="Latitude"
                        id="latitudeInput"
                        name="latitude"
                        type="text"
                        placeholder="Enter location latitude"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Input
                        label="Longitude"
                        id="longitudeInput"
                        name="longitude"
                        type="text"
                        placeholder="Enter location longitude"
                      />
                    </div>
                    <div className="col-lg-12">
                      <Textarea
                        label="Description"
                        id="descriptionInput"
                        name="description"
                        type="text"
                        placeholder="Enter brief about hotel..."
                      />
                    </div>
                    <div className="col-lg-12">
                      <Textarea
                        label="Area Info"
                        id="areaInfoInput"
                        name="areaInfo"
                        type="text"
                        placeholder="Enter hotel area info..."
                      />
                    </div>
                    <div className="col-lg-3 col-12 mb-2">
                      <label htmlFor="avatarInput" className="form-label">
                        Images
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-light-gray hstack justify-content-center"
                          style={{ width: 120, height: 120 }}
                        >
                          <PlusIcon width={44} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-5">
            <div className="card mb-4">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Hotel type</h5>
              </div>
              <div className="card-body">
                <div className="vstack">
                  <div className="row g-3">
                    <div className="col-lg-12">
                      <label className="form-label">Select hotel type</label>
                      <Select>
                        <option>Hotel</option>
                        <option>Motel</option>
                        <option>Resort</option>
                        <option>Inn</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Amenities/Facilities</h5>
              </div>
              <div className="card-body">
                <div className="vstack">
                  <div className="row g-3">
                    <div className="col-lg-12">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelEdit;
