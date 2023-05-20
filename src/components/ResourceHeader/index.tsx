import React from "react";
import { animate } from "framer-motion";
import { ResourceNotification } from "../ResourceNotification";

type ResourceHeaderProps = {
  resources: Record<string, number>;
  prevResources: Record<string, number>;
};

export const ResourceHeader = ({
  resources,
  prevResources,
}: ResourceHeaderProps) => {
  console.log(resources, prevResources);
  return (
    <div className="flex justify-center space-x-20 w-full">
      {Object.keys(resources).map((key: string, index: number) => {
        return (
          <div
            className="flex justify-center space-x-4"
            key={`resource-${index}-${key}`}
          >
            <p className="text-white">{key}</p>
            <p className="text-white">{resources[key]}</p>
            <ResourceNotification
              prev={prevResources[key]}
              current={resources[key]}
            />
          </div>
        );
      })}
    </div>
  );
};
