import {useEffect, useState} from "react";
import {getComments} from "../servises/Api";

export default function Comments() {
    let [commentc, setComments] = useState([]);

    useEffect(() => {
        getComments().then()
    }, []);

    return (
        <div>
            {

            }
        </div>
    );
}