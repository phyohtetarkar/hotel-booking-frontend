import Link from "next/link";
import { Input } from "../forms";
import RoomManageGridItem from "../hotel/RoomManageGridItem";
import Pagination from "../Pagination";

function RoomListing() {
  const list = [1, 2, 3, 4, 5];

  return (
    <div className="p-0">
      <div className="row">
        <div className="col-auto me-auto">
          <Input
            id="searchinput"
            name="search"
            type="text"
            placeholder="Search hotel rooms"
          />
        </div>

        <div className="col-auto">
          <Link
            href="/profile/hotels/id/create-room"
            className="ms-auto btn btn-primary h-100 hstack"
          >
            Create new
          </Link>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-3">
        {list.map((i) => {
          return (
            <div className="col" key={i}>
              <RoomManageGridItem />
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-end pt-3">
        <Pagination/>
      </div>
    </div>
  );
}

export default RoomListing;
