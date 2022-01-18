import React from "react";
import { styled } from "@styles/styled";
import { Stack, Text } from "@components/common";

export default function Footer() {

  return (
    <Wrapper>
      <Stack spacing="large" align="center" justify="center">
        {/* <Img
          src={logoWhiteImg}
          alt="Teemun ja Milkan alkukirjaimet"
          width={120}
          height={120}
          webp
        /> */}
        <Text variant="title3">Nähdään häissä!</Text>

      </Stack>

    </Wrapper>
  );
}

const Wrapper = styled("footer", {
  width: "100%",
  minHeight: "300px",
  backgroundColor: "$secondary",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
