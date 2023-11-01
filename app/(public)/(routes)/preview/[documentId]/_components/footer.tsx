import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <Logo />
          </Button>
        </Link>
      </div>
    </div>
  );
};
