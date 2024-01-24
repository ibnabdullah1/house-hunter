import { useEffect, useState } from "react";
import axios from "axios";
import HouseCard from "./HouseCard";
const AllRooms = () => {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedHouses = [...filteredHouses].sort((a, b) => {
    if (sortBy === "price_asc") {
      return b.rent - a.rent;
    } else if (sortBy === "price_desc") {
      return a.rent - b.rent;
    } else if (sortBy === "bath_asc") {
      return b.bathrooms - a.bathrooms;
    } else if (sortBy === "bed_asc") {
      return b.bedrooms - a.bedrooms;
    } else if (sortBy === "room_asc") {
      return b.room - a.room;
    }
    return 0;
  });
  useEffect(() => {
    axios
      .get("https://server-indol-sigma.vercel.app/houses")
      .then((res) => setHouses(res.data));
  }, []);

  return (
    <div className="py-20 bg-[#F5FCFF] min-h-screen">
      <header className="mb-8 lg:mb-10 mx-auto max-w-6xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4 px-3 lg:px-0">
          <form>
            <div className="flex">
              <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                  placeholder="Search Book"
                  value={searchQuery}
                  onChange={handleSearch}
                  required
                />
                <div className="absolute right-0 top-0 flex h-full items-center">
                  <button
                    type="submit"
                    className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                  >
                    <svg
                      className="h-[14px] w-[14px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="flex items-stretch space-x-3">
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              value={sortBy}
              onChange={handleSort}
            >
              <option value="">Sort</option>
              <option value="price_asc">Rent High To Low(Oldest)</option>
              <option value="price_desc">Rent Low To High(Oldest)</option>
              <option value="bath_asc">Bathrooms High To Low(Oldest)</option>
              <option value="bed_asc">Bedrooms High To Low(Oldest)</option>
              <option value="room_asc">Room Size High To Low(Oldest)</option>
            </select>
          </div>
        </div>
      </header>

      {isLoading ? (
        <div className="min-h-[60vh] flex justify-center">
          <div>
            <img
              className="w-14 h-14 animate-spin"
              src="https://www.svgrepo.com/show/448500/loading.svg"
              alt="Loading icon"
            />
          </div>
        </div>
      ) : (
        sortedHouses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 max-w-6xl mx-auto">
            {sortedHouses.map((house, i) => (
              <HouseCard key={i} house={house} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default AllRooms;
