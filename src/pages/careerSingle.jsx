import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { openings } from "../components/career/openings";

const F = "'Manrope', sans-serif";

const EMAILJS_SERVICE_ID = "service_8e1pz9j";
const EMAILJS_TEMPLATE_ID = "template_5fglgbg";
const EMAILJS_PUBLIC_KEY = "jMCUD7zLd8Wt2y3wX";

const emptyForm = { name: "", email: "", phone: "", qualification: "", experience: "", resumeLink: "" };
const emptyErrors = { name: "", email: "", phone: "", qualification: "", experience: "", resumeLink: "" };

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: F, fontSize: "14px", borderRadius: "8px",
    "& fieldset": { borderColor: "#d0d9ed" },
    "&:hover fieldset": { borderColor: "#FFC400" },
    "&.Mui-focused fieldset": { borderColor: "#071b3f", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root": { fontFamily: F, fontSize: "14px" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#071b3f" },
  "& .MuiFormHelperText-root": { fontFamily: F },
};

function ApplyForm({ job }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState(emptyErrors);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const validate = () => {
    const e = { ...emptyErrors };
    let valid = true;
    if (!form.name.trim()) { e.name = "Full name is required."; valid = false; }
    if (!form.email.trim()) { e.email = "Email is required."; valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { e.email = "Enter a valid email address."; valid = false; }
    if (!form.phone.trim()) { e.phone = "Phone number is required."; valid = false; }
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) { e.phone = "Enter a valid phone number."; valid = false; }
    if (!form.qualification.trim()) { e.qualification = "Qualification is required."; valid = false; }
    if (!form.experience.trim()) { e.experience = "Please mention your experience."; valid = false; }
    if (!form.resumeLink.trim()) { e.resumeLink = "Please provide your resume link."; valid = false; }
    else if (!/^https?:\/\/.+/.test(form.resumeLink)) { e.resumeLink = "Enter a valid URL (must start with http/https)."; valid = false; }
    setErrors(e);
    return valid;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("sending");

    const templateParams = {
      job_title: job.title,
      applicant_name: form.name,
      applicant_email: form.email,
      applicant_phone: form.phone,
      applicant_qualification: form.qualification,
      applicant_experience: form.experience,
      resume_link: form.resumeLink,
    };

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Alert severity="success" sx={{ fontFamily: F, borderRadius: "12px", fontSize: "15px", lineHeight: 1.7 }}>
        <strong>Application submitted!</strong><br />
        We've received your application for <strong>{job.title}</strong>. We'll review your profile and reach out soon.
      </Alert>
    );
  }

  return (
    <Box sx={{ width: "100%", minWidth: 0 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5, width: "100%", minWidth: 0 }}>

        <TextField fullWidth label="Full Name *"
          value={form.name} onChange={handleChange("name")}
          error={!!errors.name} helperText={errors.name} sx={inputSx} />

        <TextField fullWidth label="Email ID *" type="email"
          value={form.email} onChange={handleChange("email")}
          error={!!errors.email} helperText={errors.email} sx={inputSx} />

        <TextField fullWidth label="Phone Number *"
          value={form.phone} onChange={handleChange("phone")}
          error={!!errors.phone} helperText={errors.phone} sx={inputSx} />

        <TextField fullWidth label="Qualification *"
          placeholder="e.g. Diploma in Mechanical Engg."
          value={form.qualification} onChange={handleChange("qualification")}
          error={!!errors.qualification} helperText={errors.qualification} sx={inputSx} />

        <TextField fullWidth label="Experience *"
          placeholder={`e.g. ${job.experience}`}
          value={form.experience} onChange={handleChange("experience")}
          error={!!errors.experience} helperText={errors.experience} sx={inputSx} />

        <TextField fullWidth label="Resume Link *"
          placeholder="Paste Google Drive / Dropbox link"
          value={form.resumeLink} onChange={handleChange("resumeLink")}
          error={!!errors.resumeLink} helperText={errors.resumeLink || "Make sure sharing is set to 'Anyone with the link'"}
          sx={inputSx} />

      </Box>

      {status === "error" && (
        <Alert severity="error" sx={{ fontFamily: F, borderRadius: "10px", mt: 2.5 }}>
          Submission failed. Please try again or contact us directly.
        </Alert>
      )}

      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        disabled={status === "sending"}
        startIcon={status === "sending" ? <CircularProgress size={16} sx={{ color: "white" }} /> : null}
        sx={{
          mt: 3,
          backgroundColor: "#071b3f", color: "white",
          fontFamily: F, fontWeight: 800, fontSize: "15px",
          textTransform: "none", borderRadius: "10px",
          px: 4, py: 1.5,
          "&:hover": { backgroundColor: "#FFC400", color: "#071b3f" },
          "&.Mui-disabled": { backgroundColor: "#a0aec0", color: "white" },
          transition: "background-color 0.2s, color 0.2s",
        }}
      >
        {status === "sending" ? "Submitting..." : "Submit Application"}
      </Button>
    </Box>
  );
}

function CareerSingle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = openings.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <Box sx={{ textAlign: "center", py: "120px" }}>
        <Typography sx={{ fontFamily: F, fontWeight: 800, fontSize: "24px", color: "#071b3f" }}>
          Role not found.
        </Typography>
        <Button onClick={() => navigate("/careers")} sx={{ mt: 2, fontFamily: F, textTransform: "none" }}>
          ← Back to Careers
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>{job.title} Job in {job.location} | SP Engineers India Careers</title>
        <meta
          name="description"
          content={`${job.title} job opening at SP Engineers India in ${job.location}. Apply now for a career in industrial automation, SPM manufacturing, and machine design.`}
        />
        <link rel="canonical" href={`https://www.spei.in/careers/${job.id}`} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${job.title} - SP Engineers India Careers`} />
        <meta property="og:description" content={`Apply for ${job.title} role in ${job.location}. Join our team in industrial automation and SPM manufacturing.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.spei.in/careers/${job.id}`} />
      </Helmet>

      <h1 style={{ display: "none" }}>
        {job.title} Job Opening in {job.location} | SP Engineers India Careers
      </h1>

      <Box
        sx={{
          px: { xs: "16px", sm: "5%" },
          pt: { xs: "65px", sm: "100px", md: "150px" },
          pb: { xs: "40px", sm: "60px", md: "80px" },
          background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
          color: "white", width: "100%", boxSizing: "border-box",
          position: "relative", overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", border: "1px solid rgba(255,196,0,0.12)", pointerEvents: "none" }} />

        <Box sx={{ maxWidth: "1440px", width: "100%", mx: "auto", minWidth: 0 }}>
          <Button
            startIcon={<ArrowBackIcon fontSize="small" />}
            onClick={() => navigate("/careers")}
            sx={{ fontFamily: F, fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.7)", textTransform: "none", px: 0, mb: 2.5, "&:hover": { color: "#FFC400", backgroundColor: "transparent" } }}
          >
            Back to Careers
          </Button>

          <Typography sx={{ fontFamily: F, fontWeight: 800, color: "white", lineHeight: 1.15, fontSize: { xs: "26px", sm: "34px", md: "42px", lg: "50px" } }}>
            {job.title}
          </Typography>

          <Box sx={{ mt: 2.5, display: "flex", flexWrap: "wrap", gap: 2.5, color: "rgba(255,255,255,0.7)" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 17 }} />
              <Typography sx={{ fontFamily: F, fontSize: "14px" }}>{job.location}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <AccessTimeOutlinedIcon sx={{ fontSize: 17 }} />
              <Typography sx={{ fontFamily: F, fontSize: "14px" }}>{job.type}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <WorkHistoryOutlinedIcon sx={{ fontSize: 17 }} />
              <Typography sx={{ fontFamily: F, fontSize: "14px" }}>{job.experience}</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3, width: { xs: "48px", md: "64px" }, height: "4px", borderRadius: "2px", backgroundColor: "#FFC400" }} />
        </Box>
      </Box>

      <Box sx={{ px: { xs: "16px", sm: "5%" }, py: { xs: "48px", md: "80px" }, backgroundColor: "#f7f9fc", boxSizing: "border-box", width: "100%", overflow: "hidden" }}>
        <Box sx={{ maxWidth: "1440px", mx: "auto", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 3, md: 5 }, alignItems: "flex-start", width: "100%", minWidth: 0 }}>

          <Box sx={{ width: { xs: "100%", md: "40%" }, flexShrink: 0, minWidth: 0, boxSizing: "border-box", backgroundColor: "white", border: "1px solid #e8ecf4", borderRadius: "16px", p: { xs: 3, md: 4 }, position: { md: "sticky" }, top: { md: "120px" } }}>
            <Typography sx={{ fontFamily: F, fontWeight: 800, fontSize: "18px", color: "#071b3f", mb: 2 }}>About this Role</Typography>
            <Typography variant="body2" sx={{ fontFamily: F, color: "#3d4f72", lineHeight: 1.8, mb: 3 }}>{job.description}</Typography>

            <Divider sx={{ borderColor: "#eef1f8", mb: 3 }} />

            <Typography sx={{ fontFamily: F, fontWeight: 800, fontSize: "12px", color: "#071b3f", textTransform: "uppercase", letterSpacing: 1, mb: 1.5 }}>Responsibilities</Typography>
            {job.responsibilities.map((r, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.2 }}>
                <Box sx={{ mt: "7px", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FFC400", flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontFamily: F, color: "#3d4f72", lineHeight: 1.7 }}>{r}</Typography>
              </Box>
            ))}

            <Divider sx={{ borderColor: "#eef1f8", my: 3 }} />

            <Typography sx={{ fontFamily: F, fontWeight: 800, fontSize: "12px", color: "#071b3f", textTransform: "uppercase", letterSpacing: 1, mb: 1.5 }}>Requirements</Typography>
            {job.requirements.map((r, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.2 }}>
                <Box sx={{ mt: "7px", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0b7de0", flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontFamily: F, color: "#3d4f72", lineHeight: 1.7 }}>{r}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ width: { xs: "100%", md: "60%" }, minWidth: 0, boxSizing: "border-box", backgroundColor: "white", border: "1px solid #e8ecf4", borderRadius: "16px", p: { xs: 3, md: 4 } }}>
            <Typography variant="overline" sx={{ fontFamily: F, color: "#FFC400", fontWeight: 700, letterSpacing: 2, fontSize: "12px", display: "block", mb: 1 }}>
              YOUR APPLICATION
            </Typography>
            <Typography sx={{ fontFamily: F, fontWeight: 800, fontSize: { xs: "20px", md: "24px" }, color: "#071b3f", mb: 3 }}>
              Apply for this Position
            </Typography>
            <ApplyForm job={job} />
          </Box>

        </Box>
      </Box>
    </>
  );
}

export default CareerSingle;