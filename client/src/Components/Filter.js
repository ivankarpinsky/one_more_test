import React, {useState} from 'react'

export const Filter = ({submit}) => {
    const [inputs, setInputs] = useState({filterValue: '', column: "name", condition: "equal"});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            submit(inputs);
        }
    };

    const handleInputChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return (
        <>
            <h1 className="display-6">Фильтрация</h1>
            <form method="GET" className="d-flex justify-content-between align-items-center" onSubmit={handleSubmit}>
                <div className="col-5">
                    <input name="filterValue" onChange={handleInputChange} value={inputs.filterValue}
                           placeholder="Введите значение для фильтрации"
                           className="w-100 form-control"/>
                </div>
                <div className="col-2">
                    <select name="column" onChange={handleInputChange} value={inputs.column}
                            className="w-100 form-select">
                        <option value="name">Название</option>
                        <option value="quantity">Количество</option>
                        <option value="distance">Расстояние</option>
                    </select>
                </div>
                <div className="col-2">
                    <select name="condition" onChange={handleInputChange} value={inputs.condition}
                            className="w-100 form-select">
                        <option value="equal">Равно</option>
                        <option value="include">Содержит</option>
                        <option value="greater">Больше</option>
                        <option value="lesser">Меньше</option>
                    </select>
                </div>
                <button className="col-2 btn btn-primary" type="submit">Применить</button>
            </form>
        </>
    )
}
