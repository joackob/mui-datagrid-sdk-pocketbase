// import PocketBase from "pocketbase/cjs";
const PocketBase = require("pocketbase/cjs");
import { api } from "./api";

export const pb = new PocketBase(api.base_url);
