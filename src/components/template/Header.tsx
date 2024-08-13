import { Offcanvas } from "bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { AuthenticationContext } from "../../common/contexts";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
  hideAuth?: boolean;
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Link
        href={href}
        className="nav-link d-flex align-items-center d-none d-lg-block"
      >
        {children}
      </Link>
      <div
        className="nav-link d-flex align-items-center d-block d-lg-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        onClick={(e) => {
          e.preventDefault();
          router.push(href);
        }}
        role="button"
      >
        {children}
      </div>
    </>
  );
}

function AccountMenu({ onNavClick }: { onNavClick?: () => void }) {
  const profileDropdownToggle = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    let profileDropdown: any;

    const initDropdowns = async () => {
      const Dropdown = (await import("bootstrap")).Dropdown;
      if (!profileDropdownToggle.current) {
        return;
      }
      profileDropdown = new Dropdown(profileDropdownToggle.current);
    };

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      profileDropdown?.show();
    };

    initDropdowns();

    const element = profileDropdownToggle.current;

    element?.addEventListener("click", handleClick);

    return () => {
      element?.removeEventListener("click", handleClick);
      profileDropdown?.dispose();
    };
  }, []);

  return (
    <AuthenticationContext.Consumer>
      {({ payload, status }) => {
        // if (status !== "success" || !payload) {
        //   return null;
        // }
        return (
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                ref={profileDropdownToggle}
                href="#"
                className="nav-link hstack dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                id="profileMenuLink"
                style={{
                  outlineStyle: "none"
                }}
              >
                {/* <div
            className="d-none d-lg-block me-1 ratio ratio-1x1"
            style={{ width: 35, height: 35 }}
          >
            <Image
              src="/images/profile.png"
              alt=""
              className="rounded-circle"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
                <span className="">Hi, {payload?.name ?? "User"}</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileMenuLink"
              >
                {/* <li className="d-none d-lg-block">
                  <div className="dropdown-header py-0">
                    <div className="mb-1">Signed in as</div>
                    <h6 className="text-dark">{payload.name ?? ""}</h6>
                  </div>
                </li>
                <li className="d-none d-lg-block">
                  <hr className="dropdown-divider" />
                </li> */}
                <li>
                  <Link
                    href="/profile/overview"
                    className="dropdown-item text-decoration-none"
                    onClick={(e) => onNavClick && onNavClick()}
                  >
                    My profile
                  </Link>
                </li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item">
                  <div
                    role="button"
                    onClick={() => {
                      onNavClick && onNavClick();
                    }}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        );
      }}
    </AuthenticationContext.Consumer>
  );
}

function Header({ hideAuth }: HeaderProps) {
  const router = useRouter();
  const offcanvasRef = useRef<HTMLDivElement | null>(null);
  const offcanvas = useRef<Offcanvas>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    const initOffcanvas = async () => {
      const Offcanvas = (await import("bootstrap")).Offcanvas;
      if (!offcanvasRef.current) {
        return;
      }
      offcanvas.current = new Offcanvas(offcanvasRef.current, {
        scroll: true
      });
    };

    initOffcanvas();

    return () => {
      offcanvas.current?.dispose();
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLElement>) {
    event.preventDefault();
  }

  return (
    <header className="fixed-top">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
        style={{ height: 70 }}
      >
        <div className="container">
          <div className="hstack w-100">
            <Link href="/" className="navbar-brand d-none d-lg-block">
              <div className="d-flex align-items-center">
                {/* <Image
                src="/images/logo_round.png"
                width={40}
                height={40}
                alt=""
              /> */}
                <h3 className="mb-0 fw-bold text-primary">
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </h3>
              </div>
            </Link>

            <ul className="navbar-nav align-items-lg-center gap-2 me-2">
              <li className="nav-item d-none d-lg-block">
                <NavLink href="/hotels">Hotels</NavLink>
              </li>
            </ul>

            <div
              ref={offcanvasRef}
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title fw-bold text-primary mb-0 d-flex align-items-center"
                  id="offcanvasNavbarLabel"
                >
                  {/* <Image
                src="/images/logo_round.png"
                width={30}
                height={30}
                alt=""
              /> */}
                  <span className="">{process.env.NEXT_PUBLIC_APP_NAME}</span>
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset shadow-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="flex-grow-1"></div>
                <ul className="navbar-nav align-items-lg-center gap-2">
                  <li className="nav-item d-block d-lg-none">
                    <NavLink href="/hotels">Hotels</NavLink>
                  </li>
                </ul>

                <AccountMenu onNavClick={() => offcanvas.current?.hide()} />

                <AuthenticationContext.Consumer>
                  {({ payload, status }) => {
                    if (payload) {
                      return null;
                    }
                    return (
                      <div className="ms-lg-2 d-flex align-items-center mt-3 mt-lg-0">
                        <div className="nav-item">
                          <Link
                            href="/sign-up"
                            className="btn btn-outline-primary d-none d-lg-block"
                          >
                            Sign up
                          </Link>
                          <div
                            role="button"
                            className="btn btn-outline-primary d-block d-lg-none"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/sign-up");
                            }}
                          >
                            Sign up
                          </div>
                        </div>
                        <div className="nav-item">
                          <Link
                            href="/login"
                            className="btn btn-primary ms-2 d-none d-lg-block"
                          >
                            Login
                          </Link>
                          <div
                            role="button"
                            className="btn btn-primary ms-2 d-block d-lg-none"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/login");
                            }}
                          >
                            Login
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </AuthenticationContext.Consumer>
              </div>
            </div>

            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
