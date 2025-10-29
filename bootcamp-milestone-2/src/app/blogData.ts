export interface Blog { // type also works
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
	{
    title: "My Trip to Universal Studios",
    date: "10-05-2025",
    description: "Nintendo World, horror nights, and other rides!!",
    image: "IMG_1429.png",
    imageAlt: "Photo of Nintendo World",

    //slug will have a blogs/ tag appended in the forEach
    slug: "UniversalTrip",
  },
  {
    title: "My Trip to Irvine",
    date: "10-04-2025",
    description: "Laguna Beach, the Anti-Mall, and fun with friends!",
    image: "IMG_1412.jpeg",
    imageAlt: "Photo of my sandwich from Broadway Sandwiches at Laguna Beach",

    //slug will have a blogs/ tag appended in the forEach
    slug: "IrvineTrip",
  },
];

export default blogs;