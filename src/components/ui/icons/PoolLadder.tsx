import React from 'react'

export const PoolLadder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 22V5c0-1.1-.9-2-2-2s-2 .9-2 2v7" />
    <path d="M5 22V5c0-1.1.9-2 2-2s2 .9-2 2v7" />
    <path d="M15 7H9M15 11H9" />
    <path d="M2 20c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2 1.5 2 3 2" />
  </svg>
)

export default PoolLadder
