import { Box, Typography, Container, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function CookiePolicy() {
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
            Cookie Policy
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
          <Section title="Introduction">
            <Typography variant="body1" paragraph>
              SP Engineers India uses cookies and similar tracking technologies 
              on our website to enhance your browsing experience, analyze site 
              traffic, and understand how visitors interact with our content.
            </Typography>
            <Typography variant="body1" paragraph>
              This Cookie Policy explains what cookies are, how we use them, 
              and your choices regarding their use.
            </Typography>
          </Section>

          <Section title="What Are Cookies?">
            <Typography variant="body1" paragraph>
              Cookies are small text files that are stored on your computer, 
              tablet, or mobile device when you visit a website. They help the 
              website recognize your device and remember information about your 
              visit, such as your preferences or actions taken.
            </Typography>
            <Typography variant="body1" paragraph>
              Cookies are widely used to make websites work more efficiently 
              and provide valuable information to website owners.
            </Typography>
          </Section>

          <Section title="Types of Cookies We Use">
            <Typography variant="body1" paragraph>
              We use the following types of cookies on our website:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              Strictly Necessary Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              These cookies are essential for our website to function properly. 
              They enable core features such as page navigation, form submission, 
              and access to secure areas. Our website cannot function properly 
              without these cookies.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              Performance and Analytics Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              These cookies help us understand how visitors interact with our 
              website by collecting anonymous information about page visits, 
              time spent on pages, and any errors encountered. We use this 
              information to improve our website's performance and user experience.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              Functional Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              These cookies enable enhanced functionality and personalization, 
              such as remembering your preferences (like language or region) 
              and providing improved features.
            </Typography>
          </Section>

          <Section title="Third-Party Cookies (Google Analytics)">
            <Typography variant="body1" paragraph>
              We use Google Analytics, a web analytics service provided by 
              Google Inc., to collect information about how visitors use our 
              website. Google Analytics uses performance cookies to track 
              anonymous browsing data.
            </Typography>
            <Typography variant="body1" paragraph>
              The information collected by Google Analytics includes:
            </Typography>
            <BulletList>
              <li>Number of visitors to our website</li>
              <li>Pages visited and time spent on each page</li>
              <li>How you found our website (search engine, direct, referral)</li>
              <li>Device type, browser, and operating system</li>
              <li>Geographic location (country/city level only)</li>
            </BulletList>
            <Typography variant="body1" paragraph>
              Google Analytics does not collect personally identifiable 
              information. We do not allow Google to share our analytics data 
              with other Google products or services.
            </Typography>
            <Typography variant="body1" paragraph>
              For more information, please visit Google's Privacy Policy at 
              policies.google.com/privacy.
            </Typography>
          </Section>

          <Section title="How Long Do Cookies Last?">
            <Typography variant="body1" paragraph>
              Cookies on our website may be either:
            </Typography>
            <BulletList>
              <li>
                <strong>Session Cookies:</strong> These are temporary cookies 
                that expire when you close your browser. They are used to 
                remember your actions during a single browsing session.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> These remain on your device 
                for a set period or until you delete them. They help remember 
                your preferences across multiple visits.
              </li>
            </BulletList>
          </Section>

          <Section title="Your Cookie Choices">
            <Typography variant="body1" paragraph>
              You have the right to accept or reject cookies. Most web browsers 
              automatically accept cookies, but you can modify your browser 
              settings to:
            </Typography>
            <BulletList>
              <li>See when cookies are being sent to your device</li>
              <li>Block all or specific types of cookies</li>
              <li>Delete existing cookies from your device</li>
              <li>Set your browser to notify you before accepting cookies</li>
            </BulletList>
            <Typography variant="body1" paragraph>
              Please note that blocking certain cookies may affect the 
              functionality of our website. Without strictly necessary cookies, 
              some features may not work properly.
            </Typography>
          </Section>

          <Section title="How to Manage Cookies in Popular Browsers">
            <Typography variant="body1" paragraph>
              You can manage cookies through your browser settings. Below are 
              links to instructions for popular browsers:
            </Typography>
            <BulletList>
              <li>
                <strong>Google Chrome:</strong> Settings → Privacy and Security 
                → Cookies and other site data
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Options → Privacy & Security 
                → Cookies and Site Data
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferences → Privacy → Cookies 
                and website data
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings → Site permissions → 
                Cookies and site data
              </li>
              <li>
                <strong>Opera:</strong> Settings → Privacy & security → Cookies
              </li>
            </BulletList>
          </Section>

          <Section title="Do Not Track Signals">
            <Typography variant="body1" paragraph>
              Some browsers have a "Do Not Track" (DNT) feature that signals 
              websites that you do not wish to be tracked. Our website currently 
              does not respond to DNT signals because there is no common 
              standard for interpreting them. However, you can manage tracking 
              through the cookie controls in your browser as described above.
            </Typography>
          </Section>

          <Section title="Updates to This Cookie Policy">
            <Typography variant="body1" paragraph>
              We may update this Cookie Policy from time to time to reflect 
              changes in our practices or legal requirements. Any updates will 
              be posted on this page with a revised "Last Updated" date.
            </Typography>
            <Typography variant="body1" paragraph>
              We encourage you to review this policy periodically to stay 
              informed about how we use cookies.
            </Typography>
          </Section>

          <Section title="Contact Us">
            <Typography variant="body1" paragraph>
              If you have any questions about our use of cookies or this Cookie 
              Policy, please contact us:
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

export default CookiePolicy;