import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 70%;
  height: 10px;
  border-radius: 10px;
  border:1px solid grey;
`;

const progressAnimation = keyframes`
  0% { width: 0; }
`;

const Progress = styled.div`
  height: 100%;
  border-radius: 10px;
  background-image: linear-gradient(to right, rgba(24,119,242, 0.8), rgba(111, 0, 255, 0.7));
  animation: ${progressAnimation} 2s ease forwards;
`;

const HorizontalProgressBar = ({ value }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(value);
  }, [value]);

  return (
    <ProgressBarContainer>
      <Progress style={{ width: `${progressWidth}%` }} />
    </ProgressBarContainer>
  );
};

export default HorizontalProgressBar;
