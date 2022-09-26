import React from "react";
import HeroLight from "../../atoms/HeroLight/HeroLight";
import phone1 from '../../../Public/phone_hr_create.png';
import phone2 from '../../../Public/phone_hr_explore.png';
import phone3 from '../../../Public/phone_hr_payment.png';

const GroupHeroLights = () => {
  const DATA = [
    {
      mainTitle: "Create an account",
      primTitle: "Create/login to an existing account to get started",
      desc: "An account is created with your email and a desired password",
      src: phone1
    },
  {
      mainTitle: "Explore while shopping",
      primTitle: "Shop for your favorites meal as e dey hot.",
      desc: "Shop for your favorite meals or drinks and enjoy while doing it.",
      src: phone2
  },
  {
      mainTitle: "Checkout",
      primTitle: "When you done check out and get it delivered.",
      desc: "When you done check out and get it delivered with ease.",
      src: phone3
  }
  ]

  return (
    <div className="group-hr">
      {
        DATA.map((item,index)=>{
          return(
            <HeroLight
              key={index} 
              mainTitle={item.mainTitle}
              primTitle={item.primTitle}
              desc ={item.desc}
              img={item.src}
              isReverse={index%2 === 0 ? false : true}
            />
          )
        })
      }
    </div>
  );
};

export default GroupHeroLights;
