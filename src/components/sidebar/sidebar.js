import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar(){
    return(
        <div>
            <User />
            <Suggestions />
        </div>
    );
}