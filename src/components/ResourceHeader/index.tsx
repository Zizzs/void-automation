type ResourceHeaderProps = {
  resources: {
    one: number;
    two: number;
    three: number;
  };
};

export const ResourceHeader = (resources: ResourceHeaderProps) => {
  return (
    <div>
      <div className="text-white">Resources</div>
    </div>
  );
};
