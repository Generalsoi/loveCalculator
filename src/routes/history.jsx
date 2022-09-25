import React from "react";

export const History = ({ history }) => {
  return <div>{history.map((content) => JSON.stringify(content))}</div>;
};
