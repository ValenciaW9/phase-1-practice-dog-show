async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
}

// Example usage
postData("http://localhost:3000/dogs", { name: "Spot", breed: "Labrador", sex: "Male" })
  .then((data) => {
    console.log(data);
  });