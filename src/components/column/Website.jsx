import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import spacing from "@mui/system/spacing";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../../styles/Website.css";

export default function Website({ panel }) {
  const website = [
    {
      icon: (
        <FaGithub className={panel === "home" ? "homeIcon" : "contactIcon"} />
      ),
      label: "Github",
      detail: "Username:",
    },
    {
      icon: (
        <FaLinkedin className={panel === "home" ? "homeIcon" : "contactIcon"} />
      ),
      label: "LinkedIn",
      detail: "Username:",
    },
    {
      icon: (
        <BsFillTelephoneFill
          className={panel === "home" ? "homeIcon" : "contactIcon"}
        />
      ),
      label: "Phone Number",
      detail: "09*********",
    },
    {
      icon: (
        <MdEmail className={panel === "home" ? "homeIcon" : "contactIcon"} />
      ),
      label: "Email",
      detail: "***@gmail.com",
    },
  ];

  return (
    <Stack direction="row">
      <Grid container spacing={3}>
        {website.map((info, index) => (
          <React.Fragment key={index}>
            <Grid item xs={3} className="infoGrid">
              {info.icon}
            </Grid>
            <Grid item xs={9} className="infoGrid">
              <p className="label">{info.label}</p>
              <p>{info.detail}</p>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Stack>
  );
}
