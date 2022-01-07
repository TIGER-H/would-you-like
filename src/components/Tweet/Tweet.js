import styled from "styled-components";
import avatar from "../../assets/avatar.jpg";
import LikeButton from "../Like/LikeButton";
import Action from "./Action";
import ActionIcon from "./ActionIcon";

const Tweet = ({
  nickname,
  username,
  tweetTime,
  tweetContent,
  handleLike,
  handleRetweet,
  isLikedByMe,
  isRetweetedByMe,
  numLikes,
  numRetweets,
}) => {
  return (
    <TweetWrapper>
      <Avatar src={avatar} alt="avatar" />
      <TweetContent>
        <Header>
          <Name>
            <Nickname>{nickname}</Nickname>
            <Username>@{username}</Username>
            <Time>{tweetTime}</Time>
          </Name>
        </Header>
        <Content>{tweetContent}</Content>

        <Footer>
          <Action color="rgb(27, 149, 224)" size={40} onClick={() => {}}>
            <ActionIcon kind="reply" />
          </Action>
          <Action
            color="rgb(23, 191, 99)"
            size={40}
            onClick={handleRetweet}
            isActive={isRetweetedByMe}
          >
            <ActionIcon kind="retweet" />
          </Action>
          <Action color="rgb(224,36,94)" size={40} onClick={handleLike}>
            <LikeButton isLiked={isLikedByMe} />
          </Action>
          <Action color="rgb(27, 149, 224)" size={40} onClick={() => {}}>
            <ActionIcon kind="share" />
          </Action>
        </Footer>
      </TweetContent>
    </TweetWrapper>
  );
};

const TweetWrapper = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  display: flex;
  gap: 0.5rem;
`;

const Header = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const TweetContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Name = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Nickname = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Username = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  font-weight: normal;
`;

const Time = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.875rem;

  &::before {
    content: "·";
    margin: 0 0.5rem;
  }
`;

const Content = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`;

export default Tweet;
