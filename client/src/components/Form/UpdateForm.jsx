import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    _id,
    name,
    address,
    city,
    room,
    bedrooms,
    bathrooms,
    roomSize,
    availabilityDate,
    rent,
    image,
    number,
  } = useLoaderData();
  console.log(image);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const room = parseInt(form.room.value);
    const bedrooms = parseInt(form.bedrooms.value);
    const bathrooms = parseInt(form.bathrooms.value);
    const image = form.image.value;
    const availabilityDate = form.availabilityDate.value;
    const rent = parseInt(form.rent.value);
    const number = form.number.value;
    const roomSize = form.roomSize.value;

    const updateData = {
      name,
      address,
      city,
      room,
      bedrooms,
      bathrooms,
      image,
      roomSize,
      availabilityDate,
      rent,
      number,
    };
    const houseUpdate = async (id, updateData) => {
      const { data } = await axios.put(
        `http://localhost:4000/house/${id}`,
        updateData
      );
      return data;
    };
    try {
      const updateHouse = await houseUpdate(_id, updateData);
      if (updateHouse.modifiedCount > 0) {
        toast.success("House updated successfully");
        navigate("/dashboard/manage-houses");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(number);
  return (
    <div className="w-full px-6 md:max-w-2xl mx-auto py-10  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-bold uppercase">
        Give a offer
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-300">
                Home Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="name"
                id="name"
                type="text"
                placeholder="House Name"
                required
                defaultValue={name}
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                Availability Date
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                defaultValue={availabilityDate}
                name="availabilityDate"
                id="availabilityDate"
                type="date"
                required
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                House address
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="address"
                id="address"
                defaultValue={address}
                type="text"
                placeholder="House address"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                House City
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="city"
                id="city"
                defaultValue={city}
                type="text"
                placeholder="House city"
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                House Rent
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="rent"
                id="rent"
                type="text"
                placeholder="Mouthy House Rent"
                required
                defaultValue={rent}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                defaultValue={number}
                name="number"
                id="number"
                type="text"
                placeholder="Number"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-300">
                Room
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="room"
                id="room"
                defaultValue={room}
                type="number"
                placeholder="room"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-300">
                Room Size
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="roomSize"
                id="roomSize"
                type="number"
                defaultValue={roomSize}
                placeholder="Room Size"
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-300">
                Bedrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="bedrooms"
                id="bedrooms"
                defaultValue={bedrooms}
                type="number"
                placeholder="Bedrooms"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms" className="block text-gray-300">
                Bathrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="bathrooms"
                id="bathrooms"
                defaultValue={bathrooms}
                type="number"
                placeholder="Bathrooms"
              />
            </div>
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="bathrooms" className="block text-gray-300">
            Image
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
            name="image"
            id="image"
            defaultValue={image}
            type="text"
            placeholder="Image url"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#1c4456]"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
