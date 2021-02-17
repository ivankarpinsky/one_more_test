import React from 'react'

export const Table = ({entities}) => {

    const rows = entities.map(el =>
        <tr key={el.id}>
            <td>{el.date}</td>
            <td>{el.name}</td>
            <td>{el.quantity}</td>
            <td>{el.distance}</td>
        </tr>
    )

    return (
        <div className="mt-2">
            <h1 className="display-6">Таблица</h1>
            <table className="table table-bordered table-primary mt-2">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
}
