"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackButton: React.FC = () => {
  return (
    <Link href="/">
      <button className="flex items-center text-blue-400 hover:text-blue-500 mb-6">
        <ArrowLeft size={20} />
      </button>
    </Link>
  );
};

export default BackButton;
