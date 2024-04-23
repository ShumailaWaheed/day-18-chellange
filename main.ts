// Question: 52

// Define a smartphone object
let smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    storage: "128GB",
    screenSize: "6.2 inches",
    batteryLife: "Up to 12 hours of internet usage"
};

// Accessing smartphone details
console.log("Brand: " + smartphone.brand);
console.log("Model: " + smartphone.model);
console.log("Storage: " + smartphone.storage);
console.log("Screen Size: " + smartphone.screenSize);
console.log("Battery Life: " + smartphone.batteryLife);

// Question: 53

// Nested object representing programmer skills
const programmerSkills = {
    codingLanguages: ["JavaScript", "Python", "TypeScript"],
    tools: ["Git", "Visual Studio Code", "Docker"],
    frameworks: ["React", "Node.js", "Express.js"]
};

// Extracting three specific skills
const { codingLanguages, tools, frameworks } = programmerSkills;
const specificSkills = {
    codingLanguage: codingLanguages[0], // Extracting the first coding language
    tool: tools[1], // Extracting the second tool
    framework: frameworks[2] // Extracting the third framework
};

// Outputting the specific skills
console.log("Specific Skills:");
console.log("Coding Language:", specificSkills.codingLanguage);
console.log("Tool:", specificSkills.tool);
console.log("Framework:", specificSkills.framework);

// Question 54

unction createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject: { [key: string]: string } = {}; 
    dynamicObject[key] = value;
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme", "dark");

console.log(userPreference);
