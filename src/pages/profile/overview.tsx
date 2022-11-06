import {PencilSquareIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import AccountMenu from "../../components/account/AccountMenu";

function ProfileOverview() {
    return (
      <div>
        <div className="bg-primary">
          <div className="container" style={{ height: 120 }}>
            <div className="d-flex align-items-center h-100">
              <h1 className="text-light">Profile Overview</h1>
            </div>
          </div>
        </div>
  
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4 col-xl-3">
              <AccountMenu />
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="card mb-3">
                <div className="card-body p-md-4">
                  <div className="hstack">
                    <div className="position-relative flex-shrink-0">
                      <Image
                        src=""
                        width={60}
                        height={60}
                        alt=""
                        style={{ objectFit: "cover" }}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Your Avatar</h6>
                      <span className="text-muted small">
                        Phone: +95244144442
                      </span>
                    </div>
                    <div className="ms-auto">
                      <div className="d-flex d-none d-lg-block">
                        <button className="btn btn-outline-primary">Edit</button>
                      </div>
                    </div>
                    <div className="d-flex d-block d-lg-none ms-2">
                      <button className="btn btn-outline-primary">
                        <PencilSquareIcon width={16} />
                      </button>
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
  export default ProfileOverview;