import styles from './List.module.css';
import PropTypes from "prop-types";
function List(props) {
  const category = props.category;
  const itemList = props.items;
  // fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabet in ascending
  // fruits.sort((a,b) => a.cal - b.cal);  //cal in ascending

  // const lowcal = itemList.filter(item => fruit.cal< 100);
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; {item.cal}
    </li>
  ));

  return (
    <>
      <h3 className={styles.list}>{category}</h3>
      <ol className={styles.items}>{listItems}</ol>
    </>
  );
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({is: PropTypes.nameber,
  name: PropTypes.string,
  cal:PropTypes.number,
  })),
}
List.defaultProps = {
  category: "Category",
  items: [],

}


export default List;
