import React from "react";

export default function Tela1() {
  return (
    <div>
      <section className="introducao">
        <article>
          <h2>👋Hello world</h2>
          <h1>Álvaro Jaime</h1>
          <h2>Frontend Developer</h2>
          <p>
            Conhecimentos:
          </p>
          <ul>
            <li>JavaScript, React</li>
            <li>CSS, SASS</li>
            <li>HTML</li>
          </ul>
        </article>
        <div className="introducao-img">
          <img src="images/undraw_react_y7wq.svg" alt="svg react"></img>
        </div>
      </section>
    </div>
  );
}

