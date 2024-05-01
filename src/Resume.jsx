import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>John Doe</h1>
          <p>Frontend Developer</p>
        </header>
        <section>
          <h2>About Me</h2>
          <p>I am a passionate frontend developer with expertise in React.js. I enjoy creating responsive and user-friendly web applications.</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
          </ul>
        </section>
        <section>
          <h2>Experience</h2>
          <div>
            <h3>Frontend Developer - ABC Company</h3>
            <p>Developed and maintained web applications using React.js, HTML, CSS, and JavaScript.</p>
            <p>Collaborated with backend developers to integrate frontend code with server-side logic.</p>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <div>
            <h3>Bachelor of Science in Computer Science - XYZ University</h3>
            <p>Graduated Magna Cum Laude</p>
          </div>
        </section>
        <footer>
          <p>Contact: john.doe@example.com</p>
        </footer>
      </div>
    );
  }
}

export default Resume;
