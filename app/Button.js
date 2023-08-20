function Button(props) {
	const handleClick = () => {
    props.onClick(props.index); 
    props.onClick
  };
  return (
    <div className="bluebox">
      	<h6 className="text">{props.text1}</h6>
       	<p className="count">Count: {props.count}</p>
      	<input type="button"className="button1" value={props.text} style={{ backgroundColor: props.color }}
         onClick={handleClick}/>
     </div>
  );
}


export default Button;
