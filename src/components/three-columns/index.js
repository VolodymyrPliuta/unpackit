import React from 'react'

const ThreeColumns = () => {
  return(
    <div className={"container-fluid"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <h1> Class with container-fluid</h1>
        </div>
        <div className={"col-sm-4 bg-success"}>
          <h3> className={"col-sm-4 bg-success"} </h3>
        </div>
        <div className={"col-sm-4 bg-primary"}>
          <h3> className={"col-sm-4 bg-primary"} </h3>
        </div>
        <div className={"col-sm-4 bg-info"}>
          <h3> className={"col-sm-4 bg-info"} </h3>
        </div>
      </div>
    </div>
  )
}

export default ThreeColumns
