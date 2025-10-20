import Navbar from "./components/Navbar";
import Slideshow from "./components/slideshow";
import banner from "./assets/banner.png";
import gym1 from "./assets/gym1.png";
import gym2 from "./assets/gym2.png";
import gym3 from "./assets/gym3.png";
import gymInfo1 from "./assets/gymInfo1.png";
import gymInfo2 from "./assets/gymInfo2.png";
import contact1 from "./assets/contact1.svg";
import contact2 from "./assets/contact2.svg";
import contact3 from "./assets/contact3.svg";
import { useState } from "react";


export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="max-w-[100svw] bg-black">
      <Navbar />
      <div className="[scroll-margin-top:100px]" id="home">
        <img
          className="h-full w-full object-contain"
          src={banner}
          alt="banner"
          id="banner"
        />
      </div>
      <div className="py-30" id="about">
        <PicWithText
          img={gym1}
          title={"J7C HISTORY"}
          reverse={true}
          content={"Founded on August 8, 2008, J. Cruz GoodHealth Gym was born out of faith, discipline, and divine purpose. Its founder, Pastor Jonar Cruz, spent 11 years as a gym instructor at the Quezon City Sports Club before receiving a life-changing message from God — a calling inspired by the verse 3 John 2: “Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.” Guided by this message, Pastor Jonar followed God’s direction and established a fitness center that would help people strengthen both their bodies and their faith. What began as a small, faith-driven gym soon became a community rooted in health, discipline, and purpose. In 2015, the leadership of the gym was entrusted to his second child, John Hunter Cruz, who carried forward his father’s mission with passion and dedication. Under his guidance, the gym continued to thrive while remaining faithful to its original vision."}  
        />
        <PicWithText
          img={gym2}
          title={""}
          content={"In 2015, the leadership of the gym was entrusted to his second child, John Hunter Cruz, who carried forward his father’s mission with passion and dedication. Under his guidance, the gym continued to thrive while remaining faithful to its original vision. By 2022, the management transitioned to Hannah Cruz, marking a new chapter in the Cruz family legacy. With a renewed vision and modern approach, Hannah rebranded J. Cruz GoodHealth Gym into J7C Gym — where “J” stands for Jesus, the center of everything the family does, “7” symbolizes spiritual completeness and divine perfection, and “C” represents the Cruz family who continues to serve through faith and fitness. From 2022 to the present, Hannah Cruz has led J7C Gym with the same devotion and purpose that inspired its founding. Meanwhile, John Hunter Cruz remains a part of the gym as a dedicated personal trainer.  What began as a divine calling has grown into a lasting legacy — a place where faith, family, and fitness come together to empower lives and glorify God in all things."}
        />
      </div>

<div className="py-20">
  <Slideshow />
</div>


      <div className="mx-auto flex max-w-7xl gap-4 px-10 pt-30 pb-10">
        <PicWithText2 img={gymInfo1} title={"PRICE LIST"} content={""} />
        <PicWithText2 img={gymInfo2} title={"PROMO'S WE OFFER"} flex={3} content={""} />
      </div>
      {/* === PERSONAL TRAINER PRICE SECTION === */}
<div className="bg-black text-white py-20 px-10   max-w-5xl mx-auto">
  <h1 className="text-center text-yellow-500 text-5xl font-serif mb-12">
    WANT A PERSONAL TRAINER?
  </h1>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10">
    {/* Left box - Price list */}
    <div className="border border-yellow-600 bg-zinc-800 p-8 text-center md:text-left min-w-[280px]">
      <p className="text-yellow-400 text-lg mb-3">
        ₱ 3,000.00 / <span className="italic text-white">1 MONTH SESSION</span>
      </p>
      <p className="text-yellow-400 text-lg mb-3">
        ₱ 1,600.00 / <span className="italic text-white">15 SESSION</span>
      </p>
      <p className="text-yellow-400 text-lg">
        ₱ 120.00 / <span className="italic text-white">SESSION</span>
      </p>
    </div>

    {/* Right box - Inquiries */}
    <div className="text-center md:text-left space-y-3">
      <p className="italic text-lg text-gray-300">For more Inquiries:</p>
      <div className="border border-yellow-600 bg-zinc-800 p-6 inline-block">
        <p className="text-white text-xl font-semibold">JOHN HUNTER CRUZ</p>
        <p className="text-yellow-400 text-lg font-medium">0920-8055-992</p>
      </div>
    </div>
  </div>
</div>

      <p className="serif py-10 text-center text-2xl text-white italic">
        “To God be All the Glory”
      </p>

      <div className="mx-auto flex max-w-7xl gap-20 py-30">
        <div
          className="flex flex-2/5 flex-col text-8xl font-medium"
          style={{ textShadow: "2px 2px 0 white" }}
        >
          <h1 className="text-right text-yellow-500">GET IN</h1>
          <h1 className="text-right text-yellow-500">TOUCH</h1>
        </div>
        <div className="flex flex-3/5 items-center" id="contact">
          <h2 className="serif max-w-150 text-center text-3xl text-white italic">
            "Ready to transform your body and boost your health? Let’s get
            started—reach out today and take the first step toward a stronger
            you!"
          </h2>
        </div>
      </div>

      <div
        className="mx-auto flex max-w-3xl flex-col gap-2 pb-20"
        id="contacts"
      >
        <Contact
          img={contact1}
          text={
            "#237 3rd flr., Anette' s Bldg., J.P Rizal St. Manggahan, Rodriguez Rizal"
          }
        />
        <Contact
          img={contact2}
          text={"https://www.facebook.com/share/17DbTRKJJU/"}
        />
        <Contact img={contact3} text={"09276101017 -Hannah Cruz"} />
      </div>
    </div>
  );
}

function PicWithText({ img, title, text, reverse, imgWidth = 2, content }) {
  const widthMap = {
    1: "max-w-1/7",
    2: "max-w-2/7",
    3: "max-w-3/7",
    4: "max-w-4/7",
    5: "max-w-5/7",
  };

  return (
    <div
      className={`mx-auto flex max-w-7xl items-center justify-between gap-16 px-10 py-4 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <img
        src={img}
        alt="gym"
        className={`${widthMap[imgWidth] || "max-w-2/7"} object-contain`}
      />
      <div className="max-w-3/5 flex-1 space-y-2 text-yellow-500">
        <h1 className="serif text-6xl">{title}</h1>
        <p className="text-justify text-sm">{content} </p>
      </div>
    </div>
  );
}
function PicWithText2({ img, title, flex = 2 }) {
  return (
    <div
      className={`flex max-h-120 flex-${flex}/5 flex-col items-center justify-center gap-4`}
    >
      <h1 className="serif text-6xl text-yellow-500">{title}</h1>
      <img className="max-h-full" src={img} alt="" />
    </div>
  );
}

function Contact({ img, text }) {
  return (
    <div className="flex items-center gap-6 px-16 text-white">
      <img src={img} alt={`${img}`} className="max-h-8" />
      <p>{text}</p>
    </div>
  );
}
