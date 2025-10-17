type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// Blogs to append to container later
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

const blogContainer = document.getElementById("blog-container");

if (!blogContainer) {
  console.error("Blog container not found in DOM");
} else {
  blogs.forEach((blog) => {
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const date = document.createElement("h4");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.innerHTML = blog.description;

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const link = document.createElement("a");
    link.href = "blogs/" + blog.slug + ".html";
    link.textContent = "Read more";

    container.append(title, date, image, description, link);
    blogContainer.appendChild(container);
  });
}
