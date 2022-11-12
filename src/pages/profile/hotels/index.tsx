import {
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import AccountMenu from "../../../components/account/AccountMenu";
import { Input, Select } from "../../../components/forms";
import Pagination from "../../../components/Pagination";

function MyHotels() {
  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="py-4 py-lg-5">
            <h1 className="text-light text-center text-lg-start">My Hotels</h1>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4 col-xl-3">
            <AccountMenu />
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body p-0">
                <div className="vstack">
                  <div className="p-3 p-lg-4">
                    <div className="row g-3">
                      <div className="col">
                        <Input
                          id="searchinput"
                          name="search"
                          type="text"
                          placeholder="Search your hotels"
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
                          href="/profile/hotels/create"
                          className="ms-auto btn btn-primary h-100 hstack"
                        >
                          Create new
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table bg-white align-middle">
                      <thead className="table-light text-nowrap align-middle">
                        <tr style={{ height: 50 }}>
                          <th className="ps-3 ps-lg-4 fw-medium">HOTELS</th>
                          <th className="fw-medium">CREATED AT</th>
                          <th className="fw-medium">STATUS</th>
                          <th className="pe-3 pe-lg-4 fw-medium"></th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        <tr style={{ height: 95 }}>
                          <td className="ps-3 ps-lg-4">
                            <div className="d-flex gap-3">
                              <div
                                className="ratio ratio-16x9"
                                style={{ width: 120 }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    overflow: "hidden",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: "absolute",
                                    inset: 0,
                                  }}
                                >
                                  <Image
                                    className="card-img-top rounded"
                                    src={`https://source.unsplash.com/random/200x240?random=${Math.floor(
                                      Math.random() * 100
                                    )}`}
                                    alt="Hotel image."
                                    fill={true}
                                    style={{ objectFit: "cover" }}
                                    priority
                                  />
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  href={"#"}
                                  className="text-nowrap pe-3 text-dark text-decoration-none"
                                >
                                  <h6 style={{ fontSize: 18 }}>Hotel Name</h6>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-nowrap pe-3">
                              7 July, 2021 1:42pm
                            </span>
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="text-nowrap px-2 py-1 small rounded bg-warning text-light">
                                Pending
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <Link
                                href="/profile/hotels/1/edit"
                                className="btn btn-primary"
                              >
                                <PencilSquareIcon width={20} />
                              </Link>
                              <Link
                                href={"#"}
                                className="btn btn-danger ms-2"
                              >
                                <TrashIcon width={20} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr style={{ height: 95 }}>
                          <td className="ps-3 ps-lg-4">
                            <div className="d-flex gap-3">
                              <div
                                className="ratio ratio-16x9"
                                style={{ width: 120 }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    overflow: "hidden",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: "absolute",
                                    inset: 0,
                                  }}
                                >
                                  <Image
                                    className="card-img-top rounded"
                                    src={`https://source.unsplash.com/random/200x240?random=${Math.floor(
                                      Math.random() * 100
                                    )}`}
                                    alt="Hotel image."
                                    fill={true}
                                    style={{ objectFit: "cover" }}
                                    priority
                                  />
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  href={"#"}
                                  className="text-nowrap pe-3 text-dark text-decoration-none"
                                >
                                  <h6 style={{ fontSize: 18 }}>Hotel Name</h6>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-nowrap pe-3">
                              7 July, 2021 1:42pm
                            </span>
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="text-nowrap px-2 py-1 small rounded bg-warning text-light">
                                Pending
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <Link
                                href="/profile/hotels/1/edit"
                                className="btn btn-primary"
                              >
                                <PencilSquareIcon width={20} />
                              </Link>
                              <Link
                                href={"#"}
                                className="btn btn-danger ms-2"
                              >
                                <TrashIcon width={20} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-end pt-3 px-3">
                    <Pagination hasPrev={true} hasNext={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHotels;
