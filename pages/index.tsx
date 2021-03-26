import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard">
        <a>To Dash</a>
      </Link>
    </div>
  );
}
