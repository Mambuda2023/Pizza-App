export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string;
  profile?: Profile;
  registerErrorMessage?: string;
}
export interface UserPersistentState {
  jwt: string | null;
}

export interface Profile {
  id: number;
  email: string;
  name: string;
  address: string;
  phone: string;
}
