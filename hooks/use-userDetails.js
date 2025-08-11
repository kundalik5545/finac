import { useEffect, useState } from "react";

export function useUserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user");
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Hook fetch error:", error);
      }
    }

    fetchUser();
  }, []);

  return user;
}
