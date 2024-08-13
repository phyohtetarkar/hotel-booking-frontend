import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  UserGroupIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "react-calendar";
import { formControlHeight } from "../../../common/app.config";
import { formatPrice } from "../../../common/utils";
import { Input, Select } from "../../../components/forms";
import Popover from "../../../components/Popover";

function HotelDetail() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [roomSelected, setRommSelected] = useState(0);
  const pricePerNight = 30000;
  const night = 2;
  const priceforNights = night * pricePerNight;

  return (
    <div className="mb-5">
      <div className="bg-primary">
        <div className="container">
          <div className="py-4">
            <div>
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <form className="row align-items-end g-3">
                    <div className="col-12 col-lg">
                      <Input
                        label="Place to go"
                        placeholder="Where are you going?"
                      />
                    </div>
                    <div className="col-12 col-lg">
                      <label className="form-label">Check In</label>

                      <Popover
                        renderReferenceElement={(handleClick) => {
                          return (
                            <div className="input-group">
                              <Input
                                placeholder="Check in date"
                                readonly
                                onClick={handleClick}
                                value={checkInDate.toDateString()}
                                onChange={() => {}}
                              />
                              <span className="input-group-text">
                                <CalendarDaysIcon width={20} />
                              </span>
                            </div>
                          );
                        }}
                        renderPopperElement={(close) => {
                          return (
                            <Calendar
                              onChange={(d: Date) => {
                                setCheckInDate(d);
                                close();
                              }}
                              value={checkInDate}
                              locale="en-US"
                              className={"shadow-lg mt-1 border z"}
                              tileClassName={({
                                activeStartDate,
                                date,
                                view,
                              }) => {
                                const activeClass = "bg-primary text-light";
                                if (
                                  view === "month" &&
                                  date.toDateString() ===
                                    checkInDate.toDateString()
                                ) {
                                  return activeClass;
                                }

                                if (
                                  view === "year" &&
                                  date.getMonth() === checkInDate.getMonth()
                                ) {
                                  return activeClass;
                                }

                                if (
                                  view === "decade" &&
                                  date.getFullYear() ===
                                    checkInDate.getFullYear()
                                ) {
                                  return activeClass;
                                }
                                return "";
                              }}
                            />
                          );
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg">
                      <label className="form-label">Check Out</label>
                      <div className="input-group">
                        <Input
                          placeholder="Check out date"
                          value={checkOutDate.toDateString()}
                          onChange={() => {}}
                          readonly
                        />
                        <span className="input-group-text">
                          <CalendarDaysIcon width={20} />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg">
                      <Popover
                        renderReferenceElement={(handleClick) => {
                          return (
                            <Input
                              label="Room &amp; guests"
                              value="2 adults - 0 children - 1 room"
                              readonly
                              onClick={() => handleClick()}
                            />
                          );
                        }}
                        renderPopperElement={(close) => {
                          return (
                            <div className="p-4 bg-white shadow-lg border">
                              <div className="vstack gap-3">
                                <div className="hstack">
                                  <h6 className="mb-0" style={{ width: 100 }}>
                                    Adult
                                  </h6>
                                  <div>
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-end-0"
                                      >
                                        <MinusIcon width={20} />
                                      </button>
                                      <input
                                        type="text"
                                        className="form-control text-center border-primary"
                                        value={1}
                                        readOnly
                                        style={{ maxWidth: 46 }}
                                      ></input>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-start-0"
                                      >
                                        <PlusIcon width={20} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="hstack">
                                  <h6 className="mb-0" style={{ width: 100 }}>
                                    Children
                                  </h6>
                                  <div>
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-end-0"
                                      >
                                        <MinusIcon width={20} />
                                      </button>
                                      <input
                                        type="text"
                                        className="form-control text-center border-primary"
                                        value={1}
                                        readOnly
                                        style={{ maxWidth: 46 }}
                                      ></input>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-start-0"
                                      >
                                        <PlusIcon width={20} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="hstack">
                                  <h6 className="mb-0" style={{ width: 100 }}>
                                    Room
                                  </h6>
                                  <div>
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-end-0"
                                      >
                                        <MinusIcon width={20} />
                                      </button>
                                      <input
                                        type="text"
                                        className="form-control text-center border-primary"
                                        value={1}
                                        readOnly
                                        style={{ maxWidth: 46 }}
                                      ></input>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-start-0"
                                      >
                                        <PlusIcon width={20} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      ></Popover>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <button
                        className="btn btn-primary px-4 w-100"
                        style={{ height: formControlHeight }}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row mb-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="vstack">
                      <h4 className="mb-1">Bagan View Hotel</h4>
                      <div className="hstack gap-1 text-muted">
                        <MapPinIcon width={16} />
                        <span className="small">9 jasmin Road, New Bagan</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-md-none">
                    <hr className="bg-dark-gray" />
                  </div>

                  <div className="col-12 col-md-auto">
                    <div className="hstack">
                      <div>
                        <small className="text-muted">Starting from</small>
                        <div className="hstack align-items-baseline">
                          <h5 className="mb-0">MMK 50,000</h5>
                          <small className="text-muted ms-1">/ per night</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-lg-8">
            <div className="ratio ratio-16x9 d-lg-block">
              <Image
                src="/images/bagan.jpeg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="vstack gap-3 h-100">
              <div className="card h-100">
                <div className="card-header bg-white">
                  <h5 className="mt-2"> Most Popular Amenities</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2 align-items-start">
                        <WifiIcon
                          width={25}
                          color={"green"}
                          className="flex-shrink-0"
                        />
                        <span className="">Free Wifi</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2 align-items-start">
                        <WifiIcon
                          width={25}
                          color={"green"}
                          className="flex-shrink-0"
                        />
                        <span>Excellent breakfast</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2 align-items-start">
                        <WifiIcon
                          width={25}
                          color={"green"}
                          className="flex-shrink-0"
                        />
                        <span>Non-smoking rooms</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2 align-items-start">
                        <WifiIcon
                          width={25}
                          color={"green"}
                          className="flex-shrink-0"
                        />
                        <span>Swimming pool</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2 align-items-start">
                        <WifiIcon
                          width={25}
                          color={"green"}
                          className="flex-shrink-0"
                        />
                        <span>Family rooms</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2 align-items-start">
                        <WifiIcon
                          width={25}
                          color={"green"}
                          className="flex-shrink-0"
                        />
                        <span>Bar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-100">
                <div className="card-body">View on map</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-lg-8">
            <div className="vstack gap-3">
              <div className="card">
                <div className="card-body">
                  <form className="row align-items-end g-3">
                    <div className="col-12 col-lg">
                      <label className="form-label">Check In</label>

                      <Popover
                        renderReferenceElement={(handleClick) => {
                          return (
                            <div className="input-group">
                              <Input
                                placeholder="Check in date"
                                readonly
                                onClick={handleClick}
                                value={checkInDate.toDateString()}
                                onChange={() => {}}
                              />
                              <span className="input-group-text">
                                <CalendarDaysIcon width={20} />
                              </span>
                            </div>
                          );
                        }}
                        renderPopperElement={(close) => {
                          return (
                            <Calendar
                              onChange={(d: Date) => {
                                setCheckInDate(d);
                                close();
                              }}
                              value={checkInDate}
                              locale="en-US"
                              className={"shadow-lg mt-1 border z"}
                              tileClassName={({
                                activeStartDate,
                                date,
                                view,
                              }) => {
                                const activeClass = "bg-primary text-light";
                                if (
                                  view === "month" &&
                                  date.toDateString() ===
                                    checkInDate.toDateString()
                                ) {
                                  return activeClass;
                                }

                                if (
                                  view === "year" &&
                                  date.getMonth() === checkInDate.getMonth()
                                ) {
                                  return activeClass;
                                }

                                if (
                                  view === "decade" &&
                                  date.getFullYear() ===
                                    checkInDate.getFullYear()
                                ) {
                                  return activeClass;
                                }
                                return "";
                              }}
                            />
                          );
                        }}
                      />
                    </div>
                    <div className="col-12 col-lg">
                      <label className="form-label">Check Out</label>
                      <div className="input-group">
                        <Input
                          placeholder="Check out date"
                          value={checkOutDate.toDateString()}
                          onChange={() => {}}
                          readonly
                        />
                        <span className="input-group-text">
                          <CalendarDaysIcon width={20} />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg">
                      <Popover
                        renderReferenceElement={(handleClick) => {
                          return (
                            <Input
                              label="Room &amp; guests"
                              value="2 adults - 0 children - 1 room"
                              readonly
                              onClick={() => handleClick()}
                            />
                          );
                        }}
                        renderPopperElement={(close) => {
                          return (
                            <div className="p-4 bg-white shadow-lg border">
                              <div className="vstack gap-3">
                                <div className="hstack">
                                  <h6 className="mb-0" style={{ width: 100 }}>
                                    Adult
                                  </h6>
                                  <div>
                                    <div className="input-group flex-nowrap">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-end-0"
                                      >
                                        <MinusIcon width={20} />
                                      </button>
                                      <input
                                        type="text"
                                        className="form-control text-center border-primary"
                                        value={1}
                                        readOnly
                                        style={{ maxWidth: 46 }}
                                      ></input>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-start-0"
                                      >
                                        <PlusIcon width={20} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="hstack">
                                  <h6 className="mb-0" style={{ width: 100 }}>
                                    Children
                                  </h6>
                                  <div>
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-end-0"
                                      >
                                        <MinusIcon width={20} />
                                      </button>
                                      <input
                                        type="text"
                                        className="form-control text-center border-primary"
                                        value={1}
                                        readOnly
                                        style={{ maxWidth: 46 }}
                                      ></input>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-start-0"
                                      >
                                        <PlusIcon width={20} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="hstack">
                                  <h6 className="mb-0" style={{ width: 100 }}>
                                    Room
                                  </h6>
                                  <div>
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-end-0"
                                      >
                                        <MinusIcon width={20} />
                                      </button>
                                      <input
                                        type="text"
                                        className="form-control text-center border-primary"
                                        value={1}
                                        readOnly
                                        style={{ maxWidth: 46 }}
                                      ></input>
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary border-start-0"
                                      >
                                        <PlusIcon width={20} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      ></Popover>
                    </div>
                    <div className="col-12 col-lg-auto">
                      <button
                        className="btn btn-primary px-4 w-100"
                        style={{ height: formControlHeight }}
                      >
                        Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card h-100">
                <div className="card-header bg-white">
                  <h5 className="mt-2"> Available Room Type</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="vstack gap-2">
                        <h5
                          className="fw-medium text-decoration-underline"
                          style={{ color: "blue" }}
                        >
                          Standard Room
                        </h5>
                        <div className="hstack gap-3">
                          <div className="hstack gap-2">
                            <span>2 twin beds</span>
                            <CheckCircleIcon width={25} />
                          </div>
                          <div className="hstack gap-2">
                            <span>2 x adults</span>
                            <UserGroupIcon width={25} />
                          </div>
                          <div className="hstack gap-2">
                            <span>1 x child</span>
                            <CheckCircleIcon width={25} />
                          </div>
                        </div>
                        <div className="mt-3">
                          <span
                            className="small fw-bold"
                            style={{ color: "blue" }}
                          >
                            View detail
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="hstack align-items-start">
                        <div>
                          <small className="text-muted">
                            Price for {night} nights
                          </small>
                          <div className="hstack align-items-baseline">
                            <h5 className="mb-0">MMK {pricePerNight}</h5>
                            <small className="text-muted ms-1">
                              / per night
                            </small>
                          </div>
                        </div>
                      </div>
                      <h5 className="small text-danger mt-3">
                        * Only 3 rooms left on our site
                      </h5>
                    </div>
                    <div className="col-lg-2">
                      <Select
                        label="Select room"
                        onChange={(e) => {
                          setRommSelected(parseInt(e.target.value));
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Select>
                    </div>

                    <hr className="bg-dark-gray my-4" />
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="vstack gap-2">
                        <h5
                          className="fw-medium text-decoration-underline"
                          style={{ color: "blue" }}
                        >
                          Standard Room
                        </h5>
                        <div className="hstack gap-3">
                          <div className="hstack gap-2">
                            <span>2 twin beds</span>
                            <CheckCircleIcon width={25} />
                          </div>
                          <div className="hstack gap-2">
                            <span>2 x adults</span>
                            <UserGroupIcon width={25} />
                          </div>
                          <div className="hstack gap-2">
                            <span>1 x child</span>
                            <CheckCircleIcon width={25} />
                          </div>
                        </div>
                        <div className="mt-3">
                          <span
                            className="small fw-bold"
                            style={{ color: "blue" }}
                          >
                            View detail
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="hstack align-items-start">
                        <div>
                          <small className="text-muted">
                            Price for {night} nights
                          </small>
                          <div className="hstack align-items-baseline">
                            <h5 className="mb-0">MMK {pricePerNight}</h5>
                            <small className="text-muted ms-1">
                              / per night
                            </small>
                          </div>
                        </div>
                      </div>
                      <h5 className="small text-danger mt-3">
                        * Only 3 rooms left on our site
                      </h5>
                    </div>
                    <div className="col-lg-2">
                      <Select
                        label="Select room"
                        onChange={(e) => {
                          setRommSelected(parseInt(e.target.value));
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Select>
                    </div>
                    <hr className="bg-dark-gray my-4" />
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="vstack gap-2">
                        <h5
                          className="fw-medium text-decoration-underline"
                          style={{ color: "blue" }}
                        >
                          Standard Room
                        </h5>
                        <div className="hstack gap-3">
                          <div className="hstack gap-2">
                            <span>2 twin beds</span>
                            <CheckCircleIcon width={25} />
                          </div>
                          <div className="hstack gap-2">
                            <span>2 x adults</span>
                            <UserGroupIcon width={25} />
                          </div>
                          <div className="hstack gap-2">
                            <span>1 x child</span>
                            <CheckCircleIcon width={25} />
                          </div>
                        </div>
                        <div className="mt-3">
                          <span
                            className="small fw-bold"
                            style={{ color: "blue" }}
                          >
                            View detail
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="hstack align-items-start">
                        <div>
                          <small className="text-muted">
                            Price for {night} nights
                          </small>
                          <div className="hstack align-items-baseline">
                            <h5 className="mb-0">MMK {pricePerNight}</h5>
                            <small className="text-muted ms-1">
                              / per night
                            </small>
                          </div>
                        </div>
                      </div>
                      <h5 className="small text-danger mt-3">
                        * Only 3 rooms left on our site
                      </h5>
                    </div>
                    <div className="col-lg-2">
                      <Select
                        label="Select room"
                        onChange={(e) => {
                          setRommSelected(parseInt(e.target.value));
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-header bg-white">
                <h5 className="mt-2"> Select Room</h5>
              </div>
              <div className="card-body">
                {roomSelected > 0 && (
                  <div className="vstack gap-3">
                    <h5
                      className="fw-medium flex-grow-1"
                      style={{ color: "blue" }}
                    >
                      Price for {night} nights
                    </h5>

                    <div className="hstack">
                      <h5 className="text-muted flex-grow-1">
                        {roomSelected} x Standard Room
                      </h5>
                      <h5 className="fw-medium">
                        MMK {formatPrice(roomSelected * priceforNights)}
                      </h5>
                    </div>
                    <small className="ms-auto mt-3 text-muted">
                      * Includes taxes and fees
                    </small>
                    <div>
                      <Link
                        href="/hotels/id/reservation"
                        className="btn btn-primary w-100"
                      >
                        Reserve
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="mt-2"> Hotel Description</h5>
              </div>
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="mt-2"> Hotel Area Info</h5>
              </div>
              <div className="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetail;
