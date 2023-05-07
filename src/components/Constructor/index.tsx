import { Constructor as ConstructorProps } from "../../redux/types";

const Constructor = ({ name, tier, rate, maxInput }: ConstructorProps) => {
  return (
    <div className="flex flex-col">
      <div>{name}</div>
      <div>{tier}</div>
      <div>{rate}</div>
      <div>{maxInput}</div>
    </div>
  );
};

export default Constructor;
