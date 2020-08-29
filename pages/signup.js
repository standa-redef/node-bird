import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useCallback, useMemo, useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const FormStyle = useMemo(() => ({ padding: "10px" }), []);
  const onSubmitForm = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  return (
    <>
      <Head>
        <title>가입하기 | 트위터</title>
      </Head>
      <AppLayout>
        <Form style={FormStyle} onFinish={onSubmitForm}>
          <Form.Item
            label="아이디"
            name="user-id"
            value={id}
            onChange={onChangeId}
            rules={[
              {
                required: true,
                message: "아이디를 입력해주세요!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="닉네임"
            name="user-nickname"
            value={nickname}
            onChange={onChangeNickname}
            rules={[
              {
                required: true,
                message: "닉네임을 입력해주세요!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="user-password"
            value={password}
            onChange={onChangePassword}
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="비밀번호확인"
            name="user-password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          >
            <Input.Password />
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </Form.Item>
          <Form.Item>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              동우와 친해지기 위해 노력할 것에 동의합니다.
            </Checkbox>
            {termError && (
              <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
