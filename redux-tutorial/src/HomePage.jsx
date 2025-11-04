  import React from "react";
  export function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
    console.log('increment like count');
    setLikes(() => likes + 1)
  }
    return (
      <div>
        {/* <Header title="Develop. Preview. Ship." /> */}
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Likes{likes}</button>
      </div>
    );
  }

  export default HomePage