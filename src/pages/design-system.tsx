import { Button } from "~/ui/button";
import { Hr, Row, Stack } from "~/ui/layout";

export default function DesignSystem() {
  return (
    <Stack>
      <a href="/not-existing">Not existing page</a>
      <h2>Layout</h2>
      <Hr />
      <h2>Buttons</h2>
      <Stack>
        <Row>
          <Button size="sm">Small</Button>
          <Button>Medium</Button>
          <Button size="lg">Large</Button>
        </Row>
        <Row>
          <Button color="red" size="sm">
            Small
          </Button>
          <Button color="red">Medium</Button>
          <Button color="red" size="lg">
            Large
          </Button>
        </Row>
      </Stack>
    </Stack>
  );
}
