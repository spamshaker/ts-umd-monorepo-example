import {components, VERSION as LOOKUP_VERSION} from "@ria-develop/search-lookup";
import {utils, VERSION as API_VERSION} from "@ria-develop/shared-api-lib";
import React from "react";
import ReactDOM from "react-dom";

const {SearchField} = components.search;

export const VERSION = "v1";
utils.print(`Main App ${VERSION}, Lookup ${LOOKUP_VERSION}, API  ${API_VERSION} in use`);
const element = document.querySelector("#root");
ReactDOM.render(<SearchField/>, element);
