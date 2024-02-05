// ClientRow.tsx

interface ClientListClientProps {
  client: {
    id: number;
    name: string;
    surname: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    contacts: { type: string; value: string }[];
  };
}

const formatDateTime = (dateTime: string): { date: string; time: string } => {
  const dateObj = new Date(dateTime);
  const formattedDate = dateObj.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("ru-RU", { hour: "numeric", minute: "numeric" });
  return { date: formattedDate, time: formattedTime };
};

export const Client: React.FC<ClientListClientProps> = ({ client }) => {
  const formattedCreatedAt = formatDateTime(client.createdAt);
  const formattedUpdatedAt = formatDateTime(client.updatedAt);

  return (
    <div
      className="
        flex 
        items-center 
        border-b 
        border-gray-200 
        py-2 
        h-[60px]
        bg-white text-sm
      "
    >
      <div className="w-[100px] min-w-[80px] pl-5 text-txt-grey text-xs">{client.id}</div>
      <div className="w-[370px] min-w-[218px] text-sm">
        {client.name} {client.lastName} {client.surname}
      </div>
      <div className="w-[175px] min-w-[100px] text-sm">
        {formattedCreatedAt.date} <span className="text-txt-grey">{formattedCreatedAt.time}</span>
      </div>
      <div className="w-[175px] min-w-[100px]">
        {formattedUpdatedAt.date} <span className="text-txt-grey">{formattedUpdatedAt.time}</span>
      </div>
      <div className="w-[160px] min-w-[130px]">
        {client.contacts.map((contact, index) => (
          <div key={index}>
            <strong>{contact.type}:</strong> {contact.value}
          </div>
        ))}
      </div>
      <div className="w-[210px] min-w-[105px]">Действия</div>
    </div>
  );
};
