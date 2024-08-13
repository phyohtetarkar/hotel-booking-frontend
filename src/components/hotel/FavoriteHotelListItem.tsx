import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function FavoriteHotelListItem() {
  return (
    <div className="card">
      <div className="ratio ratio-4x3 card-img-top d-block d-md-none">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mocha-mart.appspot.com/o/bagan.jpeg?alt=media"
          className="card-img-top bg-light"
          alt=""
          fill
          sizes=""
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <div className="hstack gap-3">
          <div
            className="ratio ratio-1x1 d-none d-md-block"
            style={{ maxWidth: 180 }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mocha-mart.appspot.com/o/bagan.jpeg?alt=media"
              className="bg-light"
              alt=""
              fill
              sizes=""
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="vstack">
          <Link
              href={"/profile/hotels/1"}
              className="text-dark text-decoration-none"
            >
            <h5>Bagan View Hotel</h5>
            </Link>
            <div className="hstack gap-1 text-muted mb-3">
              <MapPinIcon width={16} />
              <span className="small">9 jasmin Road, New Bagan</span>
            </div>
            <div className="flex-grow-1"></div>
            <hr className="bg-dark-gray d-block d-md-none" />
            <div className="hstack align-items-end">
              <div>
                <small className="small text-muted">Starting from</small>
                <div className="hstack align-items-baseline">
                  <h4 className="mb-0">50,000</h4>
                  <small className="text-muted ms-1">/ per night</small>
                </div>
              </div>
              <div className="flex-grow-1"></div>
              <button className="btn btn-outline-danger">
              Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteHotelListItem;
