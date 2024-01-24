import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageHouses = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getAllHouses = async () => {
    const { data } = await axios(
      "https://server-indol-sigma.vercel.app/houses"
    );
    return data;
  };
  const { data: houses = [], refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getAllHouses(),
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
          .delete(`https://server-indol-sigma.vercel.app/houses/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your House has been deleted.", "success");
            }
          });
      }
    });
  };
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
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              OW:Number
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
          {houses?.map((item) => (
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
                <div className="w-[150px]"> {item?.city}</div>
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                {item?.number}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium   tracking-wider">
                <div className="w-[150px]"> {item?.rent}TK</div>
              </td>
              <td>
                <div className="flex gap-3 pr-3">
                  <Link to={`update/${item?._id}`}>
                    <button className=" transform duration-500  text-xs px-2 py-1 font-medium text-[#24d53b] border border-[#24d53b] rounded hover:bg-[#24d53b] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none ">
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="text-xs px-2 py-1 transform duration-500   font-medium text-[#f01515] border border-[#f01515] rounded hover:bg-[#f01515] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageHouses;
