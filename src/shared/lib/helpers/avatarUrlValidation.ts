export const isValidAvatarUrl = (url: string | undefined) => {
  // Regular expression pattern to match valid URL format
  const urlPattern = /^(http|https):\/\/[^ "]+$/;

  // Check if URL matches pattern and ends with common image file extensions
  if (url && urlPattern.test(url) && /\.(png|jpe?g|gif|svg)$/i.test(url)) {
    return true;
  }

  // Otherwise, URL is invalid
  return false;
};
