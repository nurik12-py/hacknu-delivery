import { AxiosResponse } from "axios";
import { Staff } from "../models/staff";
import api from "./api";

const BASE_URL = "/staff";

export async function fetchStaff(): Promise<Staff[]> {
  const response: AxiosResponse<Staff[]> = await api.get(BASE_URL);
  return response.data;
}

export async function createStaff(staff: Staff): Promise<Staff> {
  const response: AxiosResponse<Staff> = await api.post(BASE_URL, staff);
  return response.data;
}

export async function updateStaff(staff: Staff): Promise<Staff> {
  const response: AxiosResponse<Staff> = await api.put(
    `/${BASE_URL}/${staff.id}`,
    staff
  );
  return response.data;
}

export async function deleteStaff(id: number): Promise<void> {
  await api.delete(`${BASE_URL}/${id}`);
}
