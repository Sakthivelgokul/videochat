
import { useSelector, useDispatch } from "react-redux";
function useEmit(name, message) {

    const socket = useSelector((state) => state.socket.socket);

    socket.emit(name, message);


}

export default useEmit;
