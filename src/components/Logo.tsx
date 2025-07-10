export const Logo = () => {
  return (
    <div className="flex items-center space-x-3 select-none">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
      >
        <g>
          {/* Shield background */}
          <path
            d="M24 4L42 10V22C42 34 24 44 24 44C24 44 6 34 6 22V10L24 4Z"
            fill="#23272a" // dark grey
            stroke="#ff7f1a" // orange accent
            strokeWidth="2"
          />
          {/* Garage door lines */}
          <rect x="14" y="20" width="20" height="12" rx="2" fill="#fff" stroke="#ff7f1a" strokeWidth="1.5"/>
          <rect x="16" y="22" width="16" height="2" fill="#ff7f1a"/>
          <rect x="16" y="26" width="16" height="2" fill="#ff7f1a"/>
          <rect x="16" y="30" width="16" height="2" fill="#ff7f1a"/>
        </g>
      </svg>
      <span className="font-extrabold text-xl tracking-wide text-white uppercase">
        USA <span className="text-[#ff7f1a]">Garage Experts</span>
      </span>
    </div>
  );
};