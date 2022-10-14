import React from 'react'
import ReactDOM from 'react-dom';

function Another(props) {
  return (
    <div>

        {props.users.map(user => (
             <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
  )
}

export default Another

if (document.getElementById('another')) {
    const another = document.getElementById('another');

    // console.log(another.dataset);

    //making dataset as object
    const props = Object.assign({}, another.dataset);

    // console.log(JSON.parse(props.users));

    ReactDOM.render(
        <Another
            title={props.title}
            count={props.count}
            users={JSON.parse(props.users)}
        />
        ,document.getElementById('another')
    );
}
