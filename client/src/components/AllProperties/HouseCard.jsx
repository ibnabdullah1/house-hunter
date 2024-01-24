import { FaBed } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import { PiArrowsInSimpleBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  const {
    _id,
    name,
    address,
    city,
    room,
    bedrooms,
    bathrooms,
    image,
    description,
    roomSize,
    availabilityDate,
    rent,
    number,
  } = house;
  return (
    <div className=" rounded-md bg-[#F9FDFF]">
      <div className="">
        <img
          className="overflow-hidden object-cover h-[250px] w-full rounded-t-md "
          src={image}
          alt=""
        />
      </div>
      <div className="px-5 pt-4 pb-7 border border-t-0 rounded-b-md border-[#7accf2]">
        <h2 className="text-[#2b4d5e] mb-1 font-semibold text-xl">{name}</h2>
        <h2 className="text-[#2b4d5e] mb-1">
          {" "}
          <span className="font-medium">Contact :</span> {number}
        </h2>

        <p className="flex text-[#417086] items-center gap-1">
          <FaLocationDot />
          {address}
        </p>
        <div className="flex justify-between mt-3">
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <FaBed /> {bedrooms} Bed Rooms
          </p>
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <GiBathtub />
            {bathrooms} Bath
          </p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <PiArrowsInSimpleBold /> {roomSize} sqft
          </p>
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            <HiOutlineHomeModern />
            {room} Room
          </p>
        </div>

        <p className="   text-[#417086] items-center gap-1">
          <span className="font-medium"> Availability Date:</span>{" "}
          {availabilityDate}
        </p>
        <p className=" text-[#417086]">{description}</p>

        <div className="flex justify-between mt-3">
          <Link to={`/booking/${_id}`}>
            <button className="transform duration-500 px-12 py-3 text-sm font-medium  border bg-[#3f6c81] border-[#1c4456] rounded hover:bg-[#1c4456] text-white active:bg-#1c4456 focus:outline-none focus:ring-none">
              Book Now
            </button>
          </Link>
          <p className="flex font-medium justify-center text-[#417086] items-center gap-1">
            $ {rent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
