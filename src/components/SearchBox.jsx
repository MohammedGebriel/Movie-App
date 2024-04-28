
export default function SearchBox({ searchValue, setSearchValue }) {
  return (
    <div className="w-[50%] md:w-[30%]">
      <input
        placeholder="Type To Search"
        type="text"
        className="w-full form py-1 px-2"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
