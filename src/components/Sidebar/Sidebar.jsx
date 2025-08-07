import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from '../../context/context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompts = [], setRecentPrompt } = useContext(Context); 

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat Icon" />
          {extended && <span>New Chat</span>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((item, index) => (
              <div key={index} className="recent-entry"> 
                <img src={assets.message_icon} alt="Message Icon" />
                <span>{item} ...</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help Icon" />
          {extended ? <span>Help</span> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="Activity Icon" />
          {extended ? <span>Activity</span> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extended ? <span>Setting</span> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;