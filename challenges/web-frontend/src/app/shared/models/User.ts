export interface User {
  token: string;
  type: string;
  privileges: string;
  authenticared: boolean;
  userId: string;
  internalUserId: number;
  internalUserUUID: string;
}
