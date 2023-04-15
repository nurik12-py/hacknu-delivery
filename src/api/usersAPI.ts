import { AxiosResponse } from "axios";
import { User } from "../models/user";
import api from "./api";

const USERS_ENDPOINT = `/user`;

export const getUsers = (): Promise<AxiosResponse<User[]>> => {
  return api.get<User[]>(USERS_ENDPOINT);
};

export const createUser = (user: User): Promise<AxiosResponse<number>> => {
  return api.post<number>(USERS_ENDPOINT, user);
};

export const getUser = (id: number): Promise<AxiosResponse<User>> => {
  const url = `${USERS_ENDPOINT}/${id}`;
  return api.get<User>(url);
};

export const updateUser = (
  id: number,
  user: User
): Promise<AxiosResponse<User>> => {
  const url = `${USERS_ENDPOINT}/${id}`;
  return api.put<User>(url, user);
};

export const deleteUser = (id: number): Promise<AxiosResponse<void>> => {
  const url = `${USERS_ENDPOINT}/${id}`;
  return api.delete<void>(url);
};
