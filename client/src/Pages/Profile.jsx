const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  return (
    <div className="max-w-4xl mx-auto bg-[#E3EFF3]">
      <div className="rounded-t-lg h-[200px] overflow-hidden">
        <img
          className="object-cover object-bottom w-full"
          src={
            userInfo.role === "owner"
              ? "https://img.freepik.com/premium-vector/interface-structure-data-calculation-systems_49459-481.jpg"
              : "https://img.freepik.com/premium-photo/misty-mountain-landscape-grey-background_1008702-135.jpg"
          }
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative ">
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src={userInfo.image}
            alt="Woman looking front"
          />
        </div>
        {userInfo?.role && (
          <button className="rounded-full uppercase  font-semibold px-3 py-1 text-xs absolute  top-4 bg-gray-900 text-white -right-3">
            {userInfo?.role}
          </button>
        )}
      </div>
      <div className="text-center mt-2 pb-20">
        <h2 className="font-semibold text-[#1c4456]">{userInfo?.name}</h2>
        <p className="text-[#1c4456]">{userInfo?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
