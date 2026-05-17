import Child from './Child'

function Parent() {
  const users = [
    { id: 1, name: 'Kamal', age: 25, city: 'Salem' },
    { id: 2, name: 'Arun', age: 24, city: 'Chennai' },
    { id: 3, name: 'Hari', age: 23, city: 'Coimbatore' },
    { id: 4, name: 'Meena', age: 22, city: 'Madurai' },
    { id: 5, name: 'Priya', age: 26, city: 'Trichy' },
  ]

  return (
    <section className="parent-section">
      <h1 className="page-title">React Parent and Child Components</h1>
      <p className="page-subtitle">
        The parent component stores five user records and passes each record to
        the child component using props.
      </p>

      <div className="user-grid">
        {users.map((user) => (
          <Child
            key={user.id}
            userNumber={user.id}
            name={user.name}
            age={user.age}
            city={user.city}
          />
        ))}
      </div>
    </section>
  )
}

export default Parent
