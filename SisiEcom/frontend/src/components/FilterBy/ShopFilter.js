import React from "react";
import Category from "../FilterBy/Category";
import Price from "../FilterBy/Price";

const ShopFilter = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Price />
    </div>
  );
};

export default ShopFilter;
