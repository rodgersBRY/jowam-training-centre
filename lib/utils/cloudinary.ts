const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type Options = {
  width?: number;
  height?: number;
  quality?: number | "auto";
  crop?: "fill" | "fit" | "limit";
};

/**
 * Build a Cloudinary delivery URL from a public ID.
 * Images ship as AVIF/WebP via f_auto and are used with next/image.
 */
export function cloudinaryUrl(publicId: string, options: Options = {}): string {
  const { width, height, quality = "auto", crop = "fill" } = options;
  const transforms = [
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    `q_${quality}`,
    "f_auto",
    `c_${crop}`,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
