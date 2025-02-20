import { useEffect } from "react";

const Intrests = ({ data, setData }) => {
  const { intrests } = data;
  const handleChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      intrests: e.target.checked
        ? [...prev.intrests, e.target.name]
        : prev.intrests.filter((i) => i !== e.target.name),
    }));
  };
  useEffect(()=>console.log(intrests),{data});
  return (
    <div>
      <div className="intrest">
        <input
          type="checkbox"
          name="coding"
          checked={intrests.includes("coding")}
          onChange={(e) => handleChange(e,"coding")}
        />
        <label for="checkbox1">Coding</label>
      </div>
      <div className="intrest">
        <input
          type="checkbox"
          name="music"
          checked={intrests.includes("music")}
          onChange={(e) => handleChange(e,"music")}
        />
        <label for="checkbox1">Music</label>
      </div>
      <div className="intrest">
        <input
          type="checkbox"
          name="sports"
          checked={intrests.includes("sports")}
          onChange={(e) => handleChange(e,"sports")}
        />
        <label for="checkbox1">Sports</label>
      </div>
    </div>
  );
};
export default Intrests;
