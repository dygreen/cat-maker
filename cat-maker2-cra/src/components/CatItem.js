function CatItem(props){
  return(
    <li>
      <img src={props.img} style={{height: "150px"}}/>
    </li>
  );
}

export default CatItem;