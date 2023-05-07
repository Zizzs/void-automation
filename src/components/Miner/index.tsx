type MinerProps = {
  name: string;
  tier: string;
  rate: number;
};

const Miner = ({ name, tier, rate }: MinerProps) => {
  return (
    <div className="flex flex-col">
      <div>{name}</div>
      <div>{tier}</div>
      <div>{rate}</div>
    </div>
  );
};

export default Miner;
