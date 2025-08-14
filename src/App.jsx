import { useState } from "react";
import { data } from "./data/data";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
    let [height, setHeight] = useState("");
    let [weight, setWeight] = useState("");
    const [imc, setImc] = useState();
    const [currentStatus, setCurrentStatus] = useState("");

    const calcImc = () => {
        if (!weight || !height) return;
        height = height.replace(",", ".");
        weight = weight.replace(",", ".");
        if (!height.includes(".")) height = height / 100;
        const imcResult = (weight / (height * height)).toFixed(1);
        setImc(imcResult);

        data.forEach((item) => {
            if (imcResult >= item.min && imcResult <= item.max) {
                setCurrentStatus(item.info);
            }
        })
    }

    const handleBack = () => {
        setCurrentStatus("");
        setImc();
        setWeight("");
        setHeight("");
    }

    const handleClear = () => {
        setHeight("");
        setWeight("");
    }

    return (
        <main>
            <div className="box">
                {
                    !imc ? (
                        <Form height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} calcImc={calcImc} handleClear={handleClear} />
                    ) : (
                        <Result imc={imc} currentStatus={currentStatus} handleBack={handleBack}/>
                    )
                }
            </div>
        </main>
    )
}

export default App;
