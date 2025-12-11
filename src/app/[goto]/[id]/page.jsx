"use client";

import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { AlternateEmail, ArrowBack, Smartphone } from "@mui/icons-material";
import Link from "next/link";
import { contentData } from "../../../../public/files";

export default function Content({ params }) {
  const contentId = React.use(params).id;
  const section = contentData.find((item) => item.id === contentId);

  // Hydration Fix
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  if (!section) {
    return (
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ mt: 8, color: "#00e5ff" }}
      >
        Content not found 😢
      </Typography>
    );
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(140deg, #000, #00141c 40%, #000)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#e0f7fa",
        position: "relative",
        overflow: "hidden",
        padding: "2rem 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 7 }}
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          mb: 5,
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#00e5ff",
            fontWeight: 700,
            fontSize: { xs: "2.2rem", sm: "3.4rem" },
            filter: "drop-shadow(0 0 20px #00e5ff)",
          }}
        >
          {section.icon || "💠"}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "#00e5ff",
            fontWeight: 700,
            textShadow: "0 0 30px #00e5ff",
            letterSpacing: "2px",
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          {section.title}
        </Typography>
      </Box>

      <List sx={{ width: "95%", maxWidth: "620px", zIndex: 2 }}>
        {section.items.map((item, index) => (
          <ListItem
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 * index }}
            sx={{
              bgcolor: "rgba(0, 229, 255, 0.06)",
              border: "1.5px solid rgba(0, 229, 255, 0.35)",
              borderRadius: "14px",
              mb: 2.5,
              p: 2.2,
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 12px rgba(0,229,255,0.25)",
              transition: "0.3s ease",
              "&:hover": {
                bgcolor: "rgba(0, 229, 255, 0.12)",
                transform: "translateY(-4px)",
                boxShadow: "0 0 25px rgba(0,229,255,0.45)",
              },
            }}
          >
            <ListItemText
              primary={
                section.id === "3" ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#b2ebf2",
                      textDecoration: "none",
                    }}
                    component={Link}
                    href={item.link}
                  >
                    {index === 0 ? (
                      <AlternateEmail
                        className="mr-1"
                        sx={{ color: "#00e5ff" }}
                      />
                    ) : (
                      <Smartphone className="mr-1" sx={{ color: "#00e5ff" }} />
                    )}
                    {item.text}
                  </Box>
                ) : section.id === "1" ? (
                  <Box component={Link} href={item.link}>
                    <Typography
                      sx={{
                        color: "#b2ebf2",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        textShadow: "0 0 10px rgba(0,229,255,0.3)",
                        "&:hover": {
                          color: "#00e5ff",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ) : section.id === "2" ? (
                  <Box
                    component={Link}
                    href={item.link}
                    download={"Deep_Debnath_Resume"}
                  >
                    <Typography
                      sx={{
                        color: "#b2ebf2",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        textShadow: "0 0 10px rgba(0,229,255,0.3)",
                        "&:hover": {
                          color: "#00e5ff",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    sx={{
                      color: "#d0f8ff",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      textShadow: "0 0 12px rgba(0,229,255,0.25)",
                    }}
                  >
                    {item}
                  </Typography>
                )
              }
            />
          </ListItem>
        ))}
      </List>

      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 240 }}
      >
        <Button
          startIcon={<ArrowBack />}
          component={Link}
          href="/"
          sx={{
            marginTop: "2rem",
            padding: "0.8rem 2.3rem",
            border: "2px solid #00e5ff",
            borderRadius: "14px",
            color: "#00e5ff",
            background: "rgba(0,0,0,0.45)",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "1.1rem",
            boxShadow: "0 0 18px rgba(0,229,255,0.4)",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0 0 35px rgba(0,229,255,0.7)",
              transform: "translateY(-3px)",
            },
            "& .MuiButton-startIcon": {
              transition: "transform 0.3s ease",
            },
            "&:hover .MuiButton-startIcon": {
              transform: "translateX(-6px)",
            },
          }}
        >
          Back to Home
        </Button>
      </motion.div>
    </Box>
  );
}
