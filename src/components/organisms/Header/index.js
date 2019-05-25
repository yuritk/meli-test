import React from "react";
import Link from "next/link";

import * as Styled from "./Header.styles";
import MLIcon from "../../atoms/MLIcon";
import SearchField from "../../molecules/SearchField";

function Header(props) {
  return (
    <Styled.Nav>
      <Link href="/">
        <MLIcon />
      </Link>
      <SearchField />
    </Styled.Nav>
  );
}

export default Header;
