const PropertiesDetails = () => {
  return (
    <div className="py-36 lg:flex md:px-20 px-5 justify-between items-stretch bg-[#f5fcff]">
      <div className="flex-1 rounded-l">
        <img className="w-full rounded-l" src="" alt="" />
      </div>
      <div className="flex-1 rounded-r border border-[#c7e6f4] p-10 space-y-1">
        <h2 className="text-2xl font-semibold text-[#1c4456]">title </h2>
        <p className="text-lg text-[#1c4456]">location </p>

        <p className="text-lg text-[#1c4456]">
          <span className="font-semibold">Price</span>: $price
        </p>
        <p className="text-lg text-[#1c4456]">
          <span className="font-semibold">Description</span>: description
        </p>
      </div>
    </div>
  );
};

export default PropertiesDetails;
