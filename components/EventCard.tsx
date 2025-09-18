import { Banknote, Clock4, MapPin, TicketSlash } from "lucide-react";
import Link from "next/link";
import React from "react";

function EventCard() {
  return (
    <section className="mx-2 my-8 rounded-lg bg-white">
      <section className="bg-[url(/img/poster.png)] bg-center bg-cover rounded-t-xl  h-50 relative ">
        <span className="inline-block relative left-67 top-2 text-[var(--primary-color)] bg-[var(--background)] px-3 py-2 rounded-3xl text-xs font-bold">
          May 20
        </span>
      </section>
      <h5>Event</h5>
      <p className="inline-flex gap-1 items-center text-[var(--text-light)] text-sm font-light">
        <MapPin color="var(--accent-color)" size={12} />
        Kiambu
      </p>
      <p className="block bg-[linear-gradient(135deg,_var(--primary-color),_var(--primary-light))] uppercase rounded-[50px] p-2 font-semibold text-white shadow-[var(--shadow-md)] w-[30%] text-xs text-center my-2">
        Club Night
      </p>
      <span className="inline-flex gap-1 items-center text-[var(--text-light)] text-sm font-light my-4">
        <Clock4 color="#e74c3c" size={14} />
        6:00 PM - 6:00 AM
      </span>
      <section className="inline-flex items-center text-xs text-[var(--text-light)] gap-1.5 mb-2">
        <span className="inline-flex items-center">
          {" "}
          <Banknote color="#e74c3c" size={14} />
          (Normal) KSh. 1.00
        </span>
        <span className="inline-flex items-center gap-2 ">
          {" "}
          <TicketSlash color="#e74c3c" size={14} />
          (VIP) KSh. 2.00
        </span>
        <span className="inline-flex items-center gap-2 ">
          {" "}
          <TicketSlash color="#e74c3c" size={14} />
          (VVIP) KSh. 3.00
        </span>
      </section>
      <hr className="border-[var(--background)] my-2" />
      <Link
        href={"/"}
        className="inline-flex my-2 items-center gap-2 bg-[linear-gradient(135deg,_var(--primary-color),_var(--primary-light))] rounded-[50px] px-4 py-2 font-semibold text-white shadow-[var(--shadow-md)] relative left-[60%]"
      >
        Book Now <TicketSlash color="white" size={18} />
      </Link>
    </section>
  );
}

export default EventCard;
