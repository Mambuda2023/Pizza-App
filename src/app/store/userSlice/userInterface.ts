export interface UserState {
  jwt: string | null;
  loginState: null | "rejected";
}
export interface UserPersistentState {
  jwt: string | null;
}
