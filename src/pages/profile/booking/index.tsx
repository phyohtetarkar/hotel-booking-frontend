import {
  BuildingOfficeIcon,
  EyeIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { formatTimestamp } from "../../../common/utils";
import AccountMenu from "../../../components/account/AccountMenu";
import { Input, Select } from "../../../components/forms";
import Pagination from "../../../components/Pagination";

function BookingCard() {
  return (
    <div className="card mb-3">
      <div className="card-header py-3 bg-white">
        <div className="hstack align-items-start flex-wrap gap-3">
          <div
            className="flex-shrink-0 bg-light rounded hstack d-none d-md-flex"
            style={{ width: 60, height: 60 }}
          >
            <BuildingOfficeIcon width={32} className="mx-auto" />
          </div>

          <div className="vstack gap-1 justify-content-center">
            <h5 className="mb-0 fw-semibold">Bagan View Hotel</h5>
            <div className="hstack">
              <small className="text-muted text-nowrap">
                Booking ID: 20001
              </small>
              <text className="text-dark-gray px-2">&#x2022;</text>
              <div className="text-warning">
                <small className="fw-semibold">PENDING</small>
              </div>
            </div>
          </div>
          <Link
            className="btn btn-sm btn-outline-primary"
            href={"/profile/booking/1"}
          >
            <span className="">Detail</span>
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div className="row g-3 ">
          <div className="col-sm-6 col-md-4">
            <div className="vstack">
              <span className="text-muted fw-light">Check-in</span>
              <h6 className="mb-0 fw-medium">{formatTimestamp(Date.now())}</h6>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="vstack">
              <span className="text-muted fw-light">Check-out</span>
              <h6 className="mb-0 fw-medium">{formatTimestamp(Date.now())}</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="vstack">
              <span className="text-muted fw-light">Booked by</span>
              <h6 className="mb-0 fw-medium">Aung Ko Oo</h6>
            </div>
          </div>
        </div>
        {/* <div className="row gx-2 gy-3">
          <div className="col-md-5 small">
            <h6 className="fw-bold">Customer info</h6>
            <div>
              Name:<text className="text-muted ms-2">Mobile Com</text>
            </div>
            <div>
              Phone:<text className="text-muted ms-2">+95911223344</text>
            </div>
            <div>
              Address:
              <text className="text-muted ms-2">
                No. 26, Pyay Street, Hlaing Township, Yangon, Myanmar
              </text>
            </div>
          </div>
          <div className="col-md-4 small">
            <h6 className="fw-bold">Payment info</h6>
            <div>
              Subtotal:<text className="text-muted ms-2">30,000ks</text>
            </div>
            <div>
              Discounts:<text className="text-danger ms-2">-0ks</text>
            </div>
            <div>
              Total Price:<text className="text-success ms-2">33,000ks</text>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Status</h6>
            <div className="text-warning">
              <small className="fw-semibold">Pending</small>
            </div>
          </div>
        </div> */}
      </div>
      <div className="card-footer small border-0 py-3 text-muted">
        {formatTimestamp(Date.now(), true)}
      </div>
    </div>
  );
}

function MyBooking() {
  const list = [1, 2];

  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="py-4 py-lg-5">
            <h1 className="text-light text-center text-lg-start">My Booking</h1>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4 col-xl-3">
            <AccountMenu />
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="card mb-3 p-3">
              <div className="row">
                <div className="col">
                  <Input
                    id="searchinput"
                    name="search"
                    type="text"
                    placeholder="Search your booking"
                  />
                </div>
                <div className="col-auto">
                  <Select>
                    <option value="">All Status</option>
                    <option value="">Pending</option>
                    <option value="">Suspended</option>
                    <option value="">Deleted</option>
                  </Select>
                </div>
                <div className="col-auto">
                  <Link
                    href="#"
                    className="ms-auto btn btn-primary h-100 hstack"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
            {list.map((i) => (
              <BookingCard key={i} />
            ))}
            <div className="d-flex justify-content-end pt-3">
              <Pagination hasPrev={true} hasNext={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBooking;
