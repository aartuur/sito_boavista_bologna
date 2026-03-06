import { Box, Button, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

export default function NotFoundPage() {
  return (
    <Box className="relative flex min-h-screen items-center overflow-hidden bg-[#04030a] text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e]/10 blur-[140px]" />
      </div>

      <Container maxWidth="md" className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-[760px] text-center">
          {/* label */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[#ff1e1e]/25 bg-[#ff1e1e]/8 px-4 py-1.5">
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#ff5c5c",
              }}
            >
              Error 404
            </Typography>
          </div>

          {/* big 404 */}
          <Typography
            sx={{
              fontSize: { xs: "5rem", sm: "7rem", md: "9rem" },
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.08em",
              color: "#f5f5f7",
              textShadow: "0 0 30px rgba(255,30,30,0.12)",
            }}
          >
            404
          </Typography>

          {/* title */}
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#f5f5f7",
            }}
          >
            Pagina non trovata
          </Typography>

          {/* desc */}
          <Typography
            sx={{
              mt: 2.5,
              mx: "auto",
              maxWidth: "580px",
              fontSize: { xs: "0.98rem", sm: "1.02rem" },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.56)",
            }}
          >
            Il link che hai aperto non è disponibile, è stato spostato oppure non esiste più.
            Torna alla home per continuare la navigazione.
          </Typography>

          {/* divider */}
          <div className="mx-auto mt-8 h-[2px] w-16 bg-[#ff1e1e]" />

          {/* actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="/"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                minWidth: 200,
                minHeight: 48,
                borderRadius: "8px",
                backgroundColor: "#ff1d1d",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: 3,
                "&:hover": {
                  backgroundColor: "#ff3131",
                },
              }}
            >
              Torna alla home
            </Button>

            <Button
              onClick={() => window.history.back()}
              startIcon={<ReplayRoundedIcon />}
              sx={{
                minWidth: 200,
                minHeight: 48,
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.84)",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: 3,
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.28)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                },
              }}
            >
              Torna indietro
            </Button>
          </div>

          {/* secondary info */}
          <Typography
            sx={{
              mt: 8,
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            BoaVista — Page unavailable
          </Typography>
        </div>
      </Container>
    </Box>
  );
}