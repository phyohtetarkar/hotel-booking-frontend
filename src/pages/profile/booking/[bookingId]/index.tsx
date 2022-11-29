import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { InboxIcon, MoonIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { formatTimestamp } from "../../../../common/utils";

function BookingCard() {
  return (
    <div className="card">
      <div className="card-body p-3">
        <div className="hstack align-items-start mb-2">
          <div className="position-relative flex-shrink-0 p-3 bg-primary border-0 rounded">
            <BuildingOfficeIcon width={20} className={"text-light"} />
          </div>
          <div className="ms-2">
            <h6 className="flex-grow-1 fw-bold pe-2 mb-0">Deluxe Room</h6>
            <text className="fw-medium">
              200,000&nbsp;Ks{" "}
              <small className="fw-light text-muted">/per person</small>
            </text>
          </div>
        </div>
        <hr className="dark-gray" />
        <div className="row g-3">
          <div className="col-sm-6 col-md-4">
            <div className="vstack">
              <span className="text-muted fw-light">Check-in</span>
              <small className="mb-0 fw-medium">
                {formatTimestamp(Date.now(), true)}
              </small>
            </div>
          </div>{" "}
          <div className="col-sm-6 col-md-4">
            <div className="vstack">
              <span className="text-muted fw-light">Check-out</span>
              <small className="mb-0 fw-medium">
                {formatTimestamp(Date.now(), true)}
              </small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="vstack">
              <span className="text-muted fw-light">Total Amount</span>
              <small className="mb-0 fw-medium text-success">
                200,000&nbsp;Ks
              </small>
            </div>
          </div>
        </div>
        {/* <div className="hstack p-3 bg-light bg-opacity-50  overflow-hidden">
          <div className="vstack">
            <text className="text-muted fw-light">Subtotal</text>
            <small className="fw-medium">200,000&nbsp;Ks</small>
          </div>
          <div className="vstack">
            <text className="text-muted fw-light">Discounts</text>
            <small className="text-danger fw-medium">-0&nbsp;Ks</small>
          </div>
          <div className="vstack">
            <text className="text-muted fw-light">Total Price</text>
            <small className="text-success fw-medium text-truncate">
              200,000&nbsp;Ks
            </small>
          </div>
        </div> */}
      </div>
      <div className="card-footer bg-white">
        <div className="hstack g-2 me-2 justify-content-between overflow-hidden py-1">
          <div className="hstack gap-2">
            <div className="bg-primary-dark rounded p-2 bg-opacity-25">
              <UserGroupIcon width={16} className="text-primary" />
            </div>
            <small className="fw-medium">2</small>
            <text className="text-muted fw-light">Guest</text>
          </div>
          <div className="hstack gap-2">
            <div className="bg-primary-dark rounded p-2 bg-opacity-25">
              <InboxIcon width={16} className="text-primary" />
            </div>
            <small className="fw-medium">1</small>
            <text className="text-muted fw-light">Bed</text>
          </div>
          <div className="hstack gap-2">
            <div className="bg-primary-dark rounded p-2 bg-opacity-25">
              <MoonIcon width={16} className="text-primary" />
            </div>
            <small className="fw-medium">5</small>
            <text className="text-muted fw-light">Day</text>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingRow() {
  return (
    <tr>
      <td className="ps-3 ps-lg-4 w-100">
        <div className="d-flex">
          <span className="text-primary">
            <Link className="text-dark text-decoration-none" href="#">
              Deluxe Room
            </Link>
          </span>
        </div>
      </td>
      <td>
        <span className="text-nowrap fw-light">2</span>
      </td>
      <td>
        <span className="text-nowrap fw-light">1 Double - no extra</span>
      </td>
      <td>
        <span className="text-nowrap fw-light">2</span>
      </td>
      <td>
        <span className="text-nowrap fw-light">MMK&nbsp;200,000</span>
      </td>
    </tr>
  );
}

function BookingDetail() {
  const list = [1, 2, 3];

  return (
    <div className="pb-5">
      <div className="bg-primary">
        <div className="container py-4">
          <div className="hstack">
            <div>
              <div className="px-2">
                <h3 className="text-light text-lg-start">Booking Detail</h3>
              </div>
              <div className="row px-2">
                <nav aria-label="breadcrumb col-12">
                  <ol className="breadcrumb mb-1">
                    <li className="breadcrumb-item">
                      <Link className="text-light" href="/profile/booking">
                        Booking
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Booking Detail
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          <div className=" col-lg-12">
            <div className="card mb-3">
              <div className="card-header py-3 bg-white">
                <div className="row align-items-center">
                  <div className="col d-flex">
                    <div className="vstack gap-1">
                      <Link
                        className="fw-semibold h5 my-auto"
                        href={"/profile/hotels/1"}
                      >
                        Bagan View Hotel
                      </Link>
                      <small className="text-muted text-wrap">#ID 20001</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link
                      className="btn btn-sm btn-outline-danger align-self-center"
                      href={"#"}
                    >
                      Cancel booking
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row gx-2 gy-3 mb-4">
                  <div className="col-md-5 small">
                    <h6 className="fw-bold">Customer info</h6>
                    <div>
                      Name:<text className="text-muted ms-2">Mobile Com</text>
                    </div>
                    <div>
                      Phone:
                      <text className="text-muted ms-2">+95911223344</text>
                    </div>
                    <div>
                      Address:
                      <text className="text-muted ms-2">
                        No. 26, Pyay Street, Hlaing Township, Yangon, Myanmar
                      </text>
                    </div>
                  </div>
                  <div className="col-md-4 small">
                    <h6 className="fw-bold">Additional info</h6>
                    <div>
                      Floor preference:
                      <text className="text-muted ms-2">4th floor</text>
                    </div>
                    <div>
                      Check in:
                      <text className="text-muted ms-2">
                        {formatTimestamp(Date.now(), true)}
                      </text>
                    </div>
                    <div>
                      Special request:
                      <text className="text-muted ms-2">Something else...</text>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h6 className="fw-bold">Status</h6>
                    <div className="text-warning">
                      <small className="fw-semibold">PENDING</small>
                    </div>
                  </div>
                </div>
                <hr className="dark-gray" />
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4">
                  {list.map((i) => (
                    <div className="col" key={i}>
                      <BookingCard key={i} />
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="ms-auto col-xl-4 col-lg-5 col-sm-7">
                    <table className="table border">
                      <tbody>
                        <tr className="small">
                          <td className="fw-bold">Subtotal</td>
                          <td className="text-end">600,000&nbsp;Ks</td>
                        </tr>
                        <tr className="small">
                          <td className="fw-bold">Discount</td>
                          <td className="text-end text-danger">-0&nbsp;Ks</td>
                        </tr>
                        <tr>
                          <td className="text-uppercase fw-bold">Total</td>
                          <td className="text-end fw-bold text-success">600,000&nbsp;Ks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card-footer small border-0 py-3 text-muted">
                {formatTimestamp(Date.now(), true)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetail;
