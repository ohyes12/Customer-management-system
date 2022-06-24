import React, { Component} from "react";
import './App.css';
import Customer from "./components/Customer";

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/350/350/1',
  'name': '노무현',
  'birthday': '927532',
  'gender': '남자',
  'job': '랩퍼'
},
{
  'id': 2,
  'image': 'https://placeimg.com/350/350/2',
  'name': '문재인',
  'birthday': '923632',
  'gender': '남자',
  'job': '간첩'
},
{
  'id': 3,
  'image': 'https://placeimg.com/350/350/3',
  'name': '김대중',
  'birthday': '924532',
  'gender': '남자',
  'job': '여가부'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c =>{
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.name}
              gender={c.gender}
              job={c.job}

            />);
          })
        }
      </div>
    );
  }
}

export default App;
