import React, { useState } from "react";
import styled from "@emotion/styled";

const MyButton = styled.button`
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 12px 24px;
  user-select: none;

  background-color: ${({ primary }: { primary: boolean }) =>
    primary ? "#0052A2;" : "#000B18"};

  &:hover {
    opacity: 0.9;
  }
`;

const Span = styled.span`
  color: rgb(251, 132, 191);
  font-size: 18px;
  margin: 0px 20px;
`;

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <MyButton
        primary={true}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        MyButton
      </MyButton>
      <Span>{count}</Span>
    </>
  );
}
