import { paramsParser, queryParser } from "@/helpers/routeHelpers";
import { useConfigApiStore } from "~~/store/config";

export default function (
  service: string,
  route: string,
  params?: { [key: string]: string | number },
  query?: { [key: string]: string | number | Array<string | number> }
): string {
  const store = useConfigApiStore();

  const currentService = store.services[service] || null;

  if (!currentService)
    throw createError({
      statusCode: 500,
      statusMessage: "getRoute: " + service + ": no such service",
    });

  if (!currentService.routes[route])
    throw createError({
      statusCode: 500,
      statusMessage:
        "getRoute: " + route + ": no such route in service " + service,
    });

  let p = params
    ? paramsParser(currentService.routes[route], params)
    : currentService.routes[route];

  let q = queryParser(query || {});

  return `${currentService.domain}/${p}${q}`;
}
