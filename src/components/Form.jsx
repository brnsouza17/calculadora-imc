import Button from "./Button";

const Form = ({ height, setHeight, weight, setWeight, calcImc, handleClear }) => {
    const sanitizeInput = (value) => {
        return value.replace(/[^0-9.,]/g, '');
    };

    const handleHeight = (e) => {
        const filteredValue = sanitizeInput(e.target.value);
        setHeight(filteredValue);
    };

    const handleWeight = (e) => {
        const filteredValue = sanitizeInput(e.target.value);
        setWeight(filteredValue);
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            calcImc();
        }
    }

    return (
        <div className="input-screen">
            <h1>Calculadora de IMC</h1>
            <form>
                <label htmlFor="height">
                    <p>Altura:</p>
                    <input 
                        type="text"
                        id="height"
                        inputMode="decimal"
                        placeholder="Exemplo 1,75"
                        value={height}
                        onChange={handleHeight}
                        onKeyDown={handleEnter}
                    />
                </label>
                <label htmlFor="weight">
                    <p>Peso:</p>
                    <input
                        type="text"
                        id="weight"
                        inputMode="decimal"
                        placeholder="Exemplo 70,5"
                        value={weight}
                        onChange={handleWeight}
                        onKeyDown={handleEnter}
                    />
                </label>
            </form>
            <div className="buttons">
                <Button value={"Calcular"} onClick={calcImc}/>
                <Button value={"Limpar"} className="clear" onClick={handleClear}/>
            </div>
        </div>
    )
}

export default Form;
