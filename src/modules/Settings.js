const  Settings = ({ data, setData })=>{
    const {theme} = data;
    const handleChange = (e, name) => {
        setData((prev) => ({
          ...prev,
          theme: e.target.name
        }));
      };
    return <div>
        <div className="settings">
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={(e) => handleChange(e,"dark")}
        />
        <label for="checkbox1">Dark</label>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={(e) => handleChange(e,"light")}
        />
        <label for="checkbox1">Light</label>
      </div>
    </div>
}
export default Settings