import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import React from "react";
import {
  Title,
  Content,
  Container,
} from "./Alarm.style";

export default function Cancel({
  title,
  content,
  onClickOk,
  onClickNo,
}) {
  return (
    <Container
      width="20rem"
      height="10rem"
      direction="column"
      align="center"
      justify="center"
      gap="1rem"
    >
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Flex
        justify="center"
        align="center"
        gap="1rem"
      >
        <Button outline onClick={onClickNo}>
          취소
        </Button>
        <Button fill onClick={onClickOk}>
          확인
        </Button>
      </Flex>
    </Container>
  );
}
