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

  // for ssr error >>
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null; //<<

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
        background: "linear-gradient(135deg, #000 0%, #00121a 40%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#e0f7fa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
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
            fontWeight: "700",
            fontSize: { xs: "2rem", sm: "3rem" },
            filter: "drop-shadow(0 0 18px #00e5ff)",
            position: "relative",
            bottom: "3px",
          }}
        >
          {section.icon || "💠"}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#00e5ff",
            fontWeight: "700",
            textShadow: "0 0 30px #00e5ff",
            letterSpacing: "2px",
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          {section.title}
        </Typography>
      </Box>

      <List
        sx={{ width: { sm: "100%", xs: "95%" }, maxWidth: "600px", zIndex: 2 }}
      >
        {section.items.map((item, index) => (
          <ListItem
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index }}
            sx={{
              bgcolor: "rgba(0, 229, 255, 0.05)",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              borderRadius: "12px",
              mb: 2,
              p: 2,
              backdropFilter: "blur(6px)",
              "&:hover": {
                bgcolor: "rgba(0, 229, 255, 0.15)",
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff77",
              },
            }}
          >
            <ListItemText
              primary={
                section.id === "3" ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {index === 0 ? (
                      <AlternateEmail sx={{ color: "#00e5ff" }} />
                    ) : (
                      <Smartphone sx={{ color: "#00e5ff" }} />
                    )}
                    <Link href={item.link}>{item.text}</Link>
                  </Box>
                ) : section.id === "1" ? (
                  <Link href={item.link} passHref>
                    <Typography
                      sx={{
                        color: "#b2ebf2",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        textShadow: "0 0 10px rgba(0,229,255,0.3)",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#00e5ff",
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                ) : (
                  item
                )
              }
            />
          </ListItem>
        ))}
      </List>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <Button
          startIcon={<ArrowBack />}
          href="/"
          style={{
            marginTop: "2rem",
            padding: "0.8rem 2rem",
            border: "2px solid #00e5ff",
            borderRadius: "12px",
            color: "#00e5ff",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 0 20px #00e5ff55",
            zIndex: 2,
          }}
        >
          Back to Home
        </Button>
      </motion.div>
    </Box>
  );
}
