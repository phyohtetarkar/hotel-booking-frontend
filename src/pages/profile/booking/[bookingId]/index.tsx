import Link from "next/link";
import { formatTimestamp } from "../../../../common/utils";

function BookingDetail() {
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
                <div className="row">
                  <div className="col d-flex">
                    <span className="fw-semibold h5 my-auto">
                      Reserve ID: 20001
                    </span>
                  </div>
                  <div className="col-auto">
                    <Link className="btn btn-sm btn-outline-danger" href={"#"}>
                      Cancel booking
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
                    <h6 className="fw-bold">Reserve info</h6>
                    <div>Room type: Delux Room</div>
                    <div>Bed: 1 Double - no extra</div>
                    <div>Sleeps: Adult 2, Children 1</div>
                    <div>Rooms: 1</div>
                    <div>Day: 2</div>
                    <div>Subtotal: 30,000ks</div>
                    <div className="text-danger">Discounts: -0ks</div>
                    <div className="text-success fw-semibold">
                      Total Price: 33,000ks
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h6 className="fw-bold">Status</h6>
                    <div className="text-warning">
                      <span className="fw-semibold">Pending</span>
                    </div>
                  </div>
                </div>
                <hr className="dark-gray" />
                <div className="row row-cols-1 row-cols-md-3 g-3"></div>
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
