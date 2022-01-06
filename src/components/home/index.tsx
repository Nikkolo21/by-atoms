import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../shared/button";
import { Header } from "../shared/header";
import { TYPES } from "../shared/types";
import { Wrapper } from "../shared/wrapper";
import { default as logo } from "../../assets/logoV1.svg";

export const Home = () => {
  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Wrapper height="70px">
            <img src={logo} />
          </Wrapper>
        </Link>
      </Wrapper>
      <Wrapper display="flex" justifyContent="end">
        <Link to="/login">
          <Button
            width="150px"
            letterSpacing="1px"
            fontSize="xs"
            type={TYPES.PRIMARY}
            text="Login"
          />
        </Link>
      </Wrapper>
    </Header>
  );
};
