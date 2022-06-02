import { useEffect, useState } from "react"
import './switch.css';

export default function Switch(props) {
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setCheckbox(props.work);
  }, [props.work])

  return (
    <label className='switch'>
        <input type='checkbox' onChange={() => props.passData(!checkbox)} checked={checkbox}></input>
        <span className='slider round'></span>
    </label>
  )
}