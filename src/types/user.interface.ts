// src/types/user.interface.ts

import { UserRole } from "./user.enum";
import { UserStatus } from "./user.type";

// Interface define o formato do objeto User
export interface User {
  id: number;
  name: string;
  age: number;
  email?: string; // Opcional
  status: UserStatus;
  role: UserRole;
}

// Interface para props de componentes
export interface UserInfoProps {
  user: User;
}

// Interface para o estado do card
export interface UserCardState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
