"use client";

import { FormEvent, useState } from "react";

type QuoteFormProps = {
  recipient?: string;
};

export default function QuoteForm({ recipient }: QuoteFormProps) {
  const [brief, setBrief] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entries = [
      ["Name", form.get("name")],
      ["Email", form.get("email")],
      ["Phone", form.get("phone") || "Not provided"],
      ["Item", form.get("product")],
      ["Decoration", form.get("decoration")],
      ["Quantity", form.get("quantity") || "Not sure yet"],
      ["Project details", form.get("details")],
    ];
    const request = [
      "Royal Brand Embroidery — quote request",
      "",
      ...entries.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");

    setBrief(request);
    setCopied(false);
    setMessage(
      recipient
        ? "Your project brief is ready. Opening a draft in your email app does not send it."
        : "Your project brief is ready to copy. It has not been sent or stored.",
    );

    if (recipient) {
      const subject = encodeURIComponent("Royal Brand Embroidery quote request");
      const body = encodeURIComponent(request);
      window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${subject}&body=${body}`;
    }
  }

  async function handleCopy() {
    if (!brief) return;
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setMessage("Project brief copied. It has not been sent.");
    } catch {
      setMessage("Copy was blocked by your browser. Select and copy the project brief below.");
    }
  }

  return (
    <div className="quote-form-wrap">
      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-heading">
          <span>PROJECT BRIEF</span>
          <span>QUOTE DETAILS</span>
        </div>

        <div className="form-grid">
          <label className="form-field">
            <span>Your name <b aria-hidden="true">*</b></span>
            <input autoComplete="name" maxLength={100} name="name" required />
          </label>
          <label className="form-field">
            <span>Email address <b aria-hidden="true">*</b></span>
            <input autoComplete="email" maxLength={254} name="email" required type="email" />
          </label>
          <label className="form-field">
            <span>Phone <small>optional</small></span>
            <input autoComplete="tel" maxLength={30} name="phone" type="tel" />
          </label>
          <label className="form-field">
            <span>What would you like customized? <b aria-hidden="true">*</b></span>
            <select defaultValue="" name="product" required>
              <option disabled value="">Choose an item</option>
              <option>Hats</option>
              <option>T-shirts</option>
              <option>Sweatshirts</option>
              <option>Jackets</option>
              <option>Bags</option>
              <option>Chair backs</option>
              <option>Another item</option>
            </select>
          </label>
          <label className="form-field">
            <span>Decoration <b aria-hidden="true">*</b></span>
            <select defaultValue="" name="decoration" required>
              <option disabled value="">Choose a service</option>
              <option>Embroidery</option>
              <option>Heat transfer</option>
              <option>I would like guidance</option>
            </select>
          </label>
          <label className="form-field">
            <span>Approximate quantity <small>optional</small></span>
            <input min="1" name="quantity" placeholder="e.g. 24" type="number" />
          </label>
          <label className="form-field field-full">
            <span>Tell us about the project <b aria-hidden="true">*</b></span>
            <textarea
              maxLength={2000}
              name="details"
              placeholder="Design, placement, colors, garment details or anything else you know so far."
              required
              rows={4}
            />
          </label>
        </div>

        <button className="button button-wine form-submit" type="submit">
          Prepare my quote brief <span aria-hidden="true">↗</span>
        </button>
        <p className="form-privacy">
          Your answers stay in this browser. Preparing a brief does not submit an order.
        </p>
      </form>

      {brief && (
        <div className="quote-result" aria-labelledby="quote-result-title">
          <div className="result-heading">
            <h3 id="quote-result-title">Your project brief</h3>
            <span>READY TO SHARE</span>
          </div>
          <p className="form-status" role="status" aria-live="polite">{message}</p>
          <textarea
            aria-label="Prepared quote request; select and copy this text"
            className="brief-output"
            readOnly
            rows={9}
            value={brief}
          />
          <button className="button button-outline button-copy" onClick={handleCopy} type="button">
            {copied ? "Copied to clipboard ✓" : "Copy project brief"}
          </button>
          {recipient ? (
            <p className="email-configured">
              An email draft was opened for {recipient}. You still need to review and send it.
            </p>
          ) : (
            <p className="email-configured">
              Online email handoff needs a verified business quote address configured by the site owner.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
