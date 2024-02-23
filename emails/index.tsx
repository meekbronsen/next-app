import { Html , Button, Body, Container, Text, Tailwind} from "@react-email/components"
import * as React from "react";

const  Welcome =() => {
  return (
    <Html>
      <Tailwind>
      <Body className="font-[Inter]">
        <Container>
          <Text className="text-2xl ">Welcome User</Text>
        </Container>
      <Button
        href="https://example.com"
        className="bg-black text-white py-3 px-5"
        >
        Click me
      </Button>
          </Body>
        </Tailwind>
    </Html>
  );
}

export default Welcome;