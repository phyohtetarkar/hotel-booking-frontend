import { ChartBarIcon, HomeIcon, TagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import Dropdown from "../../../../components/Dropdown";
import Dashboard from "../../../../components/merchant/Dashboard";
import DiscountListing from "../../../../components/merchant/DiscountListing";
import RoomListing from "../../../../components/merchant/RoomListing";

type PageTab = "dashboard" | "rooms" | "discounts";

function HotelOverview() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<PageTab>("dashboard");

  const iconSize = 20;

  let image = `/images/bagan.jpeg`;

  useEffect(() => {
    if (router.isReady) {
      const array = router.asPath.split("#");
      const tab = array[array.length - 1];
      setActiveTab(tab as PageTab);
    }
  }, [router]);

  function menuLink({
    href,
    title,
    icon
  }: {
    href: string;
    title: string;
    icon: ReactNode;
  }) {
    const active = router.asPath === href;
    return (
      <Link
        href={href}
        className={`d-flex align-items-center p-2 my-list-item ${
          active ? "active" : ""
        }`}
        replace
      >
        {icon}
        <span>{title}</span>
      </Link>
    );
  }
  const menus = (
    <>
      <div className="vstack gap-1">
        {menuLink({
          href: "/profile/hotels/id#dashboard",
          title: "Dashboard",
          icon: (
            <ChartBarIcon className="me-2" strokeWidth={2} width={iconSize} />
          )
        })}
        {menuLink({
          href: "/profile/hotels/id#rooms",
          title: "Rooms",
          icon: <HomeIcon className="me-2" strokeWidth={2} width={iconSize} />
        })}
        {menuLink({
          href: "/profile/hotels/id#discounts",
          title: "Discounts",
          icon: <TagIcon className="me-2" strokeWidth={2} width={iconSize} />
        })}
      </div>
    </>
  );

  const activeContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "rooms":
        return <RoomListing />;
      case "discounts":
        return <DiscountListing />;
    }
  };

  return (
    <div className="vstack">
      <div className="bg-primary">
        <div className="container py-4">
          <div className="hstack">
            <div>
              <div className="px-2">
                <h3 className="text-light text-lg-start">Hotel Overview</h3>
              </div>
              <div className="row px-2">
                <nav aria-label="breadcrumb col-12">
                  <ol className="breadcrumb mb-1">
                    <li className="breadcrumb-item">
                      <Link href="/profile/hotels" className="text-light">
                        Hotels
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Bagan View Hotel
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="border bg-white vstack">
              <div
                style={{
                  width: "100%",
                  height: 200
                }}
                className="position-relative"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="row p-3 py-sm-4 position-relative">
                <div className="col">
                  <div className="hstack flex-wrap gap-2">
                    <div className="flex-shrink-0 mt-n9">
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt=""
                        className="border border-white border-4"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="ms-2 d-flex flex-column mt-n2 mt-sm-n3">
                      <h4 className="mb-0">{"Bagan View Hotel"}</h4>
                      <div className="text-muted small mb-1">
                        {"9 jasmin Road, New Bagan"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto">
                  <div
                    className="mt-2 mt-sm-0 gap-1 hstack"
                    style={{ zIndex: 999 }}
                  >
                    <div className="flex-grow-1 d-none d-md-block"></div>
                    <Dropdown
                      toggle={
                        <button className="btn btn-outline-light text-muted dropdown-toggle">
                          Hotel Action
                        </button>
                      }
                      menuClassName="dropdown-menu-end"
                    >
                      <li role="button" className="dropdown-item">
                        Edit
                      </li>
                      <li role="button" className="dropdown-item">
                        Delete
                      </li>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4 g-3">
          <div className="col-lg-3">
            <>
              <div className="card d-none d-lg-block">
                <div className="card-body">{menus}</div>
              </div>
              <div className="accordion border rounded d-block d-lg-none">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button
                      className="accordion-button fw-bold collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseMenu"
                      aria-expanded="false"
                      aria-controls="collapseMenu"
                    >
                      Menu
                    </button>
                  </div>

                  <div
                    id="collapseMenu"
                    className="accordion-collapse collapse border-top"
                  >
                    <div className="accordion-body p-3">{menus}</div>
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="col-lg-9">{activeContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default HotelOverview;
