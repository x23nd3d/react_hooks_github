import React, {useContext} from 'react';
import {AlertContext} from "../context/Alert/alertContext";


const Alert = () => {

  const {alert, hide} = useContext(AlertContext);

  if (!alert) return null;


  return (
    <div
      className={`alert alert-${alert.type || "secondary"} alert-dismissible`}
      role="alert">
      {alert.text}
      <button onClick={hide} type="button" className="btn-close" aria-label="Close"></button>
    </div>
  )
}

export default Alert