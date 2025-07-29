import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserCard from "../components/UserCard";

export default function UserList() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const { users, loading, totalPages } = useUsers(page);

    const filteredUsers = users.filter((user) =>
        `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
    );
    {
        filteredUsers.map((user) => (
            <UserCard key={user.id} {...user} />
        ))
    }
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Lista de Usuários</h1>
            <input
                type="text"
                placeholder="Buscar por nome..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-6 p-2 border border-gray-300 rounded-md"
            />

            {loading ? (
                <p className="text-center">Carregando usuários...</p>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => <UserCard key={user.id} {...user} />)
                    ) : (
                        <p className="text-center col-span-full">Nenhum usuário encontrado.</p>
                    )}
                </div>
            )}

            <div className="flex justify-between mt-6">
                <button
                    className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Anterior
                </button>
                <span className="text-sm text-gray-600">Página {page} de {totalPages}</span>
                <button
                    className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
}

