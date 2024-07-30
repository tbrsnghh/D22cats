import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewCat, delCats,  fetchCats } from "../redux/catsSlice";
import { Container, Table, Button, Input} from "reactstrap";
export default function Cats() {
  const dispatch = useDispatch();
  const { cats } = useSelector((state) => state.cats);
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  const handle_del=(id)=>{
    dispatch(delCats(id))
  }
  const handle_add=(cat)=>{
    dispatch(AddNewCat(cat));
  }
  const handle_reCheck=(cat)=>{
    dispatch(handle_reCheck(cat))
  }
  return (
    <>
      <Container>
        <Input type="text" placeholder="Cat name"
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              handle_add({name:"Capy Cat", checked: false})
            }
          }}        
        />
        <Table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Birth</td>
              <td></td>
              <td>Check</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {cats.map((item, index) => (
              <tr key={index}>
                <td scope="row">{item.name}</td>
                <td>{item.birthdate}</td>
                <td>
                  <Button onClick={()=>handle_del(item.id)}>Delete</Button>
                </td>
                <td>{item.checked?"true":"false"}</td>
                <td>
                  <Button onClick={()=>handle_reCheck(item)}>ReCheck</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}


