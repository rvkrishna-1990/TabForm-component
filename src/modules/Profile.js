const  Profile = ({data, setData})=>{
    const {name, age, email } = data;
    const changeHandler = (e, item)=>{
        setData((prev)=>({
            ...prev,
            [item] : e.target.value
        }))
    }
    return (
      <div>
        <div className="input-label">
          <label>Enter your Name</label>
          <input
            type="text"
            onChange={(e) => changeHandler(e, "name")}
            value={name}
          />
        </div>
        <div className="input-label">
          <label>Enter your Age</label>
          <input
            type="value"
            onChange={(e) => changeHandler(e, "age")}
            value={age}
          />
        </div>
        <div className="input-label">
          <label>Enter your email</label>
          <input
            type="email"
            onChange={(e) => changeHandler(e, "email")}
            value={email}
          />
        </div>
      </div>
    );
}
export default Profile