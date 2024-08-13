import { CheckCircleIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ClockIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { AutocompleteSelect, Input, Textarea } from "../../../components/forms";

function Reservation() {
  return (
    <div>
      <div className="header-bar">
        <div className="container py-4">
          <div>
            <h3 className="fw-bold">Reservation</h3>
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <Link href="/hotels">Hotels</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/hotels/1">Bagan View Hotel</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Reservation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="card mb-3">
              <div className="card-header bg-white mt-2">
                <h5>Hotel Information</h5>
              </div>
              <div className="card-body">
                <div className="hstack gap-3 flex-wrap align-items-start">
                  <div
                    className="position-relative bg-light rounded flex-shrink-0"
                    style={{ height: 90, width: 120 }}
                  >
                    <Image
                      src="/images/bagan.jpeg"
                      alt=""
                      fill
                      priority
                      sizes="50vh"
                    />
                  </div>

                  <div>
                    <h4>Bagan View Hotel</h4>
                    <div className="hstack gap-1 text-muted align-items-start">
                      <MapPinIcon width={20} className="flex-shrink-0" />
                      <span className="small flex-grow-1">
                        9 jasmin Road, New Bagan
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row g-3 py-3">
                  <div className="col-lg-4">
                    <div className="card rounded border-0 bg-light">
                      <div className="card-body">
                        <span className="fw-normal">Check-in</span>
                        <h6 className="mt-2">Tue, Dec 13, 2022</h6>
                        <div className="hstack gap-2 align-items-start text-muted">
                          <ClockIcon width={20} className="flex-shrink-0" />
                          <h6>2:00 PM</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card rounded border-0 bg-light">
                      <div className="card-body">
                        <span className="fw-normal">Check-out</span>
                        <h6 className="mt-2">Fri, Dec 16, 2022</h6>
                        <div className="hstack gap-2 align-items-start text-muted">
                          <ClockIcon width={20} className="flex-shrink-0" />
                          <h6>12:00 PM</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card rounded border-0 bg-light">
                      <div className="card-body text-nowrap">
                        <span className="fw-normal">Rooms & Guests</span>
                        <h6 className="mt-2">2 Adults - Standard Room</h6>
                        <div className="hstack gap-2 align-items-start text-muted">
                          <SunIcon width={20} className="flex-shrink-0" />
                          <h6>2 Nights</h6>
                        </div>
                      </div>
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
                    <CheckCircleIcon
                      width={25}
                      className="flex-shrink-0 text-success"
                    />
                    <h6 className="fw-normal">
                      Free cancellation until 11:59 PM on December 5, 2022.
                    </h6>
                  </div>
                  <div className="hstack gap-2 align-items-start">
                    <CheckCircleIcon
                      width={25}
                      className="flex-shrink-0 text-success"
                    />
                    <h6 className="fw-normal">
                      No payment needed today. You will pay when you stay.
                    </h6>
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
                    <label className="form-label">
                      Estimated check-in time
                    </label>
                    <AutocompleteSelect<string, string>
                      placeholder="Choose check-in time"
                      getOptionLabel={(v) => v}
                      getOptionValue={(v) => v}
                    />
                  </div>

                  <div className="col-lg-12">
                    <Textarea
                      label="Special Request"
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
            <div className="card">
              <div className="card-header bg-white mt-2">
                <h5>Price summary</h5>
              </div>
              <div className="card-body">
                <dl className="row">
                  <dt className="col-sm-5 fw-semibold">Standard room</dt>
                  <dd className="col-sm-7 text-start text-sm-end">130,000 Ks</dd>
                  <dt className="col-sm-5 fw-semibold">Discount</dt>
                  <dd className="col-sm-7 text-danger text-start text-sm-end">13,000 Ks</dd>
                  <dt className="col-sm-5 fw-semibold">TAX</dt>
                  <dd className="col-sm-7 text-start text-sm-end">3,510 Ks</dd>
                  <dt className="col-sm-5 fw-semibold">
                    Service charge
                  </dt>
                  <dd className="col-sm-7 text-start text-sm-end">11,700 Ks</dd>
                </dl>
                <hr className="bg-dark-gray" />
                <dl className="row mb-0">
                  <dt className="col-sm-5 fw-semibold">Total price</dt>
                  <dd className="col-sm-7 text-start text-sm-end fw-semibold">132,210 Ks</dd>
                </dl>
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
    </div>
  );
}

export default Reservation;
