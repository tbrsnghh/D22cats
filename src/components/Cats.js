import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/features/foodSlice";
export default function Cats() {
  const dispatch = useDispatch();
  const { food } = useSelector((state) => state.food);
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  console.log(food)
  return (
    <h1></h1>
  );
}
