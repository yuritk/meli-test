import styled from "styled-components";
import { theme } from "../../../lib/styled";

export const SearchForm = styled.form`
  flex: 1;
  display: flex;
  position: relative;
  height: 40px;
  margin: 0 ${theme('spacing.quadruple')}px;

  & > input {
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
