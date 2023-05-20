import React from "react";

type ResourceHeaderProps = {
  resources: Record<string, number>;
};

export const ResourceHeader = ({ resources }: ResourceHeaderProps) => {
  return (
    <div className="flex justify-center space-x-20 w-full">
      {Object.keys(resources).map((key: string, index: number) => {
        return (
          <div key={`resource-${index}-${key}`}>
            <p className="text-white">{key}</p>
            <p className="text-white">{resources[key]}</p>
          </div>
        );
      })}
    </div>
  );
};
