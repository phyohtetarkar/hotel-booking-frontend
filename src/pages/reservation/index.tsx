import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AutocompleteSelect, Input, Textarea } from "../../components/forms";

function Reservation() {
  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="hstack gap-3">
                <div
                  className="position-relative bg-light rounded flex-shrink-0"
                  style={{ height: 120, width: 120 }}
                >
                  <Image
                    className="p-2"
                    src="/images/bagan.jpeg"
                    alt=""
                    fill
                    priority
                  />
                </div>

                <div className="vstack">
                  <h4>Bagan View Hotel</h4>
                  <span className="small flex-grow-1">
                    9 jasmin Road, New Bagan
                  </span>
                  <div className="hstack gap-2 align-items-start">
                    <CheckCircleIcon
                      width={25}
                      className="flex-shrink-0"
                      style={{ color: "green" }}
                    />
                    <small className="mt-1">Free WiFi</small>
                    <CheckCircleIcon
                      width={25}
                      className="flex-shrink-0"
                      style={{ color: "green" }}
                    />
                    <small className="mt-1">Restaurant</small>
                    <CheckCircleIcon
                      width={25}
                      className="flex-shrink-0"
                      style={{ color: "green" }}
                    />
                    <small className="mt-1">Airport shuttle</small>
                    <CheckCircleIcon
                      width={25}
                      className="flex-shrink-0"
                      style={{ color: "green" }}
                    />
                    <small className="mt-1">Parking</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="vstack gap-2">
                <h5>Good to know</h5>
                <div className="hstack gap-2 align-items-start mt-3">
                  <CheckCircleIcon width={25} style={{ color: "green" }} />
                  <h5 className=" fw-normal">
                    Free cancellation until 11:59 PM on December 5, 2022.
                  </h5>
                </div>
                <div className="hstack gap-2 align-items-start">
                  <CheckCircleIcon width={25} style={{ color: "green" }} />
                  <h5 className=" fw-normal">
                    No payment needed today. You will pay when you stay.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-white mt-2">
              <h5>Guest Info</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-lg-6">
                  <Input
                    label="Full name *"
                    id="nameInput"
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    label="Phone *"
                    id="phoneInput"
                    name="phone"
                    type="number"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    label="NRC No. *"
                    id="nrcInput"
                    name="nrc"
                    type="text"
                    placeholder="Enter NRC No."
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    label="Email *"
                    id="emailInput"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="col-lg-6">
                  <label className="form-label">Floor preference</label>
                  <AutocompleteSelect<string, string>
                    placeholder="Choose floor prefercence"
                    getOptionLabel={(v) => v}
                    getOptionValue={(v) => v}
                  />
                </div>
                <div className="col-lg-6">
                  <label className="form-label">Estimated check-in time</label>
                  <AutocompleteSelect<string, string>
                    placeholder="Choose check-in time"
                    getOptionLabel={(v) => v}
                    getOptionValue={(v) => v}
                  />
                </div>
                <div className="col-lg-12">
                  <Textarea
                    label="Special request"
                    id="requestInput"
                    name="request"
                    type="text"
                    placeholder="Please write your request"
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <label className="mb-2 fw-medium">
                    Are you traveling for work?
                  </label>
                  <div className="hstack gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="yesRadio"
                        id="yesRadio"
                        value="yes"
                      />
                      <label className="form-check-label" htmlFor="yesRadio">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="noRadio"
                        id="noRadio"
                        value="no"
                        checked
                      />
                      <label className="form-check-label" htmlFor="noRadio">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-3">
            <div className="card-header bg-white mt-2">
              <h5>Your booking detail</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-lg-4 flex-grow-1">
                  <h5 className="fw-normal">Check-in</h5>
                  <h5>Tue, Dec 13, 2022</h5>
                  <h5 className="text-muted">2:00 PM</h5>
                </div>
                <div className="col-lg-4  flex-grow-1">
                  <h5 className="fw-normal">Check-out</h5>
                  <h5>Fri, Dec 16, 2022</h5>
                  <h5 className="text-muted">12:00 PM</h5>
                </div>
              </div>
              <hr className="bg-dark-gray my-4" />
              <div className="row my-lg-2 my-3">
                <div className="col-lg-4 flex-grow-1 ">
                  <h5>You selected:</h5>
                </div>
                <div className="col-lg-4 flex-grow-1">
                  <h5>Standard room</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 flex-grow-1 ">
                  <h5>Total length of stay:</h5>
                </div>
                <div className="col-lg-4 flex-grow-1">
                  <h5>2 nights</h5>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-5">
                <Link href="/hotels/id" className="btn btn-primary">
                  Change room
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-white mt-2">
              <h5>Price summary</h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-lg-6">
                  <h5>Standard room</h5>
                </div>
                <div className="col-lg-6">
                  <h5>MMK 130,000</h5>
                </div>
                <div className="col-lg-6">
                  <h5>3 % TAX</h5>
                </div>
                <div className="col-lg-6">
                  <h5>MMK 3,900</h5>
                </div>
                <div className="col-lg-6">
                  <h5>10 % Service charge</h5>
                </div>
                <div className="col-lg-6">
                  <h5>MMK 13,000</h5>
                </div>
              </div>
              <hr className="bg-dark-gray my-4" />
              <div className="row g-2">
                <div className="col-lg-6">
                  <h5>Total price</h5>
                </div>
                <div className="col-lg-6">
                  <h5>MMK 146,900</h5>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="hstack">
                <h6 className="ms-auto mt-1">Amount Payable in USD 48.97</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
