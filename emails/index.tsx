import { Html , Button, Body, Container, Text} from "@react-email/components"
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Body>
        <Container>
          <Text></Text>
        </Container>
      </Body>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
