import SkillCard from "./SkillCard";
import { Html, Css, Javascript, Typescript, React, Redux, Nextjs, Tailwind, Node, Mongo,  Git, Docker } from "../assets/imagesIndex";

const Skills = () => {
  const skillItem = [
    {
      imgSrc: Html,
      label: "HTML",
      desc: "Markup Language",
    },
    {
      imgSrc: Css,
      label: "CSS",
      desc: "Cascading Style Sheets",
    },
    {
      imgSrc: Javascript,
      label: "Javascript",
      desc: "Programming Language",
    },
    {
      imgSrc: Typescript,
      label: "Typescript",
      desc: "Programming Language",
    },
    {
      imgSrc: React,
      label: "React",
      desc: "JavaScript Library",
    },
    {
      imgSrc: Redux,
      label: "Redux",
      desc: "State Management",
    },
    {
      imgSrc: Nextjs,
      label: "Next.js",
      desc: "JavaScript Framework",
    },
    {
      imgSrc: Tailwind,
      label: "Tailwind",
      desc: "CSS Framework",    
    },
    {
      imgSrc: Node,
      label: "Node.js",
      desc: "JavaScript Runtime Environment",
    }
    ,
    {
      imgSrc: Mongo,
      label: "MongoDB",
      desc: "NoSQL Database",
    }
    ,
    {
      imgSrc: Git,
      label: "Git",
      desc: "Version Control System",
    }
    ,
    {
      imgSrc: Docker,
      label: "Docker",
      desc: "Containerization Platform",
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>

        <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard  imgSrc={imgSrc} label={label} desc={desc} key={index}/>
          ))}
            

                                                         
        </div>

      </div>
    </section>
  );
};

export default Skills;
