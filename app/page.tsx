"use client";
import { useEffect, useState } from "react";

type Payload = { code: string; period: number; expiresAt: number };
export default function Home() {
  const [data, setData] = useState<Payload | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const load = async () => { try { const r = await fetch("/api/otp", { cache: "no-store" }); if (!r.ok) throw new Error(); setData(await r.json()); setError(""); } catch { setError("Unable to load the code"); } };
  useEffect(() => { load(); const t = setInterval(load, 1000); return () => clearInterval(t); }, []);
  const copy = async () => { if (!data) return; await navigator.clipboard.writeText(data.code); setCopied(true); setTimeout(() => setCopied(false), 1400); };
  const remaining = data ? Math.max(0, Math.ceil((data.expiresAt - Date.now()) / 1000)) : 0;
  const progress = data ? Math.max(0, Math.min(1, (data.expiresAt - Date.now()) / (data.period * 1000))) : 0;
  return <main className="shell"><section className="card"><div className="brand"><span className="dot" /> Demo access</div><h1>Verification code</h1><p className="sub">Use this one-time code to sign in.</p><div className="ring" style={{"--progress": `${progress * 360}deg`} as React.CSSProperties}><div className="ringInner"><span className="code">{data?.code ?? "••••••"}</span><span className="expires">{remaining}s remaining</span></div></div><button className="copy" onClick={copy} disabled={!data}><span>{copied ? "✓ Copied" : "Copy code"}</span><span className="copyIcon">⧉</span></button><div className="status">{error || "Refreshes automatically every 30 seconds"}</div></section><footer>Powered by secure server-side TOTP</footer></main>;
}
