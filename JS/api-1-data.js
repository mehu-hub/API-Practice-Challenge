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


const showPerson = () => {
  const personContainer = document.getElementById('person-container'); 
     
      personContainer.innerHTML = `
      <h2 class="font-semibold text-2xl">Name:${person.result[0].name.fullName}</h2>
      <p class="font-semibold text-orange-300 text-xl">Age: </p>
      <p class="font-semibold ">Stret:</p>
    `
     
  
}

showPerson();