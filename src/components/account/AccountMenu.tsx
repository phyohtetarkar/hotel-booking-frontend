import { BuildingStorefrontIcon, ClipboardIcon, Cog8ToothIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const iconSize = 20;

function AccountMenu({}) {
  const router = useRouter();

  function menuLink({
    href,
    title,
    icon
  }: {
    href: string;
    title: string;
    icon: ReactNode;
  }) {
    const active = router.pathname === href;
    return (
      <Link href={href} className={`d-flex align-items-center p-2 my-list-item ${
        active ? "active" : ""
      }`}>
          {icon}
          <span>{title}</span>
      </Link>
    );
  }

  const content = (
    <>
      <div className="text-dark-gray mb-2 small px-1 uppercased">
        ACCOUNT SETTINGS
      </div>
      <div className="vstack gap-1">
        {menuLink({
          href: "/profile/overview",
          title: "Profile overview",
          icon: <UserIcon className="me-2" strokeWidth={2} width={iconSize} />
        })}
        {menuLink({
          href: "/profile/orders-history",
          title: "Booking history",
          icon: (
            <ClipboardIcon className="me-2" strokeWidth={2} width={iconSize} />
          )
        })}
        {menuLink({
          href: "/profile/saved",
          title: "My saved",
          icon: <HeartIcon className="me-2" strokeWidth={2} width={iconSize} />
        })}
        {menuLink({
          href: "/profile/setting",
          title: "Profile setting",
          icon: (
            <Cog8ToothIcon className="me-2" strokeWidth={2} width={iconSize} />
          )
        })}
      </div>
    </>
  );

  return (
    <>
      <div
        className="card d-none d-lg-block sticky-lg-top"
        style={{
          top: 86
        }}
      >
        <div className="card-body">{content}</div>
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
            <div className="accordion-body p-3">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountMenu;