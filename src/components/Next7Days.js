import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  console.log(date);
  const nextWeek = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days to the current date

  const nseven = props.list.filter((itm) => {
    const d = new Date(itm.date);
    console.log(d,"ddddd");
    return d <= date || d <= nextWeek && d >= date;
  });
  console.log(nseven)

  return (
    <div id="next-list">
      <ListRender list={nseven} />
    </div>
  );
};

export default Next7Days;
