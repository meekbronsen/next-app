import { Html , Button, Body, Container, Text, Tailwind} from "@react-email/components"
import * as React from "react";

export default function Email() {
  return (
    <Html>
      {/* For tailwind you have to import the Tailwind component from react-email-components */}
      <Tailwind>
      <Body className="bg-pink-500">
        <Container>
          {/* For styling you could use inline styles */}
          <Text style={{fontFamily: 'Inter', fontSize: '2rem'}}>Welcome User</Text>
        </Container>
      </Body>
      </Tailwind>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
