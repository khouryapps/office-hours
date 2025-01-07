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
        <a
          onClick={() => {
            window.open("/about");
          }}
        >
          by students
        </a>{" "}
        @{" "}
        <a
          onClick={() => {
            window.open("https://sandboxnu.com");
          }}
        >
          Sandbox
        </a>
        . Source on{" "}
        <a
          onClick={() => {
            window.open("https://github.com/khouryapps/office-hours");
          }}
        >
          GitHub.
        </a>
      </div>
      <div>
        <a
          onClick={() => {
            window.open("https://github.com/khouryapps/office-hours/issues");
          }}
        >
          Report an issue
        </a>
      </div>
    </FullWidth>
  );
}

