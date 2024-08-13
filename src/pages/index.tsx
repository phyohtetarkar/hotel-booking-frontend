import {
  CalendarDaysIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { formControlHeight } from "../common/app.config";
import { Input } from "../components/forms";
import Popover from "../components/Popover";
import Calendar from "react-calendar";
import { useState } from "react";

export default function Home() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <div className="container py-4">
      <div className="position-relative p-4 pt-md-22">
        <Image
          src={`/images/bagan.jpeg`}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="bg-dark opacity-25 top-0 start-0 end-0 bottom-0 position-absolute"></div>
        <div>
          <div
            className="card border-0 shadow-sm"
            style={{
              marginTop: "10rem",
            }}
          >
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
                            readOnly
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
                          className={"shadow-lg mt-1 border"}
                          tileClassName={({ activeStartDate, date, view }) => {
                            const activeClass = "bg-primary text-light";
                            if (
                              view === "month" &&
                              date.toDateString() === checkInDate.toDateString()
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
                              date.getFullYear() === checkInDate.getFullYear()
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
                      readOnly
                    />
                    <span className="input-group-text">
                      <CalendarDaysIcon width={20} />
                    </span>
                  </div>
                </div>
                <div className="col-12 col-lg">
                  {/* <Input
                    label="Room &amp; guests"
                    value="2 adults - 0 children - 1 room"
                    readonly
                  /> */}
                  <Popover
                    renderReferenceElement={(handleClick) => {
                      return (
                        <Input
                          label="Room &amp; guests"
                          value="2 adults - 0 children - 1 room"
                          readOnly
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
                                    defaultValue={1}
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
                                    defaultValue={1}
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
                                    defaultValue={1}
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
  );
}
