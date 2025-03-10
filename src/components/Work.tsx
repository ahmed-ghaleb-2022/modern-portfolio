import ProjectCard from "./ProjectCard";
import { todoList, groupWhatsapp, factoryGame, threeDPortfolio, bookStore } from "../assets/imagesIndex";

const works = [
  {
    imgSrc: bookStore,
    title: "Book store website",
    tags: ["React", "Typescript", "MongoDB"],
    projectLink: "https://books-store-fronend.vercel.app/",
  },
  {
    imgSrc: threeDPortfolio,
    title: "3D portfolio website",
    tags: ["React", "Threejs", "Tailwind"],
    projectLink: "https://3dportfolio.ahmedghaleb.com/",
  },
  {
    imgSrc: groupWhatsapp,
    title: "whatsapp's groups website",
    tags: ["Nextjs", "Laravel", "MySql"],
    projectLink: "https://whatsapp-groups.vercel.app/",
  },
  {
    imgSrc: factoryGame,
    title: "Factory game website",
    tags: ["React", "Laravel", "Inertiajs", "MySql"],
    projectLink: "https://factory.ahmedghaleb.com/",
  },
  {
    imgSrc: todoList,
    title: "Todo list website",
    tags: ["Nextjs", "MongoDB", "Typescript"],
    projectLink: "https://todo-list-nextjs-amber.vercel.app/",
  },
 
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <p className="mb-8 text-lg">I have more projects in my GitHub account and more projects I didn't published because I was to test and learn new technologies.</p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard
              key={index}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
