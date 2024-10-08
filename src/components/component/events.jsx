/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/aj8TN8inIkO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function Events() {
  const [selectedFilters, setSelectedFilters] = useState({
    date: null,
    eventType: [],
    location: [],
  })
  const handleFilterChange = (type, value) => {
    if (type === "date") {
      setSelectedFilters({ ...selectedFilters, date: value })
    } else if (type === "eventType") {
      setSelectedFilters({
        ...selectedFilters,
        eventType: selectedFilters.eventType.includes(value)
          ? selectedFilters.eventType.filter((item) => item !== value)
          : [...selectedFilters.eventType, value],
      })
    } else if (type === "location") {
      setSelectedFilters({
        ...selectedFilters,
        location: selectedFilters.location.includes(value)
          ? selectedFilters.location.filter((item) => item !== value)
          : [...selectedFilters.location, value],
      })
    }
  }
  const events = [
    {
      id: 1,
      title: "Community Cleanup",
      date: "2023-06-15",
      time: "10:00 AM - 2:00 PM",
      type: "Volunteer",
      location: "Downtown Park",
      description: "Join us for a community cleanup event to help keep our local park clean and beautiful.",
    },
    {
      id: 2,
      title: "Bake Sale Fundraiser",
      date: "2023-07-01",
      time: "12:00 PM - 4:00 PM",
      type: "Fundraiser",
      location: "Community Center",
      description:
        "Support our local school by attending our bake sale fundraiser. All proceeds go towards new equipment for the classrooms.",
    },
    {
      id: 3,
      title: "Senior Citizen Luncheon",
      date: "2023-08-20",
      time: "11:30 AM - 1:30 PM",
      type: "Social",
      location: "Senior Center",
      description:
        "Join us for a delicious luncheon and social gathering for our local senior citizens. Connect with your community and enjoy good food and conversation.",
    },
    {
      id: 4,
      title: "Neighborhood Block Party",
      date: "2023-09-10",
      time: "3:00 PM - 7:00 PM",
      type: "Social",
      location: "Elm Street",
      description:
        "Come out and celebrate the end of summer with your neighbors at our annual block party. There will be music, games, and plenty of food and drinks.",
    },
    {
      id: 5,
      title: "Habitat for Humanity Build",
      date: "2023-10-05",
      time: "9:00 AM - 3:00 PM",
      type: "Volunteer",
      location: "123 Main St",
      description:
        "Volunteer your time to help build a new home for a family in need. No experience necessary, we will provide all the training and tools you need.",
    },
  ]
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (
        selectedFilters.date &&
        new Date(event.date).toISOString().slice(0, 10) !== new Date(selectedFilters.date).toISOString().slice(0, 10)
      ) {
        return false
      }
      if (selectedFilters.eventType.length > 0 && !selectedFilters.eventType.includes(event.type)) {
        return false
      }
      if (selectedFilters.location.length > 0 && !selectedFilters.location.includes(event.location)) {
        return false
      }
      return true
    });
  }, [selectedFilters])
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    interests: [],
    availability: "",
  })
  const handleVolunteerFormChange = (field, value) => {
    setVolunteerForm({ ...volunteerForm, [field]: value })
  }
  const handleVolunteerFormSubmit = (e) => {
    e.preventDefault()
    console.log(volunteerForm)
  }
  return (
    (<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Community Engagement 🌍</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-muted focus:border-primary focus:ring-primary" />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <TagIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Tags</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-4 space-y-2">
                  {selectedFilters.eventType.map((type) => (
                    <Label key={type} className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedFilters.eventType.includes(type)}
                        onCheckedChange={(checked) => handleFilterChange("eventType", type)} />
                      {type}
                    </Label>
                  ))}
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-4">
                  <Calendar
                    value={selectedFilters.date}
                    onChange={(date) => handleFilterChange("date", date)} />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <LocateIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Location</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-4 space-y-2">
                  {selectedFilters.location.map((loc) => (
                    <Label key={loc} className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedFilters.location.includes(loc)}
                        onCheckedChange={(checked) => handleFilterChange("location", loc)} />
                      {loc}
                    </Label>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-4">
              {filteredEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} - {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <LocateIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TagIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground px-2 py-1 rounded-lg bg-muted/50">{event.type}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      RSVP 🎫
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Volunteer Sign-Up 🤝</h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <form onSubmit={handleVolunteerFormSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={volunteerForm.name}
                    onChange={(e) => handleVolunteerFormChange("name", e.target.value)}
                    required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={volunteerForm.email}
                    onChange={(e) => handleVolunteerFormChange("email", e.target.value)}
                    required />
                </div>
                <div className="grid gap-2">
                  <Label>Interests 🤔</Label>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={volunteerForm.interests.includes("Community Cleanup")}
                        onCheckedChange={(checked) =>
                          handleVolunteerFormChange("interests", checked
                            ? [...volunteerForm.interests, "Community Cleanup"]
                            : volunteerForm.interests.filter((interest) => interest !== "Community Cleanup"))
                        } />
                      Community Cleanup 🧹
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={volunteerForm.interests.includes("Fundraising")}
                        onCheckedChange={(checked) =>
                          handleVolunteerFormChange("interests", checked
                            ? [...volunteerForm.interests, "Fundraising"]
                            : volunteerForm.interests.filter((interest) => interest !== "Fundraising"))
                        } />
                      Fundraising 💰
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={volunteerForm.interests.includes("Social Events")}
                        onCheckedChange={(checked) =>
                          handleVolunteerFormChange("interests", checked
                            ? [...volunteerForm.interests, "Social Events"]
                            : volunteerForm.interests.filter((interest) => interest !== "Social Events"))
                        } />
                      Social Events 🎉
                    </Label>
                    <Label className="flex items-center gap-2">
                      <Checkbox
                        checked={volunteerForm.interests.includes("Habitat for Humanity")}
                        onCheckedChange={(checked) =>
                          handleVolunteerFormChange("interests", checked
                            ? [...volunteerForm.interests, "Habitat for Humanity"]
                            : volunteerForm.interests.filter((interest) => interest !== "Habitat for Humanity"))
                        } />
                      Habitat for Humanity 🏠
                    </Label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
  );
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function TagIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>)
  );
}
