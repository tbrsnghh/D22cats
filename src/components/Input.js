import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddNewCat, delCats, fetchCats } from "../redux/catsSlice";
export default function Onput() {
  const dispatch = useDispatch();
  const [text, setText]=useState("")
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  const handle_add = (cat) => {
    dispatch(AddNewCat(cat));
  };
  return (
    <Input
      type="text"
      placeholder="Cat name"
      onChange={(e)=>setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handle_add({ name: text, checked: false });
          e.target.value=""
        }
      }}
    />
  );
}
