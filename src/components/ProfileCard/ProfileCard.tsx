import "./styles.css";
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
    <div className="profile-card">
      <h2 className="user-name">{userData.userName}</h2>
      {/* 1 вариант добавление картинки - абсолютный путь */}
      {/* <img src={userData.avatar} /> */}
      {/* 2 вариант добавление картинки - относительный путь */}
      <img src={avatar} alt="user avatar" />
      <div className="user-data">{userData.profession}</div>
      <div className="user-data">{userData.hobbies[0]}</div>
    </div>
  );
}

export default ProfileCard;
