
import "./topbar.css";
import {
  UilSearch,
  UilSetting,
  UilEstate,
  UilBell,
  UilCommentDots,
} from "@iconscout/react-unicons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <a href="#">
          <span className="logo"> Bibek Logo</span>
        </a>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <UilSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          <UilEstate size="30" />
        </div>
        <div className="topbarIconItem">
          <UilCommentDots size="30" />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <UilBell size="30" />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <UilSetting size="30" />
        </div>
      </div>
    </div>
  );
}
