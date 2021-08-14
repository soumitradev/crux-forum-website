import React from 'react';
import NextLink from 'next/link';

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
};

const Link: React.FC<LinkProps> = ({ href, className, children, ...props }) => {
  return (
    <>
      <NextLink href={href}>
        <a
          className={`underline text-cyan ${className ? className : ''}`}
          {...props}
        >
          {children}
        </a>
      </NextLink>
    </>
  );
};

export default Link;
