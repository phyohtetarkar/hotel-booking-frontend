import {
  CalendarDaysIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  UserIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { Calendar } from "react-calendar";
import { formControlHeight } from "../../common/app.config";
import { Input } from "../../components/forms";
import Popover from "../../components/Popover";

function HotelDetail() {
  let image = `https://source.unsplash.com/random/200x240?random=${Math.floor(
    Math.random() * 100
  )}`;

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

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
        <div className="col-lg-12">
          <h2>Ostello Bello Bagan</h2>
          <div className="hstack">
            <MapPinIcon width={20} />
            <span className="ms-2 fw-medium">
              Hkan Latt Quarter, Main Road New Bagan, Myanmar
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8">
            <div
              className="ratio ratio-4x3 d-lg-block"
              style={{ maxWidth: 900, maxHeight: 600 }}
            >
              <Image
                src="/images/bagan.jpeg"
                className="rounded-3"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="vstack gap-2">
              <div className="card rounded-3">
                <div className="card-header bg-white">
                  <h5 className="mt-2"> Most Popular Facilities</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2">
                        <WifiIcon width={25} color={"green"} />
                        <span className="">Free Wifi</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2">
                        <WifiIcon width={25} color={"green"} />
                        <span>Excellent breakfast</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2">
                        <WifiIcon width={25} color={"green"} />
                        <span>Non-smoking rooms</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2">
                        <WifiIcon width={25} color={"green"} />
                        <span>Swimming pool</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2">
                        <WifiIcon width={25} color={"green"} />
                        <span>Family rooms</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-auto">
                      <div className="hstack gap-2">
                        <WifiIcon width={25} color={"green"} />
                        <span>Bar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card rounded-3">
                <div className="card-body">View on map</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-3 mt-3">
          <div className="card-header bg-white">
            <h5 className="mt-2"> Recommand for 3 adults</h5>
          </div>
          <div className="card-body">
            <div className="vstack gap-2">
              <div className="hstack gap-2">
                <div className="flex-grow-1">
                  3 x{" "}
                  <a href="#" style={{ color: "blue" }}>
                    Bed in 10-Bed Mixed Dormitory Room
                  </a>
                </div>
                <div className="vstack gap-2">
                  <div className="hstack align-items-end">
                    <div>
                      <small className="small text-muted">Starting from</small>
                      <div className="hstack align-items-baseline">
                        <h4 className="mb-0">10,000</h4>
                        <small className="text-muted ms-1">/ per night</small>
                      </div>
                    </div>
                    <div className="flex-grow-1"></div>
                    <button className="btn btn-primary">Reserve</button>
                  </div>
                </div>
              </div>
              <div className="hstack gap-2 fw-medium">
                Price for :
                <UserIcon width={20} />
              </div>
              <div className="hstack gap-2 fw-bold" style={{ color: "green" }}>
                Free cancellation before 10 Dec 2022
              </div>
              <div className="hstack gap-2 fw-bold" style={{ color: "green" }}>
                Breakfast included
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-3 mt-3">
          <div className="card-header bg-white">
            <h5 className="mt-2">Description</h5>
          </div>
          <div className="card-body">
            Located in Bagan and with Manuha Temple reachable within 1.7 miles,
            Ostello Bello Bagan Pool provides a tour desk, rooms, a bar, free
            WiFi throughout the property and a shared lounge. Featuring family
            rooms, this property also provides guests with a terrace. The hostel
            has an outdoor swimming pool, evening entertainment and a 24-hour
            front desk. All rooms feature a private bathroom, a hairdryer and
            bed linen. Guests at the hostel can enjoy a buffet or an Asian
            breakfast. Gu Byauk Gyi Myin Kabar is 3.2 km from Ostello Bello
            Bagan Pool, while Dhammayazika Pagoda is 3.7 km from the property.
            The nearest airport is Nyaung U Airport, 10 km from the
            accommodation. Ostello Bello Bagan Pool has been welcoming
            Booking.com guests since 1 Dec 2017 Hotel chain/brand: Ostello Bello
            Distance in property description is calculated using © OpenStreetMap
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetail;
