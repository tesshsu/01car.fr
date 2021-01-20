import React, {useEffect} from 'react';
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";
import {create} from "../../service/actions/favorites";


export default function FavorisButton(props) {
    const {
        isAuthentificated,
        loggedUser
    } = useLoggedUser();

    useEffect(() => {

    }, [isAuthentificated, loggedUser]);

    const [isClick, setIsClick] = React.useState(false);

    const style = {
        color: isClick ? '#ed8936' : '#fff',
    }

    const onClickFavoris = (e) => {
        e.preventDefault();

        let payload = {
            "category": props.category,
            "entity_id": props.entity_id
        }
        props.action(payload);

        // if (!isAuthentificated || !loggedUser) {
        //     Router.push("/auth/login")
        // } else {
        //
        //
        //     console.log(payload);
        //     create(payload);
            setIsClick(true);

        // }

    }


    return (
        <>
            <button
                className="bg-gray-600 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
                type="button"
                onClick={onClickFavoris}
            >
                <i className="far fa-heart" style={style}> </i>
            </button>
            {isClick ? <span className="text-xs text-gray-500"> Ajoutées</span> : null}
        </>
    );
}
