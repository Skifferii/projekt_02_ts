import {
  ProfileCardWrapper,
  UserName,
  AvatarImg,
  UserData
} from"./styles";
//импорт картинки из проекта (по относительному пути)
import avatar from "../../assets/avatar.jpg";
import { User } from "./types";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };
return (
    <ProfileCardWrapper>
      <UserName>{userData.userName}</UserName>
      {/* 1 вариант добавление картинки - абсолютный путь */}
      {/* <img src={userData.avatar} /> */}
      {/* 2 вариант добавление картинки - относительный путь */}
      <AvatarImg src={avatar} alt="user avatar" />
      <UserData>{userData.profession}</UserData>
      <UserData>{userData.hobbies[0]}</UserData>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;