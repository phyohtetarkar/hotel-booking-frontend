import Link from "next/link";
import { formatTimestamp } from "../../../common/utils";
import AccountMenu from "../../../components/account/AccountMenu";
import { Input, Select } from "../../../components/forms";
import Pagination from "../../../components/Pagination";

function BookingCard() {
  return (
    <div className="card mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Booking ID: 20001</span>
          </div>
          <div className="col-auto">
            <Link
              className="btn btn-sm btn-outline-primary"
              href={"/profile/booking/1"}
            >
              View detail
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Customer info</h6>
            <div className="vstack text-dark small">
              <span>Name: Mobile Com</span>
              <span>Phone: +95911223344</span>
              <span>Address: No. 26, Pyay Street, Hlaing Township</span>
              <span>Yangon, Myanmar</span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Payment info</h6>
            <div>Subtotal: MMK&nbsp;30,000</div>
            <div className="text-danger">Discounts: MMK&nbsp;-0</div>
            <div className="text-success fw-semibold">
              Total Price: MMK&nbsp;33,000
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Status</h6>
            <div className="text-warning">
              <span className="fw-semibold">Pending</span>
            </div>
          </div>
        </div>
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
            <div
              className="card mb-3 p-3"
            >
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
