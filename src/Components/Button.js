import { Link } from 'react-router-dom';

export default function Button(props) {
    return (
        <Link to={props.to}>
            <a className="csCustomBtn me-3">
                {props.BtnContent}
            </a>
        </Link>
    )
}