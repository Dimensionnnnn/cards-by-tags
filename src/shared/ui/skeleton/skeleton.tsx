import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    speed={1}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#ffffff"
    foregroundColor="#fbe5c6"
  >
    <rect x="10" y="9" rx="24" ry="24" width="285" height="95" />
  </ContentLoader>
);
