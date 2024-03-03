import { StyledUserProfileSection } from "./UserProfile.styles";

export default function UserProfile({ user }) {
  const imageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'

  return (
    <StyledUserProfileSection>
      <div className="profile-cover-picture">
      </div>
      <div className="profile-information">
        <img src={imageUrl} alt="information-profile_pic" />
        <div className="information-details">
          <small>#000134</small> {/* Meant to represent an ID */}
          <h1>{user}</h1> {/* Full name of user */}
          <p>{user.replace(/\s/g, '').toLowerCase()}@email.com</p> {/* Meant to represent a user email */}
        </div>
      </div>
    </StyledUserProfileSection>
  )
}