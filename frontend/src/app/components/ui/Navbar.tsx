"use client";
import SearchBar from "@/app/components/fields/SearchBar";
import UserDropdownMenu from "@/app/components/dropdown/UserDropdownMenu";
import NavbarButton from "@/app/components/button/NavbarButton";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  // const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const [showing, setShowing] = useState<string>("");

  // useEffect(() => {
  //   if (searchParams.get("showing") === "true") {
  //     setShowing("currently-running");
  //   } else if (searchParams.get("showing") === "false") {
  //     setShowing("coming-soon");
  //   } else {
  //     setShowing("");
  //   }
  // }, [searchParams]);

  useEffect(() => {
    if (
      pathname === "/home" ||
      pathname === "/" ||
      pathname === "/home/admin"
    ) {
      setShowing("currently-running");
    } else if (pathname === "/upcoming" || pathname === "/upcoming/admin") {
      setShowing("coming-soon");
    } else {
      setShowing("");
    }
  }, [pathname]);

  const handleShowing = (
    event: React.MouseEvent<HTMLElement>,
    newShowing: string,
  ) => {
    // console.log(newShowing);
    setShowing(newShowing);
    if (newShowing === "currently-running") {
      window.dispatchEvent(new Event("currently-running"));
      router.replace("/home");
      router.refresh();
    } else {
      window.dispatchEvent(new Event("coming-soon"));
      router.replace("/upcoming");
      router.refresh();
    }
  };

  return (
    <nav className="bg-zinc-800 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex w-full h-16 items-center justify-around">
          <div className="flex w-1/6">
            <a
              href="/home"
              className="text-orange-500 text-2xl font-extrabold hover px-3 py-2"
            >
              FlickFlare
            </a>
          </div>
          <div className="flex w-5/6 items-center space-x-4">
            <SearchBar />
            <div className="flex w-2/5 justify-center">
              <NavbarButton
                onClick={(event) => handleShowing(event, "currently-running")}
                showing={showing}
                onClick1={(event) => handleShowing(event, "coming-soon")}
              />
            </div>
            <div>
              <UserDropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
