import React, { useState } from "react";
import { Box, TextField, Typography, Checkbox, Button } from "@mui/material";

const OwnerandContactinfo = () => {
  const [contactInfo, setContactInfo] = useState({
    contactName: "",
    contactMobile: "",
    contactEmail: "",
  });

  const [autoFillChecked, setAutoFillChecked] = useState(false);

  const [contactGreetoInfo, setContactGreetoInfo] = useState({
    contactName: "",
    contactMobile: "",
    contactEmail: "",
  });

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (autoFillChecked) {
      setContactGreetoInfo((prevGreetoInfo) => ({
        ...prevGreetoInfo,
        [name]: value,
      }));
    }
  };

  const handleAutoFillCheck = (e) => {
    setAutoFillChecked(e.target.checked);
    if (!e.target.checked) {
      setContactGreetoInfo({
        contactName: "",
        contactMobile: "",
        contactEmail: "",
      });
    } else {
      setContactGreetoInfo(contactInfo);
    }
  };

  const handleGreetoInfoChange = (e) => {
    const { name, value } = e.target;
    setContactGreetoInfo((prevGreetoInfo) => ({
      ...prevGreetoInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            width: "450px",
            mt: "10px",
            fontFamily: "Poppins",
          }}
        >
          <Box sx={{ p: "40px" }} bgcolor={"white"} borderRadius={"8px"}>
            <Typography pt={"2px"} fontSize={"25px"} fontWeight={700}>
              Owner and Contact Person Information
            </Typography>
            <Typography sx={{ pt: "40px", fontWeight: 560 }}>
              Owner Information
            </Typography>
            <Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Name</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Name"
                  variant="outlined"
                />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Mobile No.</Typography>
                <TextField
                  type="number"
                  fullWidth
                  size="small"
                  placeholder="Mobile No."
                  variant="outlined"
                />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Email</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Email"
                  variant="outlined"
                />
              </Box>
            </Box>

            <Typography sx={{ pt: "40px", fontWeight: 560 }}>
              Contact Information
            </Typography>
            <Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Name</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Name"
                  variant="outlined"
                  name="contactName"
                  value={contactInfo.contactName}
                  onChange={handleContactInfoChange}
                />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Mobile No.</Typography>
                <TextField
                  type="number"
                  fullWidth
                  size="small"
                  placeholder="Mobile No."
                  variant="outlined"
                  name="contactMobile"
                  value={contactInfo.contactMobile}
                  onChange={handleContactInfoChange}
                />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Email</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Email"
                  variant="outlined"
                  name="contactEmail"
                  value={contactInfo.contactEmail}
                  onChange={handleContactInfoChange}
                />
              </Box>
            </Box>

            <Box mt={"30px"} display="flex" alignItems="center">
              <Checkbox
                checked={autoFillChecked}
                onChange={handleAutoFillCheck}
              />
              <Typography>Same as contact</Typography>
            </Box>

            <Typography sx={{ fontWeight: 560, mt: "30px" }}>
              Contact Greeto Information
            </Typography>
            <Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Name</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Name"
                  variant="outlined"
                  name="contactName"
                  value={contactGreetoInfo.contactName}
                  onChange={handleGreetoInfoChange}
                  disabled={autoFillChecked}
                />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Mobile No.</Typography>
                <TextField
                  type="number"
                  fullWidth
                  size="small"
                  placeholder="Mobile No."
                  variant="outlined"
                  name="contactMobile"
                  value={contactGreetoInfo.contactMobile}
                  onChange={handleGreetoInfoChange}
                  disabled={autoFillChecked}
                />
              </Box>
              <Box mt="15px">
                <Typography sx={{ color: "#707888" }}>Email</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Email"
                  variant="outlined"
                  name="contactEmail"
                  value={contactGreetoInfo.contactEmail}
                  onChange={handleGreetoInfoChange}
                  disabled={autoFillChecked}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "450px",
            display: "flex",
            justifyContent: "end",
            mt: "5px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "450px", mx: "5px" }}
          >
            submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default OwnerandContactinfo;
