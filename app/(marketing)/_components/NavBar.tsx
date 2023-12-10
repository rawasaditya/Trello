import React from "react";
import Logo from "@/components/Logo.tsx";
import { Button } from "@/components/ui/button";
const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <a href="/sign-in">Login</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/sign-up">Get Taskify for free</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
