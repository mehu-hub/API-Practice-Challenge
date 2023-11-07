const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};
 

// show Person Quantity
const showPerson = document.getElementById('showPerson');
showPerson.innerHTML = `
  <p>${person.message}</p>
`

// show Person Info
const personContainer = document.getElementById('person-container');
person.result.map((person) => {
  const personDiv = document.createElement('div');
  personDiv.classList.add('person');
  personDiv.innerHTML = `
      <h2 class="font-semibold text-2xl">Name: ${person.name.fullName}</h2>
      <p class="font-semibold text-orange-300 text-xl">Age: </p>
      <p class="font-semibold ">Street:</p>
    `
    personContainer.appendChild(personDiv);
})
