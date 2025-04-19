import type { SVGProps } from 'react';
function GloboSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Globo</title>
      <path
        d="M12.6511 22.7675C18.174 22.7675 22.6511 18.2903 22.6511 12.7675C22.6511 7.24461 18.174 2.76746 12.6511 2.76746C7.12828 2.76746 2.65112 7.24461 2.65112 12.7675C2.65112 18.2903 7.12828 22.7675 12.6511 22.7675Z"
        stroke="#736CCE"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.65112 12.7675H22.6511"
        stroke="#736CCE"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6511 2.76746C15.1524 5.50581 16.5739 9.05949 16.6511 12.7675C16.5739 16.4754 15.1524 20.0291 12.6511 22.7675C10.1498 20.0291 8.72837 16.4754 8.65112 12.7675C8.72837 9.05949 10.1498 5.50581 12.6511 2.76746Z"
        stroke="#736CCE"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default GloboSVG;
