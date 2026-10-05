import type { AnchorHTMLAttributes } from 'react'

/** Anchor for the hash router: `<Link to="/gene/ASPA">`. */
export function Link({ to, ...rest }: { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a href={`#${to}`} {...rest} />
}
