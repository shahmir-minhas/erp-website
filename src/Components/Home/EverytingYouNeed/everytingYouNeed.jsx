import React, { Component } from 'react';
import '../../../Styles/everything.scss';
import Sketch from "../../../Assets/sketch.png";
import Boxes from "../../../Assets/boxes.png";
import Store from "../../../Assets/store.png";
import CardSecondary from '../CardSecondary/cardSecondary';

const EveryThing = () => {
    const cards = [
        {
          imgSource: Sketch,
          title: "Sales Information",
          body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
          link: "/",
        },
        {
          imgSource: Store,
          title: "Account Management",
          body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
          link: "/",
        },
        {
          imgSource: Boxes,
          title: "Employee Management",
          body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
          link: "/",
        },
        {
            imgSource: Sketch,
            title: "Help Center",
            body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
            link: "/",
          },
          {
            imgSource: Store,
            title: "Asset Management",
            body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
            link: "/",
          },
          {
            imgSource: Boxes,
            title: "Purchase History",
            body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
            link: "/",
          },
      ];
    return ( <section className="everythingYouNeed">
        <h1>Almost Everything You Need</h1>
        <p>Prism comes with Different ready to use features to help you run your business</p>
        <div className="row">
        {cards.map((card) => (
                <CardSecondary
                  imgSource={card.imgSource}
                  title={card.title}
                  body={card.body}
                  link={card.link}
                />
              ))}
        </div>
        
    </section> );
}
 
export default EveryThing;