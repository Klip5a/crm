import arrowSort from "../../assets/arrow-sort.svg";

interface ClientListHeaderProps {
  onSort: (field: string, order: "asc" | "desc") => void;
  sortField: string | null;
  sortOrder: "asc" | "desc";
}

export const ClientListHeader: React.FC<ClientListHeaderProps> = ({
  onSort,
  sortField,
  sortOrder,
}) => {
  const handleSort = (field: string) => {
    const newOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    onSort(field, newOrder);
  };

  const renderSortIcon = (field: string) => {
    return (
      <img
        src={arrowSort}
        alt={`Sort ${sortOrder === "asc" ? "ascending" : "descending"}`}
        className={`ml-1 h-2.5 w-2.5 inline-block transform ${
          sortField === field && sortOrder === "desc" ? "rotate-180" : ""
        }`}
      />
    );
  };

  return (
    <div className="flex items-center text-xs text-grey mt-2.5 h-8">
      <div
        className="flex items-center w-[100px] min-w-[80px] cursor-pointer pl-5 text-firm"
        onClick={() => handleSort("id")}
      >
        ID
        {renderSortIcon("id")}
      </div>
      <div
        className="flex items-center w-[370px] min-w-[218px] cursor-pointer"
        onClick={() => handleSort("name")}
      >
        Фамилия Имя Отчество
        <i>{renderSortIcon("name")}</i>
        <span className="ml-1 text-firm text-[10px]">{sortOrder === "asc" ? "А-Я" : "Я-А"}</span>
      </div>
      <div
        className="flex items-center w-[175px] min-w-[100px] cursor-pointer"
        onClick={() => handleSort("createdAt")}
      >
        Дата и время создания
        {renderSortIcon("createdAt")}
      </div>
      <div
        className="flex items-center w-[175px] min-w-[100px] cursor-pointer"
        onClick={() => handleSort("updatedAt")}
      >
        Последние изменения
        {renderSortIcon("updatedAt")}
      </div>
      <div className="flex items-center w-[160px] min-w-[130px]">Контакты</div>
      <div className="flex items-center w-[210px] min-w-[105px]">Действия</div>
    </div>
  );
};
