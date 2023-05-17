class Evaluation {
  constructor(experience, skills) {
    this.experience = experience;
    this.skills = skills;
  }

  evaluateExperience() {
    console.log(`Experience: ${this.experience} years`);
  }

  evaluateSkills() {
    console.log("Skills:");
    this.skills.forEach((skill, index) => {
      console.log(`${index + 1}. ${skill}`);
    });
  }
}

// Example usage
const myEvaluation = new Evaluation(5, [
  "Node.js",
  "JavaScript",
  "Express.js",
  "MongoDB",
]);

myEvaluation.evaluateExperience();
myEvaluation.evaluateSkills();
