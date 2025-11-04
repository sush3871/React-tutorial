import React from 'react'

const AboutPage = () => {
    const user = {
        name: "Sushant",
        age: 25,
        image: "https://avatars.githubusercontent.com/u/122607755?v=4"
    }
  return (
    <>
        <h1>About {user.name} my age is {user.age}</h1>
        <p>Hello there.<br />How do you do?</p>
        <img src={user.image} alt={"Image of " + user.name.toLowerCase()} />
    </>
  )
}

export default AboutPage