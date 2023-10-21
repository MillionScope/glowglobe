import { useRouter } from "next/router"
import { Link } from "nextra-theme-docs"
import { DocsThemeConfig } from "nextra-theme-docs"

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 70 70" fill="none">
    <circle cx="35" cy="35" r="35" fill="currentColor" />
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/millionscope/glowglobe",
  },
  docsRepositoryBase:
    "https://github.com/millionscope/glowglobe/blob/main/website/pages",
  faviconGlyph: "⚫️",
  logo: (
    <>
      <Logo height={18} />
      <span
        className="mx-2 font-extrabold hidden md:inline select-none bg-red-500"
        title="glowglobe"
        style={{ whiteSpace: "nowrap" }}
      >
        Cobe
      </span>
    </>
  ),
  head: ({ title, meta }) => {
    const ogImage =
      "https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e"

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
          content={title ? title + " – glowglobe" : "glowglobe"}
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="glowglobe" />
      </>
    )
  },
  footer: {
    text: ({ locale }) => {
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
          , deployed on{" "}
          <Link
            href="https://vercel.com/?utm_source=glowglobe"
            target="_blank"
            rel="noopener"
            className="no-underline font-semibold"
          >
            Vercel
          </Link>
          .
        </p>
      )
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
}

export default config
