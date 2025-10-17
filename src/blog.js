// Blogs to append to container later
var blogs = [
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
var blogContainer = document.getElementById("blog-container");
if (!blogContainer) {
    console.error("Blog container not found in DOM");
}
else {
    blogs.forEach(function (blog) {
        var container = document.createElement("div");
        var title = document.createElement("h1");
        title.textContent = blog.title;
        var date = document.createElement("h4");
        date.textContent = blog.date;
        var description = document.createElement("p");
        description.innerHTML = blog.description;
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var link = document.createElement("a");
        link.href = "blogs/" + blog.slug + ".html";
        link.textContent = "Read more";
        container.append(title, date, image, description, link);
        blogContainer.appendChild(container);
    });
}
