// ClientRow.tsx
import React from "react";

interface ClientListClientProps {
  client: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    contacts: string;
    [key: string]: string | number;
  };
}

export const Client: React.FC<ClientListClientProps> = ({ client }) => {
  return (
    <div className="
        flex 
        items-center 
        border-b 
        border-gray-200 
        py-2 
        h-[60px]
        bg-white text-sm
      ">
      <div className="w-[100px] min-w-[80px] pl-5">{client.id}</div>
      <div className="w-[370px] min-w-[218px]">{client.name}</div>
      <div className="w-[175px] min-w-[100px]">{client.createdAt}</div>
      <div className="w-[175px] min-w-[100px]">{client.updatedAt}</div>
      <div className="w-[160px] min-w-[130px]">{client.contacts}</div>
      <div className="w-[210px] min-w-[105px]">Действия</div>
    </div>
  );
};
