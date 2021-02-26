
import {useEffect} from "react";

//redux
import {useDispatch, useSelector } from 'react-redux'
import {RootState} from "../reducers/index";

//actions
import {fetchTopData} from "../actions/index";

const Landing = () => {

    const dispatch = useDispatch();
    const topData = useSelector((state: RootState)=> state.data);
    
    useEffect(() => {
        
        dispatch(fetchTopData());
        
    }, [dispatch])

    console.log(topData);

    return(
        <div>{topData.mainHeader}</div>
    )

}

export default Landing;