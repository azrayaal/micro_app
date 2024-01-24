import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeroCard from "./components/HeroCard";
import BackButton from "../../components/backButton";

interface Hero {
  id: string;
  mlid: string;
  hero_name: string;
  hero_role: string;
  hero_specially: string;
  hero_avatar: string;
}

export default function MobileLegend() {
  const [search, setSearch] = useState("");
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e: any) => {
    e.preventDefault();
    await axios
      .get(`https://api.dazelpro.com/mobile-legends/hero?heroName=${setSearch}`)
      .then((response) => {
        console.log("data search", response.data.hero);
        setSearchInfo(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(search);
  };

  const getDataHeroes = async () => {
    await axios
      .get(`https://api.dazelpro.com/mobile-legends/hero`)
      .then((response) => {
        // console.log("data herodata ml", response.data);
        setHeroes(response.data.hero);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const mockEvent = { preventDefault: () => {} };
    handleSearch(mockEvent);
    getDataHeroes();
  }, []);

  return (
    <>
      <BackButton />
      <p className="text-3xl font-bold mb-2 text-center pb-5 ">MOBILE LEGEND</p>
      <div className="mb-3 xl:w-1/3 w-80 mx-auto">
        <label className="relative block">
          <form onSubmit={handleSearch}>
            <input
              className="rounded-full placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              placeholder="Search Here"
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </label>
      </div>
      <div className="flex justify-center">
        <main className="list-film py-3">
          <div className="container-fluid">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {heroes
                .filter((hero) =>
                  hero.hero_name.toLowerCase().includes(search.toLowerCase())
                )
                .map((hero) => (
                  <HeroCard
                    hero_name={hero.hero_name}
                    hero_role={hero.hero_role}
                    hero_specially={hero.hero_specially}
                    id={hero.id}
                  />
                ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
