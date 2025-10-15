import Navbar from "./components/Navbar";
import banner from "./assets/banner.png";
import gym1 from "./assets/gym1.png";
import gym2 from "./assets/gym2.png";
import gym3 from "./assets/gym3.png";
import gymInfo1 from "./assets/gymInfo1.png";
import gymInfo2 from "./assets/gymInfo2.png";
import contact1 from "./assets/contact1.svg";
import contact2 from "./assets/contact2.svg";
import contact3 from "./assets/contact3.svg";

export default function App() {
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
        <PicWithText img={gym1} title={"HISTORY OF THE GYM"} reverse={true} />
        <PicWithText img={gym2} title={"OTHER INFO ABOUT THE GYM"} />
      </div>
      <div className="pb-20">
        <PicWithText img={gym3} title={"MEET THE TEAM"} imgWidth={4} />
      </div>

      <div className="mx-auto flex max-w-7xl gap-4 px-10 pt-30 pb-10">
        <PicWithText2 img={gymInfo1} title={"PRICE LIST"} />
        <PicWithText2 img={gymInfo2} title={"PRICE LIST"} flex={3} />
      </div>
      <p className="serif py-10 text-center text-2xl text-white">
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
        <div className="flex flex-3/5 items-center">
          <h2 className="serif max-w-120 text-center text-3xl text-white">
            "Ready to transform your body and boost your health? Let’s get
            started—reach out today and take the first step toward a stronger
            you!"
          </h2>
        </div>
      </div>

      <div
        className="mx-auto flex max-w-5xl flex-col gap-2 pb-20"
        id="contacts"
      >
        <Contact
          img={contact1}
          text={
            "#273 3rd flr., Anette' s Bldg., J.P Rizal St. Manggahan, Rodriguez Rizal"
          }
        />
        <Contact
          img={contact2}
          text={"https://www.facebook.com/share/17DbTRKJJU/"}
        />
        <Contact img={contact3} text={"090955512323"} />
      </div>
    </div>
  );
}

function PicWithText({ img, title, text, reverse, imgWidth = 2 }) {
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
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          culpa? Rerum dolorem unde exercitationem, accusantium, dignissimos
          perspiciatis ut itaque id autem odio modi tenetur quod maxime adipisci
          ab a officia. Doloremque soluta sapiente, culpa praesentium saepe
          deserunt repudiandae libero hic, asperiores ipsam rerum. Minus
          perspiciatis reiciendis voluptas officiis, esse eos maiores ut iste
          aut et adipisci numquam in corporis mollitia!
        </p>
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
    <div className="flex items-center gap-6 text-yellow-500">
      <img src={img} alt={`${img}`} className="max-h-12" />
      <p>{text}</p>
    </div>
  );
}
