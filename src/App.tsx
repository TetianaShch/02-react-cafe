import { useState } from 'react';
import css from './App.module.css';

import type { Votes, VoteType } from './types/votes';

import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';

function App() {
  const [votes, setVotes] = useState<Votes>({
  good: 0,
  neutral: 0,
  bad: 0
});

  const handleVote = (type: VoteType) => {
  setVotes(prev => ({
    ...prev,
    [type]: prev[type] + 1
  }));
};

const resetVotes = () => {
  setVotes({
    good: 0,
    neutral: 0,
    bad: 0
  });
};

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} />
      <VoteStats votes={votes} />

    </div>
  );
}

export default App;


