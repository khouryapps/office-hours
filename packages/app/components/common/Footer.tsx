import { ReactElement } from "react";
import styled from "styled-components";

const FullWidth = styled.footer`
  width: 100%;
  background: #ebebeb;
  flex-shrink: 0;
  padding: 12px 64px;
  display: flex;
  justify-content: space-between;
`;

export function Footer(): ReactElement {
  return (
    <FullWidth>
      <div>
        Made{" "}
        <a href="/about">
          by students
        </a>{" "}
        @{" "}
        <a href="https://sandboxnu.com" target="_blank" rel="noreferrer">
          Sandbox
        </a>
        . Source on{" "}
        <a href="https://github.com/khouryapps/office-hours" target="_blank" rel="noreferrer">
          GitHub.
        </a>
      </div>
      <div>
        <a href="https://github.com/khouryapps/office-hours/issues" target="_blank" rel="noreferrer">
          Report an issue
        </a>
      </div>
    </FullWidth>
  );
}

