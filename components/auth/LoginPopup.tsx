"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { X, Mail } from "lucide-react";
import Toast from "./Toast";

export default function LoginPopup() {
  const { data: session, status } = useSession();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [prevAuthenticated, setPrevAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated" && !dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [status, dismissed]);

  // Detect when user becomes authenticated (covers Google redirect + OTP login)
  useEffect(() => {
    if (status === "authenticated" && !prevAuthenticated) {
      setShowToast(true);
      setPrevAuthenticated(true);
      setVisible(false);
    }
  }, [status, prevAuthenticated]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
  };

//   const handleEmailSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     setLoading(true);
//     setError("");

//     await signIn("email-otp", { email, redirect: false });

//     setLoading(false);
//     setShowOtpInput(true);
//   };

//   const handleOtpSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!otp) return;
//     setLoading(true);
//     setError("");

//     const result = await signIn("email-otp", {
//       email,
//       token: otp,
//       redirect: false,
//     });

//     setLoading(false);

//     if (result?.error) {
//       setError("Invalid or expired code. Try again.");
//     } else {
//       handleClose();
//       setShowToast(true);
//     }
//   };

  // Show popup only if not logged in, visible, and not dismissed
  
const handleEmailSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;
  setShowOtpInput(true);
};

const handleOtpSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!otp) return;
  setLoading(true);
  setError("");

  const result = await signIn("email-otp", {
    email,
    otp,
    redirect: false,
  });

  setLoading(false);

  if (result?.error) {
    setError("Invalid code. Try again.");
  } else {
    handleClose();
    setShowToast(true);
  }
};

  const showPopup = !session && visible && !dismissed;

  return (
    <>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            zIndex: 9999,
            background: "#fff",
            borderRadius: "16px",
            padding: "22px",
            width: "300px",
            boxShadow: "0 10px 40px rgba(13,51,32,0.15)",
            border: "1px solid #0d332015",
            animation: "slideIn 0.4s ease-out",
          }}
        >
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#0d332060",
            }}
          >
            <X size={18} />
          </button>

          {/* STEP 1: Choose method */}
          {!showEmailInput && !showOtpInput && (
            <>
              <h3 style={{ color: "#0d3320", fontSize: "16px", fontWeight: 700, margin: "0 0 6px" }}>
                Get started with Apexon
              </h3>
              <p style={{ color: "#0d332099", fontSize: "13px", margin: "0 0 16px", lineHeight: 1.5 }}>
                Choose how you'd like to sign in.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button
                  onClick={() => signIn("google")}
                  style={{
                    width: "100%",
                    background: "#0d3320",
                    color: "#f5ead9",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Continue with Google
                </button>
                <button
                  onClick={() => setShowEmailInput(true)}
                  style={{
                    width: "100%",
                    background: "#fff",
                    color: "#0d3320",
                    border: "1.5px solid #0d332025",
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Mail size={15} />
                  Continue with email
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Enter email */}
          {showEmailInput && !showOtpInput && (
            <form onSubmit={handleEmailSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 style={{ color: "#0d3320", fontSize: "16px", fontWeight: 700, margin: "0 0 6px" }}>
                Enter your email
              </h3>
              <p style={{ color: "#0d332099", fontSize: "13px", margin: "0 0 12px", lineHeight: 1.5 }}>
                We'll send you a 6-digit login code.
              </p>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1.5px solid #0d332025",
                  fontSize: "13px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: "#0d3320",
                  color: "#f5ead9",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Sending..." : "Send login code"}
              </button>
              <button
                type="button"
                onClick={() => setShowEmailInput(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0d332070",
                  fontSize: "12px",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ← Back
              </button>
            </form>
          )}

          {/* STEP 3: Enter OTP */}
          {showOtpInput && (
            <form onSubmit={handleOtpSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 style={{ color: "#0d3320", fontSize: "16px", fontWeight: 700, margin: "0 0 6px" }}>
                Enter your code
              </h3>
              <p style={{ color: "#0d332099", fontSize: "13px", margin: "0 0 12px", lineHeight: 1.5 }}>
                We sent a 6-digit code to <b>{email}</b>.
              </p>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1.5px solid #0d332025",
                  fontSize: "18px",
                  letterSpacing: "6px",
                  textAlign: "center",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              {error && (
                <p style={{ color: "#c0392b", fontSize: "12px", margin: "0" }}>{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: "#0d3320",
                  color: "#f5ead9",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Verifying..." : "Verify and login"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowOtpInput(false);
                  setOtp("");
                  setError("");
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0d332070",
                  fontSize: "12px",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ← Back
              </button>
            </form>
          )}

          <style jsx global>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      )}

      <Toast
        message="Logged in successfully! 🎉"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}