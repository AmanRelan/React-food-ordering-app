const MenuShimmer = () => {
  return (
    <div className="flex-col">
      <div>
        <div className="flex mx-auto w-6/12">
          <img className="mt-4 animate-pulse w-60 h-30 bg-slate-200" />
          <div className="flex-1">
            <div className="flex-1 space-y-6 mt-2 py-2">
              <div className="pt-4 pl-2 h-10 bg-slate-200"></div>
            </div>
            <div className="pt-2 pl-2 h-4 bg-slate-200"></div>
            <div className="mt-2 pl-2 h-4 bg-slate-200"></div>
            <div className="mt-3 pl-2 h-8 bg-slate-200"></div>
          </div>
        </div>
        <div>
          <div className="flex mx-auto w-6/12 border-b-2 border-gray-100 mt-6 flex-col justify-between">
            <div className="w-full animate-pulse">
              <div className="pt-2 pl-2 w-full bg-slate-100">
                <div className="flex justify-between cursor-pointer">
                  <span className="font-bold text-lg">Loading Menu..</span>
                  <span className="p-4">⬇</span>
                </div>
                <div>
                  {Array(3)
                    .fill("")
                    .map((element, index) => {
                      return <ItemShimmer key={index} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemShimmer = () => {
  return (
    <div className="flex border-b-2">
      <div className="flex-1 space-y-6 w-9/12 mt-2 py-2">
        <div className="pt-4 pl-2 h-10  bg-slate-200"></div>
        <div className="pt-2 pl-2 h-16 bg-slate-200"></div>
      </div>
      <div className="w-3/12">
        <img className="mb-2 w-40 h-40" />
        <button className="p-2 bg-green-200 text-black shadow-lg rounded-lg w-40">
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuShimmer;
