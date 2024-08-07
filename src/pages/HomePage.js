import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLocations,
  predictHomePrice,
  setFormData,
  setShowAlert,
} from "../store/slice";
import EstimatedPrice from "../components/EstimatedPrice";
import Form from "../components/Form";
import Alert from "../components/Alert";
import "../index.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const { locations, formData, estimatedPrice, showAlert, status, error } = useSelector((state) => state.homePrice);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatch(setShowAlert(false));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert, dispatch]);

  const handleChange = useCallback(
    (e) => {
      dispatch(setFormData({ [e.target.name]: e.target.value }));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("total_sqft", formData.total_sqft);
      data.append("location", formData.location);
      data.append("bath", formData.bath);
      data.append("bkh", formData.bkh);

      dispatch(predictHomePrice(data));
    },
    [dispatch, formData]
  );

  const memoizedLocations = useMemo(() => locations, [locations]);

  return (
    <div className="relative min-h-screen bg-custom-image">
      <Link
        to="/"
        className="absolute top-14 left-8 bg-gray-100 text-blue-500 font-bold py-2 px-4 -mx-8 rounded shadow-lg hover:bg-gray-200"
      >
        Go Back
      </Link>
      {showAlert && <Alert />}

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Home Price Estimator
          </h1>

          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            locations={memoizedLocations}
          />
          {estimatedPrice !== null && <EstimatedPrice price={estimatedPrice} />}
        </div>
      </div>
    </div>
  );
}
