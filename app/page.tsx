import Header from "@/components/Header";
import { Calendar, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[url('/img/vibe-hero.svg')]  bg-cover bg-center text-white py-20 px-4">
          <h1 className="text-4xl font-bold mb-4">
            Connect with Artistry, Artists & Venues
          </h1>
          <p className="mb-6 text-xl">
            Discover and book the talented artists, DJs and venues. Connect with
            fans, producers and industry professionals all in one place.
          </p>
          <section className="flex gap-4">
            <Link
              className="flex justify-between items-center bg-black p-2 rounded-md gap-2 text-sm"
              href={""}
            >
              {" "}
              <Calendar size={24} /> Browse Events
            </Link>
            <Link
              className="flex justify-between items-center gap-4 border-1 border-white p-2 rounded-md text-sm"
              href={""}
            >
              {" "}
              <UserPlus size={24} /> Browse Events
            </Link>
          </section>
        </section>
        {/* upcomming events */}
        <section>
          <h2 className="text-3xl font-bold my-4 text-center">
            Upcoming{" "}
            <span className="bg-gradient-to-br from-[#fe8002] to-[#b91d1d] text-transparent bg-clip-text">
              Events
            </span>
          </h2>
        </section>
      </main>
    </>
  );
}
