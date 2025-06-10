import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for the spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Animation for the text pulse
const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #FFD682; /* Matching your theme color */
  animation: ${spin} 1s ease-in-out infinite;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #333;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin: 0;
  text-align: center;
`;

const LoadingProgress = styled.div`
  width: 100%;
  max-width: 200px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 30%;
  background-color: #FFD682;
  border-radius: 2px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingSignal = ({ componentName = 'content' }) => {
  return (
    <LoadingContainer>
      <Spinner aria-hidden="true" />
      <LoadingText>Loading {componentName}...</LoadingText>
      <LoadingProgress>
        <ProgressBar />
      </LoadingProgress>
    </LoadingContainer>
  );
};

export default LoadingSignal;