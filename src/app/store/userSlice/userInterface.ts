export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string;
}
export interface UserPersistentState {
  jwt: string | null;
}
