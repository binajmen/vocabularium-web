import { Grower, Stack } from "~/ui/layout";
import logo from "~/assets/logo.svg";
import { css } from "~/styled-system/css";

export default function Home() {
  return (
    <Stack full>
      <img src={logo} alt="Vocabularium" class={css({ height: 32 })} />
      {/* <Grower>Test</Grower> */}
      <Stack full vertical="center">
        <button>Sign in</button>
        <button>Sign up</button>
      </Stack>
    </Stack>
  );
}
