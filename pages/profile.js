import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowingList from '../components/FollowingList';
import FollowerList from '../components/FollowerList';

const Profile = () => {
  const followingList = [
    { nickname: "moon!" },
    { nickname: "릴렉스리" },
    { nickname: "리이치" },
  ];
  const followerList = [
    { nickname: "정남수" },
    { nickname: "김남훈" },
    { nickname: "가냥" },
  ];

  return (
    <>
      <Head>
        <title>프로필 | 트위터</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉 목록" data={followingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
