import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import FocusLock from "react-focus-lock";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";

const MenuHamburger = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <ThemeProvider theme={theme}>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </ThemeProvider>
    </>
  );
};
export default MenuHamburger;
