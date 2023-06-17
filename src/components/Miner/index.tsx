import { Miner as MinerProps } from "../../redux/types";

const Miner = ({
  name,
  tier,
  metalRate,
  diamondRate,
  stoneRate,
}: MinerProps) => {
  return (
    <div className="flex flex-col">
      <div>{name}</div>
      <div>{tier}</div>
      <div>{metalRate}</div>
      <div>{diamondRate}</div>
      <div>{stoneRate}</div>
    </div>
  );
};

export default Miner;
