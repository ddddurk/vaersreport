"use client";

import FiltersYear from "./FiltersYear";
import PolymorphGrid from "./PolymorphGrid";

const Filters = () => {
  return (
    <PolymorphGrid className="sticky top-0 z-10 !col-span-3 !col-start-1 bg-white bg-opacity-90 px-6 py-3 backdrop-blur">
      <ul className="flex items-center space-x-6">
        <li>
          <FiltersYear />
        </li>
      </ul>
    </PolymorphGrid>
  );
};

export default Filters;
