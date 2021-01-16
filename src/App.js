import {data} from './data'
import React from 'react'

function App() {
  return <>
    <section className='container'>
      <Friends/>
    </section>
  </>
}

const Friends = () => {
    const [myFriends, setMyFriends] = React.useState(data);
    const clearAll = () => {
        setMyFriends([]);
    }

    return <>
        <h3>{myFriends.length} birthdays today</h3>
        {
            myFriends.map(
                (friend) => {
                    return <Person {...friend}></Person>
                }
            )
        }
        {
            console.log(myFriends)
        }
        <button onClick={clearAll}>Clear All</button>
    </>
}

const Person = ({id, name, age, dp_url}) => {
    return <>
        <article className='person'>
            <img src={dp_url} alt=""/>
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    </>
}

export default App;
