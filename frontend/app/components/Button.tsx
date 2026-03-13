"use client"

import { useRouter } from "next/navigation";

export default function ButtonComponent() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("../Homepage")}>
      Login
    </button>
  );
}