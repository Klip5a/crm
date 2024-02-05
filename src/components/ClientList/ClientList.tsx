import React, { useState } from "react";

import { ClientListHeader } from "./clientList-header";
import { Client } from "./clientList-client";

interface Client {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  contacts: string;
  [key: string]: string | number;
}

const mockClients: Client[] = [
  {
    id: 1,
    name: "А А А",
    createdAt: "2023-05-15 08:20",
    updatedAt: "2023-01-02 15:30",
    contacts: "укн@mail.com",
  },
  {
    id: 2,
    name: "Б Б Б",
    createdAt: "2023-02-05 14:45",
    updatedAt: "2023-02-08 12:20",
    contacts: "фыренм@mail.com",
  },
  {
    id: 3,
    name: "В В В",
    createdAt: "2023-04-20 11:30",
    updatedAt: "2023-03-12 18:30",
    contacts: "рфуе@mail.com",
  },
  {
    id: 4,
    name: "Г Г Г",
    createdAt: "2023-03-10 09:15",
    updatedAt: "2023-04-22 14:55",
    contacts: "йцу@mail.com",
  },
  {
    id: 5,
    name: "Д Д Д",
    createdAt: "2023-01-01 10:00",
    updatedAt: "2023-05-18 16:40",
    contacts: "фыв@mail.com",
  },
];

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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
