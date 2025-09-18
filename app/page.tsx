import ConnectSection from "@/components/ConnectSection";
import EventCard from "@/components/EventCard";
import ProductSections from "@/components/ProductSections";
import { ArrowRight, Calendar, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#fe8002] to-[#b91d1d] text-white py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Connect with Artistry, Artists & Venues
        </h1>
        <p className="mb-6 text-xl">
          Discover and book the talented artists, DJs and venues. Connect with
          fans, producers and industry professionals all in one place.
        </p>
        <section className="flex gap-4">
          <Link
            className="flex justify-between items-center bg-black p-2 rounded-md gap-2"
            href={""}
          >
            {" "}
            <Calendar size={24} /> Browse Events
          </Link>
          <Link
            className="flex justify-between items-center gap-4 border-1 border-white p-2 rounded-md"
            href={""}
          >
            {" "}
            <UserPlus size={24} /> Join Us
          </Link>
        </section>
      </section>
      {/* upcomming events */}
      <section className="py-6">
        <h2 className="text-[2.2rem] font-bold my-4 text-center ">
          Upcoming{" "}
          <span className="bg-gradient-to-br from-[#fe8002] to-[#b91d1d] text-transparent bg-clip-text">
            Events
          </span>
        </h2>
        <p className="text-[1.2rem] text-[#6b7280] text-center max-w-[600px] mx-auto mb-8">
          Discover amazing experiences and connect with like-minded people at
          our carefully curated events
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-[50px] px-7 py-3 font-semibold text-white shadow-[var(--shadow-md)]
          no-underline bg-[linear-gradient(135deg,_var(--primary-color),_var(--primary-light))] transition-[var(--transition)] border-none ml-20 "
        >
          View All Events <ArrowRight />
        </a>
      </section>
      <section>
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
      {/* Talent creatives */}
      <ProductSections
        title="Talented"
        spantitle="Creatives"
        subtitle="Discover talented creatives in our creative community"
        linkUrl="/"
        linkText="View All Creatives"
      />
      {/* venues */}
      <ProductSections
        title="Event"
        spantitle="Venues"
        subtitle="Discover beautiful venues in our platform"
        linkText="View All Venues"
        linkUrl="/"
      />
      {/* connect */}
      <ConnectSection />
    </main>
  );
}
