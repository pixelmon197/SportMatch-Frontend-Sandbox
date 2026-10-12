import { request } from "./http";

// Ejecuta cualquier endpoint del catálogo.
// `url` ya viene con los path params sustituidos (ver models/endpointModel.js).
export function runEndpoint({ endpoint, url, query, body, form }) {
  const isForm = !!form;
  return request({
    method: endpoint.method,
    url,
    params: query,
    data: isForm ? form : body,
    isForm,
  });
}
