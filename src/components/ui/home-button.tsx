"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function HomeButton() {
    const router = useRouter()
  const home = () => {
    router.push("/");
  };
  return (
    <Button onClick={home} variant="outline" size="icon">
      <HomeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
    </Button>
  );
}
