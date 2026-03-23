import { useState } from "react";
import Card from "./Card";
import classes from "./CardItem.module.css";

export default function CardItem({
  name,
  avatarImg,
  email,
  Location,
  Experience,
  role,
}) {
  const [showDetails, setshowDetails] = useState(false);
  const [buttonText, setButtonText] = useState("View More");
  function handletoggledetails() {
    setshowDetails(!showDetails);

    setButtonText(buttonText === "View More" ? "View Less" : "View More");
  }

  return (
    <Card>
      <div className={classes.header}>
        <img className={classes.avatar} src={avatarImg} alt="profile avatar" />

        <div className={classes.userInfo}>
          <h2 className={classes.name}>{name}</h2>
          <p className={classes.role}>{role}</p>
        </div>
      </div>

     {showDetails && <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}>Email:</span>
          <span>{email}</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Location:</span>
          <span>{Location}</span>
        </div>

        <div className={classes.detailItem}>
          <span className={classes.label}>Experience:</span>
          <span>{Experience}</span>
        </div>
      </div>}

      <button className={classes.button} onClick={handletoggledetails}>
        {buttonText}
      </button>
    </Card>
  );
}
