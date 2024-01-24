import { CgProfile } from "react-icons/cg";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="user-profile" />
      <MenuItem
        icon={CgProfile}
        label="Manage Bookings"
        address="manage-bookings"
      />
    </>
  );
};

export default UserMenu;
