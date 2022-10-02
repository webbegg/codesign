const Logo = (props) => (
  <svg
    width={100}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.481 0h-14.24v14.24H0V57.279h14.24V71.52H43.038V56.962H14.557V14.557h28.481V0H28.481Zm56.962 14.557H56.962V0h28.797v14.24H100V57.279H85.76V71.52H56.962V56.962h28.481V14.557ZM56.962 28.481H28.481v14.557h43.038V28.481H56.962Z"
      fill={props.color ?? "#333"}
    />
  </svg>
);

export default Logo;
