"use client";

import React from "react";

/**
 * ClientComponent wrapper.
 * This is a higher-order component that wraps its children to be rendered on the client-side only.
 * It takes advantage of the new 'use client' pragma from React Server Components.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be wrapped and rendered on the client side.
 * @returns {JSX.Element} Wrapped child components.
 */
export const ClientComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};
