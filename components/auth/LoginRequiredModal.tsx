"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { AlertCircle, X, Mail, CheckCircle2 } from "lucide-react";

export default function LoginRequiredModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const { update } = useSession();
  const [activeTab, setActiveTab] = useState<"email" | "google">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  if (!show && !showToast) return null;

  const handleClose = () => {
    setActiveTab("email");
    setEmail("");
    setOtp("");
    setShowOtpInput(false);
    setError("");
    onClose();
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
//       await update(); // force refresh session so status becomes "authenticated" immediately
//       handleClose();
//       setShowToast(true);
//       setTimeout(() => setShowToast(false), 3000);
//     }
//   };


const handleEmailSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;
  setShowOtpInput(true); // skip actual email sending for now
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
    setTimeout(() => setShowToast(false), 3000);
  }
};
  return (
    <>
      {show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(13, 51, 32, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#f5ead9",
              borderRadius: "16px",
              padding: "32px",
              width: "360px",
              maxWidth: "90%",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              animation: "popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#0d332060",
              }}
            >
              <X size={18} />
            </button>

            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "#fcebeb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <AlertCircle size={28} color="#e24b4a" />
            </div>

            <h3 style={{ color: "#0d3320", fontSize: "18px", fontWeight: 700, margin: "0 0 6px", textAlign: "center" }}>
              Please log in first
            </h3>
            <p style={{ color: "#0d332099", fontSize: "13px", margin: "0 0 20px", textAlign: "center", lineHeight: 1.5 }}>
              You need to be logged in to submit this request.
            </p>

            <div style={{ display: "flex", borderRadius: "10px", overflow: "hidden", marginBottom: "16px", border: "1.5px solid #0d332020" }}>
              <button
                onClick={() => {
                  setActiveTab("email");
                  setShowOtpInput(false);
                  setError("");
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "center",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === "email" ? "#0d3320" : "transparent",
                  color: activeTab === "email" ? "#f5ead9" : "#0d332070",
                }}
              >
                <Mail size={14} style={{ verticalAlign: "-2px", marginRight: "5px" }} />
                Email
              </button>
              <button
                onClick={() => {
                  setActiveTab("google");
                  setShowOtpInput(false);
                  setError("");
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "center",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === "google" ? "#0d3320" : "transparent",
                  color: activeTab === "google" ? "#f5ead9" : "#0d332070",
                }}
              >
                Google
              </button>
            </div>

            {activeTab === "email" && !showOtpInput && (
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #0d332025",
                    fontSize: "13px",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                    background: "#fff",
                    color: "#0d3320",
                    outline: "none",
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
                    padding: "12px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "Sending..." : "Send login code"}
                </button>
                <p style={{ fontSize: "11px", color: "#0d332060", textAlign: "center", margin: "14px 0 0" }}>
                  We'll send a 6-digit code to your inbox
                </p>
              </form>
            )}

            {activeTab === "email" && showOtpInput && (
              <form onSubmit={handleOtpSubmit}>
                <p style={{ fontSize: "12px", color: "#0d332099", marginBottom: "10px", textAlign: "center" }}>
                  Code sent to <b>{email}</b>
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
                    padding: "11px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #0d332025",
                    fontSize: "18px",
                    letterSpacing: "6px",
                    textAlign: "center",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                    background: "#fff",
                    color: "#0d3320",
                    outline: "none",
                  }}
                />
                {error && <p style={{ color: "#c0392b", fontSize: "12px", margin: "0 0 10px", textAlign: "center" }}>{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: "#0d3320",
                    color: "#f5ead9",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px",
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
                  onClick={() => setShowOtpInput(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#0d332070",
                    fontSize: "12px",
                    cursor: "pointer",
                    padding: "10px 0 0",
                    width: "100%",
                  }}
                >
                  ← Back
                </button>
              </form>
            )}

            {activeTab === "google" && (
              <button
                onClick={() => signIn("google")}
                style={{
                  width: "100%",
                  background: "#0d3320",
                  color: "#f5ead9",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Continue with Google
              </button>
            )}

            <style jsx global>{`
              @keyframes popIn {
                from { opacity: 0; transform: scale(0.85); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        </div>
      )}

      {/* {showToast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10001,
            background: "#0d3320",
            color: "#f5ead9",
            padding: "12px 20px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            animation: "toastIn 0.35s ease-out",
          }}
        >
          <CheckCircle2 size={18} color="#d4a574" />
          Logged in successfully! 🎉
          <style jsx global>{`
            @keyframes toastIn {
              from { opacity: 0; transform: translate(-50%, 12px); }
              to { opacity: 1; transform: translate(-50%, 0); }
            }
          `}</style>
        </div>
      )} */}
    </>
  );
}