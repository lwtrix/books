import { ListGroup } from "react-bootstrap";

const SingleBook = (props) => {
   return (
        <ListGroup.Item className="w-25 mx-1 my-3">
            <h5>{props.title}</h5>
            <img src={props.img} className="img-fluid"></img>
        </ListGroup.Item>
   )
}

export default SingleBook;