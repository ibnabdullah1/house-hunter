import { useState } from "react";
import toast from "react-hot-toast";
import PropertyAddForm from "../../components/Form/PropertyAddForm";
import axios from "axios";

const AddHouse = () => {
  const [loading, setLoading] = useState(false);
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
    const description = form.description.value;

    const houseData = {
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
    };
    try {
      const res = await axios.post(
        "https://server-indol-sigma.vercel.app/houses",
        houseData
      );

      if (res.data.acknowledged) {
        setLoading(false);
        toast.success("House Added Successfully");
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl ">
      <PropertyAddForm handleSubmit={handleSubmit} loading={loading} />
    </div>
  );
};
export default AddHouse;
