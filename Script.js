// Simple enhancement: smooth scroll (future-proof for navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
    });
});

// Example: dynamic year in footer (optional upgrade)
const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Joy Ndulue | Professional Nursing Portfolio`;
}// MAKE FUNCTION GLOBAL (THIS IS THE FIX)
window.sendMessage = function () {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input || !chatBox) {
    console.log("Chatbot elements not found");
    return;
  }

  let text = input.value.trim().toLowerCase();
  if (text === "") return;

  addMessage(text, "user");

  let response = getResponse(text);

  setTimeout(() => {
    addMessage(response, "bot");
  }, 300);

  input.value = "";
};

// ADD MESSAGE
function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}// RESPONSE LOGIC
function getResponse(input) {
  input = input.toLowerCase();

  // GREETING
  if (input.includes("hello") || input.includes("hi")) {
    return `Hello, I am the assistant for ${PROFILE.name}, a Clinical and Occupational Health Nurse. How can I assist you today?`;
  }

  // WHO ARE YOU
  if (input.includes("who") && input.includes("you")) {
    return `${PROFILE.name} is a highly experienced Clinical and Occupational Health Nurse based in ${PROFILE.location} with ${PROFILE.experience} of hands-on healthcare experience. She specializes in patient care, workplace health, and emergency response.`;
  }

  // WHAT DO YOU DO
  if (input.includes("what") && input.includes("do")) {
    return `${PROFILE.name} provides expert clinical care, occupational health services, emergency response, and patient education. She helps organizations maintain a healthy workforce and ensures high-quality patient outcomes.`;
  }

  // SKILLS
  if (input.includes("skill")) {
    return `${PROFILE.skills.join(", ")}.`;
  }

  // EXPERIENCE
  if (input.includes("experience")) {
    return PROFILE.workExperience
      .map(job => `${job.role} at ${job.company} (${job.period})`)
      .join("\n");
  }

  // EDUCATION
  if (input.includes("education") || input.includes("school")) {
    return PROFILE.education.join("\n");
  }

  // QUALIFICATIONS
  if (input.includes("qualification") || input.includes("cert")) {
    return PROFILE.qualifications.join("\n");
  }

  // ACHIEVEMENTS / CASES
  if (input.includes("achievement") || input.includes("case")) {
    return PROFILE.achievements.join("\n");
  }

  // SERVICES (IMPORTANT FOR CLIENTS)
  if (
    input.includes("service") ||
    input.includes("offer") ||
    input.includes("help")
  ) {
    return `She offers clinical care, occupational health services, emergency response, risk assessment, and health education tailored to organizations and individuals.`;
  }

  // AVAILABILITY (VERY IMPORTANT)
  if (
    input.includes("hire") ||
    input.includes("available") ||
    input.includes("job") ||
    input.includes("work") ||
    input.includes("recruit")
  ) {
    return `${PROFILE.availability.join(" ")} Preferred industries include construction, manufacturing, and healthcare. Contact: ${PROFILE.contact.email}`;
  }

  // CONTACT
  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("linkedin")
  ) {
    return `Email: ${PROFILE.contact.email}\nLinkedIn: ${PROFILE.contact.linkedin}`;
  }

  // LOCATION
  if (input.includes("location") || input.includes("where")) {
    return `${PROFILE.name} is based in ${PROFILE.location}.`;
  }

  // DEFAULT RESPONSE (STRICT PROFESSIONAL BOUNDARY)
  return "I can assist you with clinical experience, skills, qualifications, or how to engage her services.";
}


// ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");

  if (chatBox) {
    let welcome = document.createElement("div");
    welcome.className = "message bot";
    welcome.textContent = "Hello, I can guide you on her clinical experience, skills, and how to engage her services.";
    chatBox.appendChild(welcome);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const active = document.activeElement;
      if (active && active.id === "user-input") {
        e.preventDefault();
        window.sendMessage();
      }
    }
  });
});


// PROFILE DATA
const PROFILE = {
  name: "Joy Ukamaka Ndulue",
  location: "Ota, Ogun State, Nigeria",
  experience: "over 13 years",

  skills: [
    "Patient Assessment & Care Planning",
    "Orthopedic & Musculoskeletal Care",
    "Emergency Response (CPR, First Aid)",
    "Risk Assessment & Management",
    "Case Management",
    "Patient Education & Advocacy",
    "Clinical Documentation",
    "Infection Prevention & Control",
    "Wound Assessment & Management",
    "Teamwork & Communication",
    "Quality Improvement",
    "Critical Thinking & Clinical Decision-Making"
  ],

  availability: [
    "Available for freelance roles.",
    "Open to full-time opportunities.",
    "Currently practicing as an Occupational Health Nurse."
  ],

  contact: {
    email: "danmaife12@gmail.com",
    linkedin: "https://www.linkedin.com/in/joy-ndulue-024520a3"
  },

  achievements: [
    "Successfully managed a gangrenous foot ulcer case",
    "Improved patient satisfaction by 15% using evidence-based care",
    "Implemented workplace hypertension management program"
  ],

  qualifications: [
    "Registered Nurse Orthopedic",
    "Registered General Nurse",
    "Registered CHEW"
  ],

  education: [
    "PBNS NOH, Igbobi",
    "SON NAUTH, Nnewi",
    "ASCoHT, Obosi"
  ],

  workExperience: [
    {
      role: "Occupational Health Nurse",
      company: "Polysmart Packaging Limited",
      period: "March 2021 – Present"
    },
    {
      role: "Registered Nurse (School Health)",
      company: "Faith Academy Clinic",
      period: "Oct 2014 – Jan 2020"
    },
    {
      role: "Community Health Nurse (OPD)",
      company: "FESTAC Primary Health Care",
      period: "Mar 2012 – Sept 2014"
    }
  ]
};
