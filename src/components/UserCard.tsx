import { Link } from "react-router-dom";
import { User } from "../hooks/useUsers";

export default function UserCard({ id, first_name, last_name, email, avatar }: User) {
  return (
    <Link to={`/user/${id}`}>
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-200 cursor-pointer flex gap-4 items-center">
        <img
          src={avatar}
          alt={`${first_name} ${last_name}`}
          className="w-16 h-16 rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold">{first_name} {last_name}</h2>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      </div>
    </Link>
  );
}
