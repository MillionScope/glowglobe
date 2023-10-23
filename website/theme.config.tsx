import { useRouter } from "next/router";
import { Link, DocsThemeConfig } from "nextra-theme-docs";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    style={{ width: "100%", height: "100%" }}
    fill="none"
  >
    <path
      d="M124.761 10V36.1364V10ZM125.717 213.864V240V213.864ZM240 125H213.918H240ZM36.082 125H10H36.082ZM217.613 218.045L195.878 196.265L217.613 218.045ZM53.6439 53.7349L31.9089 31.9545L53.6439 53.7349ZM217.613 31.9545L206.745 42.8447L195.878 53.7348M53.6439 196.265L31.9089 218.045L53.6439 196.265ZM184.653 125C184.653 140.917 178.343 156.183 167.111 167.438C155.879 178.694 140.645 185.017 124.761 185.017C108.877 185.017 93.6428 178.694 82.4108 167.438C71.1789 156.183 64.8689 140.917 64.8689 125C64.8689 109.083 71.1789 93.817 82.4108 82.5617C93.6428 71.3063 108.877 64.9832 124.761 64.9832C140.645 64.9832 155.879 71.3063 167.111 82.5617C178.343 93.817 184.653 109.083 184.653 125Z"
      fill="black"
    />
    <path
      d="M124.761 10V36.1364M125.717 213.864V240M240 125H213.918M36.082 125H10M217.613 218.045L195.878 196.265M53.6439 53.7349L31.9089 31.9545M217.613 31.9545L206.745 42.8447L195.878 53.7348M53.6439 196.265L31.9089 218.045M184.653 125C184.653 140.917 178.343 156.183 167.111 167.438C155.879 178.694 140.645 185.017 124.761 185.017C108.877 185.017 93.6428 178.694 82.4108 167.438C71.1789 156.183 64.8689 140.917 64.8689 125C64.8689 109.083 71.1789 93.817 82.4108 82.5617C93.6428 71.3063 108.877 64.9832 124.761 64.9832C140.645 64.9832 155.879 71.3063 167.111 82.5617C178.343 93.817 184.653 109.083 184.653 125Z"
      stroke="black"
      strokeWidth="12.1212"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M160.059 160.371C171.291 149.116 177.601 133.851 177.601 117.933C177.601 102.016 171.291 86.7501 160.059 75.4948C148.827 64.2394 133.593 57.9163 117.709 57.9163C101.825 57.9163 86.5908 64.2394 75.3589 75.4948C64.1269 86.7501 57.8169 102.016 57.8169 117.933C57.8169 133.851 64.1269 149.116 75.3589 160.371C86.5908 171.627 101.825 177.95 117.709 177.95C133.593 177.95 148.827 171.627 160.059 160.371Z"
      fill="white"
      stroke="white"
      strokeWidth="12.1212"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M116.483 60.625C86.147 60.625 61.5549 85.2683 61.5549 115.667C61.5549 146.066 86.147 170.709 116.483 170.709C120.195 170.709 123.821 170.339 127.327 169.636C125.914 168.959 125.76 163.877 127.157 160.98C128.713 157.755 133.594 149.585 128.766 146.843C123.939 144.102 125.28 142.866 122.329 139.694C119.379 136.523 120.586 136.046 120.398 135.233C119.755 132.438 123.241 128.245 123.402 127.815C123.563 127.385 123.563 125.773 123.509 125.289C123.456 124.805 121.31 123.515 120.774 123.461C120.238 123.408 119.969 124.321 119.218 124.375C118.467 124.429 115.195 122.386 114.498 121.849C113.801 121.311 113.479 120.021 112.513 119.054C111.548 118.086 111.441 118.839 109.939 118.247C108.437 117.656 103.609 115.882 99.9078 114.377C96.2066 112.872 95.8848 110.762 95.8312 109.271C95.7775 107.779 93.5783 105.616 92.5468 104.057C91.5156 102.498 91.3254 100.348 90.9499 100.832C90.5744 101.315 92.8809 106.959 92.5054 107.121C92.13 107.282 91.3254 105.562 90.2526 104.164C89.1797 102.767 91.379 103.519 87.946 96.7464C84.513 89.9737 89.0188 86.5201 89.2334 82.9859C89.4479 79.4517 92.13 84.2759 90.7353 82.0184C89.3407 79.7608 90.8426 75.0306 89.7698 73.3105C88.697 71.5904 82.582 75.2456 82.582 75.2456C82.7429 73.5793 87.946 70.7304 91.7008 68.0965C95.4557 65.4627 97.7488 67.5053 100.766 68.4728C103.783 69.4404 103.984 69.1178 102.965 68.1503C101.946 67.1828 103.394 66.699 105.755 67.0753C108.115 67.4515 108.758 70.3004 112.352 70.0316C115.946 69.7629 112.728 70.7304 113.211 71.6442C113.693 72.558 112.674 72.4505 110.314 74.063C107.954 75.6756 110.368 75.6756 114.552 78.7395C118.736 81.8034 117.448 76.6969 117.019 74.4393C116.59 72.1817 120.077 73.9555 120.077 73.9555C122.651 75.6756 122.176 74.0501 124.053 74.6414C125.93 75.2327 131.019 79.5458 131.019 79.5458C124.636 83.0396 128.659 83.4159 129.732 84.2222C130.805 85.0285 127.533 86.5873 127.533 86.5873C126.192 85.2435 125.977 86.641 125.119 87.1248C124.261 87.6086 125.065 88.8449 125.065 88.8449C120.626 89.5437 121.632 94.2201 121.686 95.3489C121.739 96.4777 118.843 98.1978 118.092 99.8103C117.341 101.423 120.023 104.917 118.628 105.132C117.234 105.347 115.839 99.8641 108.329 101.907C106.065 102.523 101.034 105.132 103.716 110.453C106.398 115.775 110.85 108.948 112.352 109.701C113.854 110.453 111.923 113.84 112.245 113.893C112.567 113.947 116.483 114.041 116.697 118.624C116.912 123.206 122.651 122.816 123.885 122.924C125.119 123.031 129.249 119.537 129.839 119.376C130.429 119.215 132.789 117.226 137.939 120.182C143.088 123.139 145.717 122.709 147.487 123.945C149.257 125.181 148.023 127.654 149.686 128.46C151.349 129.267 158 128.191 159.663 130.933C161.326 133.674 152.797 147.435 150.115 148.94C147.433 150.445 146.2 153.885 143.517 156.089C140.835 158.293 137.081 161.021 133.54 163.13C130.407 164.998 129.843 168.343 128.447 169.399C153.029 163.927 171.41 141.948 171.41 115.667C171.41 85.2683 146.818 60.625 116.483 60.625ZM129.356 112.281C128.605 112.496 127.05 113.893 123.241 111.636C119.433 109.378 116.805 109.808 116.483 109.432C116.483 109.432 116.161 108.518 117.824 108.357C121.238 108.026 125.548 111.528 126.513 111.582C127.479 111.636 127.962 110.615 129.678 111.169C131.395 111.723 130.107 112.066 129.356 112.281ZM111.387 66.1077C111.013 65.8351 111.697 65.5212 112.104 64.9789C112.34 64.6656 112.165 64.1454 112.46 63.8501C113.264 63.0438 117.234 61.9151 116.458 64.1189C115.682 66.3227 111.977 66.5377 111.387 66.1077ZM120.989 73.0955C119.647 73.0417 116.491 72.7075 117.073 72.128C119.339 69.8704 116.215 69.2253 114.283 69.0641C112.352 68.9028 111.548 67.8278 112.513 67.7203C113.479 67.6128 117.341 67.774 117.985 68.3116C118.628 68.8491 122.115 70.2466 122.33 71.2679C122.544 72.2892 122.33 73.1493 120.989 73.0955ZM132.628 72.7192C131.556 73.5793 126.157 69.6333 125.119 68.7416C120.613 64.8714 118.199 66.1615 117.253 65.5164C116.306 64.8714 116.644 64.0114 118.092 62.7213C119.54 61.4313 123.617 63.1514 125.977 63.4201C128.337 63.6889 131.073 65.5164 131.127 67.6889C131.18 69.8612 133.701 71.8592 132.628 72.7192Z"
      fill="black"
    />
  </svg>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/millionscope/glowglobe",
  },
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/millionscope/glowglobe/blob/main/website/pages",
  logo: () => {
    return (
      <div className="flex">
        <div className="w-10 h-10">
          <Logo />
        </div>
        <div
          className="ml-2 flex items-center"
          title="GlowGlobe - Any glow globe that you need"
        >
          <span className="text-xl font-bold">GlowGlobe</span>
        </div>
      </div>
    );
  },
  head: () => {
    const ogImage =
      "https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e";

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={"A 5kB WebGL globe library."} // description |
        />
        <meta
          name="og:description"
          content={"A 5kB WebGL globe library."} // description |
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@millionscope" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content="GlowGlobe - A 5kB WebGL globe library."
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="glowglobe" />
      </>
    );
  },
  footer: {
    text: () => {
      return (
        <p className="no-underline text-current font-semibold">
          Made by{" "}
          <Link
            href="https://twitter.com/millionscope"
            target="_blank"
            rel="noopener"
            className="no-underline font-semibold"
          >
            @millionscope
          </Link>
          .
        </p>
      );
    },
  },
  // footer:{
  //   // editLink:{

  //   // }
  //   // EditLink: () => {
  //   //   const { route } = useRouter()
  //   //   if (route.includes("/showcases/")) {
  //   //     return null
  //   //   }
  //   //   return "Edit this page on GitHub"
  //   // },
  // },
};

export default config;
