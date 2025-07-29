import { useState, useEffect } from "react";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export function useUsers(page: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setTotalPages(data.total_pages);
      })
      .catch((err) => console.error("Erro ao buscar usuários:", err))
      .finally(() => setLoading(false));
  }, [page]);

  return { users, loading, totalPages };
}
