import { Facebook, Instagram, InstagramIcon, Twitter, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Logo } from "./Header";

function Footer() {
  return (
    <footer className="bg-black text-[#ffffff80] p-3">
      <Logo />
      <p>
        Connecting artists, venues, producers, and fans in one vibrant music
        community. Discover, book, and experience the best in live music and
        events.
      </p>

      <section className="flex gap-4 my-4">
        {" "}
        <Link href={""}>
          <Facebook fill="white" />
        </Link>
        <Link href={""}>
          <Twitter fill="white" />
        </Link>
        <Link href={""}>
          <InstagramIcon stroke="white" />
        </Link>
        <Link href={""}>
          <YoutubeIcon fill="white" stroke="black" />
        </Link>
      </section>
      <section className="grid grid-cols-2 gap-4 mb-6">
        <section>
          <h4 className="text-white">Discover</h4>
          <ul>
            <li>
              <a href="#">Artists</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Venues</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
          </ul>
        </section>
        <section className="footer-section">
          <h4 className="text-white">Connect</h4>
          <ul>
            <li>
              <a href="#">For Artists</a>
            </li>
            <li>
              <a href="#">For Venues</a>
            </li>
            <li>
              <a href="#">For Producers</a>
            </li>
            <li>
              <a href="#">For Fans</a>
            </li>
          </ul>
        </section>
        <section className="footer-section">
          <h4 className="text-white">Support</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </section>
        <section className="footer-section">
          <h4 className="text-white">Legal</h4>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Copyright Info</a>
            </li>
          </ul>
        </section>
      </section>
      <hr className="border-" />
      <section className="my-4 text-center text-sm">
        <p>&copy; 2025 VibeConnect. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
