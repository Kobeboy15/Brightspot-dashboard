import styled, { css } from "styled-components";

const handleBackgroundColor = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour > 6 || (hour >= 12 && hour < 18)) {
    return "linear-gradient(340deg, rgba(72,113,243,1) 0%, rgba(74,189,251,1) 56%)";
  } else {
    return "linear-gradient(340deg, rgba(21,20,60,1) 0%, rgba(58,56,105,1) 45%);";
  }
};

export const StyledWeather = styled.section`
  grid-area: Weather;
  padding: 24px 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  background: ${() => handleBackgroundColor()};
  color: #fff;
  position: relative;
  overflow: hidden;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.$loading &&
    css`
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        background: linear-gradient(90deg, transparent, #f2f2f2, transparent);
        animation: loading 1.5s infinite;
      }
    `}

  @keyframes loading {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .external-link {
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px;
    color: inherit;
    animation: fadeIn 0.5s ease-in-out;
    transition: 0.1s ease-in-out;

    &:hover {
      color: #e8e8e8;
      transition: 0.1s ease-in-out;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .main-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s ease-in-out;
  }

  .city-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 4px;

    small {
      font-size: 12px;
    }
  }

  .temp-info {
    padding: 12px 0;
  }

  .additional-info {
    display: flex;
    width: 100%;
    justify-content: space-around;
    animation: fadeIn 0.5s ease-in-out;

    & > div {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px 0;

      p {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      small {
        font-size: 10px;
        font-weight: 300;
      }
    }
  }

  img {
    width: 80px;
    height: 60px;
    object-fit: cover;
  }

  p {
    font-size: 10px;
  }

  .error {
    text-align: center;
  }
`;
