import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            alt="err"
            src="https://images.pexels.com/photos/7147850/pexels-photo-7147850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Anna Klauer</span>
            <span className="widgetSmUserTitle"> FrontEnd Developer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            alt="err"
            src="https://images.pexels.com/photos/7147850/pexels-photo-7147850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Anna Klauer</span>
            <span className="widgetSmUserTitle"> FrontEnd Developer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            alt="err"
            src="https://images.pexels.com/photos/7147850/pexels-photo-7147850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Anna Klauer</span>
            <span className="widgetSmUserTitle"> FrontEnd Developer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            alt="err"
            src="https://images.pexels.com/photos/7147850/pexels-photo-7147850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Anna Klauer</span>
            <span className="widgetSmUserTitle"> FrontEnd Developer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            alt="err"
            src="https://images.pexels.com/photos/7147850/pexels-photo-7147850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Anna Klauer</span>
            <span className="widgetSmUserTitle"> FrontEnd Developer </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
