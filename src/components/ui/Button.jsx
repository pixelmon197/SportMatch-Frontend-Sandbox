export default function Button({ variant = "", size = "", children, ...rest }) {
  return (
    <button className={`btn ${variant} ${size}`.trim()} {...rest}>
      {children}
    </button>
  );
}
