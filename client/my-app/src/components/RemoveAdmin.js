import React from 'react'

function RemoveAdmin() {
  return (
<>
<div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center ">
                    {/* <div className="col "> */}
                    <div className="card" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">RemoveUser</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                            <input type="text" id="form2Example17" className="form-control" placeholder='Enter  Address' />
                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                        </div>



                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="button" >RemoveUser</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                </div>
            </div>

</>
  )
}

export default RemoveAdmin