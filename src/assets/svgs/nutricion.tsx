import type { SVGProps } from 'react';

function NutricaoSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 29 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Nutrição Icon</title>
      <path
        d="M1.82666 15.3032C1.82666 20.1751 2.524 23.6572 5.31652 27.8334C7.4384 30.6557 10.2733 31.3625 13.2952 29.3851C13.9642 28.9642 14.8186 28.9642 15.4893 29.3851C18.5095 31.3641 21.3445 30.6557 23.4663 27.8334C26.2588 23.6556 26.9562 20.1751 26.9562 15.3047C26.9562 11.1254 23.8307 6.94916 19.9765 6.94916C17.9865 6.94916 16.1913 8.03758 14.9191 9.21082C14.7747 9.34193 14.5865 9.41456 14.3914 9.41456C14.1963 9.41456 14.0082 9.34193 13.8637 9.21082C12.5931 8.03915 10.7963 6.94916 8.80639 6.94916C4.95215 6.94916 1.82666 11.1269 1.82666 15.3032Z"
        stroke="currentColor"
        strokeWidth="3.14119"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.53833 16.3727C6.53833 14.0639 7.25138 12.6975 8.89422 11.6609M14.3913 8.51969C14.3913 6.63497 15.753 2.2373 19.1031 2.2373"
        stroke="currentColor"
        strokeWidth="3.14119"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NutricaoSVG;
