export const TabItem = ({ title, index, active, setActive }) => {
  const className = active
    ? "border-b-yellow-400"
    : "border-none text-slate-400";

  return (
    <div className="px-2 nav-item">
      <button onClick={() => setActive(title)} className="pb-3 pt-7">
        <span
          className={`hover:text-yellow transition-colors border-b-2 ${className} `}
        >
          {title?.toUpperCase() || "what?"}
        </span>
      </button>
    </div>
  );
};

// {
//   /* <Button title="All"></Button> */
// }
