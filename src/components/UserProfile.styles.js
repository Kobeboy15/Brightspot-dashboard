import styled from "styled-components";

export const StyledUserProfileSection = styled.section`
  grid-area: Profile;

  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 20px;

  .profile-cover-picture {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    background: linear-gradient(
      32deg,
      rgba(190, 115, 191, 1) 37%,
      rgba(37, 195, 245, 1) 80%
    );
    height: 80px;
  }

  .profile-information {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      width: 90px;
      height: 90px;
      margin-top: -50px;
      border: 4px solid #fff;
      border-radius: 100%;
    }

    .information-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-gap: 8px;
      padding: 12px 0;

      h1 {
        font-weight: 800;
      }

      p {
        font-size: 14px;
        opacity: 0.7;
      }

      small {
        font-size: 12px;
        opacity: 0.9;
      }
    }
  }
`;
