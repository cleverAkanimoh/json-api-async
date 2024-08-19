const root = document.getElementById("root");

// api - Application Programming Interfaces

function apiUrl(name) {
  return `https://api.genderize.io?name=${name}`;
}

const getCatFact = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((values) => console.log(values));
};
getCatFact();

async function getGenderByName() {
  const response = await fetch(apiUrl("peculiar"));
  console.log(response);

  const data = await response.json();

  console.log("Data: ", data);
}
getGenderByName();
