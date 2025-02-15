type SecurityBoxStatus = "ACTIVE" | "DELETED";

export interface ListSecurityBoxResponse {
  id: string;
  name: string;
  favorite: boolean;
  icon: string;
  status: SecurityBoxStatus;
  createdAt: Date;
}
