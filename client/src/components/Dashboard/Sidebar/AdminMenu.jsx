import MenuItem from "./MenuItem";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="adminProfile" />
      <MenuItem
        icon={LuTableProperties}
        label="Manage Houses"
        address="manage-houses"
      />

      <MenuItem
        icon={MdOutlineManageAccounts}
        label="Add House"
        address="add-house"
      />
    </>
  );
};

export default AdminMenu;
