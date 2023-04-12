import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 


function StepTwo() {
    const history = useHistory();
    const dispatch = useDispatch(); 

    const activityType = useSelector(store => store.activityType);
    const allActivity = useSelector(store => store.allActivity); 

    const addActivity = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_ACTIVITY_TYPE', payload: activityType}
        dispatch(action); 
    }

    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_TYPE', payload: event.target.value };
        dispatch(action); 
    }

    
    const nextPage = () => {
        if (allActivity.length > 0) {
            history.push('/step-3');
        } else {
            alert('Please add an activity.');
        }
    }

    return (
        <>
            <h3>Step Two</h3>
            <form onSubmit={addActivity}>
                <input type="text" onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
                <div>
                    {
                        allActivity.map((activity, i) => <li key={i}>{activity}</li>)
                    }
                </div>
                <button onClick={nextPage}>Next</button>
        </>
    );
}

export default StepTwo;