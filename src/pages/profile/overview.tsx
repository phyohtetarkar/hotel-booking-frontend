import {PencilSquareIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import AccountMenu from "../../components/account/AccountMenu";

function ProfileOverview() {
    return (
      <div>
        <div className="bg-primary">
          <div className="container">
            <div className="py-4 py-lg-5">
              <h1 className="text-light text-center text-lg-start">Profile Overview</h1>
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
                        src="https://firebasestorage.googleapis.com/v0/b/mocha-mart.appspot.com/o/profile.png?alt=media"
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