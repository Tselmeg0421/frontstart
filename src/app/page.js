"use client";

import { useState } from "react";

const data = [
  { "id": 1, "firstname": "A.Anand", "lastname": "Amarzaya", "job": "no", "country": "mongol", "gmail": "anans@gmail.com", "nas": 16, "items": [{ "id": 28, "name": "mouse" }], "height": 170 },
  { "id": 2, "firstname": "B.Anand", "lastname": "Bymbatsogt", "job": "no", "country": "mongol", "gmail": "Banana@gmail.com", "nas": 16, "items": [{ "id": 29, "name": "mouse" }], "height": 190 },
  { "id": 3, "firstname": "Ankhzaya", "lastname": "medku", "job": "no", "country": "mongol", "gmail": "ankha@gmail.com", "nas": 16, "items": [{ "id": 30, "name": "mouse" }], "height": 165 },
  { "id": 4, "firstname": "Arvidakh", "lastname": "Purevdorj", "job": "no", "country": "mongol", "gmail": "usteibugs@gmail.com", "nas": 17, "items": [{ "id": 31, "name": "mouse" }], "height": 184 },
  { "id": 5, "firstname": "Ariunbayar", "lastname": "Amgaabazar", "job": "no", "country": "mongol", "gmail": "abaya@gmail.com", "nas": 16, "items": [{ "id": 32, "name": "mouse" }], "height": 178 },
  { "id": 6, "firstname": "Batbileg", "lastname": "Enkhbat", "job": "no", "country": "mongol", "gmail": "UJustRealizedNow@gmail.com", "nas": 17, "items": [{ "id": 33, "name": "mouse" }], "height": 173 },
  { "id": 7, "firstname": "Zorigt", "lastname": "medku", "job": "no", "country": "mongol", "gmail": "zoogii@gmail.com", "nas": 16, "items": [{ "id": 34, "name": "mouse" }], "height": 173 },
  { "id": 8, "firstname": "Zolboo", "lastname": "Azjargal", "job": "no", "country": "mongol", "gmail": "Zolboo@gmail.com", "nas": 16, "items": [{ "id": 35, "name": "mouse" }], "height": 170 },
  { "id": 9, "firstname": "Manlaibaatar", "lastname": "Ulanbayr", "job": "no", "country": "mongol", "gmail": "manlai@gmail.com", "nas": 16, "items": [{ "id": 36, "name": "mouse" }], "height": 168 },
  { "id": 10, "firstname": "Margad", "lastname": "Erdenechuluun", "job": "no", "country": "mongol", "gmail": "margad@gmail.com", "nas": 17, "items": [{ "id": 37, "name": "mouse" }], "height": 153 },
  { "id": 11, "firstname": "Munkhbold", "lastname": "Munkhbat", "job": "no", "country": "mongol", "gmail": "boldoo@gmail.com", "nas": 16, "items": [{ "id": 38, "name": "mouse" }], "height": 180 },
  { "id": 12, "firstname": "Munkhchimeg", "lastname": "medku", "job": "no", "country": "mongol", "gmail": "mochi@gmail.com", "nas": 16, "items": [{ "id": 39, "name": "mouse" }], "height": 165 },
  { "id": 13, "firstname": "Munkhnar", "lastname": "mdku", "job": "no", "country": "mongol", "gmail": "mona@gmail.com", "nas": 16, "items": [{ "id": 40, "name": "mouse" }], "height": 165 },
  { "id": 14, "firstname": "Nymdorj", "lastname": "Tserenpurev", "job": "no", "country": "mongol", "gmail": "tiltre@gmail.com", "nas": 17, "items": [{ "id": 41, "name": "mouse" }], "height": 175 },
  { "id": 15, "firstname": "Nymragchaa", "lastname": "Eruult", "job": "no", "country": "mongol", "gmail": "Nymka@gmail.com", "nas": 16, "items": [{ "id": 42, "name": "mouse" }], "height": 170 },
  { "id": 16, "firstname": "Purevbat", "lastname": "Munkhbat", "job": "no", "country": "mongol", "gmail": "Purve@gmail.com", "nas": 16, "items": [{ "id": 43, "name": "mouse" }], "height": 170 },
  { "id": 17, "firstname": "Temuulen", "lastname": "Khurtsbaatar", "job": "no", "country": "mongol", "gmail": "temuulen@gmail.com", "nas": 16, "items": [{ "id": 44, "name": "mouse" }], "height": 174 },
  { "id": 18, "firstname": "Tenuun", "lastname": "Och", "job": "no", "country": "mongol", "gmail": "Tenuun@gmail.com", "nas": 16, "items": [{ "id": 45, "name": "mouse" }], "height": 170 },
  { "id": 19, "firstname": "Tergel", "lastname": "Batbaatar", "job": "no", "country": "mongol", "gmail": "tergel@gmail.com", "nas": 17, "items": [{ "id": 46, "name": "mouse" }], "height": 160 },
  { "id": 20, "firstname": "Urankhishig", "lastname": "Bat-Erdene", "job": "no", "country": "mongol", "gmail": "Urankhishig@gmail.com", "nas": 16, "items": [{ "id": 47, "name": "mouse" }], "height": 170 },
  { "id": 21, "firstname": "Tsolmon", "lastname": "Batkhishig", "job": "no", "country": "mongol", "gmail": "Tsolmon@gmail.com", "nas": 16, "items": [{ "id": 48, "name": "mouse" }], "height": 170 },
  { "id": 22, "firstname": "Tselmuun", "lastname": "Baysgalan", "job": "no", "country": "mongol", "gmail": "Tselmuun@gmail.com", "nas": 16, "items": [{ "id": 49, "name": "mouse" }], "height": 160 },
  { "id": 23, "firstname": "Tselmeg", "lastname": "Batnasan", "job": "no", "country": "mongol", "gmail": "Mogger69@gmail.com", "nas": 16, "items": [{ "id": 50, "name": "mouse" }], "height": 193 },
  { "id": 24, "firstname": "Chingun", "lastname": "Gantsatsral", "job": "no", "country": "mongol", "gmail": "chingun@gmail.com", "nas": 16, "items": [{ "id": 51, "name": "mouse" }], "height": 177 },
  { "id": 25, "firstname": "Enkhbileg", "lastname": "Erdenebaatar", "job": "no", "country": "mongol", "gmail": "Enkhbileg@gmail.com", "nas": 16, "items": [{ "id": 52, "name": "mouse" }], "height": 170 },
  { "id": 26, "firstname": "Enkhtushig", "lastname": "Sugar", "job": "no", "country": "mongol", "gmail": "Tuujii@gmail.com", "nas": 17, "items": [{ "id": 53, "name": "mouse" }], "height": 180 },
  { "id": 27, "firstname": "Erkhembileg", "lastname": "Munkhbat", "job": "no", "country": "mongol", "gmail": "ebi@gmail.com", "nas": 16, "items": [{ "id": 54, "name": "mouse" }], "height": 176 },
];

const NAV_ITEMS = ["About", "People", "Contact"];

const ACCENT_COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#C77DFF"];

function getColor(index) {
  return ACCENT_COLORS[index % ACCENT_COLORS.length];
}

function getDicebearUrl(firstname, lastname) {
  return `https://api.dicebear.com/9.x/pixel-art-neutral/png?seed=${encodeURIComponent(firstname + lastname)}`;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Page() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortDir, setSortDir] = useState("asc");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = data
    .filter((p) => {
      const q = search.toLowerCase();
      return (
        p.firstname.toLowerCase().includes(q) ||
        p.lastname.toLowerCase().includes(q) ||
        p.gmail.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number") return sortDir === "asc" ? av - bv : bv - av;
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });

  function toggleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const avgHeight = Math.round(data.reduce((s, p) => s + p.height, 0) / data.length);
  const tallest = data.reduce((a, b) => (b.height > a.height ? b : a));

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0d0d0d", color: "#f0f0f0", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 2rem", height: "60px",
        background: "#0d0d0dcc", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #ffffff15",
      }}>
        <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.5px" }}>
          <span style={{ color: "#FFD93D" }}>T</span>selmeg
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{
                background: "none", border: "none", color: "#ccc",
                cursor: "pointer", fontSize: "0.9rem", fontWeight: 500,
                padding: "4px 0", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#FFD93D")}
              onMouseLeave={(e) => (e.target.style.color = "#ccc")}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        padding: "6rem 2rem 4rem",
        maxWidth: "860px", margin: "0 auto",
        display: "flex", flexDirection: "column", gap: "1rem",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "#FFD93D22", border: "1px solid #FFD93D55",
          borderRadius: "999px", padding: "4px 14px",
          fontSize: "0.8rem", color: "#FFD93D", width: "fit-content",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFD93D", display: "inline-block" }} />
          Available for projects
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: "-2px", margin: 0,
        }}>
          Hi, I&apos;m{" "}
          <span style={{
            background: "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Tselmeg
          </span>{" "}👋
        </h1>

        <p style={{ fontSize: "1.15rem", color: "#aaa", maxWidth: "540px", lineHeight: 1.7, margin: 0 }}>
          Developer from Mongolia 🇲🇳 building things on the web.
          Currently working with <strong style={{ color: "#f0f0f0" }}>Next.js</strong> and deploying on Vercel.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "0.5rem" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              padding: "10px 24px", borderRadius: "8px",
              background: "#FFD93D", color: "#0d0d0d",
              border: "none", fontWeight: 700, fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            Get in touch
          </button>
          <button
            onClick={() => scrollTo("people")}
            style={{
              padding: "10px 24px", borderRadius: "8px",
              background: "transparent", color: "#f0f0f0",
              border: "1px solid #ffffff30", fontWeight: 600, fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            View people list ↓
          </button>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "4rem 2rem", maxWidth: "860px", margin: "0 auto" }}>
        <SectionLabel color="#6BCB77">About me</SectionLabel>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0 1.5rem", letterSpacing: "-1px" }}>
          A bit about myself
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "2rem" }}>
          {[
            { label: "People tracked", value: data.length, color: "#4D96FF" },
            { label: "Avg height", value: `${avgHeight} cm`, color: "#6BCB77" },
            { label: "Tallest person", value: tallest.firstname, color: "#FF6B6B" },
            { label: "Country", value: "Mongolia 🇲🇳", color: "#C77DFF" },
          ].map(({ label, value, color }) => (
            <div key={label} style={{
              background: "#1a1a1a", borderRadius: "12px",
              padding: "1.25rem", border: `1px solid ${color}33`,
            }}>
              <p style={{ margin: "0 0 4px", fontSize: "0.78rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</p>
              <p style={{ margin: 0, fontSize: "1.4rem", fontWeight: 700, color }}>{value}</p>
            </div>
          ))}
        </div>

        <p style={{ color: "#bbb", lineHeight: 1.8, fontSize: "1.05rem", maxWidth: "640px" }}>
          I&apos;m a developer passionate about clean code and good UI. I built this people tracker app
          as part of my work managing a group from Mongolia. I love working with React, Next.js,
          and shipping things fast on Vercel. Always learning, always building. 🚀
        </p>
      </section>

      {/* ── PEOPLE TABLE ── */}
      <section id="people" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel color="#4D96FF">Data</SectionLabel>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0 1.5rem", letterSpacing: "-1px" }}>
          People list
        </h2>

        {/* Search */}
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="🔍  Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%", maxWidth: "360px",
              padding: "10px 16px", borderRadius: "8px",
              background: "#1a1a1a", border: "1px solid #ffffff20",
              color: "#f0f0f0", fontSize: "0.9rem", outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #ffffff12" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
            <thead>
              <tr style={{ background: "#1a1a1a", borderBottom: "1px solid #ffffff15" }}>
                {[
                  { key: "id", label: "#" },
                  { key: "firstname", label: "First name" },
                  { key: "lastname", label: "Last name" },
                  { key: "gmail", label: "Email" },
                  { key: "nas", label: "NAS" },
                  { key: "height", label: "Height" },
                  { key: null, label: "Item" },
                ].map(({ key, label }) => (
                  <th
                    key={label}
                    onClick={() => key && toggleSort(key)}
                    style={{
                      padding: "12px 16px", textAlign: "left", fontWeight: 600,
                      color: sortKey === key ? "#FFD93D" : "#888",
                      cursor: key ? "pointer" : "default",
                      userSelect: "none", whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                    {key && sortKey === key && (
                      <span style={{ marginLeft: 4 }}>{sortDir === "asc" ? "↑" : "↓"}</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((person, i) => (
                <tr
                  key={person.id}
                  style={{
                    borderBottom: "1px solid #ffffff08",
                    background: i % 2 === 0 ? "transparent" : "#ffffff04",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FFD93D10")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "#ffffff04")}
                >
                  <td style={{ padding: "10px 16px", color: "#666" }}>{person.id}</td>
                  <td style={{ padding: "10px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <img
                        src={getDicebearUrl(person.firstname, person.lastname)}
                        alt={person.firstname}
                        width={32}
                        height={32}
                        style={{
                          borderRadius: "50%",
                          border: `2px solid ${getColor(i)}`,
                          flexShrink: 0,
                          imageRendering: "pixelated",
                        }}
                      />
                      {person.firstname}
                    </div>
                  </td>
                  <td style={{ padding: "10px 16px", color: "#ccc" }}>{person.lastname}</td>
                  <td style={{ padding: "10px 16px", color: "#4D96FF", fontSize: "0.82rem" }}>{person.gmail}</td>
                  <td style={{ padding: "10px 16px", textAlign: "center" }}>
                    <span style={{
                      background: person.nas === 17 ? "#FF6B6B22" : "#6BCB7722",
                      color: person.nas === 17 ? "#FF6B6B" : "#6BCB77",
                      padding: "2px 10px", borderRadius: "999px", fontSize: "0.8rem",
                    }}>
                      {person.nas}
                    </span>
                  </td>
                  <td style={{ padding: "10px 16px", color: "#ccc" }}>
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>{person.height} cm</span>
                  </td>
                  <td style={{ padding: "10px 16px", color: "#888" }}>
                    {person.items.map((item) => item.name).join(", ")}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: "2rem", textAlign: "center", color: "#555" }}>
                    No results for &quot;{search}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p style={{ color: "#555", fontSize: "0.8rem", marginTop: "0.5rem" }}>
          {filtered.length} of {data.length} people shown
        </p>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "4rem 2rem 6rem", maxWidth: "640px", margin: "0 auto" }}>
        <SectionLabel color="#C77DFF">Contact</SectionLabel>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0 0.5rem", letterSpacing: "-1px" }}>
          Get in touch
        </h2>
        <p style={{ color: "#888", marginBottom: "2rem" }}>
          Have a question or want to work together? Drop me a message.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com", color: "#f0f0f0", bg: "#1a1a1a" },
            { label: "Email", href: "mailto:Mogger69@gmail.com", color: "#FFD93D", bg: "#FFD93D15" },
          ].map(({ label, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "8px 20px", borderRadius: "8px",
                background: bg, border: "1px solid #ffffff15",
                color, fontWeight: 600, fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              {label} ↗
            </a>
          ))}
        </div>

        {submitted ? (
          <div style={{
            background: "#6BCB7722", border: "1px solid #6BCB7755",
            borderRadius: "12px", padding: "2rem", textAlign: "center",
          }}>
            <p style={{ fontSize: "1.5rem", margin: "0 0 0.5rem" }}>✅</p>
            <p style={{ color: "#6BCB77", fontWeight: 600, margin: 0 }}>Message sent! I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor={id} style={{ fontSize: "0.85rem", color: "#888", fontWeight: 500 }}>{label}</label>
                <input
                  id={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  style={{
                    padding: "10px 14px", borderRadius: "8px",
                    background: "#1a1a1a", border: "1px solid #ffffff20",
                    color: "#f0f0f0", fontSize: "0.95rem", outline: "none",
                  }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="message" style={{ fontSize: "0.85rem", color: "#888", fontWeight: 500 }}>Message</label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  padding: "10px 14px", borderRadius: "8px",
                  background: "#1a1a1a", border: "1px solid #ffffff20",
                  color: "#f0f0f0", fontSize: "0.95rem", resize: "vertical", outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "12px", borderRadius: "8px",
                background: "#FFD93D", color: "#0d0d0d",
                border: "none", fontWeight: 700, fontSize: "1rem",
                cursor: "pointer", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Send message →
            </button>
          </form>
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        textAlign: "center", padding: "1.5rem",
        borderTop: "1px solid #ffffff0f", color: "#444", fontSize: "0.8rem",
      }}>
        Built by Tselmeg · Next.js + Vercel
      </footer>
    </div>
  );
}

function SectionLabel({ color, children }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: "0.75rem", fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "2px",
      color, marginBottom: "0.25rem",
    }}>
      {children}
    </span>
  );
}