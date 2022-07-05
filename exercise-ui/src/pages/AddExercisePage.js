import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lb');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Add Exercise</h2>
            <input
                type="text"
                placeholder="Exercise name"
                value={name}
                onChange={e => setName(e.target.value)} /> &nbsp;
            <input
                type="number"
                placeholder="Rep count"
                value={reps}
                onChange={e => setReps(e.target.value)} /> &nbsp;
            <input
                type="number"
                placeholder="Weight used"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select type="text" value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="lb">lb</option>
                <option value="kg">kg</option>
            </select> &nbsp;
            <input
                type="text"
                placeholder="DD-MM-YY"
                value={date}
                onChange={e => setDate(e.target.value)} /> &nbsp;
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;