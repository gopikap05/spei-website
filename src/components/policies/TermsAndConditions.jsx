import { Box, Typography, Container, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function TermsAndConditions() {
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
            Terms & Conditions
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
          <Section title="Acceptance of Terms">
            <Typography variant="body1" paragraph>
              By accessing and using the website of SP Engineers India 
              ("Company", "we", "us", "our"), you agree to be bound by these 
              Terms and Conditions. If you do not agree with any part of these 
              terms, please do not use our website or services.
            </Typography>
            <Typography variant="body1" paragraph>
              These terms apply to all visitors, users, and others who access 
              or use our website or engage with our services.
            </Typography>
          </Section>

          <Section title="About Our Business">
            <Typography variant="body1" paragraph>
              SP Engineers India is a manufacturer of Special Purpose Machines 
              (SPMs) and industrial automation solutions based in Hosur, Tamil 
              Nadu, India. Our products are designed and built for industrial 
              manufacturing environments.
            </Typography>
            <Typography variant="body1" paragraph>
              The information on this website is for general informational 
              purposes only. Specific product specifications, pricing, and 
              availability are subject to change without notice.
            </Typography>
          </Section>

          <Section title="Use of Website">
            <Typography variant="body1" paragraph>
              You agree to use our website only for lawful purposes related to 
              learning about, inquiring about, or purchasing our SPM machinery 
              and automation solutions. Prohibited activities include:
            </Typography>
            <BulletList>
              <li>Attempting to gain unauthorized access to our systems or data</li>
              <li>Uploading malicious code, viruses, or harmful content</li>
              <li>Scraping, copying, or harvesting data without permission</li>
              <li>Misrepresenting your identity or affiliation</li>
              <li>Interfering with website functionality or security features</li>
              <li>Using automated systems to access our website excessively</li>
            </BulletList>
          </Section>

          <Section title="Intellectual Property">
            <Typography variant="body1" paragraph>
              All content on this website, including but not limited to text, 
              graphics, logos, images, product designs, technical drawings, 
              software, and documentation, is the exclusive property of SP 
              Engineers India and is protected by Indian and international 
              intellectual property laws.
            </Typography>
            <Typography variant="body1" paragraph>
              You may not:
            </Typography>
            <BulletList>
              <li>Reproduce, distribute, or modify any content without written permission</li>
              <li>Use our trademarks, logos, or trade dress without authorization</li>
              <li>Reverse engineer, decompile, or disassemble any software from our website</li>
              <li>Create derivative works based on our intellectual property</li>
            </BulletList>
          </Section>

          <Section title="Product Information and Quotes">
            <Typography variant="body1" paragraph>
              All product descriptions, specifications, and images on our website 
              are for illustrative purposes. Actual products may vary based on 
              customization and customer requirements.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Quotations:</strong> Any quote provided by SP Engineers 
              India is valid for 30 days from the date of issue unless otherwise 
              stated. Quotes are based on the information provided by you at the 
              time of request and may be revised if requirements change.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Orders:</strong> All orders are subject to our final 
              written confirmation. We reserve the right to refuse any order 
              or limit quantities.
            </Typography>
          </Section>

          <Section title="Pricing and Payment">
            <Typography variant="body1" paragraph>
              Prices for our SPM machinery are provided upon request based on 
              your specific requirements. All prices are in Indian Rupees (INR) 
              unless otherwise agreed in writing.
            </Typography>
            <Typography variant="body1" paragraph>
              Payment terms, including deposit requirements and final payment 
              schedules, will be specified in your quotation and purchase agreement.
            </Typography>
          </Section>

          <Section title="Delivery and Installation">
            <Typography variant="body1" paragraph>
              Delivery timelines are estimates provided in good faith but are 
              not guaranteed. We strive to meet all quoted delivery dates, but 
              we are not liable for delays caused by events beyond our 
              reasonable control.
            </Typography>
            <Typography variant="body1" paragraph>
              Installation services, if included, will be performed according 
              to the terms specified in your purchase agreement. Site readiness 
              and necessary utilities are the customer's responsibility.
            </Typography>
          </Section>

          <Section title="Warranty">
            <Typography variant="body1" paragraph>
              Our SPM machinery is warranted against defects in materials and 
              workmanship for a period specified in your purchase agreement 
              (typically 12 months from installation). The warranty covers 
              repair or replacement of defective parts at our discretion.
            </Typography>
            <Typography variant="body1" paragraph>
              The warranty does not cover:
            </Typography>
            <BulletList>
              <li>Normal wear and tear or consumable parts</li>
              <li>Damage due to misuse, neglect, or improper operation</li>
              <li>Modifications or repairs performed by unauthorized personnel</li>
              <li>Damage from power surges, accidents, or natural disasters</li>
            </BulletList>
          </Section>

          <Section title="Limitation of Liability">
            <Typography variant="body1" paragraph>
              To the maximum extent permitted by law, SP Engineers India shall 
              not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including but not limited to:
            </Typography>
            <BulletList>
              <li>Loss of production, profits, or business opportunities</li>
              <li>Downtime costs or idle labor</li>
              <li>Damage to reputation or goodwill</li>
              <li>Cost of substitute equipment or services</li>
            </BulletList>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              Our total liability for any claim arising from our products or 
              services shall not exceed the amount paid by you for the specific 
              product giving rise to the claim.
            </Typography>
          </Section>

          <Section title="Indemnification">
            <Typography variant="body1" paragraph>
              You agree to indemnify and hold harmless SP Engineers India, its 
              directors, employees, and affiliates from any claims, damages, 
              losses, or expenses (including legal fees) arising from:
            </Typography>
            <BulletList>
              <li>Your violation of these Terms and Conditions</li>
              <li>Your misuse of our website or products</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Any content you submit through our website</li>
            </BulletList>
          </Section>

          <Section title="Governing Law and Dispute Resolution">
            <Typography variant="body1" paragraph>
              These Terms and Conditions shall be governed by and construed in 
              accordance with the laws of India, without regard to conflict of 
              law principles.
            </Typography>
            <Typography variant="body1" paragraph>
              Any dispute arising from these terms or your use of our website 
              or services shall be subject to the exclusive jurisdiction of the 
              courts in Hosur, Tamil Nadu, India.
            </Typography>
          </Section>

          <Section title="Changes to Terms">
            <Typography variant="body1" paragraph>
              We reserve the right to modify these Terms and Conditions at any 
              time. Changes will be effective immediately upon posting on this 
              page. Your continued use of our website after any changes 
              constitutes acceptance of the modified terms.
            </Typography>
            <Typography variant="body1" paragraph>
              We encourage you to review this page periodically for updates.
            </Typography>
          </Section>

          <Section title="Contact Information">
            <Typography variant="body1" paragraph>
              For questions or concerns about these Terms and Conditions, please 
              contact us:
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

export default TermsAndConditions;