import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User } from "../hooks/useUsers";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.data))
      .catch((err) => console.error("Erro ao carregar usuário:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-6">Carregando detalhes...</p>;
  if (!user) return <p className="text-center mt-6">Usuário não encontrado.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 text-center">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="w-32 h-32 rounded-full mx-auto mb-4 border border-gray-300"
      />
      <h2 className="text-2xl font-bold mb-2">{user.first_name} {user.last_name}</h2>
      <p className="text-gray-600 mb-6">{user.email}</p>

      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Voltar para a lista
      </button>
    </div>
  );
}
