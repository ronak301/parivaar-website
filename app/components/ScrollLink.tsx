"use client";

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps &
  LinkProps &
  PropsWithChildren & {
    setDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    offset?: number;
  };

const ScrollLink = ({
  children,
  setDrawerOpen,
  offset = 0,
  ...props
}: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    console.log("clicke ");
    const targetId: string = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (targetId === "aboutus1" && elem) {
      window.scrollTo({
        top: 20000,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: elem?.getBoundingClientRect().top || 0 + 200,
        behavior: "smooth",
      });
    }
    if (setDrawerOpen) {
      setDrawerOpen(false);
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
