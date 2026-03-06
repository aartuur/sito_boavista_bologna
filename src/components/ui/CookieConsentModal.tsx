import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Switch,
  Typography,
} from "@mui/material";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

const STORAGE_KEY = "boavista-cookie-consent";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

export default function CookieConsentModal() {
  const [open, setOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setOpen(true);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        acceptedAt: new Date().toISOString(),
        preferences: prefs,
      })
    );
    setOpen(false);
  };

  const handleAccept = () => {
    saveConsent({
      necessary: true,
      analytics: true,
    });
  };

  const handleReject = () => {
    saveConsent({
      necessary: true,
      analytics: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "#0b0911",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.68)",
          backdropFilter: "blur(3px)",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box className="relative">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-30px] top-[-30px] h-[120px] w-[120px] rounded-full bg-[#ff1e1e]/10 blur-[45px]" />
          </div>

          <Box className="relative z-10 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff1e1e]/10 border border-[#ff1e1e]/20">
                <CookieOutlinedIcon sx={{ fontSize: 20, color: "#ff4b4b" }} />
              </div>

              <Typography
                sx={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#f5f5f7",
                }}
              >
                Cookie
              </Typography>
            </div>

            <Typography
              sx={{
                fontSize: "0.92rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Utilizziamo cookie tecnici per il corretto funzionamento del sito e,
              con il tuo consenso, cookie analitici per migliorare l’esperienza di navigazione.
            </Typography>

            <Typography
              component="a"
              href="/cookie-policy"
              sx={{
                display: "inline-block",
                mt: 1.6,
                fontSize: "0.84rem",
                color: "#ff5a5a",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,90,90,0.35)",
                "&:hover": {
                  color: "#ff7a7a",
                  borderBottomColor: "rgba(255,122,122,0.55)",
                },
              }}
            >
              Leggi la cookie policy
            </Typography>

            {showPreferences && (
              <Box
                sx={{
                  mt: 2.5,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  overflow: "hidden",
                }}
              >
                <PreferenceRow
                  title="Cookie necessari"
                  description="Sempre attivi"
                  checked={true}
                  disabled
                  onChange={() => {}}
                />

                <PreferenceRow
                  title="Cookie analitici"
                  description="Aiutano a migliorare il sito"
                  checked={preferences.analytics}
                  onChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, analytics: checked }))
                  }
                />
              </Box>
            )}

            <Box className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button
                onClick={handleAccept}
                sx={{
                  minHeight: 42,
                  px: 2.2,
                  borderRadius: "8px",
                  backgroundColor: "#ff1d1d",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#ff3131",
                  },
                }}
              >
                Accetta
              </Button>

              <Button
                onClick={handleReject}
                sx={{
                  minHeight: 42,
                  px: 2.2,
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.84)",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.24)",
                  },
                }}
              >
                Rifiuta
              </Button>

              <Button
                onClick={
                  showPreferences
                    ? handleSavePreferences
                    : () => setShowPreferences(true)
                }
                sx={{
                  minHeight: 42,
                  px: 2.2,
                  borderRadius: "8px",
                  color: "#ff6a6a",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "rgba(255,30,30,0.06)",
                  },
                }}
              >
                {showPreferences ? "Salva" : "Preferenze"}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

type PreferenceRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: PreferenceRowProps) {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.6,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        "&:not(:last-child)": {
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.3,
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.48)",
          }}
        >
          {description}
        </Typography>
      </Box>

      <Switch
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#ff2a2a",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#ff2a2a",
          },
          "& .MuiSwitch-track": {
            backgroundColor: "rgba(255,255,255,0.18)",
          },
        }}
      />
    </Box>
  );
}