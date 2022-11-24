import { useContext } from "react";
import { ThemeContext } from "./modules/theme";
import { UserContext } from "./modules/user";

export const useTheme = () => useContext(ThemeContext);
export const useUserState = () => useContext(UserContext);
