export default function MobileLegend() {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-1/3 w-80">
        <label className="relative block">
          <form>
            {/* <form onSubmit={handleSearch}> */}
            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <box-icon name="search-alt-2" color="#5c5c5c"></box-icon>
          </span> */}
            <input
              className="rounded-full placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              placeholder="Coba kocok..."
              type="search"
              name="search"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </label>
      </div>
    </div>
  );
}
