interface PsicologiaSVGProps {
  className?: string;
}

function PsicologiaSVG({ className }: PsicologiaSVGProps) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Psicologia Icon</title>
      <path
        d="M15 2C7.82 2 2 7.82 2 15C2 22.18 7.82 28 15 28C22.18 28 28 22.18 28 15C28 7.82 22.18 2 15 2ZM15 26C8.93 26 4 21.07 4 15C4 8.93 8.93 4 15 4C21.07 4 26 8.93 26 15C26 21.07 21.07 26 15 26Z"
        fill="currentColor"
      />
      <path
        d="M15 6C10.58 6 7 9.58 7 14C7 18.42 10.58 22 15 22C19.42 22 23 18.42 23 14C23 9.58 19.42 6 15 6ZM15 20C11.69 20 9 17.31 9 14C9 10.69 11.69 8 15 8C18.31 8 21 10.69 21 14C21 17.31 18.31 20 15 20Z"
        fill="currentColor"
      />
      <path
        d="M15 10C12.79 10 11 11.79 11 14C11 16.21 12.79 18 15 18C17.21 18 19 16.21 19 14C19 11.79 17.21 10 15 10ZM15 16C13.9 16 13 15.1 13 14C13 12.9 13.9 12 15 12C16.1 12 17 12.9 17 14C17 15.1 16.1 16 15 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default PsicologiaSVG;
