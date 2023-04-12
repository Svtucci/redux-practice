import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

function StepThree () {
    const history = useHistory();
    const dispatch = useDispatch();
    const allTimes = useSelector(store => store.allTimes)

    const timeLength = useSelector(store => store.timeLength);

    const addTime = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_TIME', payload: timeLength}
        dispatch(action); 
    }

    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_TIME', payload: event.target.value }; 
        dispatch(action); 
    }


    return (
        <>
        <h3>Step Three TIME</h3>
        <form onSubmit={addTime}>
            <input type="numeric" onChange={handleChange}/>
            <input type="submit" value="submit" />
        </form>

        <ul>
            {allTimes} minutes 
        </ul>
        </>
    )
}

export default StepThree; 