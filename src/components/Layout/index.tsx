import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import React from "react";
import { useWindowSize } from "react-use";
import { FaArrowUp } from "react-icons/fa";
import { useStateContext } from "@contexts/ContextProvider";
import { scrollSmoothTo } from "@utils/lib";

const AsideProfilePic = styled.div<any>`
  width: ${({ width }) => width}px;
  height: 100%;
  background: url("https://res.cloudinary.com/manavkaushal/image/upload/v1667278407/divyansh_pic_tdyuwr.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  border: none;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    background: url("https://res.cloudinary.com/manavkaushal/image/upload/v1667278407/divyansh_pic_tdyuwr.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 156%;
    position: static;
  }
`;

const StyledMain = styled.main<any>`
  padding-left: ${({ width }) => width}px;
`;

const Layout = ({
  children,
  toggleTheme,
}: {
  children: ReactNode;
  toggleTheme: () => void;
}) => {
  const { width } = useWindowSize();
  const { isMobile, shrink } = useStateContext();

  const [asideWidth, setAsideWidth] = useState(500);

  const asideWidthFxn = (w: number) => {
    if (w < 1536) setAsideWidth(500);
    if (w < 1200) setAsideWidth(320);
    if (w < 1024) setAsideWidth(0);
  };

  useEffect(() => {
    if (window !== undefined) asideWidthFxn(width);
  }, [width]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <AsideProfilePic width={asideWidth} id={isMobile ? "home" : ""} />
      <StyledMain width={asideWidth}>
        {children}
        {/* <Footer /> */}
      </StyledMain>
      {shrink && (
        <FaArrowUp
          className="fixed z-20 w-10 h-10 p-3 text-white transition duration-300 ease-in-out rounded-full cursor-pointer right-6 bottom-6 hover:bg-darkBlueSecondary bg-bluePrimary"
          onClick={() => scrollSmoothTo("home")}
        />
      )}
    </>
  );
};

export default Layout;
