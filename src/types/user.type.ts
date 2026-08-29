// src/types/user.type.ts

// Definimos o status do usuário
export type UserStatus = "ativo" | "inativo" | "pendente" | "bloqueado";

// Tipo que aceita usuario ou null (strictNullChecks)
export type NullableUser<T> = T | null;

// Tipo para criar um novo usuário (sem o id)
export type CreateUserDTO = Omit<User, "id">;

// Tipo para atualizar usuário (todos opcionais)
export type UpdateUserDTO = Partial<Omit<User, "id">>;

// Import necessário para o Omit/Partial funcionar
import { User } from "./user.interface";
