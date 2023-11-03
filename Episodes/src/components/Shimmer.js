const ShimmerCard = () => {
  return (
    <div>
      <div className=" m-4 p-4 w-[250px] h-[500px] overflow-hidden rounded-lg bg-gray-200 hover:bg-gray-400"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {Array(9)
        .fill("")
        .map((element, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
