import g4 from '../images/g4.png';

function BookingHistoryItem(props) {

    return (
        <tr>
            <td>
                <div className="pic">
                    <img src={g4} alt="p1" />
                </div>
            </td>
            <td>{props.propertyName}</td>
            <td>{props.bookingDate}</td>
            <td>{props.camperName}</td>
            <td>${props.payableAmount}</td>
        </tr>
    );
}

export default BookingHistoryItem;