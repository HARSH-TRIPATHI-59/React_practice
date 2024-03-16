import Button from "./button";
import Card from "./card";
import Student from "./Student/Student";
import UserGreeting from "./Login/UserGreeting";
function App() {
  return (
    <>
      {/* <Button/> */}
      {/* <Student name="Harsh" age={19} isStudent={true} />
      <Student name="Sahil" age={21} isStudent={true} />
      <Student /> */}
      <UserGreeting isLoggedIn={true} username = "Harsh"/> 
    </>
  );
}

export default App;
