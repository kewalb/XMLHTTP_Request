// get the country name, region, sub-region and population from rest countries api
const getDetails = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.responseType = "json";
  xhr.onload = () => {
    const details = xhr.response;
    for (let detail of details) {
      console.log(
        detail.name,
        detail.region,
        detail.subregion,
        detail.population
      );
    }
  };
  xhr.send();
};

// invoking the function
getDetails();

// displaying the country flags in console from rest countries api

const getFlag = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.responseType = "json";
  xhr.onload = () => {
    const flags = xhr.response;
    for (let flag of flags) {
      console.log(flag.flags);
    }
  };
  xhr.send();
};

// invoking the function
getFlag();

// How to compare two JSON have the same properties without order? var obj1 = { name: "Person 1", age:5 }; var obj2 = { age:5, name: "Person 1" };

// _.isEqual(obj1, obj2)
