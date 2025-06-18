import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
  title: "Create Next App With Supabse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
