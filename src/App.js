import { useState } from "react";
import styled from "styled-components";
import Tweet from "./components/Tweet";

function App() {
  const numberForTest = 225;
  const [numOfLikes, setNumOfLikes] = useState(numberForTest);
  const [numOfRetweets, setNumOfRetweets] = useState(numberForTest);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const toggleLike = () => {
    isLiked ? setNumOfLikes(numOfLikes - 1) : setNumOfLikes(numOfLikes + 1);
    setIsLiked(!isLiked);
  };

  const toggleRetweet = () => {
    isRetweeted
      ? setNumOfRetweets(numOfRetweets - 1)
      : setNumOfRetweets(numOfRetweets + 1);
    setIsRetweeted(!isRetweeted);
  };

  return (
    <Wrapper>
      <Tweet
        nickname="Yeoreum"
        username="__uzzu__"
        tweetTime={"2016-02-25"}
        tweetContent="welcome to UZZU family"
        isLikedByMe={isLiked}
        isRetweetedByMe={isRetweeted}
        numLikes={numOfLikes}
        numRetweets={numOfRetweets}
        handleLike={toggleLike}
        handleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-color: #eee;
`;

export default App;
