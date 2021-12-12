import styled from "styled-components/macro";

export const BgHeader = styled.div`
  z-index: -1;
  height: ${(props) => (props.bg ? props.bg : "10vh")};
  width: 100%;
  background-image: linear-gradient(253deg, #303f60, #1a253c);
  position: relative;
`;
