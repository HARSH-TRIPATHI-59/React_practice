// import styles from "./button.module.css"; //create a css as modules

function Button() {
  const styles = { //inline method for css
    
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    
  }
  return( <button style = {styles}>Click Me </button>);
}
export default Button;
