import { data } from "../data/data";
import Button from "./Button";

const Result = ({ imc, currentStatus, handleBack }) => {
    return (
        <div className="result-screen">
            <h2>Seu IMC: <span className={currentStatus} >{imc}</span></h2>
            <p className="current-status">Situação atual: <span className={currentStatus}>{currentStatus}</span></p>
            <p>Confira as classificações</p>
            <table>
                <tr className="table-header">
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Obesidade</th>
                </tr>
                    {data.map((item) => (
                        <tr key={item.info}>
                            <td>{item.classification}</td>
                            <td>{item.info}</td>
                            <td>{item.obesity}</td>
                        </tr>
                    ))}
            </table>
            <Button value={"voltar"} className={"back"} onClick={handleBack}/>
        </div>
    )
}

export default Result;
