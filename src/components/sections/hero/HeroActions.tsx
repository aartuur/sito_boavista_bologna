import Button from "@mui/material/Button";

export default function HeroActions() {
  return (
    <>
      <div className="w-full">
        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#ff2b2b",
            "&:hover": { backgroundColor: "#e62525" },
            "&:active": { backgroundColor: "#d91f1f" },
            borderRadius: "10px",
            padding: {
              xs: "10px 0",
              sm: "15px 0",
            },
            fontSize: {
              xs: "13px",
              sm: "15px",
            },
            letterSpacing: {
              xs: "0.08em",
              sm: "0.12em",
            },
            fontWeight: 900,
            textTransform: "uppercase",
            boxShadow: "0 14px 30px rgba(0,0,0,.40)",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            "&:focus-visible": { outline: "2px solid rgba(255,255,255,.85)" },
          }}
        >
          PRENOTA ORA
        </Button>
      </div>

      <div className="w-full">
        <Button
          fullWidth
          variant="outlined"
          sx={{
            color: "rgba(255,255,255,.95)",
            borderColor: "rgba(255,255,255,.65)",
            "&:hover": {
              borderColor: "rgba(255,255,255,.95)",
              backgroundColor: "rgba(255,255,255,.08)",
            },
            "&:active": { backgroundColor: "rgba(255,255,255,.12)" },
            borderRadius: "10px",
            padding: {
              xs: "10px 0",
              sm: "15px 0",
            },
            fontSize: {
              xs: "13px",
              sm: "15px",
            },
            letterSpacing: {
              xs: "0.08em",
              sm: "0.12em",
            },
            fontWeight: 900,
            textTransform: "uppercase",
            outline: "2px solid transparent",
            outlineOffset: "2px",
            "&:focus-visible": { outline: "2px solid rgba(255,255,255,.85)" },
          }}
        >
          EVENTI
        </Button>
      </div>
    </>
  );
}