export default function StepCount({ step }) {
  return (
    <div className="step__count">
      <div className={`step ${step === 0 && "step__active"}`}>
        {step !== 0 ? "Completed" : "Step 1"}
      </div>
      <div className={`step ${step === 1 && "step__active"}`}>
        {step > 1 ? "Completed" : "Step 2"}
      </div>
      <div className={`step ${step === 2 && "step__active"}`}>
        {step > 2 ? "Completed" : "Result"}
      </div>
    </div>
  );
}
