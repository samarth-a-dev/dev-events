export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "GopherCon 2026",
    image: "/images/event1.png",
    slug: "gophercon-2026",
    location: "Seattle Convention Center, Seattle, WA",
    date: "Aug 3–6, 2026",
    time: "9:00 AM PDT",
  },
  {
    title: "Open Source Summit North America",
    image: "/images/event2.png",
    slug: "open-source-summit-north-america-2026",
    location: "Minneapolis Convention Center, Minneapolis, MN",
    date: "May 18–20, 2026",
    time: "9:00 AM CDT",
  },
  {
    title: "Observability Summit North America",
    image: "/images/event3.png",
    slug: "observability-summit-north-america-2026",
    location: "Minneapolis Convention Center, Minneapolis, MN",
    date: "May 21–22, 2026",
    time: "9:00 AM CDT",
  },
  {
    title: "KubeCon + CloudNativeCon North America",
    image: "/images/event4.png",
    slug: "kubecon-cloudnativecon-north-america-2026",
    location: "Salt Lake City, UT",
    date: "Nov 9–12, 2026",
    time: "9:00 AM MST",
  },
  {
    title: "AWS re:Invent 2026",
    image: "/images/event5.png",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, NV",
    date: "Nov 30–Dec 4, 2026",
    time: "8:00 AM PST",
  },
  {
    title: "Open Compliance Summit 2026",
    image: "/images/event6.png",
    slug: "open-compliance-summit-2026",
    location: "Tokyo, Japan",
    date: "Dec 10–11, 2026",
    time: "9:00 AM JST",
  },
]
