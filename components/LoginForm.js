import { useState, useMemo, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user'; 

const LoginForm = () => {
  const dispatch = useDispatch(); 

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const FormStyle = useMemo(() => ({ padding: "10px" }), []);
  const InputStyle = useMemo(() => ({ width: "250px" }), []);
  const ButtonStyle = useMemo(() => ({ marginRight: "10px" }), []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    // setIsLoggedIn(true);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <>
      <Form style={FormStyle} onFinish={onSubmitForm}>
        <Form.Item
          label="아이디"
          name="user-id"
          value={id}
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요!",
            },
          ]}
        >
          <Input style={InputStyle} />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="user-password"
          value={password}
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요!",
            },
          ]}
        >
          <Input.Password style={InputStyle} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={ButtonStyle}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button style={ButtonStyle}>회원가입</Button>
            </a>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// };

export default LoginForm;
