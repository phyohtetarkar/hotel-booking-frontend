import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function RoomManageGridItem() {
  return (
    <div className="card h-100">
      <Link href="\hotels\1" className="text-decoration-none">
        <div
          className="position-relative"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="ratio ratio-4x3">
            <Image
              className="card-img-top"
              src="/images/bagan.jpeg"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </Link>
      <div className="card-body">
        <div className="vstack gap-2">
          <Link
            href="\hotels\1"
            className="text-muted text-decoration-none text-truncate"
            style={{ fontSize: 18 }}
          >
            Standard room
          </Link>

          <div className="hstack align-items-stretch gap-2">
            <Link
              href={`/profile/hotels/id/id`}
              className="btn btn-primary flex-grow-1"
            >
              Edit
            </Link>
            <button
              disabled={false}
              className="btn btn-outline-danger"
              onClick={async () => {}}
            >
              <TrashIcon width={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomManageGridItem;
