export const metadata = {
  title: "Products | Appscrip Task",
  description: "Discover a variety of products available online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Discover a variety of products available online."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
