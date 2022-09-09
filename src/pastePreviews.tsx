import axios from "axios";
import React, { useState, useEffect } from "react";

type pastes = {
  id: number;
  date: string;
  text: string;
};

type GetPasteList = {
  data: pastes[];
};

async function pastePreviews() {
  try {
    const { data, status } = await axios.get<GetPasteList>(
      "https://pastebin-app-amelia-mistura.herokuapp.com/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status is: ", status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

pastePreviews();

export default pastePreviews;
