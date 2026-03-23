import CardItem from "./CardItem";

import classes from "./CardList.module.css";
import { cardData } from'../../data/card-data';
export default function CardList() {
  return (
    <div className={classes.ListContainer}>
      {cardData.map((item)=>{
        return (<CardItem 
          key= {item.id}
        name={item.name}
        avatarImg={item.avatarImg}
        email={item.email}
        Location={item.Location}
        Experience={item.Experience}
        role={item.role}
        />
        );
      })}

      {/* <CardItem
        name="Azina"
        avatarImg={something}
        email="azina123@gmail.com"
        Location="lagan"
        Experience="3 year"
        role="Frontend Devloper"
      />
      <CardItem
        name="Rejisha"
        avatarImg={something}
        email="Rejisha123@gmail.com"
        Location="teku"
        Experience="3 year"
        role="Frontend Devloper"
      />
      <CardItem
        name="Prashna"
        avatarImg={something}
        email="Prashna123@gmail.com"
        Location="bhimsenthan"
        Experience="3 year"
        role="Frontend Devloper"
      />
      <CardItem
        name="Rihanna"
        avatarImg={something}
        email="Rihanna123@gmail.com"
        Location="patan"
        Experience="3 year"
        role="Frontend Devloper"
      /> */}
    </div>
  );
}
