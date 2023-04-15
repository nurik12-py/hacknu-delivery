import axios, { AxiosResponse } from "axios";
import { GroupDoor } from "../models/doorGroup";

const API_URL = "/group-door";

export async function createGroupDoor(groupDoor: GroupDoor): Promise<number> {
  const response: AxiosResponse<number> = await axios.post(
    `${API_URL}`,
    groupDoor
  );
  return response.data;
}

export async function getGroupDoors(): Promise<GroupDoor[]> {
  const response: AxiosResponse<GroupDoor[]> = await axios.get(
    `${API_URL}`,
    {}
  );
  return response.data;
}

export async function getGroupDoor(id: number): Promise<GroupDoor> {
  const response: AxiosResponse<GroupDoor> = await axios.get(
    `${API_URL}/${id}`
  );
  return response.data;
}

export async function updateGroupDoor(
  id: number,
  groupDoor: GroupDoor
): Promise<GroupDoor> {
  const response: AxiosResponse<GroupDoor> = await axios.put(
    `${API_URL}/${id}`,
    groupDoor
  );
  return response.data;
}

export async function deleteGroupDoor(id: number): Promise<void> {
  await axios.delete(`${API_URL}/group-doors/${id}`);
}
