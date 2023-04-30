import { FiltersYear } from "./FiltersYear";

export const Filters = () => {
  return (
    <div className="sticky top-0 flex justify-center border-b bg-white/90 px-6 py-4 backdrop-blur-xl">
      <div className="flex w-full max-w-5xl items-center justify-end space-x-6">
        <FiltersYear />
      </div>
    </div>
  );
};
