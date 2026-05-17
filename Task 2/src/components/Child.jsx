function Child({ userNumber, name, age, city }) {
  return (
    <article className="user-card">
      <span className="user-number">User {userNumber}</span>

      <h2 className="user-name">{name}</h2>

      <p className="user-detail">
        <span>Age:</span> {age}
      </p>
      <p className="user-detail">
        <span>City:</span> {city}
      </p>

      <p className="output-line">
        User {userNumber} -&gt; {name}, {age}, {city}
      </p>
    </article>
  )
}

export default Child
