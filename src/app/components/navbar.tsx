"use client";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };
  const navData = [
    { path: "/", title: "О школе" },
    { path: "/", title: "Курсы" },
    { path: "/", title: "Библиотека" },
  ];
  return (
    <div className="h-[60px] flex items-center justify-between p-3 border-b-2 border-gray-200 ">
      <div className="flex  items-center gap-4">
        <Image src="/logo-big.png" style={{ width: 28, height: 28 }} alt="" />
        <Typography className="text-[#151515] font-normal text-lg">
          STEMPS
        </Typography>
      </div>
      <div className=" gap-6 md:flex hidden">
        {navData.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="text-[#151515] cursor-pointer "
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="s gap-3 md:flex hidden">
        <p className="text-[#151515]">Вход</p>
        <Image src="/login.png" style={{ width: 28, height: 28 }} alt="" />
      </div>

      <button
        onClick={toggleDrawer(true)}
        className="flex gap-3 md:hidden bg-black p-3 rounded-lg cursor-pointer  transition-colors"
      >
        Меню
      </button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="flex p-1 align-center justify-center ">
          <button
            onClick={toggleDrawer(false)}
            className="flex text-[#fff] w-[30] h-[30] align-center justify-center pt-1 mt-2 md:hidden bg-black  rounded-lg cursor-pointer  transition-colors"
          >
            X
          </button>
          <List className="w-[150px]">
            {navData.map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default Navbar;
