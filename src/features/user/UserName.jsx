import { useSelector } from "react-redux";
import { getUser } from "./userSlice";

function UserName() {
  const username = useSelector(getUser) || 'Guest';
  if (!username) return null;
  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
}

export default UserName;
