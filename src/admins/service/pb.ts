import PocketBase from "pocketbase";
import { api } from "./api";

export const pb = new PocketBase(api.base_url);
