export default function JsonView({ data }) {
  const text = data === null || data === undefined ? "(sin contenido)" : JSON.stringify(data, null, 2);
  return <pre className="json">{text}</pre>;
}
