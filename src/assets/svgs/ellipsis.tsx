// const EllipsisIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="18"
//     height="15"
//     fill="none"
//     viewBox="0 0 18 15"
//     {...props}
//   >
//     <title>Ellipsis Icon</title>
//     <path
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M9.102 8.125c.393 0 .71-.28.71-.625s-.317-.625-.71-.625-.71.28-.71.625.318.625.71.625M14.077 8.125c.393 0 .71-.28.71-.625s-.317-.625-.71-.625-.71.28-.71.625.318.625.71.625M4.127 8.125c.393 0 .71-.28.71-.625s-.317-.625-.71-.625-.71.28-.71.625.317.625.71.625"
//     />
//   </svg>
// );

// export default EllipsisIcon;


import type { SVGProps } from 'react';

function EllipsisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="15"
    fill="none"
    viewBox="0 0 18 15"
    {...props}
  >
    <title>Ellipsis Icon</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.102 8.125c.393 0 .71-.28.71-.625s-.317-.625-.71-.625-.71.28-.71.625.318.625.71.625M14.077 8.125c.393 0 .71-.28.71-.625s-.317-.625-.71-.625-.71.28-.71.625.318.625.71.625M4.127 8.125c.393 0 .71-.28.71-.625s-.317-.625-.71-.625-.71.28-.71.625.317.625.71.625"
    />
  </svg>
  );
}

export { EllipsisIcon };