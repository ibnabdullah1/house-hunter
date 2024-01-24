const PropertyAddForm = ({ handleSubmit }) => {
  return (
    <div className="w-full px-6 md:max-w-2xl py-20 mt-32 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-bold uppercase">
        Add Properties
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Home Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="name"
              id="name"
              type="text"
              placeholder="House Name"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              House address
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="address"
              id="address"
              type="text"
              placeholder="House address"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              House City
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="city"
              id="city"
              type="text"
              placeholder="House city"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              House Rent
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="rent"
              id="rent"
              type="text"
              placeholder="Mouthy House Rent"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              Number
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="number"
              id="number"
              type="number"
              placeholder="Number"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              Image
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="image"
              id="image"
              type="text"
              placeholder="Image Url"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              Availability Date
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="availabilityDate"
              id="availabilityDate"
              type="date"
              required
            />
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Room
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="room"
                id="room"
                type="number"
                placeholder="room"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-600">
                Room Size
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="roomSize"
                id="roomSize"
                type="number"
                placeholder="Room Size"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-600">
                Bedrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="bedrooms"
                id="bedrooms"
                type="number"
                placeholder="Bedrooms"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms" className="block text-gray-600">
                Bathrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="bathrooms"
                id="bathrooms"
                type="number"
                placeholder="Bathrooms"
                required
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>

            <textarea
              id="description"
              className="block rounded-md focus:[#1c4456] w-full h-32 px-4 py-3 text-gray-800  border border-[#1c4456] focus:outline-[#1c4456] "
              name="description"
            ></textarea>
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

export default PropertyAddForm;
