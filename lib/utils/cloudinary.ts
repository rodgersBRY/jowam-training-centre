const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

type Options = {
  width?: number;
  height?: number;
  quality?: number | "auto";
};

export function cloudinaryUrl(publicId: string, options: Options = {}): string {
  const { width, height, quality = "auto" } = options;
  const transforms = [
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    `q_${quality}`,
    "f_auto",
    "c_fill",
  ]
    .filter(Boolean)
    .join(",");
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
