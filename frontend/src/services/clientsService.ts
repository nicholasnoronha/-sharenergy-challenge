import axios, { AxiosError } from "axios";
import Client from "../interfaces/Client";
import { API } from "./API";

export class clientsService {
  static async getClients(access_token: string) {
    try {
      const response = await axios.get(`${API}/client`, {
        headers: {
          Authorization: access_token,
        },
      });

      return response.data.clients;
    } catch (err: unknown) {
      const error = err as AxiosError;

      alert(error.message);
    }
  }

  static async getClient(access_token: string, user_id: string) {
    try {
      return await axios.get(`${API}/client/${user_id}`, {
        headers: {
          Authorization: access_token,
        },
      });
    } catch (err: unknown) {
      const error = err as AxiosError;

      alert(error.message);
    }
  }

  static async addClient(access_token: string, client: Client) {
    try {
      return await axios.post(`${API}/client/add`, client, {
        headers: {
          Authorization: access_token,
        },
      });
    } catch (err: unknown) {
      const error = err as AxiosError;

      alert(error.message);
    }
  }

  static async updateClient(
    access_token: string,
    client: Client,
    user_id: string
  ) {
    try {
      return await axios.put(`${API}/client/edit/${user_id}`, client, {
        headers: {
          Authorization: access_token,
        },
      });
    } catch (err: unknown) {
      const error = err as AxiosError;

      alert(error.message);
    }
  }

  static async deleteClient(access_token: string, user_id: string) {
    try {
      return await axios.delete(`${API}/client/delete/${user_id}`, {
        headers: {
          Authorization: access_token,
        },
      });
    } catch (err: unknown) {
      const error = err as AxiosError;

      alert(error.message);
    }
  }
}
