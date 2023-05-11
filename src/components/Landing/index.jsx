import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function Landing() {
    return (
        <>
            <h2>Select Your Region</h2>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>

                        <Link to={`/room/${room.id}`}>

                            <div className="hoverTemp">

                                <div className="hoverId">
                                    {room.id} India
                                </div>

                                <div className="hoverTitle">
                                    {room.title}
                                </div>

                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export { Landing };
