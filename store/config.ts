import { defineStore } from "pinia";
import { domainParser } from "~~/helpers/routeHelpers";
import { IApiServiceList, IDomain } from "~~/types/ApiService";

export const useConfigApiStore = defineStore("configApi", () => {
  const domainMain: IDomain = {
    secure: false,
    domain: "",
    prefix: "",
  };

  const domainMock: IDomain = {
    secure: false,
    domain: "",
    prefix: "api",
  };

  const services = computed<IApiServiceList>(() => ({
    main: {
      domain: domainParser(domainMain),
      routes: {
        test: "demo/route/for/%id1%/testing/%id2%",
      },
    },
    mock: {
      domain: domainParser(domainMock, true),
      routes: {
        music: "music",
      },
    },
  }));

  return {
    services,
  };
});
