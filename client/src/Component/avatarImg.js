import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ImageAvatars() {
 const [data, setData] = useState()

  useEffect(() => {
    axios
      .get("http://localhost:4000/picture", {
        headers: {
          token: localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data.profile_picture)
        toast.success("updated successifully");
      })
      .catch((e) => {
        toast.error("error");
      });
  }, []);

  console.log(data);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="User" src={`//localhost:4000/uploads/${data}`} />
    </Stack>
  );
}
