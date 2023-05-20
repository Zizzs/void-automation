import React from "react";

type ResourceNotification = {
  prev: number;
  current: number;
};

export const ResourceNotification = ({
  prev,
  current,
}: ResourceNotification) => {
  let notificationType = calculateNotification(prev, current);

  return <div className="text-white">{notificationType}</div>;
};

const calculateNotification = (prev: number, current: number) => {
  // Get the difference between the previous and current totals
  let difference = current - prev;

  // Calculate positive/negative value of the difference "Positive" or "Negative", or in rare cases "Neutral"
  let positiveOrNegative =
    difference > 0 ? "Positive" : difference < 0 ? "Negative" : "Neutral";

  // Calculate the % of the difference
  // This can be used in the future to have finer control on the output notification
  // Possible read the % of difference to give a "PositiveNeutral" or "NegativeNeutral" notification, or broaden the range at which the "Neutral" notification shows up
  // let percentageDifference = Math.abs(difference / current) * 100;

  // if (percentageDifference <= 5) {
  //   positiveOrNegative = "Neutral";
  // }

  let Positive = <div>Positive</div>;
  let Negative = <div>Negative</div>;
  let Neutral = <div>Neutral</div>;

  let Notification = <div>Default</div>;

  if (positiveOrNegative === "Positive") {
    Notification = Positive;
  }

  if (positiveOrNegative === "Negative") {
    Notification = Negative;
  }

  if (positiveOrNegative === "Neutral") {
    Notification = Neutral;
  }

  return Notification;
};
