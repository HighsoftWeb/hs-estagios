"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [now, setNow] = useState<string>(moment().format("DD/MM/YY HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment().format("DD/MM/YY HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center gap-4 mb-4">
      {!logoError && (
        <div className="h-12 w-auto relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={256}
            height={256}
            className="h-12 w-auto"
            onError={() => setLogoError(true)}
          />
        </div>
      )}

      <h2 className="flex-1 text-center m-0 text-xl font-semibold text-gray-800">
        Estágios das Ordens de Serviço
      </h2>

      <div className="flex flex-col items-end text-gray-700 font-mono leading-tight">
        <span className="text-base font-semibold">{now.split(" ")[0]}</span>
        <span className="text-base font-semibold">{now.split(" ")[1]}</span>
      </div>
    </header>
  );
}
