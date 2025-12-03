// import "./globals.css";
// import ClientLayout from "@/client-layout";
// import TopBar from "@/components/TopBar/TopBar";

// export const metadata = {
//   title: "Terrene | MWT by Codegrid ",
//   description: "Monthly Website Template by Codegrid | August 2025",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ClientLayout>
//           <TopBar />
//           {children}
//         </ClientLayout>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";
import { Manrope, DM_Mono } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dmmono",
  display: "swap",
});

export const metadata = {
  title: "ReromSpaces",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    // add the font CSS variables to the html element
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
