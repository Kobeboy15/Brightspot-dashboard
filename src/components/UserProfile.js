import { StyledUserProfileSection } from "./UserProfile.styles";
import UserImage from "../assets/images/user-image.png";

export default function UserProfile({ user }) {
  return (
    <StyledUserProfileSection>
      <div className="profile-cover-picture"></div>
      <div className="profile-information">
        <img src={UserImage} alt="information-profile_pic" />
        <div className="information-details">
          <small>#000134</small> {/* Meant to represent an ID */}
          <h1>{user}</h1> {/* Full name of user */}
          <p>{user.replace(/\s/g, "").toLowerCase()}@email.com</p>{" "}
          {/* Meant to represent a user email */}
        </div>
      </div>
    </StyledUserProfileSection>
  );
}
