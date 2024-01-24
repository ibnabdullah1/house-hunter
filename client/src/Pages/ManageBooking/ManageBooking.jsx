import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  const getAllBookings = async () => {
    const { data } = await axios(
      `https://server-indol-sigma.vercel.app/booking-house/${userInfo.email}`
    );
    return data;
  };
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getAllBookings(),
  });
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://server-indol-sigma.vercel.app/booking-house/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your House has been deleted.", "success");
            }
          });
      }
    });
  };

  console.log(bookings);
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="text-left bg-[#1c4456] ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              location
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Booker Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Price Range
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((item) => (
            <tr
              key={item._id}
              className="p-4 bg-slate-100 border-b border-b-[#1c4456]"
            >
              <td className="px-6  py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[200px]">{item?.name}</div>
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[200px]"> {item.address}</div>
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]"> {userInfo?.name}</div>
              </td>

              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]"> {item?.rent}TK</div>
              </td>
              <td className="flex justify-center pt-2">
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="text-xs px-2  py-1 transform duration-500   font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
