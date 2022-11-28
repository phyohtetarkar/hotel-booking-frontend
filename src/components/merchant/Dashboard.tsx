import {
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

function Dashboard() {
  const iconSize = 56;
  return (
    <div>
      <div className="row g-3 mb-3">
        <div className="col-lg-4">
          <div className="card p-3">
            <div className="hstack gap-3">
              <div className="bg-accent text-light rounded">
                <CurrencyDollarIcon
                  width={iconSize}
                  className="flex-shrink-0 p-2"
                />
              </div>

              <div className="vstack gap-1 text-nowrap">
                <h6 className="fw-normal">Total Sales</h6>
                <span className="fw-bold">120,200,000 Ks</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card p-3">
            <div className="hstack gap-3">
              <div className="bg-success text-light rounded">
                <ClipboardDocumentCheckIcon
                  width={iconSize}
                  className="flex-shrink-0 p-2"
                />
              </div>
              <div className="vstack gap-1 text-nowrap">
                <h6 className="fw-normal">Total Bookings</h6>
                <span className="fw-bold">90</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card p-3">
            <div className="hstack gap-3">
              <div className="bg-primary text-light rounded">
                <BookmarkIcon width={iconSize} className="flex-shrink-0 p-2" />
              </div>
              <div className="vstack gap-1 text-nowrap">
                <h6 className="fw-normal">Total Rooms</h6>
                <span className="fw-bold">50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-lg-9">
          <div className="card h-100">
            <div className="card-body">
              <div>
                <h5 className="fw-normal ">Earnings</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <div>
                <h5 className="fw-normal"></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
