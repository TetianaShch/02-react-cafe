import css from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;
  const positive = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.container}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}

