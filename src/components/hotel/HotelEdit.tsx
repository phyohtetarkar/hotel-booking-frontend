import { PhoneIcon, PhotoIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon, WifiIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Input, Select, Textarea } from "../forms";
import AutocompleteSelect from "../forms/AutocompleteSelect";
import { RichTextEditorInputProps } from "../forms/RichTextEditor";

const groupList = ["Hotel", "Motel", "Resort", "Inn"];

const DynamicEditor = dynamic<RichTextEditorInputProps>(
  () => import("../forms").then((f) => f.RichTextEditor),
  {
    ssr: false,
  }
);

function ContactChip() {
  return (
    <div className="hstack border p-2">
      <PhoneIcon width={15} className="flex-shrink-0" />
      <span className="text-dark ms-1 small">09-24442122</span>
      <div role="button" className="link-danger ms-2">
        <XCircleIcon className="flex-shrink-0" width={20} />
      </div>
    </div>
  );
}

function FacilitiesChip() {
  return (
    <div className="hstack border p-2">
      <WifiIcon width={25} color={"green"} className="flex-shrink-0" />
      <span className="text-dark ms-1 small">Spa and wellness centre</span>
      <div role="button" className="link-danger ms-2">
        <XCircleIcon className="flex-shrink-0" width={20} />
      </div>
    </div>
  );
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
              <div className="card-header bg-white py-3 px-md-4">
                <h5 className="mb-0">General</h5>
              </div>
              <div className="card-body px-md-4">
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
                    <div className="order-2 order-md-2 order-lg-1 col-lg-6">
                      <label className="form-label">Description</label>
                      <DynamicEditor
                        id="descriptionInput"
                        placeholder="Enter hotel description..."
                        minHeight={300}
                      />
                    </div>
                    <div className="order-1 order-md-1 order-lg-2 col-lg-6">
                      <div className="vstack">
                        <Input
                          label="Address"
                          id="addressInput"
                          name="address"
                          type="text"
                          placeholder="Enter hotel address"
                        />
                        <label className="form-label mt-3">Type</label>
                        <AutocompleteSelect<string, string>
                          options={groupList}
                          getOptionLabel={(v) => v}
                          getOptionValue={(v) => v}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3 px-md-4">
                <div className="hstack">
                  <h5 className="mb-0">Contacts</h5>
                  <div className="ms-auto">
                    <Link
                      href=""
                      className="btn btn-primary"
                    >
                      Add new
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body px-md-4">
                <div className="d-flex flex-wrap gap-3">
                  {list.map((i) => (
                    <ContactChip key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3 px-md-4">
                <div className="hstack">
                  <h5 className="mb-0">Location</h5>
                </div>
              </div>
              <div className="card-body px-md-4">
                <div className="vstack">
                  <div className="row g-3">
                  <div className="col-lg-6">
                      <Input
                        label="Latitude"
                        id="latitudeInput"
                        name="latitude"
                        type="text"
                        placeholder="Enter latitude"
                      />
                    </div>
                    <div className="col-lg-6">
                      <Input
                        label="Longitude"
                        id="logitudeInput"
                        name="Longitude"
                        type="text"
                        placeholder="Enter longitude"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3 px-md-4">
                <h5 className="mb-0">Images</h5>
              </div>
              <div className="card-body px-md-4">
                <div className="d-flex flex-wrap gap-2">
                  <button
                    className="btn btn-light-gray hstack justify-content-center"
                    style={{ width: 120, height: 120 }}
                  >
                    <PlusIcon
                      width={44}
                      strokeWidth={2}
                      className="text-muted"
                    />
                  </button>
                </div>
              </div>
              <div className="card-footer px-4 py-3">
                <span className="text-muted">
                  Product image can upload up to <strong>5</strong> images with
                  dimension constraint of at most <strong>600x600</strong>{" "}
                  pixels.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3 px-md-4">
                <div className="hstack">
                  <h5 className="mb-0">Amenities/Facilities</h5>
                  <div className="ms-auto">
                    <Link
                      href=""
                      className="btn btn-primary"
                    >
                      Add new
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body px-md-4">
                <div className="d-flex flex-wrap gap-3">
                  {list.map((i) => (
                    <FacilitiesChip key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-header bg-white py-3 px-md-4">
                <h5 className="mb-0">Area information</h5>
              </div>
              <div className="card-body p-0 ">
                <DynamicEditor
                  id="areaInfoInput"
                  placeholder="Enter hotel area info..."
                  minHeight={300}
                  noBorder
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelEdit;
