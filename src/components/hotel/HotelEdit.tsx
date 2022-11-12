import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon, WifiIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Input, Select, Textarea } from "../forms";
import { RichTextEditorInputProps } from "../forms/RichTextEditor";

const DynamicEditor = dynamic<RichTextEditorInputProps>(
  () => import("../forms").then((f) => f.RichTextEditor),
  {
    ssr: false,
  }
);

function FacilitiesRow() {
  return (<div className="col-auto">
  <div
    className="border-0 bg-secondary align-items-center"
    style={{
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12,
    }}
  >
    <div className="hstack">
      <WifiIcon
        width={25}
        color={"green"}
        className="flex-shrink-0"
      />
      <span className="text-dark ms-1 small">
        Spa and wellness centre
      </span>
      <Link href="#">
      <XMarkIcon
        className="ms-2 text-dark flex-shrink-0"
        width={20}
      />
      </Link>
    </div>
  </div>
</div>);
}

function HotelEdit({ create = {} }) {
  const list = [1, 2, 3];

  return (
    <div className="pb-5">
      <div className="bg-primary">
        <div className="container py-4">
          <div className="hstack">
            <div>
              <div className="px-2">
                {create ? (
                  <h3 className="text-light text-lg-start">Create Hotel</h3>
                ) : (
                  <h3 className="text-light text-lg-start">Edit Hotel</h3>
                )}
              </div>
              <div className="row px-2">
                <nav aria-label="breadcrumb col-12">
                  <ol className="breadcrumb mb-1">
                    <li className="breadcrumb-item">
                      <Link href="/profile/hotels" className="text-light">
                        Hotels
                      </Link>
                    </li>
                    {create ? (
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Create Hotel
                      </li>
                    ) : (
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Edit Hotel
                      </li>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
            <div className="ms-auto">
              {create ? (
                <button className="btn btn-accent py-2 px-3 ms-2">
                  Create
                </button>
              ) : (
                <button className="btn btn-accent py-2 px-3 ms-2">
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">General</h5>
              </div>
              <div className="card-body">
                <div className="vstack">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <Input
                        label="Name *"
                        id="shopNameInput"
                        name="name"
                        type="text"
                        placeholder="Enter hotel name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Input
                        label="Slug *"
                        id="slugInput"
                        name="slug"
                        type="text"
                        placeholder="https://hotelmyanmar.com/page/slug"
                      />
                    </div>
                    <div className="order-1 order-md-1 order-lg-1 col-lg-6">
                      <Input
                        label="Address"
                        id="addressInput"
                        name="address"
                        type="text"
                        placeholder="Enter hotel address"
                      />
                    </div>
                    <div className="order-2 order-md-2 order-lg-2 col-lg-6">
                      <label className="form-label">Type</label>
                      <Select>
                        <option>Hotel</option>
                        <option>Motel</option>
                        <option>Resort</option>
                        <option>Inn</option>
                      </Select>
                    </div>
                    <div className="order-3 order-md-3 order-lg-3 col-lg-6">
                      <label className="form-label">Description</label>
                        <DynamicEditor
                          id="descriptionInput"
                          placeholder="Enter hotel description..."
                          minHeight={300}
                        />
                    </div>
                    <div className="order-4 order-md-4 order-lg-4 col-lg-6">
                      <label className="form-label">Area Info</label>
                        <DynamicEditor
                          id="areaInfoInput"
                          placeholder="Enter hotel area info..."
                          minHeight={300}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Images</h5>
              </div>
              <div className="card-body">
                <div className="vstack">
                  <div className="row g-4">
                    <div className="col-lg-3 col-12">
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-light-gray hstack justify-content-center"
                          style={{ width: 120, height: 120 }}
                        >
                          <PlusIcon width={44} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3">
                <div className="hstack">
                  <h5 className="mb-0">Location</h5>
                </div>
              </div>
              <div className="card-body">
                <div className="vstack">
                  <div className="row g-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3">
                <div className="hstack">
                  <h5 className="mb-0">Amenities/Facilities</h5>
                  <div className="ms-auto">
                    <Link
                      href="/profile/shops/create"
                      className="btn btn-primary"
                    >
                      Add new
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="vstack">
                  <div className="row g-3">
                    {list.map((i) => (
                      <FacilitiesRow key={i}/>
                    ))}
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

export default HotelEdit;
