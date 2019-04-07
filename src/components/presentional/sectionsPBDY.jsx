import React from "react";
import "../assets/css/style.css";
import BadgeShow1 from "./demos/badgeShowCase1";
import BadgeShow2 from "./demos/badgeSC2";
import AdvanGrid from "./demos/AdvanGrid";
import Cool from "./articlez";
import NewCard from "./cool";
import ListBreaker from "../containers/ListBrker";
import { Divider } from "antd";
import { Typography } from "@material-ui/core";

const Sectionsbodz = () => {
  return (
    <div>
      <section id="page1" style={{ height: 400, width: "100%" }}>
        <Divider orientation="left">
          <Typography title>Latest New</Typography>
        </Divider>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem
        dolore accusamus consequatur distinctio nemo dolor ipsa ullam laudantium
        ea doloremque voluptatum nam assumenda cum facilis, repellat nisi neque.
        Velit.
      </section>
      <section id="page2" style={{ height: 400, width: "100%" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem
        dolore accusamus consequatur distinctio nemo dolor ipsa ullam laudantium
        ea doloremque voluptatum nam assumenda cum facilis, repellat nisi neque.
        Velit.
      </section>
      <section id="page3" style={{ height: 400, width: "100%" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem
        dolore accusamus consequatur distinctio nemo dolor ipsa ullam laudantium
        ea doloremque voluptatum nam assumenda cum facilis, repellat nisi neque.
        Velit.
        <hr />
        <BadgeShow1 />
        <hr />
        <BadgeShow2 />
      </section>
      <hr />
      <AdvanGrid />
      <hr />
      <Cool />
      <hr />
      <NewCard />
      <hr />
      <ListBreaker />
    </div>
  );
};

export default Sectionsbodz;
