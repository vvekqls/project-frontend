"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="flex items-center text-blue-400 hover:text-blue-500 mb-6"
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default BackButton;
