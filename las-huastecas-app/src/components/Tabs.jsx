// import { useState } from "react";
import { TabItem } from "./TabItem";

export const Tabs = ({ list, activeTab, onTabSwitch }) => {
  // if there's no active tab set it to be the first tab
  let active = activeTab === "" ? list[0] : activeTab;
  console.log(active);
  return (
    <div className="">
      <div className="">
        {list.map((item, index) => {
          return (
            <TabItem
              title={item}
              key={index}
              index={index}
              active={active === item}
              setActive={onTabSwitch}
            />
          );
        })}
      </div>
    </div>
  );
};
