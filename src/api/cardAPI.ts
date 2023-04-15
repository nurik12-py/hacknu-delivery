import { Card } from "../models/card";
import api from "./api";

const BASE_URL = "/cards";

export async function createCard(card: Card): Promise<number> {
  const response = await api.post(BASE_URL, card);
  const data = response.data;
  return data.id;
}

export async function getCards(): Promise<Card[]> {
  const response = await api.get(BASE_URL);
  const data = response.data;
  return data as Card[];
}

export async function getCard(id: number): Promise<Card> {
  const url = `${BASE_URL}/${id}`;
  const response = await api.get(url);
  const data = response.data;
  return data as Card;
}

export async function updateCard(id: number, card: Card): Promise<Card> {
  const url = `${BASE_URL}/${id}`;
  const response = await api.put(url, card);
  const data = response.data;
  return data as Card;
}

export async function deleteCard(id: number): Promise<void> {
  const url = `${BASE_URL}/${id}`;
  await api.delete(url);
}
