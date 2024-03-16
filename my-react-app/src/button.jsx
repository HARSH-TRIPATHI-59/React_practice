// import styles from "./button.module.css"; //create a css as modules

function Button() {
  // let count = 0;
  // const handleClick = (name) => {
  //   if(count < 3){
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name} stop clicking me`)
  //   }
  // };

  const handleClick = (e) => e.target.textContent = "Ouch";

  // const hadnleClick2 = (name) => console.log(`${name} stop clicking me`)

  return <button onClick={ (e) => handleClick(e)}>Cick Me 😊</button>;
}
export default Button;
