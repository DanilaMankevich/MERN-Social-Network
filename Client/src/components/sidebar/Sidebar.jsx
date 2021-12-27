import "./sidebar.css";
import { Chat, Event, Feed, Group, Help } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Feed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Jan Joe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Lie Ju</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Pen Yan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
        {/*  dsadasd*/}
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg"/>
            <span className='sidebarFriendName'> Son Jan</span>
          </li>

        </ul>
      </div>
    </div>
  );
}
