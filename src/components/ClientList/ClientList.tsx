import React, { useEffect, useState } from "react";
import axios from "axios";

import { ClientListHeader } from "./clientList-header";
import { Client } from "./clientList-client";

interface Contact {
  type: string;
  value: string;
}

interface Client {
  id: number;
  name: string;
  surname: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  contacts: Contact[];
  [key: string]: string | number | Contact[];
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    // Функция для получения списка клиентов с сервера
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/clients");
        setClients(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    // Вызываем функцию при загрузке компонента
    fetchClients();
  }, []); // Пустой массив означает, что этот эффект будет выполняться только при монтировании компонента

  const handleSort = (field: string, order: "asc" | "desc") => {
    const sortedClients = [...clients].sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setClients(sortedClients);
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="container max-w-[1186px] min-w-[728px] mx-auto mt-[40px]">
      <h2 className="text-[24px] font-bold">Клиенты</h2>
      <ClientListHeader onSort={handleSort} sortField={sortField} sortOrder={sortOrder} />
      <div>
        {clients.map((client) => (
          <Client key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientList;
