"use client";

import React from "react";
import style from "./index.style.module.scss";
import Link from "next/link";
import { ClientComponent } from "../utility/client-component";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className={`${style.Header} tw-p-5 top-level-indent`}>
      <ClientComponent>
        <nav className="flex-c full-width xl-component-width">
          <ul className={`flex-r gap-sm align-center no-list-style wrap`}>
            <li className={`${style.navMain}`}>
              <NavLink href="/" exact>
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink href="/svar">Svar</NavLink>
            </li>
          </ul>
        </nav>
      </ClientComponent>
    </header>
  );
};

export default Header;

type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  id?: string;
  className?: string;
};

function NavLink({
  href,
  exact = false,
  children,
  id = "",
  className = "",
  ...rest
}: NavLinkProps) {
  const pathname = usePathname();

  /**
   * Determines if the NavLink should be marked as active based on the current URL.
   *
   * @function isActive
   *
   * @returns {boolean} True if the NavLink should be active, false otherwise.
   */
  const isActive = () => {
    return exact ? pathname === href : pathname.startsWith(href);
  };

  return (
    <Link
      href={href}
      className={`${style.navLink} ${
        isActive() ? style.active : ""
      } nav-link ${className} `}
      id={id}
      {...rest}
    >
      {children}
    </Link>
  );
}
