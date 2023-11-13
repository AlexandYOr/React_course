const Book = (props) => {
    return props.name ? (
      <div>
        <h2>{props.name}</h2>
        <p>год издания: {props.year} г.</p>
        <p>стоимость {props.price} руб.</p>
        <p>{props.children}</p> 
      </div>
    ) : null
  }

export {Book}