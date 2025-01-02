import React from "react";

const projects = [
  {
    href: "https://github.com/furkanislek/rixit-service",
    imgSrc: "/rixit.png",
    title: "Rixit Service One Page",
    description:
      "This project is one page made using nextjs and tailwindcss. Pixcel perfect work was done with Figma design. Suitable for responsive design. You can look at the details for demo and source code.",
  },
  {
    href: "https://github.com/furkanislek/Fimple-Credit-Calculate",
    imgSrc:
      "https://user-images.githubusercontent.com/76527169/190879487-948d6e29-1e1d-4658-9106-8659ed414c3f.png ",
    title: "React Fimple Credit Calculate",
    description:
      "React Credit Calculator application. In this project, by using ReactJs, it is possible to determine the monthly installment amount and the total repayment amount based on the credit amount, the number of installments, the monthly interest rate and the installment interval. ",
  },
  {
    href: "https://github.com/furkanislek/Portfolio-React",
    imgSrc: "/old.png",
    title: "Old Portfolio Site",
    description:
      "Old and First portfolio site created with React and Redux Toolkit. Multiple language definitions and theme mode were set with Redux toolkit.",
  },
  {
    href: "https://github.com/furkanislek/Tic-Tac-Toe",
    imgSrc:
      "https://user-images.githubusercontent.com/76527169/192136695-376d1b2f-9427-4d80-a63a-de3d0559b5ae.png",
    title: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe or XOX game. This game was made only by using javascript. I got the opportunity to participate in the React Practicum by creating this game. You can try the game for fun.",
  },
  {
    href: "https://github.com/furkanislek/Quiz-App/",
    imgSrc:
      "https://user-images.githubusercontent.com/76527169/212535326-7a9122a0-979a-44e3-b47f-8aa26674954e.png",
    title: "Quiz App",
    description:
      "In this project I made using React, you can answer the questions in order and see your correct number at the end of the test. You can add or remove as many questions as you want.",
  },
];

const ProjectCard = () => (
  <div className="flex md:flex-row md:justify-between md:flex-wrap flex-col justify-center items-center gap-12">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default ProjectCard;
