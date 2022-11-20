import Link from "next/link";
import { formatTimestamp } from "../../../../common/utils";

function BookingRow() {
  return (
    <tr>
      <td className="ps-3 ps-lg-4 w-100">
        <div className="d-flex">
          <span className="text-primary"><Link className="text-dark text-decoration-none" href="#">Deluxe Room</Link></span>
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
                      <Link className="fw-semibold h5 my-auto" href={"/profile/hotels/1"}>
                        Bagan View Hotel
                      </Link>
                      <small className="text-muted text-wrap">#ID 20001</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link className="btn btn-sm btn-outline-danger align-self-center" href={"#"}>
                      Cancel booking
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="row gx-2 gy-3 mb-4 p-3">
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
                    <h6 className="fw-bold">Additional info</h6>
                    <div>Floor preference: 4 floor</div>
                    <div>Check in: {formatTimestamp(Date.now(), true)}</div>
                    <div>Special request: Something else...</div>
                  </div>
                  <div className="col-md-3">
                    <h6 className="fw-bold">Status</h6>
                    <div className="text-warning">
                      <span className="fw-semibold">Pending</span>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-12">
                    {/* <div className="card">
                      <div className="card-body p-0"> */}
                        <div className="table-responsive">
                          <table className="table bg-white align-middle">
                            <thead className="text-nowrap align-middle" style={{backgroundColor: "#f9f9f9"}}>
                              <tr style={{ height: 50 }}>
                                <th
                                  className="ps-3 ps-lg-4 fw-normal text-muted"
                                  style={{ minWidth: 200 }}
                                >
                                  Room Type
                                </th>
                                <th
                                  className="fw-normal text-muted"
                                  style={{ minWidth: 150 }}
                                >
                                  Sleeps
                                </th>
                                <th
                                  className="fw-normal text-muted"
                                  style={{ minWidth: 200 }}
                                >
                                  Bed
                                </th>
                                <th
                                  className="fw-normal text-muted"
                                  style={{ minWidth: 100 }}
                                >
                                  Day
                                </th>
                                <th
                                  className="fw-normal text-muted"
                                  style={{ minWidth: 100 }}
                                >
                                  Price Per Room
                                </th>
                              </tr>
                            </thead>
                            <tbody className="border-top-0">
                              {list.map((i) => (
                                <BookingRow key={i} />
                              ))}
                              <tr>
                                <td colSpan={3}></td>
                                <td className="fw-semibold">Subtotal</td>
                                <td className="">MMK&nbsp;200,000</td>
                              </tr>
                              <tr>
                                <td colSpan={3}></td>
                                <td className="fw-semibold">Discounts</td>
                                <td className="text-danger">-0ks</td>
                              </tr>
                              <tr>
                                <td colSpan={3}></td>
                                <td className="fw-semibold">Total Price</td>
                                <td className="text-success"><h5>MMK&nbsp;203,000</h5></td>
                              </tr>
                            </tbody>
                          </table>
                        {/* </div>
                      </div> */}
                    </div>
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
