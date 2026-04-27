import { Box, Typography, Container, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function PrivacyPolicy() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        color: "#111827",
        px: { xs: "16px", sm: "5%" },
        py: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          px: { xs: 0, sm: 0 },
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
              display: "block",
              mb: 1,
            }}
          >
            LEGAL
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "36px", md: "44px" },
              color: "#071b3f",
              mb: 2,
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              color: "#4b5563",
              fontSize: { xs: "14px", sm: "15px" },
            }}
          >
            Last Updated: January 2026
          </Typography>
        </Box>

        {/* Content Sections */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Section title="Overview">
            <Typography variant="body1" paragraph>
              At SP Engineers India, we are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website or engage 
              with our services.
            </Typography>
            <Typography variant="body1" paragraph>
              We specialize in manufacturing Special Purpose Machines (SPMs) and 
              industrial automation solutions. Any information you share with us 
              will be used solely to serve you better and improve our offerings.
            </Typography>
          </Section>

          <Section title="Information We Collect">
            <Typography variant="body1" paragraph>
              We may collect the following types of information when you interact 
              with our website or contact us:
            </Typography>
            <BulletList>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone 
                number, and company name when you fill out our contact form or 
                request a quote.
              </li>
              <li>
                <strong>Technical Information:</strong> Details about your 
                manufacturing requirements, machine specifications, and automation 
                needs that you share with us.
              </li>
              <li>
                <strong>Website Usage Data:</strong> IP address, browser type, 
                pages visited, time and date of access, and referring website 
                through Google Analytics.
              </li>
              <li>
                <strong>Communication Records:</strong> Email correspondence, 
                phone call records, and chat messages when you reach out to us 
                for inquiries or support.
              </li>
            </BulletList>
          </Section>

          <Section title="How We Use Your Information">
            <Typography variant="body1" paragraph>
              SP Engineers India uses your information for the following purposes:
            </Typography>
            <BulletList>
              <li>Respond to your inquiries and provide information about our SPM machinery</li>
              <li>Prepare and send quotes for custom machine building projects</li>
              <li>Understand your industrial automation requirements better</li>
              <li>Improve our website, products, and customer service</li>
              <li>Process job applications when you submit your resume through our careers page</li>
              <li>Send technical updates, company news, or service reminders (only with your consent)</li>
              <li>Maintain security and prevent fraudulent activities</li>
            </BulletList>
          </Section>

          <Section title="Information Sharing">
            <Typography variant="body1" paragraph>
              We respect your privacy and do not sell your personal information. 
              However, we may share your information in the following limited 
              circumstances:
            </Typography>
            <BulletList>
              <li>
                <strong>Service Providers:</strong> With third-party vendors who 
                help us operate our website, host data, or send emails.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law, court 
                order, or government regulation.
              </li>
              <li>
                <strong>Business Protection:</strong> To protect our rights, 
                property, or safety, or that of our customers or others.
              </li>
              <li>
                <strong>With Your Consent:</strong> For any other purpose when 
                we have your explicit permission.
              </li>
            </BulletList>
          </Section>

          <Section title="Data Security">
            <Typography variant="body1" paragraph>
              We implement reasonable security measures to protect your personal 
              information from unauthorized access, disclosure, alteration, or 
              destruction. These include secure servers, encrypted data 
              transmission, and restricted access to personal information.
            </Typography>
            <Typography variant="body1" paragraph>
              However, please note that no method of transmission over the 
              Internet or electronic storage is 100% secure. While we strive to 
              protect your information, we cannot guarantee absolute security.
            </Typography>
          </Section>

          <Section title="Data Retention">
            <Typography variant="body1" paragraph>
              We retain your personal information only for as long as necessary 
              to fulfill the purposes outlined in this Privacy Policy. This includes:
            </Typography>
            <BulletList>
              <li>
                <strong>Customer Inquiries:</strong> Up to 3 years after our 
                last communication
              </li>
              <li>
                <strong>Project Information:</strong> For the duration of our 
                business relationship plus 5 years for warranty and service records
              </li>
              <li>
                <strong>Job Applications:</strong> Up to 1 year after the 
                position is filled, unless you consent to longer retention
              </li>
              <li>
                <strong>Website Analytics:</strong> Aggregated data may be kept 
                longer for trend analysis
              </li>
            </BulletList>
          </Section>

          <Section title="Your Rights">
            <Typography variant="body1" paragraph>
              Depending on your location, you may have the following rights 
              regarding your personal information:
            </Typography>
            <BulletList>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Withdraw consent for data processing</li>
              <li>File a complaint with relevant data protection authorities</li>
            </BulletList>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              To exercise any of these rights, please contact us using the 
              information provided below.
            </Typography>
          </Section>

          <Section title="Cookies and Tracking">
            <Typography variant="body1" paragraph>
              Our website uses cookies and similar tracking technologies to 
              enhance your browsing experience. Cookies are small text files 
              stored on your device that help us understand how you use our site.
            </Typography>
            <Typography variant="body1" paragraph>
              We use Google Analytics to collect anonymous browsing data. You 
              can control cookie settings through your browser preferences. 
              Please refer to our Cookie Policy for more detailed information.
            </Typography>
          </Section>

          <Section title="Third-Party Links">
            <Typography variant="body1" paragraph>
              Our website may contain links to external websites. We are not 
              responsible for the privacy practices or content of these third-party 
              sites. We encourage you to read their privacy policies before 
              providing any personal information.
            </Typography>
          </Section>

          <Section title="Children's Privacy">
            <Typography variant="body1" paragraph>
              Our services are directed toward businesses and professionals in 
              the manufacturing industry. We do not knowingly collect personal 
              information from individuals under 18 years of age. If you believe 
              we have inadvertently collected such information, please contact 
              us immediately.
            </Typography>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <Typography variant="body1" paragraph>
              We may update this Privacy Policy periodically to reflect changes 
              in our practices or legal requirements. The updated version will 
              be posted on this page with a revised "Last Updated" date. We 
              encourage you to review this policy regularly.
            </Typography>
          </Section>

          <Section title="Contact Us">
            <Typography variant="body1" paragraph>
              If you have any questions, concerns, or requests regarding this 
              Privacy Policy or our data practices, please contact us:
            </Typography>
            <ContactBox />
          </Section>
        </Box>
      </Container>
    </Box>
  );
}

const Section = ({ title, children }) => (
  <Box
    component="section"
    sx={{
      mb: 2,
      borderBottom: "1px solid #e5e7eb",
      pb: 3,
    }}
  >
    <Typography
      component="h2"
      sx={{
        fontWeight: 700,
        fontSize: { xs: "22px", sm: "26px" },
        color: "#071b3f",
        mb: 2,
        pb: 1,
        borderBottom: "2px solid #FFC400",
        display: "inline-block",
      }}
    >
      {title}
    </Typography>
    <Box sx={{ mt: 2 }}>{children}</Box>
  </Box>
);

const BulletList = ({ children }) => (
  <Box
    component="ul"
    sx={{
      pl: 2,
      mb: 2,
      "& li": {
        mb: 1.5,
        lineHeight: 1.7,
        color: "#374151",
      },
    }}
  >
    {children}
  </Box>
);

const ContactBox = () => (
  <Box
    sx={{
      mt: 2,
      p: 2,
      backgroundColor: "#f9fafb",
      borderRadius: 2,
      border: "1px solid #e5e7eb",
    }}
  >
    <Typography sx={{ mb: 2, fontWeight: 700 }}>SP Engineers India</Typography>
    
    {/* Address - Clickable to open Google Maps */}
    <Link
      href="https://www.google.com/maps/dir/?api=1&destination=Plot+No+22+SF+No+579/5A1+Rajaji+Layout+Rajsriya+U-8+Back+Side+Hosur+Taluk+Krishnagiri+District+635126"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
        mb: 1.5,
        color: "#111827",
        textDecoration: "none",
        transition: "color 0.2s ease",
        "&:hover": { color: "#FFC400" },
      }}
    >
      <LocationOnIcon sx={{ fontSize: 20, flexShrink: 0, mt: 0.2 }} />
      <Typography sx={{ color: "inherit" }}>
        Plot No: 22, SF No: 579/5A1, Rajaji Layout, Rajsriya U-8 Back Side, Hosur Taluk, Krishnagiri District - 635126, Tamil Nadu, India
      </Typography>
    </Link>
    
    {/* Phone - Clickable to call */}
    <Link
      href="tel:9500990032"
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 1.5,
        color: "#111827",
        textDecoration: "none",
        transition: "color 0.2s ease",
        "&:hover": { color: "#FFC400" },
      }}
    >
      <PhoneIcon sx={{ fontSize: 20 }} />
      <Typography sx={{ color: "inherit" }}>
        <strong>9500990032</strong>
      </Typography>
    </Link>
    
    {/* Email - Clickable to send email */}
    <Link
      href="mailto:spengineersindia2001@gmail.com"
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "#111827",
        textDecoration: "none",
        transition: "color 0.2s ease",
        "&:hover": { color: "#FFC400" },
      }}
    >
      <EmailIcon sx={{ fontSize: 20 }} />
      <Typography sx={{ color: "inherit" }}>
        <strong>spengineersindia2001@gmail.com</strong>
      </Typography>
    </Link>
  </Box>
);

export default PrivacyPolicy;