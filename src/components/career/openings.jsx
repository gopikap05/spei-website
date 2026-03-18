import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export const openings = [
  {
    id: 1,
    title: "Arc Welder",
    department: "Manufacturing",
    location: "On-site",
    type: "Full-time",
    experience: "3+ years",
    description:
      "We are looking for a skilled arc welder with hands-on experience in industrial fabrication for SPM manufacturing.",
    responsibilities: [
      "Perform arc welding on structural and fabricated components",
      "Read and interpret technical drawings",
      "Inspect welds for quality",
      "Follow safety procedures",
    ],
    requirements: [
      "Experience in arc welding (SMAW/MIG/TIG)",
      "Ability to read drawings",
      "Knowledge of safety standards",
    ],
  },
  {
    id: 2,
    title: "Diploma Mechanical Engineer",
    department: "Engineering",
    location: "On-site",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Opportunity for fresh diploma holders to gain hands-on experience in SPM manufacturing and machine operations.",
    responsibilities: [
      "Assist engineers in SPM design",
      "Support machine maintenance",
      "Prepare technical reports",
      "Follow SOPs",
    ],
    requirements: [
      "Diploma in Mechanical Engineering",
      "Basic mechanical knowledge",
      "Willingness to learn",
    ],
  },
  {
    id: 3,
    title: "Design Engineer – Solid Works",
    department: "Engineering",
    location: "On-site",
    type: "Full-time",
    experience: "1–2 years",
    description:
      "Hiring a Design Engineer with SolidWorks experience to develop mechanical components for special purpose machines.",
    responsibilities: [
      "Create 3D models for SPMs",
      "Develop machine assemblies",
      "Work with production team",
    ],
    requirements: [
      "1–2 years SolidWorks experience",
      "Understanding of drawings",
      "Mechanical qualification",
    ],
  },
];

export const departmentColors = {
  Engineering: "#0b7de0",
  Manufacturing: "#e05c0b",
};

const F = "'Manrope', sans-serif";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e8ecf4",
        borderRadius: "12px",
        transition: "0.25s",
        boxShadow: "0 2px 8px rgba(7,27,63,0.04)",
        "&:hover": {
          borderColor: "#FFC400",
          boxShadow: "0 4px 24px rgba(7,27,63,0.10)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Box>
            <Chip
              label={job.department}
              size="small"
              sx={{
                mb: 1,
                backgroundColor: departmentColors[job.department] + "18",
                color: departmentColors[job.department],
                fontFamily: F,
                fontWeight: 700,
                fontSize: "11px",
              }}
            />

            <Typography
              component="h3"
              sx={{
                fontFamily: F,
                fontWeight: 800,
                fontSize: { xs: "18px", md: "22px" },
                color: "#071b3f",
              }}
            >
              {job.title}
            </Typography>

            <Box sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
                <Typography variant="body2" sx={{ color: "#555" }}>{job.location}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
                <Typography variant="body2" sx={{ color: "#555" }}>{job.type}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <WorkHistoryOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
                <Typography variant="body2" sx={{ color: "#555" }}>{job.experience}</Typography>
              </Box>
            </Box>
          </Box>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(`/careers/${job.id}`)}
            sx={{
              backgroundColor: "#071b3f",
              fontFamily: F,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": { backgroundColor: "#FFC400", color: "#071b3f" },
              height: "40px",
            }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function Openings() {
  return (
    <Box sx={{ px: "5%", py: { xs: "48px", md: "80px" } }}>
      <Box sx={{ maxWidth: "1350px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "#D4AF37", fontWeight: 700, letterSpacing: 1.5 }}
            >
              OPPORTUNITIES
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "22px", md: "28px" },
                color: "#071b3f",
              }}
            >
              Open Positions at SP Engineers India
            </Typography>
          </Box>

          <Chip
            icon={<WorkOutlineIcon />}
            label={`${openings.length} roles open`}
            sx={{ fontWeight: 600 }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {openings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Openings;