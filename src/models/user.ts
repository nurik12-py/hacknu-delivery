export interface User {
  id: number;
  name: string;
  surname?: string;
  fatherName?: string;
  phoneNumber?: string;
  born: Date;
  avatarUrl?: string;
  roleCode: number;
  staffPositionCode: number;
  email: string;
  password: string;
  status: boolean;
  createdAt: Date;
}
