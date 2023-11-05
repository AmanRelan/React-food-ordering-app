const ShimmerCard = () => {
  return (
    <div>
      <div className="m-4 p-4 w-[240px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-400 shadow-2xl">
        <img className="rounded-lg animate-pulse w-60 h-40 bg-gray-400" />
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {Array(20)
        .fill("")
        .map((element, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
