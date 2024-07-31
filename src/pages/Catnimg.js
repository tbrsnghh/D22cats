import React, {useEffect}from 'react'

import { useDispatch, useSelector } from "react-redux";
import { AddNewCat, delCats,  fetchCats } from "../redux/catsSlice";
import { Container, Table, Button, Input} from "reactstrap";
  
export default function Catnimg() {
    const dispatch = useDispatch();
  const { cats } = useSelector((state) => state.cats);
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  return (
    <div>
        {cats.map((item, index) => (
              <tr key={index}>
                <td>
                    <img src={item.avatar}/>
                </td>
                <td scope="row">{item.name}</td>
                <td>{item.birthdate}</td>
              </tr>
            ))}
    </div>
  )
}
