"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { Alert, AlertIcon, FormErrorMessage } from "@chakra-ui/react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import {
  ChakraProvider,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface FormFields {
  fullName: string;
  phoneNumber: string;
  organizationName: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
  organizationName: yup.string().required("Organization Name is required"),
});

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  // firebase

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const timestamp = new Date();
    setLoading(true);
    const docRef = await addDoc(collection(db, "contacts"), {
      name: data.fullName,
      phoneNumber: data.phoneNumber,
      organizationName: data.organizationName,
      timestamp: timestamp.toISOString(),
    });
    setLoading(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    console.log("form suboired", data);
  };
  return (
    <ChakraProvider>
      {success && (
        <Alert
          height="3rem"
          paddingLeft={"2rem"}
          status="success"
          position="fixed"
          top="0"
          width="135vw"
          zIndex="9999"
        >
          <AlertIcon />
          Form Submitted Successfully
        </Alert>
      )}
      <Box
        width={"95%"}
        height={"auto"}
        p="4"
        boxShadow={
          " 0px 8px 11px -4px rgba(45, 54, 67, 0.04), 0px 20px 24px -4px rgba(45, 54, 67, 0.04)"
        }
        borderWidth="1px"
        borderRadius="lg"
        margin={{ base: "0", md: "auto" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.fullName}>
            <FormLabel
              style={{
                fontSize: "0.9rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
              }}
              htmlFor="fullName"
            >
              Full Name
            </FormLabel>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder=""
                  style={{
                    outline: "none",
                    border: "0.6px solid #F0F0F0",
                    borderRadius: "0.3rem",
                    background: "#F5F7F9",
                    padding: "1.625rem 1rem",
                    width: "100%",
                  }}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }}
                />
              )}
            />
            <FormErrorMessage>
              {errors.fullName && errors.fullName?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="4" isInvalid={!!errors.phoneNumber}>
            <FormLabel
              style={{
                fontSize: "0.9rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
              }}
              htmlFor="phoneNumber"
            >
              WhatsApp Number
            </FormLabel>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  placeholder=""
                  style={{
                    outline: "none",
                    border: "0.6px solid #F0F0F0",
                    borderRadius: "0.3rem",
                    background: "#F5F7F9",
                    padding: "1.625rem 1rem",
                    width: "100%",
                  }}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }}
                />
              )}
            />
            <FormErrorMessage>
              {errors.phoneNumber && errors.phoneNumber?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="4" isInvalid={!!errors.organizationName}>
            <FormLabel
              style={{
                fontSize: "0.9rem",
                fontWeight: "400",
                fontFamily: "'Poppins',sans-serif",
              }}
              htmlFor="organizationName"
            >
              Organization Name
            </FormLabel>
            <Controller
              name="organizationName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder=""
                  style={{
                    outline: "none",
                    border: "0.6px solid #F0F0F0",
                    borderRadius: "0.3rem",
                    background: "#F5F7F9",
                    padding: "1.625rem 1rem",
                    width: "100%",
                    textAlign: "start",
                  }}
                  _focus={{ boxShadow: "none", borderColor: "transparent" }}
                />
              )}
            />
            <FormErrorMessage>
              {errors.organizationName && errors.organizationName?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            style={{
              borderRadius: "1.3rem",
              backgroundColor: "#0777FF",
              width: "100%",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
              fontFamily: "'Poppins',sans-serif",
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default ContactForm;
