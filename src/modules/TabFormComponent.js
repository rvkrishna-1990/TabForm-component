import { useState } from "react";
import Intrests from "./Intrests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabFormComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState(
        {
            name : "vamsi",
            age: 32,
            email : "rvkrishna1990@gmail.com",
            intrests : ["coding", "music" ],
            theme : "dark"
        }
    );
    const tabsData = [
        {
            name: "Profile",
            component: Profile
        },
        {
            name: "Intrests",
            component: Intrests
        },
        {
            name: "Settings",
            component: Settings
        }
    ]
    const ActiveTabComponent = tabsData[activeTab].component;
    return (
      <div>
        <div className="tab-container">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className="tab-item"
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className="tab-body">
          <ActiveTabComponent data = {formData} setData = {setFormData} />
        </div>
      </div>
    );
}

export default TabFormComponent;