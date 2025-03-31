import React from "react";

export default function Container({ children, className, el = "div", clean }) {
  const rootClassName =
    "container mx-auto max-md:px-4 max-lg:px-4 max-xl:px-4 max-2xl:px-4 max-w-[90rem]";

  let Component = el;

  // className varsa, rootClassName ile birleştir
  const combinedClassName = className
    ? `${rootClassName} ${className}`
    : rootClassName;

  return <Component className={combinedClassName}>{children}</Component>;
}
