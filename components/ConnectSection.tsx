import { Disc2, Headphones, Hotel } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

type ConnectCardProps = {
  title: string;
  description: string;
  url: string;
  color: string;
  icon?: ReactNode;
  urlText: string;
};
const ConnectCard: React.FC<ConnectCardProps> = ({
  title,
  description,
  url,
  urlText,
  color,
  icon,
}) => {
  return (
    <section className="bg-white text-center grid place-items-center border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 flex-1 min-w-[250px] mb-6">
      <div
        style={{ backgroundColor: color }}
        className={` inline-flex items-center justify-center w-20 h-20 rounded-full
        justify-content-center text-white my-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl my-2">{title}</h3>
      <p className="mb-2 text-base">{description}</p>
      <Link
        href={url}
        style={{ borderColor: color, color:color }}
        className={`border-1 border-[${color}] px-4 py-2 rounded-md mb-4`}
      >
        {urlText}
      </Link>
    </section>
  );
};

function ConnectSection() {
  const cards = [
    {
      title: "For Artists",
      description:
        "Showcase your talent, connect with fans, and book gigs at top venues. Upload your music and grow your audience.",
      link: "Learn More",
      url: "/",
      color: "#0d6efd",
      icon: '',
    },
    {
      title: "For Producers",
      description:
        "Find artists to collaborate with, showcase your production portfolio, and discover new talent.",
      link: "Learn More",
      url: "/",
      color: "#198754",
      icon: <Disc2 size={30} stroke="white" />,
    },
    {
      title: "For Venues",
      description:
        "Promote your events, connect with top artists and DJs, and fill your venue with music enthusiasts.",
      link: "Learn More",
      url: "/",
      color: "#dc3545",
      icon: <Hotel size={30} />,
    },
    {
      title: "For Fans",
      description:
        "Discover new music, book tickets to events, and connect with your favorite artists and other music lovers.",
      link: "Learn More",
      url: "/",
      color: "#0DCAF0",
      icon: <Headphones size={30} />,
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-bold my-4 text-center ">
        Connect with the
        <span className="bg-gradient-to-br from-[#fe8002] to-[#b91d1d] text-transparent bg-clip-text">
          {" "}
          Art Industry
        </span>
      </h2>
      <section>
        {cards.map((card, index) => (
          <ConnectCard
            key={index}
            title={card.title}
            description={card.description}
            urlText={card.link}
            url=""
            color={card.color}
            icon={card.icon}
          />
        ))}
      </section>
    </>
  );
}

export default ConnectSection;
