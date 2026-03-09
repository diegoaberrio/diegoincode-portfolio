const CLOUD_NAME = "df9rzvrkj";

const DEFAULTS = {
  image: "f_jpg,q_auto,w_1200,c_limit",
  imageCard: "f_jpg,q_auto,w_900,c_limit",
  videoCard: "q_auto:good,vc_auto,w_720,c_fill,ar_9:16",
  videoDetail: "q_auto:good,vc_auto,w_1080,c_fill,ar_9:16",
  poster: "so_0,w_900,c_limit,q_auto,f_jpg",
};

export function getCloudinaryImage(publicId, transform = DEFAULTS.image) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
}

export function getCloudinaryCardImage(publicId, transform = DEFAULTS.imageCard) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
}

export function getCloudinaryVideo(publicId, transform = DEFAULTS.videoCard) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transform}/${publicId}.mp4`;
}

export function getCloudinaryPoster(publicId, transform = DEFAULTS.poster) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transform}/${publicId}.jpg`;
}

export const cloudinaryTransforms = DEFAULTS;