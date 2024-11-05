import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReturnHeader from '../components/ReturnHeader';
import { useNavigate } from 'react-router-dom';

const TournamentScore = () => {

  const navigate = useNavigate();

  const [isMatchStarted, setIsMatchStarted] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [sets, setSets] = useState(2);
  const [timePerSet, setTimePerSet] = useState(5); // minutes
  const [timeLeft, setTimeLeft] = useState(0);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState('');
  const [isMatchEnded, setIsMatchEnded] = useState(false);
  const [isSetStarted, setIsSetStarted] = useState(false);
  const [setScores, setSetScores] = useState([]); // 각 세트 점수 기록을 위한 상태
  const [resetScores, setResetScores] = useState(false); // 점수를 초기화할지 여부

  useEffect(() => {
    let timer;
    if (isSetStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isSetStarted) {
      handleEndSet();
    }
    return () => clearInterval(timer);
  }, [isSetStarted, timeLeft]);

  const handleStartMatch = () => {
    setIsMatchStarted(true);
    setTimeLeft(timePerSet * 60);
    setIsSetStarted(true);
  };

  const handleEndSet = () => {
    const newSetScore = { set: currentSet, scoreA: teamAScore, scoreB: teamBScore };
    setSetScores((prevScores) => [...prevScores, newSetScore]);
    
    if (currentSet < sets) {
      setCurrentSet((prev) => prev + 1);
      setTimeLeft(timePerSet * 60);
      if (resetScores) {
        setTeamAScore(0);
        setTeamBScore(0);
      }
      setIsSetStarted(false);
    } else {
      setIsMatchEnded(true);
      determineWinner();
    }
  };

  const determineWinner = () => {
    if (teamAScore > teamBScore) {
      setWinner('A');
    } else if (teamBScore > teamAScore) {
      setWinner('B');
    } else {
      setWinner('DRAW');
    }
  };

  const adjustScore = (team, value) => {
    if (!isSetStarted) return;

    if (team === 'A') {
      setTeamAScore(Math.max(0, teamAScore + value));
    } else if (team === 'B') {
      setTeamBScore(Math.max(0, teamBScore + value));
    }
  };

  const handleSaveResult = () => {
    // 결과 저장 로직을 구현하세요
    alert('결과가 저장되었습니다.');
    navigate('/Main4');

  };

  return (
    <Container>
      <ReturnHeader text="점수판"/>
      <SettingsContainer>
        <Settings>
          <label>세트 수 설정</label>
          <Input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            min="1"
            disabled={isMatchStarted}
          />
        </Settings>

        <Settings>
          <label>세트 당 시간 설정 (분)</label>
          <Input
            type="number"
            value={timePerSet}
            onChange={(e) => setTimePerSet(e.target.value)}
            min="1"
            disabled={isMatchStarted}
          />
        </Settings>
      </SettingsContainer>

      <ScoreSettings>
        <label>세트 종료 후 점수 초기화</label>
        <input
          type="checkbox"
          checked={resetScores}
          onChange={(e) => setResetScores(e.target.checked)}
          disabled={isMatchEnded}
        />
      </ScoreSettings>

      <Timer>
        세트: {currentSet} / {sets}, 시간: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
      </Timer>

      <MatchContainer>
        <TeamSection>
          <TeamName>NULL</TeamName>
          <Score>{teamAScore}</Score>
          <div>
            <Button onClick={() => adjustScore('A', 1)} disabled={!isSetStarted}>
              점수 +1
            </Button>
            <Button onClick={() => adjustScore('A', -1)} disabled={!isSetStarted}>
              점수 -1
            </Button>
          </div>
        </TeamSection>

        <TeamSection>
          <TeamName>사자FC</TeamName>
          <Score>{teamBScore}</Score>
          <div>
            <Button onClick={() => adjustScore('B', 1)} disabled={!isSetStarted}>
              점수 +1
            </Button>
            <Button onClick={() => adjustScore('B', -1)} disabled={!isSetStarted}>
              점수 -1
            </Button>
          </div>
        </TeamSection>
      </MatchContainer>

      <ControlPanel>
        <Button onClick={isMatchEnded ? null : (isSetStarted ? handleEndSet : handleStartMatch)} disabled={isMatchEnded}>
          {isMatchEnded ? '경기 종료' : (isSetStarted ? `${currentSet}세트 종료` : `${currentSet}세트 시작`)}
        </Button>
      </ControlPanel>

      {isMatchEnded && (
        <>
          <FinalScore>
            최종 점수: NULL {teamAScore} - 사자FC {teamBScore}
            <div>{winner === 'A' ? '팀 A 승!' : winner === 'B' ? '팀 B 승!' : '무승부!'}</div>
          </FinalScore>
          <SaveButton onClick={handleSaveResult}>결과 저장하기</SaveButton>
        </>
      )}

      <ScoreBoard>
        <h3>세트별 점수 기록</h3>
        {setScores.map((score, index) => (
          <ScoreEntry key={index}>
            {score.set}세트: NULL {score.scoreA} - 사자FC {score.scoreB}
          </ScoreEntry>
        ))}
      </ScoreBoard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MatchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
`;

const TeamSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamName = styled.h2`
  font-size: 24px;
`;

const Score = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? '#ff5733' : '#4caf50')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  width: 120px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Settings = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoreSettings = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  width: 100px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #d3d3d3;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin: 20px;
`;

const FinalScore = styled.div`
  font-size: 24px;
  margin: 20px;
  font-weight: bold;
`;

const ScoreBoard = styled.div`
  margin: 20px;
  text-align: center;
`;

const ScoreEntry = styled.div`
  font-size: 18px;
`;

const SaveButton = styled(Button)`
  background-color: #4caf50;
  width: 50%;
`;

export default TournamentScore;
