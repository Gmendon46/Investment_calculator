
function UserInput({onChange, userInput}) {

  return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" value={userInput.initialInvestment} onChange={(e)=>onChange("initialInvestment", e.target.value)}  required />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(e)=>onChange("annualInvestment", e.target.value)} required />
            </p>
        </div>

        <div className='input-group'>
        <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" value={userInput.expectedReturn} onChange={(e)=>onChange("expectedReturn", e.target.value)} required />
            </p>

            <p>
                <label htmlFor="">Duration</label>
                <input type="number" value={userInput.duration} onChange={(e)=>onChange("duration", e.target.value)} required />
            </p>
        </div>
    </section>
  )
}

export default UserInput