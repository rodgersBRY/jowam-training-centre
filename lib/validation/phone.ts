import { z } from "zod";

/** Accepts 07XXXXXXXX, 01XXXXXXXX, +2547XXXXXXXX, +2541XXXXXXXX */
export const kenyanPhone = z
  .string()
  .regex(
    /^(\+?254[17]\d{8}|0[17]\d{8})$/,
    "Enter a phone number starting with 07, 01, or +254"
  );
