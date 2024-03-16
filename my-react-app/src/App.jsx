import Button from "./button";
import Card from "./card";
import Student from "./Student/Student";
import UserGreeting from "./Login/UserGreeting";
import List from "./List/List";
function App() {
  const fruits = [{id: 1 ,name:"apple",cal: 95} , {id:2 ,name:"orange", cal: 45} , 
  {id: 3,name: "banana", cal:105}];

  const vegetables = [{id: 4 ,name:"potatoes",cal:110} , {id:5 ,name:"celery", cal: 15} , 
  {id: 3,name: "carrots", cal:25}];
  return (
    <>
      
      {fruits.length > 0 ? <List items={fruits} category = "Fruits"/> : null}
      {vegetables.length > 0 ? <List items = {vegetables} category = "Vegetables"/> : null}
    </>
  );
}

export default App;
