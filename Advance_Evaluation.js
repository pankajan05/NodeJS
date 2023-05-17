class Advance_Evaluation {
  constructor(experience, skills) {
    this.experience = experience;
    this.skills = skills;
  }

  evaluateExperience(callback) {
    setTimeout(() => {
      if (typeof callback === 'function') {
        callback(null, `Experience: ${this.experience} years`);
      }
    }, 0);
  }

  evaluateSkills(callback) {
    setTimeout(() => {
      if (typeof callback === 'function') {
        if (this.skills.length === 0) {
          callback(new Error('No skills found.'));
        } else {
          callback(null, this.skills);
        }
      }
    }, 0);
  }
}

// Example usage
const myEvaluation = new Advance_Evaluation(5, ["Node.js", "JavaScript", "Express.js", "MongoDB"]);

// Evaluating experience with exception handling and callback
myEvaluation.evaluateExperience((error, result) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(result);
  }
});

// Evaluating skills with exception handling and callback
myEvaluation.evaluateSkills((error, skills) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log("Skills:");
    skills.forEach((skill, index) => {
      console.log(`${index + 1}. ${skill}`);
    });
  }
});
