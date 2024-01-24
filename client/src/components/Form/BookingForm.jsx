import { useState } from "react";
import toast from "react-hot-toast";
import PropertyAddForm from "../../components/Form/PropertyAddForm";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const BookingForm = () => {
  const {
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
  } = useLoaderData();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;

    const bookingData = {
      bookerName: userInfo.name,
      bookerEmail: userInfo.email,
      bookerImage: userInfo.image,
      bookerNumber: number,
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
    };
    try {
      const res = await axios.post(
        "http://localhost:4000/booking-house",
        bookingData
      );

      if (res.data.message) {
        setLoading(false);
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.error);
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-ful max-w-xl mx-auto py-28 shadow-md min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-400 rounded-xl ">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <h2 className="text-zinc-800 text-2xl text-center font-semibold">
            Booking Form
          </h2>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-300">
                Home Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="name"
                id="title"
                defaultValue={name}
                type="text"
                placeholder="House Name"
                disabled
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-300">
                User Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="name"
                id="title"
                defaultValue={userInfo?.name}
                type="text"
                disabled
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-300">
                User Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="name"
                id="title"
                defaultValue={userInfo?.email}
                type="text"
                disabled
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  border-[#9a9b9b] focus:outline-[#9a9b9b] border rounded-md "
                name="number"
                id="number"
                placeholder="Your number"
                type="number"
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
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="address"
                id="address"
                defaultValue={address}
                type="text"
                placeholder="House address"
                disabled
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                House City
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="city"
                id="city"
                defaultValue={city}
                type="text"
                placeholder="House city"
                disabled
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                House Rent
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                defaultValue={rent}
                disabled
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                defaultValue={number}
                placeholder="Number"
                disabled
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="address" className="block text-gray-300">
                Availability Date
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                defaultValue={availabilityDate}
                type="date"
                disabled
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-300">
                Room
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="room"
                id="room"
                defaultValue={room}
                type="number"
                placeholder="room"
                disabled
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-300">
                Room Size
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="roomSize"
                id="roomSize"
                type="number"
                defaultValue={roomSize}
                placeholder="Room Size"
                disabled
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-300">
                Bedrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="bedrooms"
                id="bedrooms"
                defaultValue={bedrooms}
                type="number"
                placeholder="Bedrooms"
                disabled
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms" className="block text-gray-300">
                Bathrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400  rounded-md "
                name="bathrooms"
                id="bathrooms"
                defaultValue={bathrooms}
                type="number"
                placeholder="Bathrooms"
                disabled
              />
            </div>
          </div>
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
export default BookingForm;
