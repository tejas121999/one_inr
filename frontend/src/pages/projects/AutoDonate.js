import React from 'react'

const AutoDonate = () => {
    return (
        <div>
            <br />
            <be />
            <br />
            <br />
            <div className="card">
                <div
                    style={{
                        display: 'flex',
                        padding: '2px',
                        justifyContent: 'space-betwee n',
                    }}
                >
                    <p
                        style={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            margin: '20px',
                            marginLeft: '20px',
                        }}
                    >
                        AUTO DONATE
                    </p>
                </div>
            </div>
            <div className='autoDonate'>
                <div className='white-box'>
                    <div className='row'>
                        <h2>Donate fund for Feeding Pigeons Grains</h2>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-4 col-xs-12'>
                            <label>Add Fund:</label>
                            <input className='form-control' name='fund_amount' type='text' />
                        </div>
                        <div className='form-group col-sm-8 col-xs-12'>
                            <span style={{ float: 'right' }}>
                                Max Doner amount available is Rs.
                                <b>397</b>
                            </span>
                            <br />
                            <span style={{ float: 'right' }}>
                                Max fund limit is Rs.
                                <b>146</b>
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-4 col-xs-12'>
                            <label>Fund Date : </label>
                            <input type='date' className='form-control' />
                        </div>
                    </div>
                    <div style={{ marginLeft: '12px', marginTop: '20px' }}>
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoDonate
