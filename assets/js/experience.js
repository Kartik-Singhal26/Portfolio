//  Work experience cards


const internshipcards = document.querySelector(".internships-cards");
const exp = [
  {
    title: "Product Development Intern",
    cardImage: "assets/images/experience-page/ORT.png",
    place: "Omnipresent Robot Technologies",
    time: "Delhi, India | September, 2020 - December, 2020",
    desp: "<li>Worked on ideation, CAD modelling and prototyping for UV Sanitization Devices.</li> <li>Co-ordinated manufacturing, documentation, BOM preparation and procurements for the prototypes</li> <li>Designed CAD models for a multicoptor drone assembly with a adjustable wing locking mechanism.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  internshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Research Intern Cards

const Researchinternshipcards = document.querySelector(".Researchinternships-cards");
const Researchinternship = [
  {
    lab: "Centre for Application of Information Technology in Financial Systems",
    Institute: "Netaji Subhas Institute of Technology, Delhi, India",
    Supervisor: "Supervisor: Prof. Deepak Kumar Sharma",
    time: "| May, 2020 - Present",
    RA: "Research Areas: Predictive Maintenance, Cyber-Physical Systems, Deep Learning, Time Series Forecasting",
    desp: "We are working with datasets from operations of industrial machines or cyber-physical systems to develop predictive maintenance techniques using recurrent neural networks. Time series forecasting is done to analyse operative behaviour on the basis of collected features to 'predict' failures before they can occur or detect anomalies during operations.",
  },
  {
    lab: "Advanced Process Control Lab",
    Institute: "Netaji Subhas Institute of Technology, Delhi, India",
    Supervisor: "Supervisors: Prof. Vineet Kumar, Prof. K.P.S. Rana",
    time: "| October, 2019 - Present",
    RA: "Research Areas: Mobile Robots, Control Systems, Optimization Techniques, Fuzzy Logic Theory",
    desp: "We studied performances of various non-lnear PID controllers and developed adaptive controllers utilizing Fuzzy Logic Theory and optimization techniques for control of non - holonomic mobile robots. Next step is to design real robots and try control of hardware under actual physical constraints.",
  },
  {
    lab: "Centre for Advanced Production and Industrial Engineering Research ",
    Institute: "Delhi Technological University, Delhi, India",
    Supervisor: "Supervisor: Prof. Ranganath M. Singari",
    time: "| May, 2019 - October, 2019",
    RA: "Research Areas: Fuzzy Logic Theory, Irrigation Systems, Photogrammetry, 3D Printing ",
    desp: "We prepared an arduino based irrigation system based on Fuzzy Logic to control water flow and timings. (This intern was my first introduction to the initially dreaded and now loved Fuzzy Logic Theory.) Since, I also visited Department of Design, DTU during this period, I got the chance to try the FDM printer there. Mainly we explored using 2D photos of physical models to construct 3D Printable meshes without the need of any CAD modelling.",
  }
];

const showCards3 = () => {
  let output = "";
  Researchinternship.forEach(
    ({ lab, Institute, Supervisor, time, desp, RA }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${lab}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${Supervisor}</span><br>
              <span class="cite">${Institute}</span>
              <span class="author">${time}</span>
            </p>
            <br>
            <br>
            <p>
              ${desp}
            </p>
            <p class="meta">
            <br>
            <span class="author">${RA}</span>
            </p>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  Researchinternshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

