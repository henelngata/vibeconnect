"use client";
import React from "react";
import { useState } from "react";
import {
  Search,
  Calendar,
  MapPin,
  Music,
  Camera,
  Users,
  Utensils,
  CompassIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import EventCard from "@/components/EventCard";

function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  return (
    <main className="p-1">
      <section className="bg-[#fffffff2] b p-2 rounded-2xl">
        <h1 className="flex gap-2.5 text-2xl mb-4">
          <CompassIcon /> Discover Amazing Content
        </h1>
        <p>Explore events, music and artworks from our creative community</p>
      </section>
      <section>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="search for events"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 bg-transparent text-base placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
            />
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Search className="h-5 w-5" />
            <span className="text-sm font-medium">Search</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {eventCategories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(isActive ? null : category.id)}
                className={`
                flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200
                ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-orange-500 border-orange-500 hover:bg-orange-50"
                }
              `}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </section>
      <section>
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
    </main>
  );
}

export default Discover;

const eventCategories = [
  { id: 1, name: "Concerts", icon: Music },
  { id: 2, name: "Conferences", icon: Users },
  { id: 3, name: "Food & Drink", icon: Utensils },
  { id: 4, name: "Photography", icon: Camera },
  { id: 5, name: "Festivals", icon: Calendar },
  { id: 6, name: "Local Events", icon: MapPin },
];

export function SearchEvents() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Search Input Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4"></div>

      {/* Category List */}
     
    </div>
  );
}
