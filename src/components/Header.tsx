const Header = () => {
  return (
    <header className="bg-white">
      <div
        className="
          container
          flex 
          flex-wrap
          h-[90px]
          max-w-[1366px]
          mx-auto
          items-center
          p-[20px]
          shadow-sm
        "
      >
        <div
          className="
            w-[50px]
            h-[50px]
            bg-firm
            flex
            items-center
            justify-center
            text-white
            font-bold
            rounded-[50px]
          "
        >
          skb.
        </div>
        <form action="">
          <input
            className="
              w-[581px]
              h-[44px]
              ml-[53px]
              border-[1px]
              border-[rgba(51, 51, 51, 0.2)]
              px-[16px]
              placeholder:text-txt-grey
            "
            placeholder="Введите запрос"
            type="search"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
