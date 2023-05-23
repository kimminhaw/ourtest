import { extendTheme } from "@chakra-ui/react";
import { config } from "./config.theme";
import { colors } from "./colors.theme";
import { avatarTheme } from "./components/avatar.theme";
import { textTheme } from "./components/text.theme";
import { buttonTheme } from "./components/button.theme";

const customTheme = extendTheme({
  config,
  colors,
  components: {
    Button: buttonTheme,
    Avatar: avatarTheme,
    Text: textTheme,
  },
});

export default customTheme;
