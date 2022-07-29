import { useState } from "react";



interface Dog {
  message: string
  status: 'success'
}

function App() {
  const [dogPicture, setDogPicture] = useState<Dog[]>([])

  const hnadleGetDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/hound/images/random"
    );
    const jsonBody = await response.json();
    setDogPicture([...dogPicture, jsonBody]);
  }


  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (dogPicture) {
    return (
      <div>
        <h1>Dog app</h1>
          {dogPicture.map((e,index) => { return <img src={e.message} alt="Dog" key={index}/>})}
        <hr />
        <button onClick={hnadleGetDog}>Get another dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={hnadleGetDog}>Get new Dog</button>
      </div>
    );
  }
}

export default App;


/*interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const handleGetJoke = async () => {
  const response = await fetch(
    "https://jokestemp.neillbogie.repl.co/jokes/general/random"
  );
  const jsonBody: Joke[] = await response.json();
  setJoke(jsonBody[0]);
};*/