import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const { Meta } = Card;
const CardWrapper = styled(Card)`
  width: 300px;
  margin: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    // setIsLoggedIn(false);
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <CardWrapper
        actions={[
          <div key="twit">
            트윗
            <br />0
          </div>,
          <div key="twit">
            팔로잉
            <br />0
          </div>,
          <div key="twit">
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Meta
          avatar={<Avatar>동우</Avatar>}
          title="동우"
          description="문제를 재정의하자!"
        />
        <Button onClick={onLogOut}>로그아웃</Button>
      </CardWrapper>
    </>
  );
};

export default UserProfile;
