import { loadState } from "../storage";
import { UserPersistentState, UserState } from "./userInterface";

export const JWT_PERSISTENT = "userData";

export const initialState: UserState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT)?.jwt ?? null,
};
