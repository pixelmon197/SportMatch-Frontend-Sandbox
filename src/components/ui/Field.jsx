export default function Field({ label, id, children, ...inputProps }) {
  return (
    <div className="field">
      {label && <label htmlFor={id}>{label}</label>}
      {children || <input id={id} {...inputProps} />}
    </div>
  );
}
